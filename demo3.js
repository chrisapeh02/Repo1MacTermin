//transfer funds
const log = console.log;
const api = require('binance');

const brest = new api.BinanceRest({
    key: 'Gjg6uiLKgpaQqDs9daEw26FvhmCFThDYHXdSqf0wiSJbr1Wv4LHzdcnZiqryGA1U', // Get this from your account on binance.com
    secret: 'UH0vui1Zi2aUKjgUdDb0ryI1ncN7sGjQ3aZk5YxWwB84NmwGElb223hLTA69moZ6', // Same for this
    timeout: 15000, // Optional, defaults to 15000, is the request time out in milliseconds
    recvWindow: 20000, // Optional, defaults to 5000, increase if you're getting timestamp errors
    disableBeautification: false,
    handleDrift: true
});

const asset = 'BNB';
const amount = 1;
const type = 1;

brest.marginTransfer({asset,amount,type}).then(k => log(k)).catch(err => log(err));
