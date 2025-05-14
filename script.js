window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle('sticky', window.scrollY > 0);
});

function spawn(){
    var button_plus = document.getElementById("plus");
    var item = document.querySelectorAll("#item_move");
    var container = document.getElementById("container1")
    button_plus.classList.toggle('more');
    container.classList.toggle('oui');
    for (var i = 0; i < item.length ; i++){
        item.item(i).classList.toggle("off");
    }
    if (button_plus.className == "more") {
        button_plus.textContent = "Voir moins <"
    } else {
        button_plus.textContent = "Voir plus >"
    }
};

let sections = document.querySelectorAll(".scroll");
let elements = document.querySelectorAll("header a");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 200;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            elements.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};