"use client";
import React, { useEffect, useState, useMemo } from "react";
import { AxiosReqInstance } from "../accounts/utils/axiosInstance";
import { ScoreDataInterface, TokenInfoInterface } from "./interface";
import { Trophy, Star } from "lucide-react";
import { getGameIcon } from "./GameIcon";
import { toast } from "react-toastify";
import { ethers, keccak256 } from "ethers";
import { useAccount, useWriteContract, useSimulateContract } from "wagmi";
import GameTokenDistributor from "../../abis/GameTokenDistributor.json";
import { RegenerateMerkleTree } from "@/utils/lib/generateMerkleDataStructure";

const contractAddress = process.env.NEXT_PUBLIC_TOKEN_DISTRIBUTOR_ADDRESS || "0x"
console.log('the contract address is', contractAddress);
const { NEXT_PUBLIC_BACKEND_BASE_URL } = process.env;

const ScoreCard = ({ score, handleClaim } : {score: ScoreDataInterface, handleClaim: (gameName, tokens) => void}) => {
  const claimableTokens = score.tokens - score.claimed_tokens;
  return (
    <div
      className={`
        flex transform items-center space-x-4 
        rounded-xl border-l-4
        bg-white p-5 shadow-md 
        transition-all duration-300 ease-in-out hover:scale-[1.02]
        hover:shadow-lg ${getGameBorderColor(score.game)}
      `}
    >
      <div className="flex-shrink-0">{getGameIcon(score.game)}</div>
      <div className="flex-grow">
        <h3 className="text-lg font-semibold text-gray-800">{score.game}</h3>
        <div className="mt-1 flex items-center space-x-2">
          <Trophy className="h-5 w-5 text-yellow-500" />
          <p className="font-medium text-gray-600">Score: {score.score}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-md font-medium text-gray-600">Reward</p>
        <p className="text-sm font-bold text-blue-600">{claimableTokens} Token </p>
      </div>

      <button
          className="flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 px-5 py-2.5 font-medium text-white shadow-lg transition duration-300 ease-in-out hover:from-blue-600 hover:to-blue-700 focus:ring-2 focus:ring-blue-300"
          onClick={() => {handleClaim(score.game, claimableTokens)}}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          Claim Rewards
        </button>

    </div>
  );
};
const getGameBorderColor = (gameName: string) => {
  const gameColors: { [key: string]: string } = {
    spaceShotter: "border-blue-500",
    zoomLand: "border-green-500",
    snakeGame: "border-purple-500",
    "Rail Rush": "border-yellow-500",
    carGame: "border-red-500",
    MarioGo: "border-indigo-500",
    default: "border-gray-300",
  };
  return gameColors[gameName] || gameColors["default"];
};

const Score = () => {
  const [scoreData, setScoreData] = useState<ScoreDataInterface[]>([]);
  const [loading, setLoading] = useState(true);
  const [tokenInfo, setTokenInfo] = useState<TokenInfoInterface | null>(null);
  const protectedRoute = AxiosReqInstance();
  const { address, isConnected } = useAccount();
  const [gameName, setGameName] = useState<string>("");
  const [claimableTokens, setClaimableTokens] = useState<number>(0.0);
  const [claimArgs, setClaimArgs] = useState<readonly [string, bigint, `0x${string}`[]] | undefined>(undefined);
  const [claimCalled, setClaimCalled] = useState(false)

  const {
    data: hash,
    error,
    writeContract,
    isSuccess,
    isPending,
    isError,
  } = useWriteContract();

  const { data: simulateData, error: simulateError } = useSimulateContract({
    address: contractAddress as `0x${string}`,
    abi: GameTokenDistributor,
    functionName: "claimTokens",
    args: claimArgs,
  });

  useEffect(() => {
    if (simulateError && claimCalled) {
      console.error('Simulation error:', simulateError);
      toast.error(`Transaction would fail: ${simulateError.message}`);
    }
  }, [simulateError]);

  useEffect(() => {
    const updateClaimedTokens = async () => {
      if (isSuccess) {
        toast.success(`Transaction hash: ${hash}`, {
          position: "top-right",
        });
        
        //update the table here after a succesful claim 
        //token token-field: increment by 30
        //display claimable tokens =.> token - token_claimed 80 - 60 = 20

        const currentDate = new Date().toISOString();
        const url = `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/games/setClaimTokens/`;
        const body = {
          "claimed_tokens": claimableTokens,
          "last_claimed_date": currentDate,
          "game": gameName,
        };
        try {
          const response = await protectedRoute.post(url, body);
          if (response.status === 200) {
            console.log("Claimed Tokens updated successfully");
          }
        } catch (error) {
          console.error("Error while updating claimed tokens at score.tsx", error);
        }
      }
    };
    updateClaimedTokens();
  }, [hash, isSuccess]);

  useEffect(() => {
    if (isError) {
      console.log("Error from claiming rewards ", error);
      toast.error(`Error claiming rewards`, {
        position: "top-right",
      });
    }
  }, [isError]);

  const HandleClaim = async (gameName: string, claimableTokens: number) => {
    //claim their Reward
    //address, token, amount, dateModified
    //serialMerkle => dateModified
    console.log("Claiming Rewards.....");
    setClaimableTokens( claimableTokens);
    
    console.log('the claimable tokens are', claimableTokens);
    const url = `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/games/getScoreData/`;
    try {
      const response = await protectedRoute.get(url, {params: {gameName}});
      if (response.status === 200) {
        const { tokenInfo } = response.data;
        setTokenInfo(tokenInfo);
        setGameName(gameName);
        if (!isConnected || address === null) {
          toast.info("Please connect your wallet first");
          return;
        }
        // console.log("All Token info is", tokenInfo); 
        // console.log("the address is", address);
        // console.log('the token amount are', claimableTokens);
        // console.log('token name is', tokenInfo.token_name);
        // console.log('token symbol is', tokenInfo.token_symbol);
        // console.log('solana token address is', tokenInfo.solana_contract_address);
        // console.log('bnb token address is', tokenInfo.bnb_contract_address);
      } 

        const leaf = keccak256(
              ethers.AbiCoder.defaultAbiCoder().encode(["address", "address", "uint256"], [
                address,
                tokenInfo?.bnb_contract_address,
                ethers.parseEther(claimableTokens.toString()),
        ]))

        let merkelDataResponse = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/games/getMerkelDataView/`, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
          },
          
      });

      const merkelData = await merkelDataResponse.json();
      console.log("Merkel Data is", merkelData);
      const {merkleTree} = RegenerateMerkleTree(merkelData.serialized_leaves);
      const proof = merkleTree.getHexProof(leaf);

      
      if (!tokenInfo?.bnb_contract_address) {
        toast.error("Token address not found");
        return;
      }

      const args = [
        tokenInfo.bnb_contract_address,
        ethers.parseEther(claimableTokens.toString()),
        proof as `0x${string}`[],
      ] as const;

      setClaimCalled(true);
      setClaimArgs(args);
      
      await new Promise(resolve => setTimeout(resolve, 0));
      //i need the date modified here of the gane token row 
      //so as to determine if i call the transition
      console.log('the bnb contract address is', tokenInfo?.bnb_contract_address);
      if (!simulateError) {
        writeContract({
          address: contractAddress as `0x${string}`,
          abi: GameTokenDistributor,
          functionName: "claimTokens",
          args: args,
        });
      }

    } catch (error: any) {
      console.error("Error while getting userInfo at score.tsx", error);
      if (error.response?.statusText === 'Unauthorized') {
        toast.error("Please login to claim your rewards");
      } else {
        toast.error("An unexpected error occurred");
      }
    }finally{
      setClaimCalled(false)
    }
  };

  const getScore = async () => {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/games/getScores/`;
    try {
      const response = await protectedRoute.get(url);
      if (response.status === 200) {
        const sortedScores = response.data.scores.sort(
          (a: ScoreDataInterface, b: ScoreDataInterface) => b.score - a.score,
        );
        setLoading(false);
        setScoreData(sortedScores);
      }
    } catch (error) {
      console.error("Error while getting score at score.tsx in Rewards", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getScore();
  }, []);

  if (loading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-t-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl rounded-xl bg-gray-50 p-6">
      <div className="mb-6 flex items-center justify-center">
        <Star className="mr-2 h-8 w-8 text-yellow-500" />
        <h2 className="text-3xl font-bold text-gray-800">Your Scores</h2>
      </div>
      <div className="flex items-center justify-between rounded-lg bg-gray-100 p-4 shadow-md">
        <p className="text-lg font-bold text-blue-700">
          <span className="font-medium text-gray-600">Tokens</span>
        </p>
      </div>

      {scoreData.length === 0 ? (
        <div className="py-8 text-center text-gray-500">
          No scores available yet. Start playing to set your first score!
        </div>
      ) : (
        <div className="space-y-4">
          {scoreData.map((score, index) => (
            <ScoreCard key={index} score={score} handleClaim={HandleClaim} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Score;


