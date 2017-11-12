﻿var AjouterCadeauVue = function () {
    var instance = this;
    this.cadeau = null;
    this.afficher = function () {
        this.cadeau = null;

        $("body").html(AjouterCadeauVue.pageAjouterCadeau);

        $("#formulaire-ajouter").on("submit", function (evenement) {
            evenement.preventDefault();
            var nom = $("#nom").val();
            var marque = $("#marque").val();
            var prix = $("#prix").val();
            var description = $("#description").val();

            instance.cadeau = new Cadeau(nom, marque, prix, description)
            window.location.hash = "#AjouterCadeauVue:NouveauCadeau";
        });
    }
}
AjouterCadeauVue.pageAjouterCadeau = $("#page-ajouter-cadeau").html();