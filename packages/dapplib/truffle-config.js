require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea knife sun tooth guard render remember smile hockey enter bone gas'; 
let testAccounts = [
"0xe75aafc555def520f910cd6bc06056595b615045459c0a465ac01137923863c6",
"0xf124bc86e1d6adfe645cce502f9cbc1a977252082365907f47939c354fa895d6",
"0xb7b5a21d1c7405ba9a0ffcba329ce6dba5551b2c8ccd6f6b9106ff1e63602096",
"0x7d49b97a244f70b048b60d9213691aab5252156b91fc0743791be5f0ec7865f7",
"0x6ec81866ba0430aee7142332744ae0322f3150637a4686690d135f942e3c0008",
"0xaa481bd687aea2f19ebd761ca5b592f9f5132da71cc06e4304ac22b0cd4bab3f",
"0x517fbadfe129fd76b635ab9c28a4951e4b1668e4642d7e105beebca69b9bf287",
"0x54ae2627206fbc3b22924a50ea36eee6fd580f19b81fab189986bd5373c28869",
"0x15f42157e40a05c820c0dc6deea978d4418ed27d609664b831ffe33b62e3f1a6",
"0x7374cf21a385aa56a55bdd3b8530a053626810d24c7ae6ae57a60451a1f17dfe"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

