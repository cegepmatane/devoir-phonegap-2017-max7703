var ListeCadeauVue = function (listeCadeau)
{
    this.afficher = function ()
    {
        $("body").html(ListeCadeauVue.pageListeCadeau);

        var htmlListeCadeau = $("#liste-cadeau");

        var li = "";

        for (var indiceCadeau in listeCadeau) {
            li += '<li><a class="btn_detail" href="#cadeau/' + listeCadeau[indiceCadeau].id + '">' + listeCadeau[indiceCadeau].nom + '</a></li>';
        }

        htmlListeCadeau.html(li);
    }
}
ListeCadeauVue.pageListeCadeau = $("#page-liste-cadeau").html();