import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import data from '../DATA.json';

console.log('Hello Coders! :)');

// ======================================================
// ===================== Navigation =====================
const topnav = document.getElementById("topnav");
const topnavToggle = topnav.querySelector(".menu-toggle");

function openMobileNavbar() {
    topnav.classList.add("opened");
    topnavToggle.setAttribute("aria-label", "Close navigation menu.");
}

function closeMobileNavbar() {
    topnav.classList.remove("opened");
    topnavToggle.setAttribute("aria-label", "Open navigation menu.");
}

topnavToggle.addEventListener("click", () => {
    if (topnav.classList.contains("opened")) {
        closeMobileNavbar();
    } else {
        openMobileNavbar();
    }
});

const topnavMenu = topnav.querySelector(".nav-menu");
const topnavLinks = topnav.querySelector(".nav-links");

topnavLinks.addEventListener("click", (clickEvent) => {
    clickEvent.stopPropagation();
});

topnavMenu.addEventListener("click", closeMobileNavbar);

// ===================== End Navigation =================
// ======================================================


// ======================================================
// ===================== List Content ===================
const restaurantListElement = document.querySelector("restaurant-list");
const footerElement = document.querySelector("footer");

console.log(data.restaurants[0].pictureId);
restaurantListElement.setAttribute("class", "grid container");
restaurantListElement.innerHTML = "";
data.restaurants.forEach(restaurant => {
    const list = document.createElement("article");
    list.setAttribute("tabindex", "0");
    list.innerHTML = `
    <div class="poster">
        <img src=${restaurant.pictureId} alt="Poster">
        <div class="text-block">
            ${restaurant.city}
        </div
    </div>
    <div class="text">
        <h4>Rating: ${restaurant.rating}</h4>
        <h3>${restaurant.name}</h3>
        <p>${restaurant.description}</p>
    </div>
    `;
    restaurantListElement.appendChild(list);
})

// =================== End List Content =================
// ======================================================


// ======================================================
// ======================= Footer =======================
footerElement.innerHTML = "";
const footer = document.createElement("div");
footer.setAttribute("class", "footer");
footer.innerHTML = `Copyright &copy; 2020 -
 <a href="https://www.linkedin.com/in/m-imam-nur-hidayat-26b147159/">Dayat</a>`;
footerElement.appendChild(footer);

// ===================== End Footer =====================
// ======================================================