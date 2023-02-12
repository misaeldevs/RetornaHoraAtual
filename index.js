function returnHour(date){
    if(date && !(date instanceof Date)){
        throw new TypeError("Esperando uma instância de Date.")
    }
    if(!date){
        date = new Date()
    }
    return date.toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
    })
}

try{
    const date = new Date()
    const hour = returnHour()
    console.log(hour)
} catch(err){
console.log(err)
}finally{
    console.log("This is te time NOW!")
}