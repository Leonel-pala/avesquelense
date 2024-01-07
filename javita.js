/*
<article>
    <span class="stick"></span>
        <img src="../style/img/birds/loica.webp">
            <h5>Loica</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae praesentium eveniet harum cumque maiores, assumenda facilis in vitae quam esse deleniti veniam minima cum voluptates aliquid sapiente fugiat nisi similique.</p>
    <input type="button" value="Mas detalles" class="btn">
</article>
         */
window.addEventListener("load", (e) => {
  let aves = document.querySelector("#aves");
  print("c", "a");
  function print(x, y) {
    fetch("./base.json")
      .then((response) => response.json())
      .then((data) => {
        const lista = Object.values(data);
        if (x == "a") {
          lista.sort((a, b) => a.nombre.localeCompare(b.nombre));
        } else if (x == "b") {
          lista.sort((a, b) => b.nombre.localeCompare(a.nombre));
        }

        let largo = 99; //Object.keys(data).length;

        if (y == "b") {
          aves.innerHTML = "";
          let family = [];
          for (let x = 0; x <= largo; x++) {
            if (family.includes(lista[x].familia) == false) {
              family.push(lista[x].familia);

              document.querySelector("#aves").innerHTML += `
              <div class="subtitle">
      <h2>${lista[x].familia}</h2>
      <span id="line"></span>
    </div>
    <div class="familia" id="${lista[x].familia}" class="enciclo"></div>`;
            }
          }
          for (let i = 0; i <= largo; i++) {
            document.querySelector(
              `#${lista[i].familia}`
            ).innerHTML += `<article id="${lista[i].name}">
                  <span class="reference">${i}.</span>
                  <span class="stick"></span>
                      <img class="birdIMG" src="${lista[i].preview}">
                          <h5 class="birdNAME">${lista[i].name}</h5>
                      <p class="birdDES">${lista[i].descripcion}</p>
                      <a class="birdBTN" value="Mas detalles" class="btn" href="./details.html?id=${i}">Mas detalles</a>
              </article>`;
          }
        } else {
          document.querySelector("#aves").innerHTML =
            '<div id="enciclo"></div>';
          let enciclo = document.querySelector("#enciclo");
          for (let i = 0; i <= largo; i++) {
            enciclo.innerHTML += `<article id="${lista[i].name}">
                  <span class="reference">${i}.</span>
                  <span class="stick"></span>
                      <img class="birdIMG" src="${lista[i].preview}">
                          <h5 class="birdNAME">${lista[i].name}</h5>
                      <p class="birdDES">${lista[i].descripcion}</p>
                  <a class="birdBTN" value="Mas detalles" class="btn" href="./details.html?id=${i}">Mas detalles</a>
              </article>`;
          }
        }
      });
  }

  let search = document.querySelector("#search");
  search.addEventListener("input", (e) => {
    document.querySelectorAll("article").forEach((ave) => {
      ave.id.toLocaleLowerCase().includes(search.value.toLocaleLowerCase())
        ? ave.classList.remove("filtro")
        : ave.classList.add("filtro");
    });
  });
  let options = document.querySelector("#options");
  let zapato = document.querySelector("#zapato");
  let btnOption = document.querySelector("#btnOption");
  btnOption.addEventListener("click", (e) => {
    if (options.classList.value == "") {
      options.classList.add("show");
      zapato.classList.add("show");
    } else if (options.classList.value == "show") {
      options.classList.remove("show");
      zapato.classList.remove("show");
    }
  });

  zapato.addEventListener("click", (e) => {
    options.classList.remove("show");
    zapato.classList.remove("show");
  });
  const opt = document.querySelectorAll(".sort");
  opt.forEach((element) => {
    element.addEventListener("click", (e) => {
      opt.forEach((item) => item.classList.remove("active"));
      element.classList.add("active");
    });
  });

  const accept = document.querySelector("#accept");
  accept.addEventListener("click", (e) => {
    print(
      document.querySelector(".active").getAttribute("value"),
      document.querySelector("select").value
    );
  });
});
