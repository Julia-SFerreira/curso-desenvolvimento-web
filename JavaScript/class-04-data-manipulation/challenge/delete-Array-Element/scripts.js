let techs = ['HTML', 15, 'CSS', 15,'JavaScript', 30, 'SQL', 10, 'GIT', 8]
function deleteArrayElements(techsName) {
    let auxArray = techs
    auxArray.map(element => {
        document.write(`${element} <br>`)
        if(String(techsName).toLocaleLowerCase() == String(element).toLocaleLowerCase()){
            window.alert(element)
        }
    })
}

deleteArrayElements("CSS")
// document.write(techs)