import axios from "axios";

export const getPriceFromPanCake = async () => {
  const tokenAddress = "0x712c5795723f81f686fcc4c2f89a703b57b6e1ae";
  console.log(`Getting price for token ${tokenAddress}`);
  const response = await axios.get(
    `https://api.pancakeswap.info/api/v2/tokens/${tokenAddress}`
  );
  console.log(response);
};