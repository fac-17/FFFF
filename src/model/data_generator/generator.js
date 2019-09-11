const generator = (productNum, supermarketNum, originNum) => {
    let a = [];
    console.log("productNum", productNum);
    console.log("supermarketNum", supermarketNum);
    for (let i=0;i<productNum;i++){
        for (let j=0;j<supermarketNum;j++){
            let entry = [i+1, j+1, getRandomInteger(1, originNum)];
            a.push(entry);
        }
    }
    return a;
}

const getRandomInteger = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
}

module.exports = { generator, getRandomInteger }