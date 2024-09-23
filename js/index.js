/* 
  What do we need to do? - when we hover over the character in the list we have to add the blue selection border to the small image of the character and show the image, name and large text of the character that is selected

    OBJECTIVE 1 - when you hover over a character in the list, we must select it
step 1 - get the characters in JS to be able to check when the user hovers over one of them

step 2 - add the selected class to the character that the user hovers over

step 3 - check if there is already a selected character, if so, we must remove the selection from it 

    OBJECTIVE 2 - when you hover over the character in the list, change the image, name and description of the large character
step 1 - get the element of the large character to add the information to it
step 2 - change the image of the large character
step 3 - change the name of the large character
step 4 - change the description of the large character
*/

// OBJECTIVE 1 - when you hover the mouse over the character in the list, we must select it
// step 1 - get the characters in the JS to be able to check when the user hovers the mouse over one of them

const characters = document.querySelectorAll(".character");

// step 2 - add the selected class to the character the user hovers the mouse over
characters.forEach((character) => {
  character.addEventListener("mouseenter", () => {
    if (window.innerWidth < 450) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // step 3 - check if there is already a character selected, if so, we should remove the selection from it
    removeselectedfromCharacter();

    character.classList.add("character");

    // OBJECTIVE 2 - when you hover over the character in the list, change the image, name and description of the large character

    //step 1 - get the large character element to add the information to it
    ChangeSelectedCharacterImage(character);

    // step 3 - alterar o nome do personagem grande
    changeSelectedCharacterName(character);

    // step 4 - change the description of the large character
    changeCharacterDescription(character);
  });
});

function changeCharacterDescription(character) {
  const descriptionCharacter = document.getElementById("character-description");
  descriptionCharacter.innerText = character.getAttribute("data-description");
}

function changeSelectedCharacterName(character) {
  const characterName = document.getElementById("character-name");
  characterName.innerText = character.getAttribute("data-name");
}

function ChangeSelectedCharacterImage(character) {
  const LargeCharacterimage = document.querySelector(".large-character");
  // step 2 - change the large character image
  const idCharacter = character.attributes.id.value;
  LargeCharacterimage.src = `images/card-${idCharacter}.png`;
}

function removeselectedfromCharacter() {
  const characterSelected = document.querySelector(".character");
  characterSelected.classList.remove("character");
}
