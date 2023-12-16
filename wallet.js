const CryptumSDK = require('cryptum-sdk')
const protocol = 'POLYGON'

const sdk = new CryptumSDK({
    environment: "testnet", // 'testnet' or 'development', 'mainnet' or 'production'
    apiKey: '',
})

const generateWallet = async () => {
    const Wallet = await sdk.wallet.generateWallet({
        protocol
    })

    console.log(JSON.stringify(Wallet))
}


const getBalance = async () => {
    const wallet = require("./wallet.json")
    const balance = await sdk.wallet.getWalletInfo({
        address: wallet.address,
        // tokenAddresses: '', endereço do token criado
        protocol
    })

    console.log(balance)
}


// generateWallet()
getBalance()