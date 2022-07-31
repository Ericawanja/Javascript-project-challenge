const changeFunction= ()=>{
   // fetch("https://v6.exchangerate-api.com/v6/")
   fetch("https://cors.eu.org/https://documenter.getpostman.com/view/1134062/T1LJjU52#3698c13d-aabd-4b6f-9ee5-c4c609322316")
    .then(response=> console.log(response))
    .then(data=>console.log(data))
}
changeFunction()