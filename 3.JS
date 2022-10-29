let disc = document.getElementById("disc");
let btn = document.querySelectorAll("button");
let display = "";
for (item of btn) {
    item.addEventListener('click', function (e) {
        inner = e.target.innerText;
        if (inner == "C") {
            display = "";
            disc.value = display;

        }
        else if (inner == "=") {
            display = eval(disc.value);
            disc.value = display;

        }


        else {
            display += e.target.innerText;
            disc.value = display;
        }
    })
}
