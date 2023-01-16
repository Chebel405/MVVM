import { Component, OnInit } from '@angular/core';
import { CompteBancaire } from 'src/app/Models/compte-bancaire';

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

    constructor(){
      this.compte = new CompteBancaire(0);
      this.soldeActuel = this.compte.getSolde();

  }


}
