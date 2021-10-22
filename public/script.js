const noteTitle = document.querySelector(".note-title")
const noteTextArea = document.querySelector(".note-textarea")
const listGroup = document.querySelector('.list-group')

fetch("/api/db").then(res=>{
    return res.json()
}).then(data=>{
console.log(data)
data.forEach(note=>{
    const noteLi = document.createElement('li')
    noteLi.textContent = `Bob`
})
})