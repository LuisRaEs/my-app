export const searchFavorites = (db,ids) =>{
    const favs = ids.map(id=>{
        return db.find(el=>el.imdbID===id)
    })
    return favs
}