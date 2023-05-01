let input = document.querySelector("#input");
input.focus();

const definition = document.querySelector(".definition");
const api_url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

async function getapi() {
  let input = document.querySelector("#input");
  let inputValue = input.value;
  const response = await fetch(`${api_url}${inputValue}`);
  const word = await response.json();

  definition.innerHTML = word[0]
    ? `
  <div>

  <div>
  ${
    word[0].phonetics[0].audio
      ? `
      <div class="volume">
        <h2>${inputValue}</h1>
        <i class="fa fa-volume-up fa-2x" id="volume" onclick="play()"></i>
      </div>
      <audio id="audio" hidden>
        <source src="${word[0].phonetics[0].audio}" type="audio/mpeg">
        Your browser does not support the audio element.
      </audio>`
      : `<i>No pronunciation</i>`
  }
  </div>

    <i>${word[0].meanings[0].partOfSpeech}</i>. 
    ${word[0].meanings[0].definitions[0].definition}
    <i>Example: ${
      word[0].meanings[0].definitions[0].example
        ? word[0].meanings[0].definitions[0].example
        : `No example`
    }</i>

    <br><br>
    
    <i>${word[0].meanings[1].partOfSpeech}</i>. 
    ${word[0].meanings[1].definitions[0].definition}
    <i>Example: ${
      word[0].meanings[1].definitions[0].example
        ? word[0].meanings[1].definitions[0].example
        : `No example`
    }
    </i>

    <br>

    ${
      word[0].meanings[2]
        ? `<i>${word[0].meanings[2].partOfSpeech}</i>.
        ${word[0].meanings[2].definitions[0].definition}
      <i>Example: ${
        word[0].meanings[2].definitions[0].example
          ? word[0].meanings[2].definitions[0].example
          : `No example`
      }</i>
      `
        : ""
    }

  </div>
  
`
    : "Word not found";
}

input.addEventListener("input", () => {
  getapi();
});

function play() {
  document.getElementById("audio").play();
}
