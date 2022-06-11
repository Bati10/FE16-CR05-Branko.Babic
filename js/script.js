"use strict";
let animals = [];
class animal {
    constructor(img, name, age, gender, size, vaccine) {
        this.img = img;
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.size = size;
        this.vaccine = vaccine;
        animals.push(this);
    }
    displayCard() {
        return ` <div class="card col-lg-4 col-md-6 col-xs-12 m-3 d-flex justify-content-center card shadow-lg p-0" style="width: 20rem;">
        <img src="${this.img}" class="card-img-top slika" style="height:20rem; object-fit:cover">
        <div class="card-body p-0">
        <h5 class="card-title text-center bg-dark text-light p-1">${this.name}</h5>
        <p class="card-text">Gender: ${this.gender}</p>
        <p class="card-text">Age: ${this.age}</p>
        <p class="card-text">Size: ${this.size}</p>
        <p class="card-text text-center text-white fst-italic align-center fs-5 rounded-pill btn d-flex justify-content-center bg-${this.vaccine ? "success" : "danger"}">Vaccine</p>
        </div>
        </div>`;
    }
}
class cat extends animal {
    constructor(img, name, age, gender, size, vaccine, breed, pattern, web) {
        super(img, name, age, gender, size, vaccine);
        this.breed = breed;
        this.pattern = pattern;
        this.web = web;
    }
    displayCard() {
        return ` <div class="card col-lg-4 col-md-6 col-xs-12 m-3 d-flex justify-content-center shadow shadow-dark shadow-intensity-xl p-0" style="width: 20rem;">
        <img src="${this.img}" class="card-img-top slika" style="height:20rem; object-fit:cover">
        <div class="card-body p-0">
        <h5 class="card-title text-center bg-dark text-light p-1">${this.name}</h5>
        <p class="card-text">Gender: ${this.gender}</p>
        <p class="card-text">Age: ${this.age}</p>
        <p class="card-text">Size: ${this.size}</p>
        <p class="card-text text-center text-white fst-italic fs-5 rounded-pill btn d-flex justify-content-center bg-${this.vaccine ? "success" : "danger"}">Vaccine</p>
        <p class="card-model">Breed: ${this.breed}</p>
        <p class="card-model">Fur color: ${this.pattern}</p>
        <p class="card-text">Breed info: 
        <a href="${this.web}">${this.web}</a> </p>
        </div>
        </div>`;
    }
}
class dog extends animal {
    constructor(img, name, age, gender, size, vaccine, breed, trSkills) {
        super(img, name, age, gender, size, vaccine);
        this.breed = breed;
        this.trSkills = trSkills;
    }
    displayCard() {
        return ` <div class="card col-lg-4 col-md-6 col-xs-12 m-3 d-flex justify-content-center card shadow-lg p-0" style="width: 20rem;">
        <img src="${this.img}" class="card-img-top slika" style="height:20rem; object-fit:cover">
        <div class="card-body p-0">
        <h5 class="card-title text-center bg-dark text-light p-1">${this.name}</h5>
        <p class="card-text">Gender: ${this.gender}</p>
        <p class="card-text">Age: ${this.age}</p>
        <p class="card-text">Size: ${this.size}</p>
        <p class="card-text text-center text-white fst-italic fs-5 rounded-pill btn d-flex justify-content-center bg-${this.vaccine ? "success" : "danger"}">Vaccine</p>
        <p class="card-model">Breed: ${this.breed}</p>
        <p class="card-model">Training: ${this.trSkills}</p>
        </div>
        </div>
        </div>`;
    }
}
;
// ---------------------------------------------------------------------------------------------------------- 
new animal("img/papagaj.jpg", "John", 3, "male", "big", true);
new animal("img/pig.webp", "Bacon", 1, "female", "small", true);
new animal("img/hedgehog.jpg", "Spike", 4, "male", "small", false);
// ---------------------------------------------------------------------------------------------------------- 
new cat("img/siamese.webp", "Meowley Cyrus", 1, "female", "small", false, "Siamese", "Ginger", "https://en.wikipedia.org/wiki/Siamese");
new cat("img/angora.jpg", "Feline Dion", 5, "female", "medium", true, "Angora", "Grey", "https://en.wikipedia.org/wiki/Turkish_Angora");
new cat("img/ragdoll.jpg", "Shakira", 2, "female", "large", true, "Ragdoll", "White", "https://en.wikipedia.org/wiki/Ragdoll");
// ---------------------------------------------------------------------------------------------------------- 
new dog("img/poodle.jpg", "Platano", 5, "male", "small", false, "Poodle", "No");
new dog("img/pug.jpg", "Toto", 5, "male", "medium,", false, "Pug", "Yes");
new dog("img/shepherd.jpg", "Sushi", 2, "female", "large", true, "Australian Shepherd", "Yes");
// ---------------------------------------------------------------------------------------------------------- 
document.getElementById("sortIcon").addEventListener("click", sortbyAge);
function sortbyAge() {
    animals.sort(function (a, b) {
        return a.age - b.age;
    });
    document.getElementsByClassName("ruf")[0].innerHTML = "";
    printCard();
}
function printCard() {
    for (let val of animals) {
        document.getElementsByClassName("ruf")[0].innerHTML += val.displayCard();
    }
    ;
}
;
printCard();
