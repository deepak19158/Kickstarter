import web3 from "./web3";
import campaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(campaignFactory.interface),
  "0x569374358fD4f75a10017A683e7fDf115a7b1b16"
);
// console.log(campaignFactory.interface);
export default instance;
