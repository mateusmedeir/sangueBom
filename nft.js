const CryptumSDK = require('cryptum-sdk')
const protocol = 'POLYGON'

const sdk = new CryptumSDK({
    environment: "testnet", // 'testnet' or 'development', 'mainnet' or 'production'
    apiKey: '',
})

const wallet = require("./wallet.json")


const createNft = async () => {
    const { hash } = await sdk.nft.create({
        wallet,
        protocol,
        symbol: 'HACK',
        name: 'HACK2',
        type: 'ERC721'
    })

    console.log(hash)
}

// hash = 
const getContractByHash = async (hash) => {
    const { contractAddress } = await sdk.transaction.getTransactionReceiptByHash({
        protocol,
        hash
    })

    console.log(contractAddress)
}

const mintNft = async (contractAddress) => {

    const { hash } = await sdk.nft.mint({
        wallet,
        protocol,
        token: contractAddress,
        destination: wallet.address,
        tokenId: 1,
        uri: 'ipfs://bafkreih4m7oxgxltb2gltqcat6pdujp25vglomk4aa3wgivooy3fcftc4q',
        amount: '500'
    })

    console.log(hash)
}


// createNft()
// getContractByHash("0x516eab8d712777729fc065337879c3e795383624e169a3caf7f99e29543ab5a1")
const contractAddress = "0x859e820968cadbB8353b38AC0C92617fa1Ee3865"

mintNft(contractAddress)