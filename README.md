# random-quote-generatorRandom Quote Generator

A simple web application that displays a random quote and its author every time the user clicks a button.

Web Development Track · Level 1 · Task 8

Objective

Practice arrays, random numbers, event handling, and DOM manipulation.

Features
12 quotes stored as objects in a JavaScript array
"New Quote" button that shows a random quote and its author
No repeats: the same quote never appears twice in a row
"Share" button that opens the device share sheet, or copies the quote to the clipboard if sharing is not supported
Smooth fade transition between quotes
Responsive layout that works on desktop and mobile
Tools Used
HTML5
CSS3
JavaScript (vanilla)
Project Structure
random-quote-generator/
├── index.html    # Page structure
├── style.css     # Styling and responsive layout
├── script.js     # Quotes array and application logic
└── README.md     # Project documentation
How to Run
Download or clone the project folder.
Make sure index.html, style.css and script.js are in the same folder.
Open index.html in any modern web browser.

No installation or build step is required.

How It Works
Storing quotes: each quote is an object with text and author properties, kept in the quotes array.
Picking a random quote: Math.floor(Math.random() * quotes.length) returns a random valid index.
Avoiding duplicates: the index of the last quote is saved in lastIndex. If the new random index matches it, another one is picked.
Updating the page: the quote and author are written into the page with textContent (DOM manipulation).
Handling clicks: addEventListener("click", ...) runs the right function when a button is pressed.
Interview Questions

How does Math.random() work? It returns a random decimal from 0 up to (but not including) 1. Multiplying it by the array length and rounding down with Math.floor() gives a random index.

How would you store multiple quotes? As objects inside an array, for example { text: "...", author: "..." }, so each quote and its author stay together.

How can you prevent immediate duplicate quotes? Save the index of the last quote shown and keep picking a new random index until it is different.

Possible Improvements
Add quote categories (motivation, coding, life)
Add a "Copy" or "Tweet" button
Fetch quotes from an online API
Add a dark mode toggle
Author

Anna Makgabo Thantsha
