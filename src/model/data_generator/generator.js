
const { findRowsCountForProductsSupermarketsOriginsFunction } = require('../queries/findQueries');
const { dropEntries } = require('../queries/deleteQueries');
const { insertEntries } = require('../queries/insertQueries');

const generator = (productNum, supermarketNum, originNum) => {
    let a = [];
    for (let i=0;i<productNum;i++){
        for (let j=0;j<supermarketNum;j++){
            let entry = [i+1, j+1, getRandomInteger(1, originNum)];
            a.push(entry);
        }
    }
    return a;
}

const getRandomInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const populateEntriesTable = () => {
    dropEntries()
    .then(() => findRowsCountForProductsSupermarketsOriginsFunction())
    .then(res => generator(...res.map(e => Number(e.rows[0].count))))
    .then(res => insertEntries(res))
    .catch(err => err);
}

module.exports = { generator, getRandomInteger, populateEntriesTable }