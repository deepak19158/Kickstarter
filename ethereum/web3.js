import Web3 from "web3";

let web3;

if (typeof window !== "undefined" && window.web3 !== "undefined") {
  web3 = new Web3(window.web3.currentProvider);
} else {
  const provider = new Web3.providers.HttpProvider(
    "https://rinkeby.infura.io/v3/81163e6c950b411b97443686604f6112"
  );
  web3 = new Web3(provider);

  web3.eth.getAccounts().then(console.log);
}

export default web3;
