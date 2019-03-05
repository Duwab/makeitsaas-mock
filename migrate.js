const isUpgrade = process.argv.indexOf('down') === -1;

console.log(`migrate ${isUpgrade ? 'up':'down'}`);
