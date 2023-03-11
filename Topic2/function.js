const colorPicker = document.getElementById("colorPicker");

function btn() {
    const div1 = document.getElementById("Div1");
    const div2 = document.getElementById("Div2");
    const div3 = document.getElementById("Div3");

    if (document.getElementById('l1').checked) {
        div1.style.backgroundColor = colorPicker.value;
    }
    if (document.getElementById('l2').checked) {
        div2.style.backgroundColor = colorPicker.value;
    }
    if (document.getElementById('l3').checked) {
        div3.style.backgroundColor = colorPicker.value;
    }
}

colorPicker.addEventListener("input", btn);

const radioButtons = document.querySelectorAll('input[type=radio]');
radioButtons.forEach(button => {
    button.addEventListener('click', btn);
});
