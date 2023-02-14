 export const divideArray = (array)=>{
    let arraycopy = [...array]
    const slen = 32
    const times = Math.floor(arraycopy.length/slen)
    const movies = []
    const npages = []
    for(let i=0 ; i<=times ; i++)
    {
        movies.push([])
        npages.push(i)
        if(arraycopy.length>slen)
        {
            for(let j=0; j<slen ; j++)
            {
                    movies[i].push(arraycopy.shift())
            }
        }
        else
        {
            movies[i].push(...arraycopy)
        }
    }
    return [movies,npages]
}