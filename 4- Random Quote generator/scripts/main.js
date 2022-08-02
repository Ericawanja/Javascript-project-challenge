const btn = document.getElementsByClassName('btn')[0]
const quote = document.getElementsByClassName('quote')[0]
const author = document.getElementsByClassName('author')[0]
const copy = document.getElementsByClassName('copy')[0]

btn.addEventListener('click', getQuote)
function getQuote(){
    fetch("http://api.quotable.io/random")
    .then(response => response.json())
    .then(data => {
        quote.innerHTML =`${data.content}`
        author.innerHTML =`${data.author}`
    })

}
copy.addEventListener('click', copyText)

function copyText(){
    
}