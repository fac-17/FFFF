const generator = (prod, supermarket, origin) => {
    return [];
}

const getRandomInteger = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
}

module.exports = { generator, getRandomInteger }