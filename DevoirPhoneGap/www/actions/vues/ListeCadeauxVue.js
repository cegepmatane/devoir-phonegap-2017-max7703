var ListeCadeauVue = function (listeCadeau) {

    this.afficher = function () {
        var pageListeCadeau = $("#page-liste-cadeau").html();

        $("body").html(pageListeCadeau);

        var htmlListeCadeau = $("#liste-cadeau");

        var li = "";

        for (var indiceCadeau in listeCadeau) {
            li += '<li><a href="#cadeau/' + listeCadeau[indiceCadeau].id + '">' + listeCadeau[indiceCadeau].nom + '</a></li>';
        }

        htmlListeCadeau.html(li);
    }
}