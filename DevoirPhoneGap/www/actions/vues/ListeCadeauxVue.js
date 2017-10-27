var ListeCadeauVue = function (listeCadeau) {

    this.afficher = function () {
        var pageListeCadeau = $("#page-liste-cadeau").html();

        $("body").html(pageListeCadeau);

        var htmlListeCadeau = $("#liste-cadeau");

        var li = "";

        for (var indiceCadeau in listeCadeau) {
            li += '<li>' + listeCadeau[indiceCadeau].nom + '</li>';
        }

        htmlListeCadeau.html(li);
    }
}