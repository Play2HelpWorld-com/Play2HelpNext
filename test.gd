# Tinybox
# Copyright (C) 2023-present Caelan Douglas
#
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU Affero General Public License as
# published by the Free Software Foundation, either version 3 of the
# License, or (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU Affero General Public License for more details.
#
# You should have received a copy of the GNU Affero General Public License
# along with this program.  If not, see <https://www.gnu.org/licenses/>.

extends Node
class_name HttpServer
var server := TCPServer.new()
var port := 4242
var clients: Array[StreamPeerTCP] = []

func _ready() -> void:
	print('*****the http server is now running ****')
	var error:Error = server.listen(port)
	if error == OK:
		print('HTTP Server is listining on port ',port)
	else:
		print('Failed to start the Http server')

func _physics_process(delta : float) -> void:
		#Our custom codes has started from here...
	if server.is_connection_available():
		var client:StreamPeerTCP = server.take_connection()
		clients.append(client)
		print('new client connected')
		print ('the clients are', clients)
	
	var to_remove:Array[int] = []
	for i in range(clients.size()):
		var client : StreamPeerTCP = clients[i]
		if client.get_status() == StreamPeerTCP.STATUS_CONNECTED:
			if client.get_available_bytes() > 0:
				var request : String = client.get_utf8_string(client.get_available_bytes())
				handle_http_request(client, request)
				to_remove.append(i)
		else:
			to_remove.append(i)
			
	for i in range(to_remove.size() - 1, -1, -1):
		var client:StreamPeerTCP = clients[to_remove[i]]
		client.disconnect_from_host()
		clients.remove_at(to_remove[i])
		
		
		
#This will handle http request
func handle_http_request(client: StreamPeerTCP, request: String) -> void:
	var lines : PackedStringArray = request.split("\r\n")
	var first_line: PackedStringArray = lines[0].split(" ")
	if first_line.size() < 2:
		return
		
	var method : String = first_line[0]
	var path : String = first_line[1]
	print('the method is ', method )
	print('the path is ', path)
	
	# Handle OPTIONS request (CORS preflight)
	if method == "OPTIONS":
		var response: String = "HTTP/1.1 200 OK\r\n"
		response += "Access-Control-Allow-Origin: http://localhost:3000\r\n"
		response += "Access-Control-Allow-Methods: POST, OPTIONS\r\n"
		response += "Access-Control-Allow-Headers: Content-Type\r\n"
		response += "Access-Control-Max-Age: 86400\r\n"
		response += "Content-Length: 0\r\n"
		response += "Connection: close\r\n"
		response += "\r\n"
		client.put_data(response.to_utf8_buffer())
		return
	
	
	var headers :Dictionary = {}
	var body : String = ""
	var header_end: int = request.find("\r\n\r\n")
	if header_end != -1:
		body = request.substr(header_end + 4)

	# Parse body as JSON
	var json :JSON = JSON.new()
	var response : String = ""
	if json.parse(body) == OK:
		var data : Dictionary = json.get_data()
		if data.has("wallet-address"):
			var wallet_address : String  = data["wallet-address"]
			print("received wallet address ", wallet_address)
			
			# Create success response
			var response_data : Dictionary = {
				"status": "success",
				"message": "Wallet address received successfully",
				"wallet": wallet_address
			}
			response = "HTTP/1.1 200 OK\r\n"
			response += "Content-Type: application/json\r\n"
			response += "Access-Control-Allow-Origin: http://localhost:3000\r\n"
			response += "Connection: close\r\n"
			response += "\r\n"
			response += JSON.stringify(response_data)
		else:
			response = "HTTP/1.1 400 Bad Request\r\n"
			response += "Content-Type: application/json\r\n"
			response += "Access-Control-Allow-Origin: http://localhost:3000\r\n"
			response += "Connection: close\r\n"
			response += "\r\n"
			response += JSON.stringify({
				"status": "error",
				"message": "Missing wallet_address in request body"
			})
	else:
		response = "HTTP/1.1 400 Bad Request\r\n"
		response += "Content-Type: application/json\r\n"
		response += "Access-Control-Allow-Origin: http://localhost:3000\r\n"
		response += "Connection: close\r\n"
		response += "\r\n"
		response += JSON.stringify({
			"status": "error",
			"message": "Invalid JSON format"
		})
	# Send response
	client.put_data(response.to_utf8_buffer())
