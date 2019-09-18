module.exports = score => {
    switch(Math.round(score)) {
        case 4: return "Not sourced locally at all"
        case 3: return "Mostly not sourced locally"
        case 2: return "Mostly sourced locally"
        case 1: return "Locally sourced"
    }
}