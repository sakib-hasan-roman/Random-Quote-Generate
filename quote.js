// All quotes in array as object
const quotes = [{
    quote: `The greatest glory in living lies not in never falling, but in rising every time we fall.`,
    author: ` - Nelson Mandela`
}, {
    quote: `The way to get started is to quit talking and begin doing.`,
    author: `– Walt Disney`
}, {
    quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
    author: `-Steve Jobs`
}, {
    quote: "If life were predictable it would cease to be life, and be without flavor.",
    author: `– Eleanor Roosevelt`
}, {
    quote: `If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.`,
    author: `– Oprah Winfrey`
}, {
    quote: `If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.`,
    author: `– James Cameron `
}, {
    quote: `Life is what happens when you're busy making other plans.`,
    author: `– John Lennon`
}, {
    quote: `Spread love everywhere you go. Let no one ever come to you without leaving happier.`,
    author: `– Mother Teresa`
}, {
    quote: `When you reach the end of your rope, tie a knot in it and hang on.`,
    author: `-Franklin D. Roosevelt`
}, {
    quote: `The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.`,
    author: `- Helen Keller`
}, ]

// Select all needed element

let btn = document.querySelector("#quote-btn");

let quote = document.querySelector(".quote");

let author = document.querySelector(".author");

// addEventListener

btn.addEventListener("click", function() {
    let random = Math.floor(Math.random() * quotes.length);
    
    //Show quote
    quote.innerHTML = quotes[random].quote;

    //Show name
    author.innerHTML = quotes[random].author;
    
    //Thanks For Wath ###
})
