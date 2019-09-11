const generator = (productNum, supermarketNum, originNum) => {
    const count = productNum * supermarketNum;
    let a = Array(count)
    .fill(getRandomInteger(1, productNum))
    .map(x => Array(3)
    .fill(getRandomInteger(1, productNum)));
    
    console.log(a);
    return a;
}

const getRandomInteger = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
}

module.exports = { generator, getRandomInteger }