window.addEventListener("load", (e) => {
  let id = new URLSearchParams(window.location.search).get("id");
  let pajarraco = null;
  let details = document.querySelector("#DetailsBirds");
  fetch("./base.json");
  fetch("./base.json")
    .then((response) => response.json())
    .then((data) => {
      pajarraco = data[id];
      details.querySelector("#name").innerHTML = pajarraco.name;
      details.querySelector("#nameCC").innerHTML = `(${pajarraco.nameCC})`;
      details.querySelector("#info").innerHTML = pajarraco.descripcion;
      details.querySelector("#familia").innerHTML = pajarraco.familia;

      details
        .querySelector("#viewIMG")
        .setAttribute("src", `${pajarraco.preview}`);

      const galleryIMG = Object.values(data[id].galleryIMG);
      const contenedor = document.querySelector("#carousel");
      contenedor.style.gridTemplateColumns = `repeat(${galleryIMG.length}, 1fr)`;
      galleryIMG.forEach((element, i) => {
        details.querySelector(
          "#carousel"
        ).innerHTML += `<img id="${i}" class="previewIMG" src="${element}" />`;
      });
      document.querySelectorAll(".previewIMG").forEach((element) => {
        element.addEventListener("click", function (e) {
          change(this.getAttribute("src"), this.getAttribute("id"));
        });
      });
      //FINISh
    });
  function change(x, y) {
    let view = document.querySelector("#viewIMG").getAttribute("src");
    document.querySelector("#viewIMG").setAttribute("src", x);

    document.getElementById(`${y}`).setAttribute("src", view);
  }
});
