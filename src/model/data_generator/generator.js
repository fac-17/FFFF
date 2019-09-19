
const { findRowsCountForProductsSupermarketsOriginsFunction } = require('../queries/findQueries');
const { dropEntries } = require('../queries/deleteQueries');
const { insertEntries } = require('../queries/insertQueries');

// generate an array of all products in all supermarkets with origin random in range 1..originNum
const generator = (productNum, supermarketNum, originNum) => {
    const a = [];
    for (let i=0;i<productNum;i++){
        for (let j=0;j<supermarketNum;j++){
            const entry = [i+1, j+1, getRandomInteger(1, originNum)];
            a.push(entry);
        }
    }
    return a;
}


const getRandomInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// remove all entries from the db and populates it with randomly generated data
const populateEntriesTable = () => {
    return dropEntries()
    .then(() => findRowsCountForProductsSupermarketsOriginsFunction())
    .then(res => generator(...res.map(e => Number(e.rows[0].count))))
    .then(res => insertEntries(res))
    .catch(err => err);
}

module.exports = { generator, getRandomInteger, populateEntriesTable }