export const selectProp = (data , prop , value)=>{
    const response = data.filter(el=>{
        if(el[prop].toLowerCase().includes(value.toLowerCase()))
            return el
    })
    return response
}