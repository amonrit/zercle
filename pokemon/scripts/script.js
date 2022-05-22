var openmodal = document.querySelectorAll(".modal-open");
let isModalopened = false;
// for (var i = 0; i < openmodal.length; i++) {
//   openmodal[i].addEventListener("click", function (event) {
//     event.preventDefault();
//     toggleModal();
//   });
// }

const overlay = document.querySelector(".modal-overlay");
// overlay.addEventListener("click", toggleModal);

var closemodal = document.querySelectorAll(".modal-close");
for (var i = 0; i < closemodal.length; i++) {
  closemodal[i].addEventListener("click", (e) => toggleModal());
}

function toggleModal(data = false) {
  const body = document.querySelector("body");
  const modal = document.getElementsByClassName("modal");
  if (data) {
    document.getElementById("pokemon_output").innerHTML = `${
      data.species.name[0].toUpperCase() + data.species.name.substring(1)
    }#${data.id}`;

    document.getElementById("pokemon_height").innerHTML = `Height ${
      data.height * 10
    } cm`;

    document.getElementById("pokemon_weight").innerHTML = `Weight ${
      data.weight / 10
    } kg`;
  }
  if (!isModalopened) {
    modal[0].setAttribute("style", "display: block !important; z-index :99");
  } else {
    modal[0].setAttribute("style", "display: none !important; z-index :-1");
  }

  isModalopened = !isModalopened;
  body.classList.toggle("modal-active");
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let url = "https://pokeapi.co/api/v2/pokemon/";
for (let i = 1; i < 152; i++) {
  fetch(url + i)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      let img_pokemon = document.createElement("img");
      img_pokemon.setAttribute("src", data.sprites.front_default);
      img_pokemon.setAttribute("class", "pokemon_pic");
      document.getElementById("pic-container" + i).appendChild(img_pokemon);
      document.getElementById("pokemon_output").innerHTML = `${
        data.species.name[0].toUpperCase() + data.species.name.substring(1)
      }#${data.id}`;

      document
        .getElementById("pic-container" + i)
        .addEventListener("click", (e) => {
          toggleModal(data);
        });
    });
}
