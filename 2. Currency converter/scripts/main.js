const changeFunction= ()=>{
   // fetch("https://v6.exchangerate-api.com/v6/")
   fetch("https://cors.eu.org/https://documenter.getpostman.com/view/1134062/T1LJjU52#3698c13d-aabd-4b6f-9ee5-c4c609322316")
    .then(response=> console.log(response))
    .then(data=>console.log(data))
}
changeFunction()
/*const countryDetails= async function(){
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  //.then(data => console.log(data[0].currencies))
  .then(data => data.map(country=>{
    
    
    for (let x in country.currencies) {
      console.log(x)
      countryDetails.push(x)
    }

  }))
}*/

const  countryDetails= async function(){
    const response = await fetch('https://restcountries.com/v3.1/all')
    const data = response.json()
    console.log(data)
    data.map(country =>{
      for (let x in country.currencies) {
        console.log(x)
        countryDetails.push(x)
      }
  
    })
    
  }
  
    console.log(countryDetails())