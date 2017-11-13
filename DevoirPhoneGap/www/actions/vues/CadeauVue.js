var CadeauVue = function (cadeau)
{
    this.afficher = function ()
    {
        $("body").html(CadeauVue.pageCadeau);

        var htmlCadeau = $("#m-cadeau");

        $("#cadeau-nom").html(cadeau.nom);
        $("#cadeau-marque").html(cadeau.marque);
        $("#cadeau-description").html(cadeau.description);
        $("#cadeau-prix").html(cadeau.prix + "€");

        p = '<p><a class="btn_modifier" href="#modifier-cadeau/' + cadeau.id + '">' + "Modifier" + '</a> <a class="btn_supprimer" href="#supprimer-cadeau/' + cadeau.id + '">' + "Supprimer" + '</a> </p>';

        htmlCadeau.html(p);
    }
}
CadeauVue.pageCadeau = $("#page-cadeau").html();