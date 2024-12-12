import { GenerateMerkleDatastructure } from "./generateMerkleDataStructure";
import { ethers } from 'ethers';
import GameTokenDistributorABI from "../../abis/GameTokenDistributor.json";

export async function runTask() {
    //create the task here to update the merkle tree
    //get an array of tokenReward
    //construct the merkelTree
    const gameReward = [] //coming from the database
    const { serializedLeaves, merkleRoot } = GenerateMerkleDatastructure(gameReward);
    //save the leavesNode to the database ( not done)
    //send a transaction to the smart contract to update the merkelRoot
    const RPC_URL = process.env.NEXT_PUBLIC_RPC_URL;
    const PRIVATE_KEY = process.env.PRIVATE_KEY;
    const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_TOKEN_DISTRIBUTOR_ADDRESS;
   
    if (!RPC_URL || !PRIVATE_KEY || !CONTRACT_ADDRESS) {
        throw new Error('Environment variables not set properly.');
    }

    try {
        const provider = new ethers.JsonRpcProvider(RPC_URL);
        const wallet = new ethers.Wallet(PRIVATE_KEY, provider);
        const contract = new ethers.Contract(CONTRACT_ADDRESS, GameTokenDistributorABI, wallet);
        const txResponse = await contract.updateMerkleRoot(merkleRoot, {
            //gasLimit: parseUnits('1000000', 'wei'), 
        });
        const txReceipt = await txResponse.wait(1);
        console.log("Gas Used:", txReceipt.gasUsed.toString());
        return txReceipt;
    } catch (error) {
        console.error(error);
    }
}