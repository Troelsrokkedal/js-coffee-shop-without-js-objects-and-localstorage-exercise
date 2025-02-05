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





