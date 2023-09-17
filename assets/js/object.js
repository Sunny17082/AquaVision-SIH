const object = {
    id: 1,
    name: "Banana",
    image: "https://www.forbesindia.com/media/images/2022/Sep/img_193775_bananas.jpg",
    water: "91 liters per serving",
    blue: "84%",
    green: "12%",
    grey: "4%"
};

const objName = document.getElementById("name");
const objImage = document.getElementById("image");
const objWater = document.getElementById("water");
const objBlue = document.getElementById("blue");
const objGreen = document.getElementById("green");
const objGrey = document.getElementById("grey");
const input = document.getElementById("input-box");

objName.innerHTML = object.name;
objImage.src = object.image;
objWater.innerHTML = object.water;
objBlue.innerHTML = object.blue;
objGreen.innerHTML = object.green;
objGrey.innerHTML = object.grey;

function showDetail() {
    location.href = "object.html";
}