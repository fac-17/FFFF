const generator = (productNum, supermarketNum, originNum) => {
    const count = productNum * supermarketNum;
    let a = Array(count)
    .fill([])
    .map( () => Array(3)
     .fill(0)
     .map( ()=>getRandomInteger(1, originNum) ));
    
    console.log(a);
    return a;
}

const getRandomInteger = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
}

module.exports = { generator, getRandomInteger }