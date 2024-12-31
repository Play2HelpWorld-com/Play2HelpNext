import { GenerateMerkleDatastructure } from '@/utils/lib/generateMerkleDataStructure';


const { NEXT_PUBLIC_BACKEND_BASE_URL } = process.env;

export async function executeCronJob() {
   
        //fetch the token rewards from the database
        const responseTokenRewards = await fetch(`${NEXT_PUBLIC_BACKEND_BASE_URL}/api/games/setMerkelDatastructure/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const tokenRewards = await responseTokenRewards.json();

        //generate the merkle tree
        const {serializedLeaves} = GenerateMerkleDatastructure(tokenRewards);

        const body = {
            "serialized_leaves" : serializedLeaves,
            "modified_date" : new Date().toISOString()
        }

        // Replace with your API endpoint
        const response = await fetch(`${NEXT_PUBLIC_BACKEND_BASE_URL}/api/games/setMerkelDatastructure/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        });

        const data = await response.json();
        console.log('Cron job executed successfully:', data);
        return  data;
    } 

  