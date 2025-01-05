let value = 0
let monthtxt = ["january", "febuary", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"]
let days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"]
let date = new Date
let pos = 0
let arrayweek = []
let test = ""
let delvalue = 0
let delname=""
let lastday = ""
let firatday = ""
let selected = ""
let gencolor = "rgb(0, 225, 255)"
let currentmonth = "january"
let currentday = null
let monthlength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ]
let locator = monthtxt.indexOf(currentmonth)
let trackertaskarray = localStorage.getItem("trackertaskarray")
if(trackertaskarray==null){trackertaskarray=[]}
else{trackertaskarray=trackertaskarray.split(",")}
let trackertaskarraycolor = localStorage.getItem("trackertaskarraycolor")
if(trackertaskarraycolor==null){trackertaskarraycolor=[]}
else{trackertaskarraycolor=trackertaskarraycolor.split(",")}
let trackermasterarray = localStorage.getItem("trackermasterarray")
if(trackermasterarray==null){trackermasterarray=[]}
else{trackermasterarray=trackermasterarray.split(",")}
console.log(trackermasterarray)
console.log(trackertaskarray)
console.log(trackertaskarraycolor)
date=date.toLocaleDateString()
let month =  date.slice(3, 5)
date = date.slice(0, 2)
let alphaday = new Date

alphaday=alphaday.toDateString().slice(0, 3).toLowerCase()
currentday = date
console.log(date)
console.log(month)
for (let index = 0; index < 12; index++) {
if(document.getElementById("mainmonth").innerHTML!=monthtxt[Number(month)]){document.getElementById("right").click()}
}
// load tasks
window.addEventListener("load", ()=>{
if(trackertaskarray.length>0){
for (let index = 0; index < trackertaskarray.length; index++) {
if(trackertaskarray[index]!=""){
let create=document.createElement("div")
let create2=document.createElement("p")
let create3=document.createElement("p")
let create4=document.createElement("div")
let create5=document.createElement("p")
let create6=document.createElement("button")
let create7=document.createElement("select")
let create8=document.createElement("input")
let create9=document.createElement("div")
let create10=document.createElement("option")
let create11=document.createElement("option")
create8.className="length"
create6.className="apply"
create7.className="select"
create10.value="oncount"
create11.innerHTML="turn counts off"
create10.innerHTML="use counts"
create11.value="offcount" 
create7.append(create10)
create7.append(create11)
create9.className="more"
create6.innerText="check"
create9.append(create8)
create9.append(create7)
create9.append(create6)
create.className="task"
create4.className="checkbox"
create5.className="color"
create2.innerHTML=trackertaskarray[index]
create3.innerHTML="double click for more info"
create5.style.background=trackertaskarraycolor[index]
let index1=create5.style.backgroundColor.indexOf(",")
let index2=create5.style.backgroundColor.lastIndexOf(",")
let r = create5.style.backgroundColor.slice(4, index1)
let g = create5.style.backgroundColor.slice((index1+1), index2)
let b = create5.style.backgroundColor.slice((index2+1), (create5.style.backgroundColor.length-1))
r = Number(r)
g=Number(g)
b=Number(b)
console.log(r+" -/- "+g+" -/-  "+b)
let rgbToHex = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1); 
create.id=create2.innerHTML+create5.style.backgroundColor
create3.id=create2.innerHTML+rgbToHex+"info"
console.log(create3.id)
console.log(create.id)
create.append(create2)
create.append(create3)
create.append(create4)
create.append(create5)
create.append(create9)
document.getElementById("scroll").append(create)
document.getElementById("scroll").style.flexDirection="column-reverse"
selected=create2.innerHTML

create.addEventListener("click", ()=>{selected=create2.innerHTML; console.log(selected); allocate()})
create.addEventListener("auxclick", (e)=>{
    e.preventDefault()
    document.getElementById("auxclick").style.display="flex"
    document.getElementsByTagName("body").item(0).onmouseover =""
    delvalue=create5.style.backgroundColor
    delname=create2.innerHTML
    console.log(delname)
})
create.addEventListener("dblclick", ()=>{
    document.getElementById("months").style.display="flex"
    document.getElementById("scroll").style.display="none" 
    console.log("dbclicked")
for (let index = 0; index < 35*12; index++) {
  document.getElementsByClassName("mdayno").item(index).style.backgroundColor="transparent"    
}
  
    document.getElementById("header").innerHTML=create2.innerHTML
for (let index1 = 0; index1 < 12; index1++) {
let cmonth = monthtxt[index1]
for (let index0 = 0; index0 < 35; index0++) {

let target = cmonth+index0
let createdarray = []
for (let index = 0; index < trackermasterarray.length; index++) {
if(trackermasterarray[index].includes(target) && trackermasterarray[index].includes(selected) ){
let color = trackermasterarray[index].indexOf("rgb")
let color2 = trackermasterarray[index].indexOf(")")
color = trackermasterarray[index].slice(color, color2+1).replaceAll("#", "")
console.log(color)
document.getElementsByClassName("mdayno").item((index0+(index1*35))-1).style.backgroundColor=color

}
}}

}
})
create4.addEventListener("click", ()=>{
    if(create.style.height=="120px"){  create.style.height="160px"}
    else{  create.style.height="120px"}
})
create6.addEventListener("click", ()=>{if(create6.innerText=="check"){ test = ""
if(create7.value=="offcount" || test=="nocount"){
     create.style.height="120px"
     if(currentday==null){window.alert("no date selected")}
     else{
     trackermasterarray[trackermasterarray.length]=create2.innerHTML+"/-/"+create5.style.backgroundColor.replaceAll(",", "#")+"/-/"+currentmonth+currentday+"/-/"+"nocount"
     console.log(create2.innerHTML+"/-/"+create5.style.backgroundColor.replaceAll(",", "#")+"/-/"+currentmonth+currentday+"/-/"+"nocount")
    create4.style.backgroundColor="white"
create6.innerText="uncheck"}
}
else if(create7.value="oncount"){
    if(create8.value==""){window.alert("count is empty")}
    else{ create.style.height="120px"
        if(currentday==null){window.alert("no date selected")}
        else{
        trackermasterarray[trackermasterarray.length]=create2.innerHTML+"/-/"+create5.style.backgroundColor.replaceAll(",", "#")+"/-/"+currentmonth+currentday+"/-/"+create8.value
        console.log(create2.innerHTML+"/-/"+create5.style.backgroundColor.replaceAll(",", "#")+"/-/"+currentmonth+currentday+"/-/"+create8.value)}
        create4.style.backgroundColor="white"
        create6.innerText="uncheck"}
}console.log(trackermasterarray); test=create7.value}
else if(create6.innerText=="uncheck"){create6.innerText="check"; console.log(test)
   create4.style.backgroundColor="transparent"
      if(test=="offcount" || test=="nocount"){
    let num = trackermasterarray.indexOf(create2.innerHTML+"/-/"+create5.style.backgroundColor.replaceAll(",", "#")+"/-/"+currentmonth+currentday+"/-/"+"nocount")
    trackermasterarray.splice(num, 1)
    console.log(trackermasterarray)}
    else if(test=="oncount"){
    let num = trackermasterarray.indexOf(create2.innerHTML+"/-/"+create5.style.backgroundColor.replaceAll(",", "#")+"/-/"+currentmonth+currentday+"/-/"+create8.value)
    trackermasterarray.splice(num, 1)
    console.log(trackermasterarray)
   }
   else{
    let num = trackermasterarray.indexOf(create2.innerHTML+"/-/"+create5.style.backgroundColor.replaceAll(",", "#")+"/-/"+currentmonth+currentday+"/-/"+test)
    trackermasterarray.splice(num, 1)
    console.log(trackermasterarray)
   }
 

}
localStorage.setItem("trackermasterarray", trackermasterarray)})
}}
}
})
//end

for (let index = 0; index < 5; index++) {
    let create = document.createElement("div")
    create.className="row"
    document.getElementById("mainbx").append(create)
for (let index2 = 0; index2 < 7; index2++) {value=value+1
    let create2 = document.createElement("p")
    create2.className="dayno"
    create2.innerHTML=value
let wkstart = 0
let wkend = 0

if(alphaday=="mon"){wkstart=parseInt(date)}
else if(alphaday=="tue"){wkstart=parseInt(date)-1}
else if(alphaday=="wed"){wkstart=parseInt(date)-2}
else if(alphaday=="thu"){wkstart=parseInt(date)-3}
else if(alphaday=="fri"){wkstart=parseInt(date)-4}
else if(alphaday=="sat"){wkstart=parseInt(date)-5}
else if(alphaday=="sun"){wkstart=parseInt(date)-6}
if(alphaday=="mon"){wkend=parseInt(date)+6}
else if(alphaday=="tue"){wkend=parseInt(date)+5}
else if(alphaday=="wed"){wkend=parseInt(date)+4}
else if(alphaday=="thu"){wkend=parseInt(date)+3}
else if(alphaday=="fri"){wkend=parseInt(date)+2}
else if(alphaday=="sat"){wkend=parseInt(date)+1}
else if(alphaday=="sun"){wkend=parseInt(date)}
wkstart=0
let order = ""
for (let index = 0; index < 7; index++) {
if(wkend>0){wkend=wkend-1
    document.getElementsByClassName("weekday").item(wkend).innerHTML=days[6-index]
} 
else{
  
    document.getElementsByClassName("weekday").item(wkstart+6).innerHTML=days[6-index] 
wkstart=wkstart+-1
}
}
for (let index = 0; index < 7; index++) {
order=order+document.getElementsByClassName("weekday").item(index).innerHTML+">"
}
console.log(order)
arrayweek[0]=order
if(create2.innerHTML==monthlength[locator]){
    if(monthlength[locator]==31){lastday=document.getElementsByClassName("weekday").item(3).innerHTML}
else if(monthlength[locator]==28){lastday=document.getElementsByClassName("weekday").item(0).innerHTML}
else if(monthlength[locator]==30){lastday=document.getElementsByClassName("weekday").item(2).innerHTML}
}


    if(value<10){create2.innerHTML="0"+value}
    create.append(create2)
    if(value>monthlength[locator]){create2.style.color="rgb(60, 60, 60)"}
    if(value<=monthlength[locator]){  create2.addEventListener("click", ()=>{currentday=create2.innerHTML
for (let index = 0; index < monthlength[locator]; index++) {
document.getElementsByClassName("dayno").item(index).style.border="2px solid rgb(60, 60, 60)"
}
create2.style.border="2px solid "+gencolor
for (let index = 0; index < trackertaskarray.length; index++) {
if(index!=trackertaskarray.length-1 && trackertaskarray[0]==""){console.log(index)
document.getElementsByClassName("checkbox").item(index).style.backgroundColor="transparent"
document.getElementsByClassName("apply").item(index).innerText="check"
}
else{
    console.log(index)
document.getElementsByClassName("checkbox").item(index).style.backgroundColor="transparent"
document.getElementsByClassName("apply").item(index).innerText="check"
}}
    let target = currentmonth+currentday
    console.log(target)
    let createdarray = []
    for (let index = 0; index < trackermasterarray.length; index++) {
    if(trackermasterarray[index].includes(target)){
    let color = trackermasterarray[index].indexOf("/-/")
    let color2 = trackermasterarray[index].lastIndexOf("/-/")
    color = trackermasterarray[index].slice(0, color)
    color2 = trackermasterarray[index].slice(color2+3, )
    console.log(color2)
for (let index = 0; index < trackertaskarray.length; index++) {
if(trackertaskarray[index]==color){document.getElementsByClassName("checkbox").item(index).style.backgroundColor="white"
    document.getElementsByClassName("apply").item(index).innerText="uncheck"
    test=color2
}
}
}
    
    }
for (let index = 0; index < trackermasterarray.length; index++) {
let target = monthtxt[parseInt(month)-1]+create2.innerHTML
console.log(target)
if(trackermasterarray[index].includes(target)){
let pos = trackermasterarray[index].lastIndexOf("/-/")
let pos2 = trackermasterarray[index].indexOf("/-/")
let value = trackermasterarray[index].slice(pos+3, )
let value2 = trackermasterarray[index].slice(0, pos2)
let pos3 = trackertaskarray.indexOf(value2)
let id = value2+trackertaskarraycolor[pos3]+"info"
console.log(id)
if(pos3!=-1){
if(value=="nocount"){document.getElementById(id).innerHTML=value+" available"}
else{document.getElementById(id).innerHTML=value+" on "+target}}
}
}
})}

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

document.getElementById("addbtn").addEventListener("click", ()=>{document.getElementById("header").innerHTML="create"
document.getElementById("create").style.display="flex"
document.getElementById("track").style.display="none"
document.getElementById("months").style.display="none"
document.getElementById("scroll").style.display="none"
})
document.getElementById("trackbtn").addEventListener("click", ()=>{document.getElementById("header").innerHTML="tracking"
document.getElementById("create").style.display="none"
document.getElementById("track").style.display="flex"
document.getElementById("months").style.display="none"
document.getElementById("scroll").style.display="none"
if(document.getElementById("timing").value=="weekly"){let wkstart=0
let wkend=0
let order = ""
let before = false
if(alphaday=="mon"){wkstart=parseInt(date)}
else if(alphaday=="tue" ){
if(parseInt(date)-1>0){wkstart=parseInt(date)-1}
else{wkstart=monthlength[parseInt(month)-1]+(parseInt(date)-1); before = true}
}
else if(alphaday=="wed"){
if(parseInt(date)-1>0){wkstart=parseInt(date)-2}
else{wkstart=monthlength[parseInt(month)-1]+(parseInt(date)-2); before = true}
}
else if(alphaday=="thu"){
if(parseInt(date)-1>0){wkstart=parseInt(date)-3}
else{wkstart=monthlength[parseInt(month)-1]+(parseInt(date)-3); before = true}
}
else if(alphaday=="fri"){
if(parseInt(date)-1>0){wkstart=parseInt(date)-4}
else{wkstart=monthlength[parseInt(month)-1]+(parseInt(date)-4); before = true}
}
else if(alphaday=="sat"){
if(parseInt(date)-5>0){wkstart=parseInt(date)-5}
else{wkstart=monthlength[parseInt(month)-1]+(parseInt(date)-5); before = true}
}
else if(alphaday=="sun"){
if(parseInt(date)-1>0){wkstart=parseInt(date)-6}
else{wkstart=monthlength[parseInt(month)-1]+(parseInt(date)-6); before = true}
}
if(month=="01"){
    if(alphaday=="mon"){wkstart=parseInt(date)}
else if(alphaday=="tue"){wkstart=parseInt(date)-1}
else if(alphaday=="wed"){wkstart=parseInt(date)-2}
else if(alphaday=="thu"){wkstart=parseInt(date)-3}
else if(alphaday=="fri"){wkstart=parseInt(date)-4}
else if(alphaday=="sat"){wkstart=parseInt(date)-5}
else if(alphaday=="sun"){wkstart=parseInt(date)-6}
if(wkstart<1){wkstart=1}
}
console.log(wkstart)
let adding = 1
let bararray = []
for (let index = 0; index < trackertaskarray.length; index++) {
if(trackertaskarray[index]!=""){bararray[bararray.length]=trackertaskarray[index]
bararray[bararray.length]=0}
}
console.log(bararray)
for (let index = 0; index < 7; index++) {
let target = ""
if(before==false){adding=1
target=monthtxt[parseInt(month)-adding]+(wkstart+index)
console.log(target)
if(wkstart+index>monthlength[parseInt(month)-1]){
    wkstart=index-(index*2); adding=0
}}
else{adding=2
   target=monthtxt[parseInt(month)-adding]+(wkstart+index)
console.log(target)
if(wkstart+index+1>monthlength[parseInt(month)-2]){
    wkstart=index-(index*2); adding=1
} 
}
for (let index1 = 0; index1 < trackermasterarray.length; index1++) {
if(trackermasterarray[index1].includes(target)){
let pos1 = trackermasterarray[index1].indexOf("/-/")
let value = trackermasterarray[index1].slice(0, pos1) 
let pos2 = bararray.indexOf(value)
if(pos2!=-1){
bararray[pos2+1]=Number(bararray[pos2+1])+1}
console.log(pos2)

}    
}
}
console.log(bararray)
let skip = true
let heightarray = []
for (let index = 0; index < bararray.length; index++) {
if(skip==false){skip=true
heightarray[heightarray.length]=Math.round((parseInt(bararray[index])/7)*100)
console.log((parseInt(bararray[index])/7)*100)}
else{skip=false}
}
console.log(heightarray)
for (let index = 0; index < trackertaskarray.length; index++) {
document.getElementsByClassName("bar").item(index).style.height=heightarray[index]+"%"
if(heightarray[index]<20){document.getElementsByClassName("innertxt").item(index).style.marginTop="-100px"}
}}
else{
let wkstart=0
console.log(wkstart)
let adding = 1
let bararray = []
for (let index = 0; index < trackertaskarray.length; index++) {
if(trackertaskarray[index]!=""){bararray[bararray.length]=trackertaskarray[index]
bararray[bararray.length]=0}
}
console.log(bararray)
for (let index = 0; index < monthlength[parseInt(month)-1]; index++) {
let target = monthtxt[parseInt(month)-1]+index
console.log(target)

for (let index1 = 0; index1 < trackermasterarray.length; index1++) {
if(trackermasterarray[index1].includes(target)){
let pos1 = trackermasterarray[index1].indexOf("/-/")
let value = trackermasterarray[index1].slice(0, pos1) 
let pos2 = bararray.indexOf(value)
if(pos2!=-1){
bararray[pos2+1]=Number(bararray[pos2+1])+1}
console.log(pos2)

}    
}
}
console.log(bararray)
let skip = true
let heightarray = []
for (let index = 0; index < bararray.length; index++) {
if(skip==false){skip=true
heightarray[heightarray.length]=Math.round((parseInt(bararray[index])/monthlength[parseInt(month)-1])*100)
console.log((parseInt(bararray[index])/monthlength[parseInt(month)-1])*100)}
else{skip=false}
}
console.log(heightarray)
for (let index = 0; index < trackertaskarray.length; index++) {
document.getElementsByClassName("bar").item(index).style.height=heightarray[index]+"%"
if(heightarray[index]<20){document.getElementsByClassName("innertxt").item(index).style.marginTop="-100px"}
}
}
})
document.getElementById("homebtn").addEventListener("click", ()=>{document.getElementById("header").innerHTML="home"
document.getElementById("create").style.display="none"
document.getElementById("track").style.display="none"
document.getElementById("months").style.display="none"
document.getElementById("scroll").style.display="flex"
})
document.getElementById("right").addEventListener("click", ()=>{
let newvalue = 0
if(pos<11){pos=pos+1}
    document.getElementById("mainmonth").innerHTML=monthtxt[pos]
    currentmonth=monthtxt[pos]
    currentday=null
    locator = monthtxt.indexOf(currentmonth)
    
    for (let index = 0; index < monthlength[locator]; index++) {
document.getElementsByClassName("dayno").item(index).style.color="white"
document.getElementsByClassName("dayno").item(index).style.border="2px solid rgb(60, 60, 60)"
}
console.log(currentmonth)
console.log(locator)
for (let index = 0; index < 35; index++) {newvalue=newvalue+1
if(newvalue>monthlength[locator]){document.getElementsByClassName("dayno").item(index).style.color="rgb(60, 60, 60)"}   
document.getElementsByClassName("dayno").item(index).style.backgroundColor="transparent"   
document.getElementsByClassName("dayno").item(index).style.backgroundImage=""  
}
if(document.getElementById("mainmonth").innerHTML==monthtxt[Number(month)-1]){document.getElementsByClassName("dayno").item(Number(date)-1).style.border="2px solid "+gencolor}
allocate()
let wkstart=0
let wkend=0
let order = ""
if(lastday=="mon"){wkstart=parseInt(1)}
else if(lastday=="tue"){wkstart=parseInt(1)-1}
else if(lastday=="wed"){wkstart=parseInt(1)-2}
else if(lastday=="thu"){wkstart=parseInt(1)-3}
else if(lastday=="fri"){wkstart=parseInt(1)-4}
else if(lastday=="sat"){wkstart=parseInt(1)-5}
else if(lastday=="sun"){wkstart=parseInt(1)-6}
if(lastday=="mon"){wkend=parseInt(1)+6}
else if(lastday=="tue"){wkend=parseInt(1)+5}
else if(lastday=="wed"){wkend=parseInt(1)+4}
else if(lastday=="thu"){wkend=parseInt(1)+3}
else if(lastday=="fri"){wkend=parseInt(1)+2}
else if(lastday=="sat"){wkend=parseInt(1)+1}
else if(lastday=="sun"){wkend=parseInt(1)}
wkstart=0
for (let index = 0; index < 7; index++) {
if(wkend>0){wkend=wkend-1
    document.getElementsByClassName("weekday").item(wkend).innerHTML=days[6-index]
   
} 
else{
  
    document.getElementsByClassName("weekday").item(wkstart+6).innerHTML=days[6-index] 
wkstart=wkstart+-1
}

}
for (let index = 0; index < 7; index++) {
order=order+document.getElementsByClassName("weekday").item(index).innerHTML+">"
}
console.log(arrayweek)
arrayweek[pos]=order
if(monthlength[locator]==31){lastday=document.getElementsByClassName("weekday").item(3).innerHTML}
else if(monthlength[locator]==28){lastday=document.getElementsByClassName("weekday").item(0).innerHTML}
else if(monthlength[locator]==30){lastday=document.getElementsByClassName("weekday").item(2).innerHTML}
firatday=document.getElementsByClassName("weekday").item(0).innerHTML
})

document.getElementById("left").addEventListener("click", ()=>{
let newvalue = 0
if(pos>0){pos=pos-1}
    document.getElementById("mainmonth").innerHTML=monthtxt[pos]
    currentmonth=monthtxt[pos]
    currentday=null
    locator = monthtxt.indexOf(currentmonth)
    
    for (let index = 0; index < monthlength[locator]; index++) {
document.getElementsByClassName("dayno").item(index).style.color="white"
document.getElementsByClassName("dayno").item(index).style.border="2px solid rgb(60, 60, 60)"
}

for (let index = 0; index < 35; index++) {newvalue=newvalue+1
if(newvalue>monthlength[locator]){document.getElementsByClassName("dayno").item(index).style.color="rgb(60, 60, 60)"}
document.getElementsByClassName("dayno").item(index).style.backgroundColor="transparent"   
document.getElementsByClassName("dayno").item(index).style.backgroundImage="" 
}
if(document.getElementById("mainmonth").innerHTML==monthtxt[Number(month)-1]){document.getElementsByClassName("dayno").item(Number(date)-1).style.border="2px solid "+gencolor}
allocate()
let smallerarrya = arrayweek[pos].split(">")
console.log(smallerarrya)
for (let index = 0; index < 7; index++) {
    document.getElementsByClassName("weekday").item(index).innerHTML=smallerarrya[index]
}
if(monthlength[locator]==31){lastday=document.getElementsByClassName("weekday").item(3).innerHTML}
else if(monthlength[locator]==28){lastday=document.getElementsByClassName("weekday").item(0).innerHTML}
else if(monthlength[locator]==30){lastday=document.getElementsByClassName("weekday").item(2).innerHTML}})
    firatday=document.getElementsByClassName("weekday").item(0).innerHTML
//allocation loop

function allocate(){
for (let index = 0; index < 35; index++) {  
document.getElementsByClassName("dayno").item(index).style.backgroundColor="transparent"   
document.getElementsByClassName("dayno").item(index).style.backgroundImage=""  
}    
for (let index0 = 0; index0 < 35; index0++) {
let target = ""
if(index0<10){
  target = currentmonth+"0"+index0
}
else{
    target = currentmonth+index0
}
let createdarray = []
console.log(target)
for (let index = 0; index < trackermasterarray.length; index++) {
if(trackermasterarray[index].includes(target) && trackermasterarray[index].includes(selected)){
let color = trackermasterarray[index].indexOf("rgb")
let color2 = trackermasterarray[index].indexOf(")")
color = trackermasterarray[index].slice(color, color2+1).replaceAll("#", "")
gencolor=color
document.getElementsByClassName("dayno").item(index0-1).style.backgroundColor=color}
}

}}

document.getElementById("save").addEventListener("click", ()=>{
if(document.getElementById("name").value==""){window.alert("title required *")}
else{document.getElementById("create").style.display="none"
    document.getElementById("scroll").style.display="flex"
let create=document.createElement("div")
let create2=document.createElement("p")
let create3=document.createElement("p")
let create4=document.createElement("div")
let create5=document.createElement("p")
let create6=document.createElement("button")
let create7=document.createElement("select")
let create8=document.createElement("input")
let create9=document.createElement("div")
let create10=document.createElement("option")
let create11=document.createElement("option")
create8.className="length"
create6.className="apply"
create7.className="select"
create10.value="oncount"
create11.innerHTML="turn counts off"
create10.innerHTML="use counts"
create11.value="offcount" 
create7.append(create10)
create7.append(create11)
create9.className="more"
create6.innerText="check"
create9.append(create8)
create9.append(create7)
create9.append(create6)
create.className="task"
create4.className="checkbox"
create5.className="color"
create2.innerHTML=document.getElementById("name").value
create3.innerHTML="double click for more info"
create5.style.background=document.getElementById("color").value
create.append(create2)
create.append(create3)
create.append(create4)
create.append(create5)
create.append(create9)
document.getElementById("scroll").append(create)
document.getElementById("scroll").style.flexDirection="column-reverse"
trackertaskarray[trackertaskarray.length]=document.getElementById("name").value
trackertaskarraycolor[trackertaskarraycolor.length]=document.getElementById("color").value
localStorage.setItem("trackertaskarray", trackertaskarray)
localStorage.setItem("trackertaskarraycolor", trackertaskarraycolor)

create.addEventListener("dblclick", ()=>{
    document.getElementById("months").style.display="flex"
    document.getElementById("scroll").style.display="none" 
    document.getElementById("header").innerHTML=create2.innerHTML
})
create4.addEventListener("click", ()=>{
  if(create.style.height=="120px"){  create.style.height="160px"}
  else{  create.style.height="120px"}
})
create6.addEventListener("click", ()=>{if(create6.innerText=="check"){ test = ""
if(create7.value=="offcount" || test=="nocount"){
     create.style.height="120px"
     if(currentday==null){window.alert("no date selected")}
     else{
     trackermasterarray[trackermasterarray.length]=create2.innerHTML+"/-/"+create5.style.backgroundColor.replaceAll(",", "#")+"/-/"+currentmonth+currentday+"/-/"+"nocount"
     console.log(create2.innerHTML+"/-/"+create5.style.backgroundColor.replaceAll(",", "#")+"/-/"+currentmonth+currentday+"/-/"+"nocount")
    create4.style.backgroundColor="white"
create6.innerText="uncheck"}
}
else if(create7.value="oncount"){
    if(create8.value==""){window.alert("count is empty")}
    else{ create.style.height="120px"
        if(currentday==null){window.alert("no date selected")}
        else{
        trackermasterarray[trackermasterarray.length]=create2.innerHTML+"/-/"+create5.style.backgroundColor.replaceAll(",", "#")+"/-/"+currentmonth+currentday+"/-/"+create8.value
        console.log(create2.innerHTML+"/-/"+create5.style.backgroundColor.replaceAll(",", "#")+"/-/"+currentmonth+currentday+"/-/"+create8.value)}
        create4.style.backgroundColor="white"
        create6.innerText="uncheck"}
}console.log(trackermasterarray); test=create7.value}
else if(create6.innerText=="uncheck"){create6.innerText="check"
   create4.style.backgroundColor="transparent"
    if(test="offcount" || test=="nocount"){
    let num = trackermasterarray.indexOf(create2.innerHTML+"/-/"+create5.style.backgroundColor.replaceAll(",", "#")+"/-/"+currentmonth+currentday+"/-/"+"nocount")
    trackermasterarray.splice(num, 1)
    console.log(trackermasterarray)}
    else if(test="oncount"){
    let num = trackermasterarray.indexOf(create2.innerHTML+"/-/"+create5.style.backgroundColor.replaceAll(",", "#")+"/-/"+currentmonth+currentday+"/-/"+create8.value)
    trackermasterarray.splice(num, 1)
    console.log(trackermasterarray)
   }
   else{
    let num = trackermasterarray.indexOf(create2.innerHTML+"/-/"+create5.style.backgroundColor.replaceAll(",", "#")+"/-/"+currentmonth+currentday+"/-/"+test)
    trackermasterarray.splice(num, 1)
    console.log(trackermasterarray)
   }
 
}
localStorage.setItem("trackermasterarray", trackermasterarray)})
}
})

for (let index = 0; index < 12; index++) {
if(document.getElementById("mainmonth").innerHTML!=monthtxt[Number(month)-1]){document.getElementById("right").click()}
}
if(document.getElementById("mainmonth").innerHTML==monthtxt[Number(month)-1]){document.getElementsByClassName("dayno").item(Number(date)-1).style.border="2px solid rgb(0, 221, 255)"}

function newelementDrag(e) {
    e = window.event;
   e.preventDefault();
   // get the mouse cursor position at startup:
  let pos1 = e.clientX;
  let pos2 = e.clientY;

   document.getElementById("auxclick").style.top = pos2 + "px";
   document.getElementById("auxclick").style.left = pos1 + "px";
 }


document.getElementsByTagName("body").item(0).onmouseover = newelementDrag

document.getElementById("mainbx").addEventListener("click", ()=>{document.getElementsByTagName("body").item(0).onmouseover = newelementDrag
    document.getElementById("auxclick").style.display="none"
})
document.getElementById("editxt").addEventListener("click", ()=>{
    document.getElementById("color2").click()
    document.getElementById("color2").focus()
    document.getElementById("auxclick").style.display="none"
})
document.getElementById("color2").addEventListener("focusout", ()=>{
    let index1=delvalue.indexOf(",")
    let index2=delvalue.lastIndexOf(",")
    let r = delvalue.slice(4, index1)
    let g = delvalue.slice((index1+1), index2)
    let b = delvalue.slice((index2+1), (delvalue.length-1))
    r = Number(r)
    g=Number(g)
    b=Number(b)
    console.log(r+" -/- "+g+" -/-  "+b)
        let rgbToHex = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1); 
        console.log(rgbToHex); 
let posi = trackertaskarraycolor.indexOf(rgbToHex)
trackertaskarraycolor.splice(posi,1, document.getElementById("color2").value)
console.log(posi)
localStorage.setItem("trackertaskarraycolor", trackertaskarraycolor)
})
document.getElementById("deltxt").addEventListener("click", ()=>{
        console.log(delname+delvalue); 
    document.getElementById("auxclick").style.display="none"
    document.getElementById(delname+delvalue).style.display="none"
let posi = trackertaskarray.indexOf(delname)
trackertaskarray.splice(posi,1)
trackertaskarraycolor.splice(posi,1)
console.log(posi)
localStorage.setItem("trackertaskarraycolor", trackertaskarraycolor)
localStorage.setItem("trackertaskarray", trackertaskarray)
})
for (let index = 0; index < trackertaskarray.length; index++) {
if(trackertaskarray[index]!=""){
let create = document.createElement("div")
let create2 = document.createElement("p")
create.append(create2)
create2.className="innertxt"

create2.innerHTML=trackertaskarray[index]
create.className="bar"
create.style.backgroundColor=trackertaskarraycolor[index]
if(create.style.backgroundColor=="rgb(0, 0, 0)"){create2.style.color="white"}
document.getElementById("bartrack").append(create)
if(document.getElementById("timing").value=="weekly"){
let wkstart = 0
let wkend = 0
if(alphaday=="mon"){wkstart=parseInt(date)}
else if(alphaday=="tue"){wkstart=parseInt(date)-1}
else if(alphaday=="wed"){wkstart=parseInt(date)-2}
else if(alphaday=="thu"){wkstart=parseInt(date)-3}
else if(alphaday=="fri"){wkstart=parseInt(date)-4}
else if(alphaday=="sat"){wkstart=parseInt(date)-5}
else if(alphaday=="sun"){wkstart=parseInt(date)-6}
if(alphaday=="mon"){wkend=parseInt(date)+6}
else if(alphaday=="tue"){wkend=parseInt(date)+5}
else if(alphaday=="wed"){wkend=parseInt(date)+4}
else if(alphaday=="thu"){wkend=parseInt(date)+3}
else if(alphaday=="fri"){wkend=parseInt(date)+2}
else if(alphaday=="sat"){wkend=parseInt(date)+1}
else if(alphaday=="sun"){wkend=parseInt(date)}

console.log(wkstart)
console.log(wkend)
}
}}

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
    .then(function(registration) {
        console.log('Service Worker registered with scope:', registration.scope);
    }).catch(function(error) {
        console.log('Service Worker registration failed:', error);
    });
}

