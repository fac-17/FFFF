module.exports = score => {
    switch(Math.round(score)) {
        case 1: return "plane"
        case 2: return "lorry"
        case 3: return "car"
        case 4: return "bike"
    }
}