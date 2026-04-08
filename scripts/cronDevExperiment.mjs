import cron from 'node-cron';
import { config } from 'dotenv';
import { ethers } from "ethers";
import axios from 'axios';
import fs from 'fs';

// try {
//     const response = await axios.get("http://127.0.0.1:8000/api/tokens/getTokenInfo/");
//     if (response.status !== 200) {
//         throw new Error("Failed to fetch BNB addresses");
//     }
//     const data = await response.data;
//     console.log('the data is ', data);
//     data.forEach((token) => { 
//         getPriceFromPanCake(token);
//     });
// } catch (error) {
//     console.log("Error fetching BNB addresses:", error.message);
// }

fs.writeFileSync("tokens.csv", "Name,Symbol,Price (BUSD)\n");
const tokenList = [
    // {
    //     address: "0x712c5795723f81f686fcc4c2f89a703b57b6e1ae",
    //     name: "Play2LaughPop",
    //     symbol: "PLP"
    // },
    // {
    //     address: "0xeff2176ce55bd1de1dd99135d5f99fcc4aac66a4",
    //     name: "Play2HelpPop",
    //     symbol: "PHP"
    // },
    // {
    //     address: "0xa9ab99ba53f2e939889a300f43fc3a6f21916fb4",
    //     name: "Play2LearnPop",
    //     symbol: "PLNP"
    // },
    // {
    //     address: "0x7f1654c41d794d1326d5868ea63406ec6c82db1c",
    //     name: "Play2TravelPop",
    //     symbol: "PTP"
    // },
    // {
    //     address: "0x664641564773d39fd13adfedb852cd6f7ad25840",
    //     name: "Play2LovePop",
    //     symbol: "PLVP"
    // },
    // {
    //     address: "0x9fdb02cb18842ab800facf8740edd707cfe659ce",
    //     name: "Play2ExperiencesPop",
    //     symbol: "PEP"
    // },
    // {
    //     address: "0xafd62e25aa5e9409128c00ab224bf0e39b86cd3e",
    //     name: "Play2HealthPop",
    //     symbol: "PHP"
    // },
    // {
    //     address: "0xd9e7a042ee901620092d3620a2ee9bbff90498cb",
    //     name: "Play2LiveWellPop",
    //     symbol: "PLWP"
    // },
    // {
    //     address: "0xd63a174185e7a7e0e0b3b7189a20efd2fe0a0234",
    //     name: "Play2WorkPop",
    //     symbol: "PWP"
    // },
    // {
    //     address: "0xe00ee8fe779a3274d01ae4d6465ef440d686dbae",
    //     name: "Play2LaughHiss",
    //     symbol: "PLH"
    // },




    {
        address: "0x7ec0d068e3d1839168164228cdf2c94b72c31eb5",
        name: "Play2HelpHiss",
        symbol: "PHH"
    },
    {
        address: "0xb661b6423050e9b925c7f26d9b5b69ac90224d94",
        name: "Play2LearnHiss",
        symbol: "PLNH"
    },
    {
        address: "0xfe93c8629cfc32577ddb7da564d3d5003c840003",
        name: "Play2TravelHiss",
        symbol: "PTH"
    },
    {
        address: "0xe500f4c4eca9650e6dbf7765580d6ca0b2ca1d11",
        name: "Play2LoveHiss",
        symbol: "PLVH"
    },
    {
        address: "0x32212e1daff8ac5674f6eaaa1ae83e61c6a0d101",
        name: "Play2ExperiencesHiss",
        symbol: "PEH"
    },
    {
        address: "0x1d51b711a9d5dc9036dc896fae3e718c41eb2ebc",
        name: "Play2HealthHiss",
        symbol: "PHH"
    },
    {
        address: "0x4481331bf8004642b4e77dbafae7f118ff5dc548",
        name: "Play2LiveWellHiss",
        symbol: "PLWH"
    },
    {
        address: "0xbaa3e3ae6ca0688f8be0c211a6ba83727839820f",
        name: "Play2WorkHiss",
        symbol: "PWH"
    },
    {
        address: "0xe18ac1bdd81fd86b91cd7b53b19ea45c04d28c85",
        name: "Play2LaughGo",
        symbol: "PLG"
    },
    {
        address: "0xd245b78966c5f1b83b69358c41dff6582d781c1b",
        name: "Play2HelpGo",
        symbol: "PHG"
    },








    
    // {
    //     address: "0xc6b4d76f407345c4a579c24fbdf3b7fb21aef1f0",
    //     name: "Play2LearnGo",
    //     symbol: "PLNG"
    // },
    // {
    //     address: "0x488ed6ae08e58de8e77e100002c361bdc39a48b8",
    //     name: "Play2TravelGo",
    //     symbol: "PTG"
    // },
    // {
    //     address: "0xe4e777675e2914775d8fdd74bad0905612d349a4",
    //     name: "Play2LoveGo",
    //     symbol: "PLVG"
    // },
    // {
    //     address: "0xb240f3a6c99abb58fcaf9e47f3a5aa979753dd98",
    //     name: "Play2ExperiencesGo",
    //     symbol: "PEG"
    // },
    // {
    //     address: "0xe1c48e72bbcfc7dcd56c3816b1fd5e8d76c69247",
    //     name: "Play2HealthGo",
    //     symbol: "PHG"
    // },
    // {
    //     address: "0x7e6eef4acd78020fb50b93041975d4cbd5b4af72",
    //     name: "Play2LiveWellGo",
    //     symbol: "PLWG"
    // },
    // {
    //     address: "0x9668c0a00c349e4039e78644b3ac64611d2b211a",
    //     name: "Play2WorkGo",
    //     symbol: "PWG"
    // },
    // {
    //     address: "0x447c26c736546a51564ba507b481a37ae44db9ea",
    //     name: "Play2LaughFly",
    //     symbol: "PLF"
    // },
    // {
    //     address: "0xc6518ac300804e1331da80eeaae810359b104bc8",
    //     name: "Play2HelpFly",
    //     symbol: "PHF"
    // },
    // {
    //     address: "0xd4198261b29cb5f3cadd474d5b5d6e781cc4fde4",
    //     name: "Play2LearnFly",
    //     symbol: "PLNF"
    // },
    // {
    //     address: "0x52ccf3c5463084192714058065bc7fda9194f49f",
    //     name: "Play2TravelFly",
    //     symbol: "PTF"
    // },
    // {
    //     address: "0x6f466991be4e2bf5ddd62dd12990d0465b5ef42d",
    //     name: "Play2LoveFly",
    //     symbol: "PLVF"
    // },
    // {
    //     address: "0xf7e43e9978b207b00f3cc2b716a8deefdbfb458d",
    //     name: "Play2ExperiencesFly",
    //     symbol: "PEF"
    // },
    // {
    //     address: "0x1ef6e355900a466dae4146f08f072b2a40496f55",
    //     name: "Play2HealthFly",
    //     symbol: "PHF"
    // },
    // {
    //     address: "0xb1fa0edf2e067cca5435032e2fc786e15f5c3454",
    //     name: "Play2LiveWellFly",
    //     symbol: "PLWF"
    // },
    // {
    //     address: "0x942df48521f7f12fbfe34dbf4cb446d1f912be94",
    //     name: "Play2WorkFly",
    //     symbol: "PWF"
    // },
    // {
    //     address: "0x1c6829e7a76e60caaead02abec965517fc304110",
    //     name: "Play2LaughGrrr",
    //     symbol: "PLG"
    // },
    // {
    //     address: "0xf60cad0c58260851a180e544ba99919206798d52",
    //     name: "Play2HelpGrrr",
    //     symbol: "PHG"
    // },
    // {
    //     address: "0x819de174fe1b52cdc1a307a71d7f20e72062343b",
    //     name: "Play2LearnGrrr",
    //     symbol: "PLNG"
    // },
    // {
    //     address: "0x0bc1ed067299bd8ad34a10b239853fa36019da08",
    //     name: "Play2TravelGrrr",
    //     symbol: "PTG"
    // },
    // {
    //     address: "0x223ed88c5844e8ceb984c374a0b33ac980827fae",
    //     name: "Play2LoveGrrr",
    //     symbol: "PLVG"
    // },
    // {
    //     address: "0xe3966f90df9f6f13b07cbb570eb7f1e4c2a44d3d",
    //     name: "Play2ExperiencesGrrr",
    //     symbol: "PEG"
    // },
    // {
    //     address: "0xfb696fb1e91c510106a891f0646ca19c0d8f62e8",
    //     name: "Play2HealthGrrr",
    //     symbol: "PHG"
    // },
    // {
    //     address: "0xe0d0b5dae04bd1f76b389af2970cbf5812a2b797",
    //     name: "Play2LiveWellGrrr",
    //     symbol: "PLWG"
    // },
    // {
    //     address: "0x96c68a2cfff5b928abd7dbebdf5fd61de1a23ca2",
    //     name: "Play2WorkGrrr",
    //     symbol: "PWG"
    // },
    // {
    //     address: "0x3e59f2275c59462f0ba4e93d749f107048300e55",
    //     name: "Play2LaughMore",
    //     symbol: "P2LMT"
    // },
    // {
    //     address: "0x32e9ae567deb6150eac7b4f2a42680d6c6f39aa9",
    //     name: "Play2HelpMore",
    //     symbol: "P2HMT"
    // },
    // {
    //     address: "0x4bc4fd40f8df5d8594afcb4652bee7d5ff6a5d03",
    //     name: "Play2LearnMore",
    //     symbol: "P2LMT"
    // },
    // {
    //     address: "0x3e4e8236d54aef8bbbc1a6fa671ddc129eaaa132",
    //     name: "Play2TravelMore",
    //     symbol: "P2TMT"
    // },
    // {
    //     address: "0x8c61f70b70933b0dcc7c85ff6cefe87859662cf2",
    //     name: "Play2LoveMore",
    //     symbol: "P2LMT"
    // },
    // {
    //     address: "0x216347caf7bfd6c832f3fc6d008948b78d874773",
    //     name: "Play2ExperiencesMore",
    //     symbol: "P2EMT"
    // },
    // {
    //     address: "0xf3d9b6ceacc5ee3c444c389929e1cf6a04e6b165",
    //     name: "Play2HealthMore",
    //     symbol: "P2HMT"
    // },
    // {
    //     address: "0xd6bfdad04866913af90e9625d5a1368fb41f0775",
    //     name: "Play2LiveWellMore",
    //     symbol: "P2LWMT"
    // },
    // {
    //     address: "0xbdcd7a35c8cc64800adc721556e3fea95a46455f",
    //     name: "Play2WorkMore",
    //     symbol: "P2WMT"
    // },
    // {
    //     address: "0x7E2179bF7C02B03c67bEf5575fa05380ccfF326D",
    //     name: "Play2Laugh3-2-1",
    //     symbol: "P2L321T"
    // },
    // {
    //     address: "0xC368066728395358123d0f564aF90dF29a0dFBBb",
    //     name: "Play2Help3-2-1",
    //     symbol: "P2H321T"
    // },
    // {
    //     address: "0x349010e2D5265Bc8a1aCEFEF954C01c57D8f4dA0",
    //     name: "Play2Learn3-2-1",
    //     symbol: "P2L321T"
    // },
    // {
    //     address: "0xeDFb88C117322588F60A778844AD6Bf2B938c4F4",
    //     name: "Play2Travel3-2-1",
    //     symbol: "P2T321T"
    // },
    // {
    //     address: "0x91A4fa828863d074CC225512E7647034592f7B8b",
    //     name: "Play2Love3-2-1",
    //     symbol: "P2L321T"
    // },
    // {
    //     address: "0x1f6f61e92F8BE95225e6e5bdd2cc34a6BFf1091a",
    //     name: "Play2Experiences3-2-1",
    //     symbol: "P2E321T"
    // },
    // {
    //     address: "0x85Fc80CEc1229967AE52499662C91328e80A2676",
    //     name: "Play2Health3-2-1",
    //     symbol: "P2H321T"
    // },
    // {
    //     address: "0x90c23D14366720a1040F0aF4A85495D65a1c8541",
    //     name: "Play2LiveWell3-2-1",
    //     symbol: "P2LW321T"
    // },
    // {
    //     address: "0x51471431b7e91EAc0B9E635e1CAC7bA56f2830f4",
    //     name: "Play2Work3-2-1",
    //     symbol: "P2W321T"
    // },
    // {
    //     address: "0x0BFb35d41a006344AACC33e55B22660b0a03B8Dc",
    //     name: "Play2LaughUp",
    //     symbol: "P2LUPT"
    // },
    // {
    //     address: "0x18de9842D20A7cebeF1b1542A0c4b3181C3F62F9",
    //     name: "Play2HelpUp",
    //     symbol: "P2HUPT"
    // },
    // {
    //     address: "0x8215eDc0B8982C23381bf60de60474d947c44791",
    //     name: "Play2LearnUp",
    //     symbol: "P2LUPT"
    // },
    // {
    //     address: "0xAe804331eF0FE8f0E10A6ca1E5d0d47358d66737",
    //     name: "Play2TravelUp",
    //     symbol: "P2TUPT"
    // },
    // {
    //     address: "0xda96022f26111001B2CCab27099BaB94D676Bc11",
    //     name: "Play2LoveUp",
    //     symbol: "P2LUPT"
    // },
    // {
    //     address: "0xd2a779C4c6D20A491A94c0AC584f3D6Df5F9f3D8",
    //     name: "Play2ExperiencesUp",
    //     symbol: "P2EUPT"
    // },
    // {
    //     address: "0x10c7903A85eafD1bbFCdF88320E867b2913F7000",
    //     name: "Play2HealthUp",
    //     symbol: "P2HUPT"
    // },
    // {
    //     address: "0xe56C3E2905d6Ab13edAB39EFcFEd56e024541Cbb",
    //     name: "Play2LiveWellUp",
    //     symbol: "P2LWUPT"
    // },
    // {
    //     address: "0x030067d29d4D5ed4F9eaAd6e12fc490bC1b4029F",
    //     name: "Play2WorkUp",
    //     symbol: "P2WUPT"
    // },
    // {
    //     address: "0x260e9f4f5fc174d56bce1aad754dc3d049ca157f",
    //     name: "Play2laughYum",
    //     symbol: "P2LYMT"
    // },
    // {
    //     address: "0x89cd834450f61731b4b9f81ddde54cbb4e286065",
    //     name: "Play2HelpYum",
    //     symbol: "P2HYMT"
    // },
    // {
    //     address: "0x115dc105140fbf172489ac779af22d5f3c9359b8",
    //     name: "Play2LearnYum",
    //     symbol: "P2LYMT"
    // },
    // {
    //     address: "0xf4b9f82b66b7726431628294736688659c638ebb",
    //     name: "Play2TravelYum",
    //     symbol: "P2TYMT"
    // },
    // {
    //     address: "0x0b4ec2e9738a03db72c03cd2d9bd95061336768c",
    //     name: "Play2LoveYum",
    //     symbol: "P2LYMT"
    // },
    // {
    //     address: "0x992b68f5909338edf38d1e5e06803e477592c72d",
    //     name: "Play2ExperiencesYum",
    //     symbol: "P2EYM"
    // },
    // {
    //     address: "0x6e034b8c25f8d1fdc92854bf9fd1abd3e922314e",
    //     name: "Play2HealthYum",
    //     symbol: "P2HYMT"
    // },
    // {
    //     address: "0xd2ff7820a56f1600a49afeaa44f08d097035a63b",
    //     name: "Play2LiveWellYum",
    //     symbol: "P2LWYM"
    // },
    // {
    //     address: "0xc9c90d8f14411685c5355028edfc44cf962da068",
    //     name: "Play2WorkYum",
    //     symbol: "P2WYM"
    // }
];

const getPriceFromPanCake = async (token) => {
    const busdAddress = "0xe9e7cea3dedca5984780bafc599bd69add087d56";
    const wbnbAddress = "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c";
    const pancakeRouterAddress = "0x10ED43C718714eb63d5aA57B78B54704E256024E";
    const provider = new ethers.JsonRpcProvider("https://bsc-dataseed.binance.org/");

    const routerAbi = [
        "function getAmountsOut(uint amountIn, address[] calldata path) external view returns (uint[] memory)"
    ];

    const erc20Abi = [
        "function totalSupply() view returns (uint256)",
        "function decimals() view returns (uint8)",
        "function name() view returns (string)",
        "function symbol() view returns (string)"
    ];

    const routerContract = new ethers.Contract(pancakeRouterAddress, routerAbi, provider);
    const tokenContract = new ethers.Contract(token.address, erc20Abi, provider);

    try {
        // Get token name, symbol, and decimals
        const tokenName = token.name;
        const tokenSymbol = await tokenContract.symbol();
        const tokenDecimals = await tokenContract.decimals();
        const amountIn = ethers.parseUnits("1", tokenDecimals);

        // Attempt direct BUSD pair first
        let path = [token.address, busdAddress];
        let amountsOut;
        try {
            amountsOut = await routerContract.getAmountsOut(amountIn, path);
        } catch (err) {
            // Fallback to WBNB -> BUSD route
            console.warn(`Direct BUSD pair failed for ${tokenName}, trying WBNB route...`);
            path = [token.address, wbnbAddress, busdAddress];
            amountsOut = await routerContract.getAmountsOut(amountIn, path);
        }

        const priceInBUSD = ethers.formatUnits(amountsOut[amountsOut.length - 1], 18);

        // Append data to CSV file
        const csvRow = `${tokenName},${tokenSymbol},${priceInBUSD}\n`;
        fs.appendFileSync("tokens.csv", csvRow);

        console.log(`Saved: ${tokenName}, ${tokenSymbol}, ${priceInBUSD} BUSD`);
    } catch (error) {
        console.error("Error fetching token data:", error.message);
        console.log('the token was', token);
        return;
    }
};

tokenList.forEach(getPriceFromPanCake);



// Load env variables for the script
config({ path: '.env.local' });

const CRON_SECRET = process.env.CRON_SECRET;

if (!CRON_SECRET) {
    console.error('CRON_SECRET environment variable is not set');
    process.exit(1);
}

console.log('Starting development cron service...');

// Run every 60/3 sec
cron.schedule('20 * * * * *', async () => {
    console.log('Cron job executed');
    getPriceFromPanCake();
    console.log('------------------------');
});

// Keep the script running
process.stdin.resume(); 