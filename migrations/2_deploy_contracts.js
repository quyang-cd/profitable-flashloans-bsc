const Arbitrage = artifacts.require("Arbitrage.sol");

module.exports = function (deployer) {
  deployer.deploy(
    Arbitrage,
    '0xBCfCcbde45cE874adCB698cC183deBcF17952812', //PancakeSwap factory
    '0xCDe540d7eAFE93aC5fE6233Bee57E1270D3E330F', //BakerySwap router
  );
};
