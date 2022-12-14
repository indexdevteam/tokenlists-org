//TODO: Should probably make this dynamic
// const list =  require("./chain_list.json"); 
import list from "./chain_list.json"; 
const typedList : any = list; 

export function lookUpchain(chainId: string) {
    return typedList[chainId] || chainId; 
}

export function lookupScanner(chainId: number) {
    switch(chainId) {
        // Mainnet
        case 1: 
            return "https://etherscan.io/address/"; 
        // Polygon
        case 137: 
            return "https://polygonscan.com/address/"; 
        // Rinkeby
        case 4:
            return "https://rinkeby.etherscan.io/address/"; 
        // Kovan
        case 42: 
            return "https://kovan.etherscan.io/address/"; 
        // goerli
        case 420: 
            return "https://goerli.etherscan.io/address/"; 
        // ropsten
        case 3: 
            return "https://ropsten.etherscan.io/address/"; 
        // arbitrum
        case 42161: 
            return "https://arbiscan.io/address/"; 
        // Optimism
        case 10:
            return "https://optimistic.etherscan.io/address/";
        // Optimistic Kovan
        case 69: 
            return "https://kovan-optimistic.etherscan.io/address/"
        // Binance Smart Chain
        case 56: 
            return "https://bscscan.com/address/"
        // Ethereum Classic
        case 61: 
            return "https://blockscout.com/etc/mainnet/address/"
        // Gnosis Chain
        case 100: 
            return "https://gnosisscan.io/address/"
        // Kucoin Community Chain
        case 321: 
            return "https://scan.kcc.io/address/"
        // Dogechain
        case 2000: 
            return "https://explorer.dogechain.dog/address/"
        // EthereumPow
        case 10001: 
            return "https://www.oklink.com/en/ethw/address/"
        // Avalanche
        case 43114: 
            return "https://snowtrace.io/address/"
        // Harmony
        case 1666600000: 
            return "https://explorer.harmony.one/address/"
        default:
            return "" ;
    }
}
