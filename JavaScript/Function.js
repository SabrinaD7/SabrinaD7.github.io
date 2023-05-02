//Lisätään napin kuunelijafunktio
document.querySelector("#print").addEventListener("click", addNote);

//Haetaan documentin elementit
let body = document.querySelector("#printArea");
let note = document.getElementById("message");
let name1 = document.getElementById("name");
let checkbox = document.getElementById("important");
let dateTime = new Date().toLocaleString();



function addNote() {

    //Luodaan otsikko johon tulee nimi-kentästä nimi ja lisäksi aikaleima
    let h7 = document.createElement("h7");
    h7.textContent = dateTime;

    //Itse note lisätään tekstinä p-elementtiin textareasta
    let h5 = document.createElement("h5");
    h5.textContent = name1.value;

    let p =document.createElement("p");
    p.textContent = message.value;

    //Jos checkbox valittu, lisätään important muotoilu
    if(checkbox.checked) {
        h5.classList.add("important");
        p.classList.add("important");
        h7.classList.add("important");
        
    }


    //Kaikki elementit uusina bodyn sisälle
    body.append(h7, h5, p, document.createElement("hr"));

   


}

