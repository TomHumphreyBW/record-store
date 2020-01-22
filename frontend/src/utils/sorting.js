const sortByAlbum = (a, b) => {
    if (a.albumTitle < b.albumTitle) {
        return -1
    }
    if (a.albumTitle > b.albumTitle) {
        return 1
    }
    return 0
}

const sortByArtist = (a, b) => {
    if (a.artist < b.artist) {
        return -1
    }
    if (a.artist > b.artist) {
        return 1
    }
    return 0
}

const sortByYear = (a, b) => {
    if (a.year < b.year) {
        return -1
    }
    if (a.year > b.year) {
        return 1
    }
    return 0
}

const sortByGenre = (a, b) => {
    if (a.genre < b.genre) {
        return -1
    }
    if (a.genre > b.genre) {
        return 1
    }
    return 0
}

export {
    sortByAlbum,
    sortByArtist,
    sortByYear,
    sortByGenre
}