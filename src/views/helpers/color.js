module.exports = score => {
    switch(Math.round(score)) {
        case 4: return "#FA0000"
        case 3: return "#FB8800"
        case 2: return "#F5FA00"
        case 1: return "#38F706"
    }
}