const generator = (productNum, supermarketNum, originNum) => {
    let matrix = [];
    let end = productNum;
    while(end > 0) {
        end--;
        matrix.push([]);
    }
    console.log(matrix);
    return matrix;
}

const getRandomInteger = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
}

module.exports = { generator, getRandomInteger }