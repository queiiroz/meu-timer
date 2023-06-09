function watch() {
  function seconds(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString("pt-BR", {
      hour12: false,
      timeZone: "UTC",
    });
  }

  const watch = document.querySelector(".watch");
  const start = document.querySelector("#start");
  const stop = document.querySelector("#stop");
  const reset = document.querySelector("#reset");
  let segundos = 0;
  let timer;

  function startWatch() {
    timer = setInterval(() => {
      segundos++;
      watch.innerHTML = seconds(segundos);
    }, 1000);
  }

  start.addEventListener("click", function (event) {
    watch.classList.remove("pause");
    clearInterval(timer);
    startWatch();
  });

  stop.addEventListener("click", function (event) {
    watch.classList.add("pause");
    clearInterval(timer);
  });

  reset.addEventListener("click", function (event) {
    watch.classList.remove("pause");
    clearInterval(timer);
    watch.innerHTML = seconds(0);
    segundos = 0;
  });
}
watch();
