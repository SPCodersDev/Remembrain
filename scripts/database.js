var database = {
    "1": {
        img: "images/icons/169.jpg",
        name: "Colour Match",
        url: "icons/filler.html",
        section: "Flexibility",
    },
    "2": {
        img: "images/icons/169.jpg",
        name: "Memory Cards",
        url: "icons/filler.html",
        section: "memory",
    },
    "3": {
        img: "images/icons/169.jpg",
        name: "Typing Test",
        url: "icons/filler.html",
        section: "Speed",
    },
};

function generateIcon(img, name, url, parent) {
    var iconItem = document.createElement("a");
    iconItem.classList.add("iconItem");
    iconItem.href = url;
    iconItem.style.cursor = "pointer";
    iconItem.style.textDecoration = "none";

    var iconImg = document.createElement("img");
    iconImg.classList.add("iconImg");
    iconImg.href = url;
    iconImg.src = img;

    iconItem.appendChild(iconImg);

    var iconName = document.createElement("div");
    iconName.classList.add("iconName");
    iconName.innerHTML = name;

    iconItem.appendChild(iconName);

    parent.appendChild(iconItem);
}

function loadAll(parent) {
    var keys = Object.keys(database);
    var test = keys.reverse();

    for (i = 0; i < test.length; i++) {
        generateIcon(database[test[i]].img, database[test[i]].name, database[test[i]].url, parent);
    }
}

function sorticons(input2, ul2, li2) {
    var i;
    var input = input2;
    var filter = input.value.toLowerCase();
    var ul = ul2;
    var li = li2;
    for (i = 0; i < li.length; i++) {
        var a = li[i].getElementsByTagName("div")[0];
        var txtValue = a.textContent || a.innerText;
        if (txtValue.toLowerCase().indexOf(filter) > -1) {
            li[i].style.display = "block";
        } else {
            li[i].style.display = "none";
        }
    }
}

function loadRecommended(parent) {
    var recommendedKeys = ["2", "3"];

    for (i = 0; i < recommendedKeys.length; i++) {
        generateIcon(database[recommendedKeys[i]].img, database[recommendedKeys[i]].name, database[recommendedKeys[i]].url, parent)
    }
}

function load2D(parent) {
    var keys = Object.keys(database);

    for (i = 0; i < keys.length; i++) {
        if (database[keys[i]].dimension == "2D") {
            generateIcon(database[keys[i]].img, database[keys[i]].name, database[keys[i]].url, parent);
        }
    }
}

function load3D(parent) {
    var keys = Object.keys(database);

    for (i = 0; i < keys.length; i++) {
        if (database[keys[i]].dimension == "3D") {
            generateIcon(database[keys[i]].img, database[keys[i]].name, database[keys[i]].url, parent);
        }
    }
}