const audince= document.getElementsByClassName("audience")[0]
const row1 = document.getElementsByClassName("row1")[0]
const row2 = document.getElementsByClassName("row2")[0]
const row3 = document.getElementsByClassName("row3")[0]

const row1Seats= [1,2,3,4,5,6,7,8,9,10]
const row2Seats = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
const row3Seats = [1,2,3,4,5,6,7,8,9,10]
row1.innerHTML = row1Seats.map((seat)=>{
    return`
    <div key='index' class='seat'></div>
    `
}).join('')

row2.innerHTML = row2Seats.map((seat)=>{
    return`
    <div class='seat'></div>
    `
}).join('')

row3.innerHTML = row3Seats.map((seat)=>{
    return`
    <div id='seat' class='seat'></div>
    `
}).join('')


/*************************interactivity */
const seats= document.getElementsByClassName('seat')
console.log(seats)
for(let i=0; i<seats.length;i++){
seats[i].addEventListener("click", seatsFunction )

}

function seatsFunction(e){
e.classList.contains

}