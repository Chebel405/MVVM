/**
 * Modele de données pour un compte bancaire
 */
export class CompteBancaire {
    /**
     * Solde du compte bancaire
     */
    private solde:number;

/**
 * Constructor de compte bancaire
 * @param solde : Valeur initiale du solde à la creation du compte
 *
 */
    constructor(solde:number) {
        this.solde =solde;
    }

    /**
     * Getter me permettant de recuperer le solde du compte
     * @returns le solde du compte
     */
    public getSolde():number {
        return this.solde;
    }

    /**
     * Methode pour ajouter un montant au solde du compte
     * @param montant montant à ajouter au solde
     */
    public ajouterMontant(montant:number):void{
        this.solde += montant;
    }

    /**
     * Methode pour retirer un montant au solde du compte
     * @param montant montant à retirer au solde
     */
    public retirerMontant(montant:number):void{
        if(this.solde >= montant){
            this.solde -= montant;
        } else {
            console.log("Solde insuffisant");
            throw new Error("Solde insuffisant");
            
        }
    }
}
