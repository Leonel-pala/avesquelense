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
    });
});
