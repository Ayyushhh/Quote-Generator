// Function to fetch a random quote from the Quotable API
async function fetchRandomQuote() {
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
  
      return {
        quote: data.content,
        author: data.author,
      };
    } catch (error) {
      console.error('Error fetching quote:', error);
      return null;
    }
  }
  
  // Function to update the quote and author in the HTML
  async function updateQuote() {
    const quoteElement = document.getElementById('quote');
    const authorElement = document.getElementById('author');
  
    const { quote, author } = await fetchRandomQuote();
  
    if (quote && author) {
      quoteElement.textContent = quote;
      authorElement.textContent = author;
    } else {
      quoteElement.textContent = 'Failed to fetch a quote.';
      authorElement.textContent = '';
    }
  }
  
  // Event listener for the "Get Quote" button
  document.getElementById('btn').addEventListener('click', updateQuote);
  
  // Initial quote on page load
  updateQuote();
  