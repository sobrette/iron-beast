function scrollCarousel(direction) {
  const carousel = document.getElementById("carousel");
  const scrollAmount = carousel.offsetWidth;
  if (direction === "prev") {
    carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  } else {
    carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
  }
}
class Router {
  constructor(routes) {
    this.routes = routes;
    window.addEventListener("hashchange", this.handleRouteChange.bind(this));
    this.handleRouteChange(); // Ensure it runs on page load
  }

  handleRouteChange() {
    let hash = window.location.hash.slice(1);
    console.log("Current route hash:", hash); // Debugging output

    if (!hash || hash === "/") {
      window.location.hash = "/";
      hash = "/";
    }

    const route = this.routes[hash];

    if (route) {
      route();
    } else {
      document.getElementById("main").innerHTML =
        "<h1>404 - Page Not Found</h1>";
    }
  }
}

const routes = {
  "/": () =>
    fetch("home.html")
      .then((response) => response.text())
      .then((html) => {
        document.getElementById("main").innerHTML = html;
      }),
  about: () =>
    fetch("./about.html")
      .then((response) => response.text())
      .then((html) => {
        document.getElementById("main").innerHTML = html;
      }),
  programs: () =>
    fetch("./programs.html")
      .then((response) => response.text())
      .then((html) => {
        document.getElementById("main").innerHTML = html;
      }),
  classes: () =>
    fetch("./class.html")
      .then((response) => response.text())
      .then((html) => {
        document.getElementById("main").innerHTML = html;
      }),
  membership: () =>
    fetch("./membership.html")
      .then((response) => response.text())
      .then((html) => {
        document.getElementById("main").innerHTML = html;
      }),

  trainers: () =>
    fetch("./trainers.html")
      .then((response) => response.text())
      .then((html) => {
        document.getElementById("main").innerHTML = html;
      }),
};

const router = new Router(routes);
