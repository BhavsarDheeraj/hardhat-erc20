const { ethers } = require("hardhat")

const networkConfig = {
    4: {
        name: "rinkeby",
        initialTokenSupply: 1,
    },
    31337: {
        name: "hardhat",
        initialTokenSupply: 50,
    },
}

const developmentChains = ["hardhat", "localhost"]

module.exports = {
    networkConfig,
    developmentChains,
}
