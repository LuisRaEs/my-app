export const checkValue= (el, defaultValue)=>{
    if(el!==undefined && el!=="N/A")
        return el
    else
        return defaultValue
}