let searchTerms = [
    "Apple",
    "Orange",
    "Banana",
    "Watermelon",
    "Mango"
];

const object = [
    {
        name: "Apple",
        image: "../static/img/apple.png",
        water: "95 liters per serving",
        blue: "16%",
        green: "68%",
        grey: "15%"
    },
    {
        name: "Orange",
        image: "../static/img/orange.png",
        water: "64 liters per serving",
        blue: "20%",
        green: "71%",
        grey: "9%"
    },
    {
        name: "Banana",
        image: "../static/img/banana.png",
        water: "91 liters per serving",
        blue: "12%",
        green: "84%",
        grey: "4%"
    },
    {
        name: "watermelon",
        image: "../static/img/watermelon.png",
        water: "26 liters per serving",
        blue: "11%",
        green: "63%",
        grey: "26%"
    },
    {
        name: "Mango",
        image: "../static/img/mango.png",
        water: "204 liters per serving",
        blue: "20%",
        green: "73%",
        grey: "7%"
    }
];

const resultBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function() {
    let result = [];
    let input = inputBox.value;
    if(input.length) {
        result = searchTerms.filter((keyword) => {
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
    }
    display(result);

    if(!result.length) {
        resultBox.innerHTML = "";
    }
}

function display(result) {
    const content = result.map((list) => {
        return "<li onclick=selectInput(this)>"+ list + "</li>";
    });

    resultBox.innerHTML = "<ul>" + content.join("") + "</ul>";
}

function selectInput(list) {
    inputBox.value = list.innerHTML;
    resultBox.innerHTML = "";
}

function findIndex(str) {
    for (var i=0; i<searchTerms.length; i++) {
        if (searchTerms[i].match(str))
            return i;
    }
    return -1;
}

const objName = document.getElementById("name");
const objImage = document.getElementById("image");
const objWater = document.getElementById("water");
const objBlue = document.getElementById("blue");
const objGreen = document.getElementById("green");
const objGrey = document.getElementById("grey");
const mainContainer = document.getElementById("main-container");
const objectContainer = document.getElementById("object-container");

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    for (const pair of formData.entries()) {
        const data = pair[1];
        console.log(pair[1]);
        const i = findIndex(data);
        console.log(i);

        objName.innerHTML = object[i].name;
        objImage.src = object[i].image;
        objWater.innerHTML = object[i].water;
        objBlue.innerHTML = object[i].blue;
        objGreen.innerHTML = object[i].green;
        objGrey.innerHTML = object[i].grey;
    }
    mainContainer.classList.add("no");
    objectContainer.classList.remove("no");
});