const CryptumSDK = require('cryptum-sdk')
const protocol = 'POLYGON'

const sdk = new CryptumSDK({
    environment: "testnet", // 'testnet' or 'development', 'mainnet' or 'production'
    apiKey: '',
})

const wallet = require("./wallet.json")

const createToken = async () => {
    const { hash } = await sdk.token.create({
        wallet,
        name: 'HACKATHON',
        symbol: 'HACK2',
        decimals: 18,
        amount: '1000000',
        protocol
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

// contractAddress = 
const mintToken =  async (contractAddress) => {

     const { hash } = await sdk.token.mint({
        protocol,
        wallet,
        destination: wallet.address,
        amount: 100,
        token: contractAddress
     })

     console.log(hash)
}

const burnToken = async (contractAddress) => {
    const { hash } = await sdk.token.burn({
        protocol,
        amount: 100,
        token: contractAddress,
        wallet
    })

    console.log(hash)
}

const transferToken = async (contractAddress, destination) => {

    const { hash } = await sdk.token.transfer({
        protocol,
        wallet,
        token: contractAddress,
        amount: "100",
        destination
    })

    console.log(hash)
}

const contractAddress = "0x50c211Ca1637FC427e485e492D2FEE30F35a1B2d"
// createToken()
// getContractByHash("0xeec64549a4b328b3b2f29eb33d8aa92d8fe30cb5931bb6554193949106573b30")
// mintToken(contractAddress)
// burnToken(contractAddress)
// transferToken(contractAddress, "0xB9F97A89a378aaa1A1E6811Eb17807CC60411322")