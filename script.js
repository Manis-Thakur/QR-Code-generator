const generateBtn = document.getElementById("generateBtn");
const container = document.querySelector(".container");
const Input = document.getElementById("inputText");
const image = document.getElementById("image");

generateBtn.addEventListener("click", () => {
    let inputValue = Input.value;
    if (!inputValue)
        return;
    image.src = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue} `;

    container.classList.add("active");


})