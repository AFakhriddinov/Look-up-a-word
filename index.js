// let input = document.querySelector("#input");

const definition = document.querySelector(".definition");
const submit = document.querySelector(".submit");
const api_url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

async function getapi() {
  let input = document.querySelector("#input");
  let inputValue = input.value;
  const response = await fetch(`${api_url}${inputValue}`);
  const word = await response.json();
  definition.innerHTML = `
    <div>
      <i>${word[0].meanings[0].partOfSpeech}</i>. 
      ${word[0].meanings[0].definitions[0].definition}
      <i>Example: ${
        word[0].meanings[0].definitions[0].example
          ? word[0].meanings[0].definitions[0].example
          : `No example`
      }</i>

      <br>
      
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
    <div>Pronunciation:
    ${
      word[0].phonetics[0].audio
        ? `<audio controls>
    <source src="${word[0].phonetics[0].audio}" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>`
        : `No pronunciation sorry`
    }
    </div>
  `;
}

submit.addEventListener("click", () => {
  getapi();
});
