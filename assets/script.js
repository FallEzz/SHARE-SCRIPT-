const themeBtn = document.getElementById("theme");

const body = document.body;

if(localStorage.getItem("theme") === "light"){

body.classList.add("light");

themeBtn.innerHTML =
'<i class="fa-solid fa-sun"></i>';

}

themeBtn.addEventListener("click",()=>{

body.classList.toggle("light");

if(body.classList.contains("light")){

localStorage.setItem("theme","light");

themeBtn.innerHTML =
'<i class="fa-solid fa-sun"></i>';

}else{

localStorage.setItem("theme","dark");

themeBtn.innerHTML =
'<i class="fa-solid fa-moon"></i>';

}

});
document.querySelectorAll(".download-btn").forEach(button => {

    button.addEventListener("click", () => {

        const link = button.dataset.link;

        window.open(link, "_blank");

    });

});

// ===========================
// Search Script
// ===========================

const searchInput = document.getElementById("search");
const scriptCards = document.querySelectorAll(".script-card");
const noResults = document.getElementById("noResults");

if (searchInput) {

    searchInput.addEventListener("input", () => {

        const query = searchInput.value.toLowerCase().trim();
        let visibleCount = 0;

        scriptCards.forEach(card => {

            const title = card.querySelector("h3")?.textContent.toLowerCase() || "";
            const info = card.querySelector(".language")?.textContent.toLowerCase() || "";

            const isMatch = title.includes(query) || info.includes(query);

            card.style.display = isMatch ? "" : "none";

            if (isMatch) visibleCount++;

        });

        if (noResults) {
            noResults.style.display = visibleCount === 0 ? "block" : "none";
        }

    });

}

// ===========================
// Explore Script -> scroll to scripts section
// ===========================

const exploreBtn = document.getElementById("exploreBtn");
const scriptsSection = document.getElementById("scripts");

if (exploreBtn && scriptsSection) {

    exploreBtn.addEventListener("click", () => {

        scriptsSection.scrollIntoView({ behavior: "smooth", block: "start" });

    });

}