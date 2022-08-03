const btn = document.getElementsByClassName("btn")[0];
const quote = document.getElementsByClassName("quote")[0];
const author = document.getElementsByClassName("author")[0];
const copy = document.getElementsByClassName("copy")[0];
const msg = document.getElementsByClassName("speech")[0];
const tweetBtn = document.getElementsByClassName("twitter")[0];

btn.addEventListener("click", getQuote);
function getQuote() {
  btn.classList.add("loading");
  btn.innerText = "Loading Quote...";
  fetch("http://api.quotable.io/random")
    .then((response) => response.json())
    .then((data) => {
      quote.innerHTML = `${data.content}`;
      author.innerHTML = `${data.author}`;
      btn.classList.remove("loading");
      btn.innerHTML = `<button>New Quote</button>`;
    });
}
//copy
copy.addEventListener("click", copyText);

function copyText() {
  return navigator.clipboard.writeText(quote.innerText);
}

//speech
msg.addEventListener("click", convertToSpeech);

function convertToSpeech() {
  const words = document.getElementsByClassName("quote")[0].innerHTML;
  console.log(words);
  const speech = new SpeechSynthesisUtterance();
  speech.lang = "en-US";
  speech.text = words;
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);
}
//tweet
tweetBtn.addEventListener("click", () => {
  let tweetUrl = `https://twitter.com/intent/tweet?url=${quote.innerText}`;
  window.open(tweetUrl, "_blank");
});
