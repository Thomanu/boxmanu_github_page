import React, { Component } from "react";

function display({total}){

if(total==0){
return(
    <div>Veuillez ajouter un objet</div>
)
}
else if(total<=(3)){
return(
    <div><h3>Nous vous conseillons le Box S de 2 à 3 m² : 50€ HT / mois</h3></div>
)
}
else if(total>(3)&total<=(6)){
return(
    <div><h3>Nous vous conseillons le Box M de 3 à 6 m² : 80€ HT / mois</h3></div>
)
}
else if(total>(6)&total<=(10)){
    return(
        <div><h3>Nous vous conseillons le Box L de 6 à 10 m² : 140€ HT / mois</h3></div>
    )
    }
    else if(total>(10)&total<=(16)){
        return(
            <div><h3>Nous vous conseillons le Bpx XL de 10 à 16 m² : 200€ HT / mois</h3></div>
            
        )
        }
}
export default display 