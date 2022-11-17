// date manipulation 

let date = new Date()
let date1 = new Date("2022-11-17 03:00:00")

// document.write(date)
// let hours = date1.getHours()
// let minutes = date1.getMinutes()
// let seconds = date1.getSeconds()
// document.write(`${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`)

document.write(date.toLocaleTimeString("pt-BR"))
