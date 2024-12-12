import { MerkleTree } from "merkletreejs";
import { keccak256 } from "ethers";
import ethers from "ethers"
import { TokenReward } from "@/types/tokenReward";
import { MerkleResult } from "@/types/merkleResult";


/// @dev this function receives an array of objects
/// @dev the array of token reward should come from the database
/// @dev GenerateMerkleDatastructure returns serialized leaves and the merkelRoot

/// @dev there should be a table to save the serialized leaves and the date it was modified. Table should have
/// @dev two fields of serializedLeaves and date modified. when the data is saved we update the date modified




const GenerateMerkleDatastructure = (tokenRewards: TokenReward[] = []): MerkleResult => {
    let merkleTree: MerkleTree, merkleRoot: string;
    const leaves = tokenRewards.map((claim: TokenReward) =>
        keccak256(
            ethers.AbiCoder.defaultAbiCoder().encode(
            ["address", "address", "uint256"],
            [claim.address, claim.token, ethers.parseEther(claim.amount)]
            )
        )
        );
        merkleTree = new MerkleTree(leaves, keccak256, { sortPairs: true });
        merkleRoot = merkleTree.getHexRoot();

        // Serialize data
       const serializedLeaves = JSON.stringify(leaves.map((leaf) => Buffer.from(leaf).toString('hex')));
       return {serializedLeaves, merkleRoot};
}

const RegenerateMerkleTree = (serializedLeaves: string) => {
    const parsedLeaves = JSON.parse(serializedLeaves).map((hex: string) => Buffer.from(hex, 'hex'));
    // Recreate the Merkle Tree
    const reconstructedTree = new MerkleTree(parsedLeaves, keccak256, { sortPairs: true });
    const reconstructedRoot = reconstructedTree.getHexRoot();
    return {
        merkelTree: reconstructedTree,
        merkelRoot: reconstructedRoot
    }
}


export {GenerateMerkleDatastructure, RegenerateMerkleTree};