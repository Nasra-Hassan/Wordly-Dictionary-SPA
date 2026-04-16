const form = document.getElementById("search-form");
const input = document.getElementById("word-input");

const wordTitle = document.getElementById("word-title");
const pronunciation = document.getElementById("pronunciation");
const definition = document.getElementById("definition");
const synonymsList = document.getElementById("synonyms");
const errorDiv = document.getElementById("error-message");
const audioBtn = document.getElementById("audio-btn");

let audio = null;


form.addEventListener("submit", function (e) {
  e.preventDefault();

  const word = input.value.trim();

  if (!word) {
    showError("Please enter a word.");
    return;
  }

  fetchWord(word);
});


function fetchWord(word) {
  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then(response => {
      if (!response.ok) {
        throw new Error("Word not found.");
      }
      return response.json();
    })
    .then(data => {
      clearError();
      displayWord(data[0]);
    })
    .catch(error => {
      showError(error.message);
    });
}


function displayWord(data) {
  
  synonymsList.innerHTML = "";

  
  wordTitle.textContent = data.word;

  
  pronunciation.textContent =
    data.phonetic || "No pronunciation available";

  
  definition.textContent =
    data.meanings[0].definitions[0].definition;

  
  const synonyms = data.meanings[0].synonyms;

  if (synonyms && synonyms.length > 0) {
    synonyms.forEach(word => {
      const li = document.createElement("li");
      li.textContent = word;
      synonymsList.appendChild(li);
    });
  } else {
    const li = document.createElement("li");
    li.textContent = "No synonyms available";
    synonymsList.appendChild(li);
  }

  const audioSrc = data.phonetics.find(p => p.audio)?.audio;

  if (audioSrc) {
    audio = new Audio(audioSrc);
    audioBtn.style.display = "inline-block";
  } else {
    audioBtn.style.display = "none";
  }
}


audioBtn.addEventListener("click", () => {
  if (audio) {
    audio.play();
  }
});


function showError(message) {
  errorDiv.textContent = message;
}

function clearError() {
  errorDiv.textContent = "";
}