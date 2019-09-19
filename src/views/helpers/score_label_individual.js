module.exports = score => {
    switch(Math.round(score)) {
        case 4: return "Sourced from outside Europe"
        case 3: return "Sourced from Europe"
        case 2: return "Sourced nationally"
        case 1: return "Locally sourced"
    }
}