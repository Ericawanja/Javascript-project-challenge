const container = document.querySelector('.container')
const row1 = document.getElementsByClassName("row1")[0]
const row2 = document.getElementsByClassName("row2")[0]
const row3 = document.getElementsByClassName("row3")[0]

const selectBtn = document.getElementById('movies')

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

console.log(container)
container.addEventListener('click', (e)=>{
    if(e.target.classList.contains('seat')&& !e.target.classList.contains('occupied')){
       // e.target.classList.toggle('selected')
        updateSelectedCount()
    }
})
function updateSelectedCount(){
    const selectedSeats = document.querySelectorAll('.seat.selected')
    localStorage.setItem("seatCount", selectedSeats.length)   
    let costStored= localStorage.getItem('cost') !== null ?localStorage.getItem('cost') : 0
    console.log(selectedSeats.length)
    
     document.getElementById('seatCount').innerHTML= `<h3>seats selected: ${selectedSeats.length}</h3>`
     document.getElementById('totalCost').innerHTML=`<h2>Total cost: ${selectedSeats.length * costStored}</h2>`  
}
//onChange of the movie

selectBtn.addEventListener('change', (e)=>{
    let movie=e.target.value
    document.getElementById('movieSelected').innerHTML = `<h3>Movie selected is: ${movie.toUpperCase()}</h3>`
    
    let cost=0;
    
    if( movie == 'avengers'){
        cost= 10
    }
    if( movie == 'uglyDolls'){
        cost=15
    }
    if(movie == 'lionKing'){
        cost = 20
    }
    console.log(cost)
    localStorage.setItem('cost', cost) 
    updateSelectedCount()

})
updateSelectedCount()