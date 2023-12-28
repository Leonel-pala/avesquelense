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
  let enciclo = document.querySelector("#enciclo");
  fetch("./base.json")
    .then((response) => response.json())
    .then((data) => {
      let aves = "";
      let largo = Object.keys(data).length;
      for (let i = 1; i <= 84; i++) {
        enciclo.innerHTML += `<article id="${data[i].nombre}">
                <span class="reference">${i}.</span>
                <span class="stick"></span>
                    <img class="birdIMG" src="${data[i].url}">
                        <h5 class="birdNAME">${data[i].nombre}</h5>
                    <p class="birdDES">${data[i].descripcion}</p>
                <input class="birdBTN"type="button" value="Mas detalles" class="btn">
            </article>`;
      }
    });

  let search = document.querySelector("#search");
  search.addEventListener("input", (e) => {
    document.querySelectorAll("article").forEach((ave) => {
      ave.id.toLocaleLowerCase().includes(search.value.toLocaleLowerCase())
        ? ave.classList.remove("filtro")
        : ave.classList.add("filtro");
    });
  });
  let conteinerSearch = document.querySelector("#conteinerSearch");
  let btnSearch = document.querySelector("#btnSearch");
  btnSearch.addEventListener("click", (e) => {
    if (conteinerSearch.classList.value == "") {
      conteinerSearch.classList.add("show");
    } else if (conteinerSearch.classList.value == "show") {
      conteinerSearch.classList.remove("show");
    }
  });
});
