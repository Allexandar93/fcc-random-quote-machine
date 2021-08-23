import React, {useState} from 'react';
import './App.scss';



function App() {
  const [quotes, setQuotes] = useState([])
  const [randomQuote, setRandomQuote] = useState([])
  

  React.useEffect(() => {
    async function fetchData() {
      const response =await fetch("https://type.fit/api/quotes")
      const data = await response.json();

      setQuotes(data)
      let randIndex = Math.floor(Math.random() * data.length)
      setRandomQuote(data[randIndex])
    }
    fetchData();
    
    
  }, [])

  const getNewQuote = () => {
    let randIndex = Math.floor(Math.random() * quotes.length)
      setRandomQuote(quotes[randIndex])
      

  }
  


  return (
    <div className="App">
      <header className="App-header"  > 

        <div id="quote-box">
          
          <p id="text" >{randomQuote.text}</p>


          <p id="author" >- {randomQuote.author}</p>
          
          <div className="buttons">
          <a id="tweet-quote" href={'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
      encodeURIComponent('"' + randomQuote.text + '" ' + randomQuote.author)} target="_blank"><i className="fa fa-twitter"></i>Tweet this!</a>
      


          <button id="new-quote"  onClick={getNewQuote}>Get new quote</button>

          </div>
          

        </div>
        
      </header>
    </div>
  );
}

export default App;
