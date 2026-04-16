# Wordly-Dictionary-SPA


## Project Overview

**Wordly Dictionary SPA** is a Single Page Application (SPA) that allows users to search for words and view detailed information including pronunciation, definitions, synonyms, and audio playback — all without reloading the page.

This project demonstrates modern front-end development practices such as API integration, DOM manipulation, and event-driven programming.

---

## Features

* **Search Functionality**
  Users can enter a word and fetch its meaning instantly.

* **Definitions Display**
  Shows clear and structured definitions of the searched word.

* **Pronunciation & Audio Playback**
  Displays phonetics and allows users to play pronunciation audio.

* **Synonyms Listing**
  Provides a list of related words when available.

* **Error Handling**
  Displays user-friendly error messages for:

  * Empty input
  * Invalid words
  * API failures

* ⚡ **Single Page Application (SPA)**
  Updates content dynamically without refreshing the page.

---

## Technologies Used

* **HTML5** – Structure of the application
* **CSS3** – Styling and layout
* **JavaScript (ES6)** – Functionality and interactivity
* **Fetch API** – To retrieve data from an external API

---

## API Used

* [Free Dictionary API](https://dictionaryapi.dev/)
  Used to fetch word definitions, phonetics, synonyms, and audio pronunciation.

---

## Project Structure

```
project-folder/
│
├── index.html      # Main HTML file
├── style.css       # Styling
├── index.js        # JavaScript logic
└── README.md       # Project documentation
```

---

## How It Works

1. User enters a word in the search bar.
2. The form submission triggers a JavaScript event.
3. A `fetch` request is sent to the dictionary API.
4. The API returns JSON data.
5. JavaScript parses the data and updates the DOM dynamically.
6. Results (definition, pronunciation, synonyms) are displayed on the page.

---

## Testing & Validation

The application has been tested for:

*  Valid word searches
*  Invalid or non-existent words
*  Empty input handling
*  Missing pronunciation or synonyms

Fallback messages are displayed when data is unavailable.

---

## Future Improvements

*  Add "Save Favorite Words" feature
*  Dark/Light mode toggle
*  Loading spinner for better UX
*  Improved mobile responsiveness

---

##  Setup Instructions

1. Clone the repository:

   ```bash
   git clone <your-repo-link>
   ```

2. Open the project folder:

   ```bash
   cd project-folder
   ```

3. Open `index.html` in your browser.

---

##  Usage

1. Type a word into the search bar.
2. Click the **Search** button.
3. View:

   * Definition
   * Pronunciation
   * Synonyms
4. Click the 🔊 button to hear pronunciation (if available).

---

## License

This project is for educational purposes.

---

## Acknowledgements

* Free Dictionary API for providing open access to word data
* Inspiration from modern dictionary web applications

---
