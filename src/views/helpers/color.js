module.exports = score => {
    switch(Math.round(score)) {
        case 1: return "#FA0000"
        case 2: return "#FB8800"
        case 3: return "#F5FA00"
        case 4: return "#38F706"
    }
}