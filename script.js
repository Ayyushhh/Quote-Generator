async function fetchData(){
    try{
        const response = await fetch('https://api.quotable.io/random');
        const file = await response.json();

        return{
            quote: file.content,
            author: file.author
        };
    }
    catch(error){
        quoteElement.textContent = "Error";
        authorElement.textContent = "Try Again";
        return null;
    }
}

async function updateQuote(){
    const quoteElement = document.getElementById('quote');
    const authorElement  = document.getElementById('author');

    const {quote,author} = await fetchData();

    if(author && quote){
        quoteElement.textContent = quote;
        authorElement.textContent = author;
    }
    else{
        quoteElement.textContent = "Failed";
        authorElement.textContent = "Try Again";
    }

}

document.getElementById('btn').addEventListener('click',updateQuote);
updateQuote();