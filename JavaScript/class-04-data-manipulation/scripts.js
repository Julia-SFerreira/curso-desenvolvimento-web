// date manipulation 


// document.write(date)
// let hours = date1.getHours()
// let minutes = date1.getMinutes()
// let seconds = date1.getSeconds()
// document.write(`${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`)

// date1.setHours(date1.getHours() + 3)
// date1.setHours(date1.getMinutes() + 30)
// date1.setHours(date1.getSeconds() + 60)

// document.write(date1.toLocaleTimeString("pt-BR"))



// let day = date.getDay()
// let data = date.getDate()
// let month = date.getMonth()
// let year = date.getFullYear()
// let minutes = date1.getMinutes()
// let seconds = date1.getSeconds()
// document.write(day + 1)
// document.write(year)
// document.write(date)
    // document.write(`${String(day).padStart(2, "0")}/${String(month).padStart(2, "0")}/${String(year).padStart(2, "0")}`)
    
    // date.setDate(date.getDate() + 7)
    // date.setFullYear(date.getFullYear() + 30)
    // document.write(date.toLocaleDateString())
    
    


    let date = new Date()
    let date1 = new Date("2022-02-17 13:10:00")
    let data2 = new Date("2022-03-17 12:00:00")


    // document.write(date1.toLocaleString("pt-BR"));
    // document.write((date1 - data2)/ 1000 / 60 / 60 / 24) 
    document.write(Math.floor((date1 - data2)/ 1000 / 60 / 60 / 24) )