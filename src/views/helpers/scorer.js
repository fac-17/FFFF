module.exports = score => {
    switch(Math.round(score)) {
        case 4: return "plane"
        case 3: return "lorry"
        case 2: return "car"
        case 1: return "bike"
    }
}