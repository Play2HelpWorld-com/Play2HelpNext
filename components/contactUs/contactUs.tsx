export const ContactUs = () => {
  return (
    <div className="w-full py-12 bg-white">
      <div className="container mx-auto px-4 md:px-4 lg:px-12">
        {/* Contact Icons Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {/* Icon Card 1 */}
          <div className="bg-red-500 text-white p-6 text-center h-[219px] flex flex-col items-center gap-5 justify-center">
            <i className="fas fa-phone text-3xl mb-4"></i>
            <h3 className="text-lg font-semibold">Give Us A Call</h3>
            <p className="text-sm">+077-622-93742</p>
          </div>

          {/* Icon Card 2 */}
          <div className="bg-purple-500 text-white p-6 text-center h-[219px] flex flex-col items-center gap-5 justify-center">
            <i className="fas fa-envelope text-3xl mb-4"></i>
            <h3 className="text-lg font-semibold">Drop Us An Email</h3>
            <p className="text-sm">support@play2world.com</p>
          </div>

          {/* Icon Card 3 */}
          <div className="bg-green-500 text-white p-6 text-center h-[219px] flex flex-col items-center gap-5 justify-center">
            <i className="fas fa-map-marker-alt text-3xl mb-4"></i>
            <h3 className="text-lg font-semibold">Our Location</h3>
            <p className="text-sm">3 Wetherell Road, London.</p>
          </div>

          {/* Icon Card 4 */}
          <div className="bg-purple-500 text-white p-6 text-center h-[219px] flex flex-col items-center gap-5 justify-center">
            <i className="fab fa-facebook text-3xl mb-4"></i>
            <h3 className="text-lg font-semibold">Facebook Page</h3>
            <p className="text-sm">Like, Comment and Share</p>
          </div>

          {/* Icon Card 5 */}
          <div className="bg-green-500 text-white p-6 text-center h-[219px] flex flex-col items-center gap-5 justify-center">
            <i className="fab fa-twitter text-3xl mb-4"></i>
            <h3 className="text-lg font-semibold">Twitter Page</h3>
            <p className="text-sm">Send us a tweet</p>
          </div>

          {/* Icon Card 6 */}
          <div className="bg-red-500 text-white p-6 text-center h-[219px] flex flex-col items-center gap-5 justify-center">
            <i className="fab fa-youtube text-3xl mb-4"></i>
            <h3 className="text-lg font-semibold">Our Channel</h3>
            <p className="text-sm">Subscribe now</p>
          </div>
        </div>

        {/* Contact Us Form */}
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Contact Us</h2>
        <form className="space-y-6">
          {/* Name and Email Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-4 text-white bg-gray-800 rounded-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-4 text-white bg-gray-800 rounded-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          {/* Message Box */}
          <textarea
            placeholder="Message"
            rows={4}
            className="w-full p-4 text-white bg-gray-800 rounded-3xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600"
          />

          {/* Submit Button */}
          <div className="flex justify-start">
            <button
              type="submit"
              className="px-8 py-3 bg-green-700 text-white font-semibold rounded-full hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
