export const createStars=(rating)=>
{
    rating = Number(rating)
    const cant = Math.round(rating/2)
    let stars = new Array(cant).fill("\u{2B50}")
    let sstars = stars.join("")
    return sstars
}