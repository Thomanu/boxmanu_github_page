import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <div>
          <div className=" form__title">
             <h2>Saisissez les dimensions de vos biens non repertoriés dans cette liste :</h2>
          </div>
        <div className="form__field">
          <input
           
            type="number"
            className="form-control"
            name="width"
           
            placeholder="Largeur"
            required
          />
          <input
           
            type="number"
            className="form-control"
            name="lenght"
            
            placeholder="Longueur"
            required
          />
          <input
            max="2.5"
           
            type="number"
            className="form-control"
            name="height"
           
            placeholder="Hauteur"
            required
          />
       
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="defaultCheck1"
          />
          <label class="form-check-label" for="defaultCheck1">
            Meuble non empilable ?
          </label>
        </div>
        <button type="submit" class="btn btn-primary">Ajouter</button>
         </div>
      </div>
    );
  }
}

export default Form;