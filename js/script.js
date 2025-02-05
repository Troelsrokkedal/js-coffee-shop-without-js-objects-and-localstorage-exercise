"use strict"; //ativere JS-stirkt mode, hvilket hjælper med af finde fejl

function addToCart(product){
    //hent nuværende værdi fra inputfeltet med specifikt id og omdan til et tal
    const quantity = parseInt(document.getElementById(product).value);

    // øger quantity med 1 hver gang
    document.getElementById(product).value = quantity + 1;
}

function removeFromCart(product){
       //hent nuværende værdi fra inputfeltet med specifikt id og omdan til et tal
       const quantity = parseInt(document.getElementById(product).value);
    if(quantity > 0){
         // formindsk quantity med 1 hver gang
    document.getElementById(product).value = quantity -1;
    }
}

function resetCart(product){
// sætte quantity til 0 hver gang
document.getElementById(product).value = 0;
}


//funktionen opdaterer prisen for den enkelte varer = kaffeprodukt
function updateTotalPrice(product){
     //hent mængden (quantity) og pris-inputfeltet for det spcifikke varer = kaffeprodukt
     const quantity = parseInt(document.getElementById(product).value);

     const price = parseInt(document.getElementById(product + "-price").value);
    // beregner total prisen for denne specifikke varer
     const total = quantity * price; 

     document.getElementById(product +"-total").value = total;
}

//function til at beregne og opdatere den samlede total pris for alle varer i kurven
function totalPrice(){
    //variable til at holde styr på den samlede totalpris
    let totalSum = 0;
    // finder alle imput felter der indeholder et id med "product" efterfulgt af "-total"
    const productElements = document.querySelectorAll("[id$=-total]")
}









