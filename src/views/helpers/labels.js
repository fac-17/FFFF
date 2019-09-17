module.exports = scorer = score => {
    switch(Math.round(score)) {
        case 1: return "Not sourced locally at all"
        case 2: return "Mostly not sourced locally"
        case 3: return "Mostly sourced locally "
        case 4: return "Locally sourced"
    }
}