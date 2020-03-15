const target = document.querySelector("#target");

target.addEventListener("click", e => {
  e.target.innerHTML =
    "<a href='https://github.com/daido1976/daido1976.github.io' target='_blank' rel='noopener noreferrer'>View source</a>";
});
