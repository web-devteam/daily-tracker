let value = 0
let monthtxt = ["january", "febuary", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"]
let days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"]
let date = new Date
let currentmonth = "january"
let monthlength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ]
let locator = monthtxt.indexOf(currentmonth)


for (let index = 0; index < 5; index++) {
    let create = document.createElement("div")
    create.className="row"
    document.getElementById("mainbx").append(create)
for (let index2 = 0; index2 < 7; index2++) {value=value+1
    let create2 = document.createElement("p")
    create2.className="dayno"
    create2.innerHTML=value
    create.append(create2)
    if(value>monthlength[locator]){create2.style.color="rgb(60, 60, 60)"}
    if(value<=monthlength[locator]){  create2.addEventListener("click", ()=>{
for (let index = 0; index < monthlength[locator]; index++) {
document.getElementsByClassName("dayno").item(index).style.border="2px solid rgb(60, 60, 60)"
}
create2.style.border="2px solid rgb(0, 225, 255)"})}

}
}
let value2 = 0
for (let index3 = 0; index3 < 12; index3++) {
    let create = document.createElement("div")
    create.className="month"
    value2=0
    let create4 = document.createElement("p")
    create4.className="monthtxt"
    create4.innerHTML=monthtxt[index3]
    create.append(create4)
    let create5 = document.createElement("div")
    create5.className="dates2"
    for (let index4 = 0; index4 < 7; index4++) {
    let create6 = document.createElement("p")
    create6.innerHTML=days[index4]
    create5.append(create6)
    }
    create.append(create5)
    document.getElementById("months").append(create)
for (let index = 0; index < 5; index++) {
    let create3 = document.createElement("div")
    create3.className="mrow"
    create.append(create3)
for (let index2 = 0; index2 < 7; index2++) {value2=value2+1
    let create2 = document.createElement("p")
    create2.className="mdayno"
    create2.innerHTML=value2
    create3.append(create2)
}
}
}

let display = false
document.getElementById("morebtn").addEventListener("click", ()=>{
if(display==false){document.getElementById("addbtn").style.display="block"
document.getElementById("homebtn").style.display="block"
document.getElementById("trackbtn").style.display="block"
display=true
}
else if(display==true){document.getElementById("addbtn").style.display="none"
document.getElementById("homebtn").style.display="none"
document.getElementById("trackbtn").style.display="none"
display=false
}
})

document.getElementById("addbtn").addEventListener("click", ()=>{
document.getElementById("create").style.display="flex"
document.getElementById("track").style.display="none"
document.getElementById("months").style.display="none"
document.getElementById("scroll").style.display="none"
})
document.getElementById("trackbtn").addEventListener("click", ()=>{
document.getElementById("create").style.display="none"
document.getElementById("track").style.display="flex"
document.getElementById("months").style.display="none"
document.getElementById("scroll").style.display="none"
})
document.getElementById("homebtn").addEventListener("click", ()=>{
document.getElementById("create").style.display="none"
document.getElementById("track").style.display="none"
document.getElementById("months").style.display="none"
document.getElementById("scroll").style.display="flex"
})
