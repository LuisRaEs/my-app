export const findGenre = (db)=>{
    let genres = []
    db.map(el=>{
        if(el.Genre)
        {
            el.Genre.split(",").map(el=>{
                const elt=el.trim()
                if(!genres.includes(elt) && elt!=="N/A")
                    genres.push(elt)
            })
        }
    })
    return genres
}