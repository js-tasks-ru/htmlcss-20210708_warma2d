const HIDE = "hide"

document.addEventListener("DOMContentLoaded", function() {
    let textBoxInputs = document.getElementsByClassName("textInput__inputBox")

    for (let key = 0; key < textBoxInputs.length; key++) {

        let input = textBoxInputs[key].children[0]
        let placeholder = textBoxInputs[key].children[1]
        let icon = textBoxInputs[key].children[2]

        if (input.value !== "") {
            placeholder.classList.add(HIDE)
            icon.classList.remove(HIDE)
        } else {
            placeholder.classList.remove(HIDE)
            icon.classList.add(HIDE)
        }

        input.addEventListener('input', (event) => {
            if (event.target.value !== "") {
                placeholder.classList.add(HIDE)
                icon.classList.remove(HIDE)
            } else {
                placeholder.classList.remove(HIDE)
                icon.classList.add(HIDE)
            }
        });
    }
});
