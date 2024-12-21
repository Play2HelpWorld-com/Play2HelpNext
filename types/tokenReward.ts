
export type TokenReward = {
    address: string;  //the wallet address of the user
    token: string;   //the token address, this will either be saved in the env or come from the DB
    amount: string;  //the amount the fellow is been rewarded with
  };
  