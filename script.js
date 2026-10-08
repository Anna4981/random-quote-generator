// 1. Quotes stored as objects in an array
const quotes = [
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "It always seems impossible until it's done.", author: "Nelson Mandela" },
  { text: "Education is the most powerful weapon which you can use to change the world.", author: "Nelson Mandela" },
  { text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
  { text: "Talk is cheap. Show me the code.", author: "Linus Torvalds" },
  { text: "Programs must be written for people to read, and only incidentally for machines to execute.", author: "Harold Abelson" },
  { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
  { text: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },
  { text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", author: "Martin Fowler" },
  { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
  { text: "A journey of a thousand miles begins with a single step.", author: "Lao Tzu" },
  { text: "Whether you think you can, or you think you can't, you're right.", author: "Henry Ford" }
];

// 2. DOM elements
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");
const shareBtn = document.getElementById("share");
const statusEl = document.getElementById("status");

let lastIndex = -1; // remembers the previous quote so we never repeat it

// 3. Pick a random index that is different from the last one
function getRandomIndex() {
  let index;
  do {
    index = Math.floor(Math.random() * quotes.length);
  } while (index === lastIndex && quotes.length > 1);
  return index;
}

// 4. Show a new quote
function showQuote() {
  const index = getRandomIndex();
  lastIndex = index;
  const { text, author } = quotes[index];

  quoteEl.classList.add("fade");
  setTimeout(() => {
    quoteEl.textContent = `\u201C${text}\u201D`;
    authorEl.textContent = `\u2014 ${author}`;
    quoteEl.classList.remove("fade");
  }, 200);

  statusEl.textContent = "";
}

// 5. Share the current quote (native share sheet, else copy to clipboard)
async function shareQuote() {
  if (lastIndex === -1) {
    statusEl.textContent = "Generate a quote first!";
    return;
  }

  const { text, author } = quotes[lastIndex];
  const shareText = `\u201C${text}\u201D \u2014 ${author}`;

  try {
    if (navigator.share) {
      await navigator.share({ title: "Random Quote", text: shareText });
    } else {
      await navigator.clipboard.writeText(shareText);
      statusEl.textContent = "Quote copied to clipboard!";
    }
  } catch (err) {
    statusEl.textContent = "Could not share the quote.";
  }
}

// 6. Events
newQuoteBtn.addEventListener("click", showQuote);
shareBtn.addEventListener("click", shareQuote);

// Show one quote when the page first loads
showQuote();