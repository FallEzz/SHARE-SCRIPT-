document.querySelectorAll(".download-btn").forEach(button => {

    button.addEventListener("click", () => {

        const link = button.dataset.link;

        window.open(link, "_blank");

    });

});