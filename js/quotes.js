
const loadQuotes = () => {
    // console.log('loading quotes')
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuotes(data))
}
// loadQuotes();
const displayQuotes = quote => {
    // console.log(quote)
    const blockQuote = document.getElementById('quote');
    blockQuote.innerText = quote.quote;
}