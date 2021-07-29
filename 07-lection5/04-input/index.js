const HIDE = "hide"

document.addEventListener("DOMContentLoaded", function() {
    let textBoxInputs = document.getElementsByClassName("textInput__inputBox")

    for (let key = 0; key < textBoxInputs.length; key++) {

        let input = textBoxInputs[key].children[0]
        let icon = textBoxInputs[key].children[1]

        if (input.value !== "") {
            icon.classList.remove(HIDE)
        } else {
            icon.classList.add(HIDE)
        }

        input.addEventListener('input', (event) => {
            if (event.target.value !== "") {
                icon.classList.remove(HIDE)
            } else {
                icon.classList.add(HIDE)
            }
        });
    }
});
