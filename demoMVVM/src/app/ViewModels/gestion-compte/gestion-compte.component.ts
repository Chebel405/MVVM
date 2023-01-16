import { Component, OnInit } from '@angular/core';
import { CompteBancaire } from 'src/app/Models/compte-bancaire';
import { FormGroup } from '@angular/forms';
import {FormControl } from '@angular/forms';

@Component({
  selector: 'app-gestion-compte',
  templateUrl: './gestion-compte.component.html',
  styleUrls: ['./gestion-compte.component.scss']
})
export class GestionCompteComponent  {
    /**
     * Lier mon model à ma vue
     */
    public compte: CompteBancaire;
    public soldeActuel: number;
    public montantDepot:FormGroup;

    /**
     * Constructor de mon ViewModel
     */
    constructor(){
      this.compte = new CompteBancaire(0);
      this.soldeActuel = this.compte.getSolde();
      this.montantDepot = new FormGroup({
        montant: new FormControl(Number)
      });

  }

  /**
   * méthode pour recuperer l'input du formulaire et
   * incrementer le solde du compte avec cette valeur
   */
  public deposer():void{
    this.compte.ajouterMontant(this.montantDepot.controls['montant'].value);
    this.soldeActuel = this.compte.getSolde();
    //Reinitialisation des champs du formulaire
    this.montantDepot.reset();

  }

    /**
   * tadam()
   */
    public tadam():void{
      alert("Tadam");
    };

  /**
   * méthode pour recuperer l'input du formulaire et
   * decrementer le solde du compte avec cette valeur 
   */
  public retirer():void{
    try{
      this.compte.retirerMontant(this.montantDepot.controls['montant'].value);
      this.soldeActuel = this.compte.getSolde();
    } catch (error: any){
      //gestion de l'erreur
      alert(error.message);
    }    
    //Reinitialisation des champs du formulaire
     this.montantDepot.reset();
  }


}
