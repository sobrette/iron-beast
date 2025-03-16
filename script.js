function scrollCarousel(direction) {
  const carousel = document.getElementById("carousel");
  const scrollAmount = carousel.offsetWidth;
  carousel.scrollBy({
    left: direction === "prev" ? -scrollAmount : scrollAmount,
    behavior: "smooth",
  });
}

class Router {
  constructor(routes) {
    this.routes = routes;
    window.addEventListener("hashchange", this.handleRouteChange.bind(this));
    this.handleRouteChange(); // Ensure correct route loads on page load
  }

  handleRouteChange() {
    let hash = window.location.hash.slice(1) || "/"; // Remove `#` and ensure `/` if empty
    console.log("Current route hash:", hash);

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
  "/": () => loadPage("home.html"),
  "/about": () => loadPage("about.html"),
  "/programs": () => loadPage("programs.html"),
  "/classes": () => loadPage("class.html"),
  "/membership": () => loadPage("membership.html"),
  "/trainers": () => loadPage("trainers.html"),
};

function loadPage(page) {
  fetch(page)
    .then((response) => {
      if (!response.ok) throw new Error("Page not found");
      return response.text();
    })
    .then((html) => {
      document.getElementById("main").innerHTML = html;
    })
    .catch(() => {
      document.getElementById("main").innerHTML =
        "<h1>404 - Page Not Found</h1>";
    });
}

// Initialize router
new Router(routes);
