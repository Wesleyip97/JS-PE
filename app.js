let Voornaam = document.querySelector("#voornaam").value;
let naam = document.querySelector("#naam").value;
let Gebruikersnaam = document.querySelector("#gebruikersnaam").value;
let email = document.querySelector("#email").value;
let wachtwoord1 = document.querySelector("#wachtwoord1").value;
let wachtwoord2 = document.querySelector("wachtwoord2").value;
let adres = document.querySelector("adres").value;
let land = document.querySelector("land").value;
let provincie = document.querySelector("provincie").value;
let postcode = document.querySelector("postcode").value;

const versturen = document.querySelector("#versturenbtn")

// arrays
let errors = [];
let errorcounter = 0

// functies
let checkEmptyField = (parameter) => {
    if (parameter == "") {
        errors.push("het veld " + parameter + " is vereist.")
        errorcounter++
    }
}

// gevonden op: https://www.simplilearn.com/tutorials/javascript-tutorial/email-validation-in-javascript
let validateEmail = (email) => {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (input.value.match(validRegex)) {
        document.form1.text1.focus();
        return true;

    } else {
        errors.push("uw emailadres is fout")
        errorcounter++
        document.form1.text1.focus();
        return false;
    }
}

let wachtwoordzelfde = (wachtwoord1, wachtwoord2) => {
    if (wachtwoord1 /= wachtwoord2) {
        errors.push("je wachtwoorden komen niet overeen.")
        errorcounter++
    }
}

let wachtwoordcontrole = (wachtwoord1) => {
    if (wachtwoord1.value.length > 7) {
        errors.push("je wachtwoord is te kort.")
        errorcounter++
    }
}

let validatePayment = () => {
    if (document.getElementById("betalingbankingapp").checked = true) {
        document.getElementById("betalingsbewijstekst").innerHTML = "Je betalingswijze is met de Banking app"
    } else if (document.getElementById("betalingoverschrijving").checked = true) {
        document.getElementById("betalingsbewijstekst").innerHTML = "Je betalingswijze is Overschrijving"
    } else if (document.getElementById("betalingvisa").checked = true) {
        document.getElementById("betalingsbewijstekst").innerHTML = "Je betalingswijze is met de Visa Kaart"
    } else if (document.getElementById("betalingpaypal").checked = true) {
        document.getElementById("betalingsbewijstekst").innerHTML = "Je betalingswijze is Paypal"
    }
}

let checkPC = (postcode) => {
    if (postcode = "") {
        errors.push("Het veld postcode is vereist.")
        errorcounter++
    } else if (postcode < 1000 && postcode > 9999) {
        errors.push("De waarde van postcode moet tussen 1000 en 9999 liggen.")
        errorcounter++
    }

}

let checkcheckbox = () => {
    if (document.getElementById("checkbox2").checked = true) {
        errors.push("Je moet de algemene voorwaarden accepteren.")
        errorcounter++
    }
}

// checks
let check = () => {
    let parameter = "";
    parameter = Voornaam
    checkEmptyField(parameter);
    parameter = naam
    checkEmptyField(parameter);
    parameter = Gebruikersnaam
    checkEmptyField(parameter);
    parameter = email
    checkEmptyField(parameter);
    parameter = wachtwoord1
    checkEmptyField(parameter);
    parameter = wachtwoord2
    checkEmptyField(parameter);
    parameter = adres
    checkEmptyField(parameter);
    parameter = land
    checkEmptyField(parameter);
    parameter = provincie
    checkEmptyField(parameter);
    parameter = postcode
    checkEmptyField(parameter);
    validateEmail(email);
    wachtwoordzelfde(wachtwoord1, wachtwoord2);
    wachtwoordcontrole(wachtwoord1);
    validatePayment();
    checkPC(postcode);
    checkcheckbox();

    if (errorcounter = 0) {
        document.getElementById("groen").style.display = "block";
        document.getElementById("blauw").style.display = "block";
    } else if (errorcounter > 0) {
        document.getElementById("rood").style.display = "block";
    }
}



// Events
versturen.addEventListener('click', check)