const helloBtn = document.getElementById("helloBtn");

helloBtn.addEventListener("click", function () {

    const name = document.getElementById("nameInput").value;

    document.getElementById("greeting").textContent =
        `Hello, ${name || "User"}!`;

});