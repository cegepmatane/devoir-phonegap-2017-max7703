var ListeCadeauVue = function () {

    this.afficher = function () {
        var pageListeCadeau = $("#page-liste-cadeau").html();

        $("body").html(pageListeCadeau);

        var htmlListeCadeau = $("#liste-cadeau");

        var listeCadeau = [
            { "id": 1, "nom": "Pebble", "marque": "Pebble", "description": "Montre intel" },
            { "id": 2, "nom": "iPhone", "marque": "Apple", "description": "telephone" }
        ];

        var li = "";

        for (var indiceCadeau in listeCadeau) {
            li += '<li>' + listeCadeau[indiceCadeau].nom + '</li>';
        }

        htmlListeCadeau.html(li);
    }
}