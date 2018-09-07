const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

const bc1 = {
    chain: [
    {
    index: 1,
    timeStamp: 1535272886724,
    transactions: [ ],
    nonce: 100,
    hash: "0",
    previousBlockHash: "0"
    },
    {
    index: 2,
    timeStamp: 1535272998085,
    transactions: [ ],
    nonce: 18140,
    hash: "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
    previousBlockHash: "0"
    },
    {
    index: 3,
    timeStamp: 1535273058163,
    transactions: [
    {
    amount: 12.5,
    sender: "00",
    recipient: "62175f6be9004b8f8c72a89dbeff6260",
    transactionId: "0e34a9b3a0db4581958c4a4da1b953f4"
    },
    {
    amount: 555,
    sender: "F34TTG34G6H",
    recipient: "DFFG455YH355",
    transactionId: "f6127a8fd7734460b2b28ab5ed821a4c"
    },
    {
    amount: 600,
    sender: "F34TTG3435G6H",
    recipient: "5DFFG455YH3355",
    transactionId: "d1ea5193e34b4c18a2eca1aac350b5ca"
    }
    ],
    nonce: 99544,
    hash: "0000194875752dc99662595d86231c986b16e9a101630edd206c216c0429f2a3",
    previousBlockHash: "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100"
    },
    {
    index: 4,
    timeStamp: 1535273082151,
    transactions: [
    {
    amount: 12.5,
    sender: "00",
    recipient: "62175f6be9004b8f8c72a89dbeff6260",
    transactionId: "193891fa313c424c9088b212a1ce6c95"
    },
    {
    amount: 36346,
    sender: "F34TTG3435G6H",
    recipient: "5DFFG455YH3355",
    transactionId: "0c3224cb88fd4c8aa73fd2ccb1f2cba5"
    },
    {
    amount: 3000,
    sender: "F34TTG3435G6H",
    recipient: "5DFFG455YH3355",
    transactionId: "12547832aa9445eca7bee516cf2336a9"
    },
    {
    amount: 2356,
    sender: "F34TTG3435G6H",
    recipient: "5DFFG455YH3355",
    transactionId: "9305e4ad4d8f4b4584d62afa3b3ba33f"
    }
    ],
    nonce: 34805,
    hash: "0000faea4dc7bdd2a3cc6f9deb3debbd96e93146655bb3629a6d1493ec121bbd",
    previousBlockHash: "0000194875752dc99662595d86231c986b16e9a101630edd206c216c0429f2a3"
    },
    {
    index: 5,
    timeStamp: 1535273099388,
    transactions: [
    {
    amount: 12.5,
    sender: "00",
    recipient: "62175f6be9004b8f8c72a89dbeff6260",
    transactionId: "a52a5fc8c725461aad8149259ded4a7f"
    }
    ],
    nonce: 5985,
    hash: "00002d366e3673c671960e2a6f8da6dd0fe39785c988c762a0be3ce2a4f42bce",
    previousBlockHash: "0000faea4dc7bdd2a3cc6f9deb3debbd96e93146655bb3629a6d1493ec121bbd"
    },
    {
    index: 6,
    timeStamp: 1535273106428,
    transactions: [
    {
    amount: 12.5,
    sender: "00",
    recipient: "62175f6be9004b8f8c72a89dbeff6260",
    transactionId: "821ba988b4fa467c8d88d5225be2766d"
    }
    ],
    nonce: 116140,
    hash: "0000c0d3717f1800ed5f380203fd17a106485058275f5fcd6b2ef4792e40c516",
    previousBlockHash: "00002d366e3673c671960e2a6f8da6dd0fe39885c988c762a0be3ce2a4f42bce"
    }
    ],
    pendingTransactions: [
    {
    amount: 12.5,
    sender: "00",
    recipient: "62175f6be9004b8f8c72a89dbeff6260",
    transactionId: "2054fc884b2543ae94f004db2e4392ec"
    }
    ],
    currentNodeUrl: "http://localhost:3001",
    networkNodes: [ ]
    };

    bitcoin.chainIsValid(bc1.chain);


