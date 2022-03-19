require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi bridge tooth guard render remember protect grid problem bubble system'; 
let testAccounts = [
"0x76da2f3a7341333c505d41e554e272179c62908b4eb246de24d0b10902f34465",
"0x4b59a6ce42716096e9146c1086c9075ceedca0eefc21a8186ff7c6e30235c165",
"0x157c5e6ef23b6c35b7d3a8f8eb56c3892cdcd8166d19e6ac84422b7897822871",
"0x405e90b76840f12d5d5b7791f8727955179c2261e905d75b1accf4fa9b0a4cc4",
"0xda1db190b624e958c0c18211dca91def9c97d981dbe45b791d9b2332c2500a2c",
"0x2eb83bb38abb3729823186e53e5946428ca604b6d8aa256f60f4d4ac3695e47a",
"0x98cfae2b37d2755cf70883c55119e30373fb01d5bab742e9a3adf1a47aaab729",
"0x02f906fe0ba9d576d66ace71523a2f644615cf457be995c3f26cc80f45d4fa7a",
"0x6b42692f7f2d7059771b4668eeeb74084bde3c501ead89047b5ddc99b237743a",
"0x296b61432c42ad0c8e2d897308cf8eed18b4044cd63c120ec8a03f572b88d318"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

