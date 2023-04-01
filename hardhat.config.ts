import { HardhatUserConfig } from "hardhat/config"
import "@nomicfoundation/hardhat-toolbox"
import * as dotenv from "dotenv"
import "hardhat-deploy"

dotenv.config()

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL || "set-goerli-rpc-url-in-dotenv"
const MUMBAI_RPC_URL = process.env.MUMBAI_RPC_URL || "set-mumbai-rpc-url-in-dotenv"
const PRIVATE_KEY = process.env.PRIVATE_KEY || "set-your-private-key-in-dotenv"
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "set-your-etherscan-key-in-dotenv"
const POLYGONSCAN_API_KEY = process.env.POLYGONSCAN_API_KEY || "set-your-polygonscan-key-in-dotenv"

const config: HardhatUserConfig = {
    solidity: "0.8.18",
    defaultNetwork: "hardhat",
    networks: {
        hardhat: {
            chainId: 31337,
        },
        localhost: {
            chainId: 31337,
        },
        // goerli: {
        //     url: GOERLI_RPC_URL,
        //     accounts: [PRIVATE_KEY],
        //     chainId: 5,
        // },
        // mumbai: {
        //     url: MUMBAI_RPC_URL,
        //     accounts: [PRIVATE_KEY],
        //     chainId: 80001,
        // },
    },
    namedAccounts: {
        deployer: {
            default: 0,
        },
    },
    gasReporter: {
        enabled: process.env.REPORT_GAS == "true",
        token: "ETH",
        // coinmarketcap: process.env.COINMARKETCAP_API_KEY,
        currency: "USD",
    },
    // etherscan: {
    //     apiKey: {
    //         goerli: ETHERSCAN_API_KEY,
    //         polygonMumbai: POLYGONSCAN_API_KEY,
    //     },
    // },
    mocha: {
        timeout: "200000", // 200 sec
    },
}

export default config
