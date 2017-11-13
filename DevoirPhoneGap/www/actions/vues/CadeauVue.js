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

        p = '<p><a href="#modifier-cadeau/' + cadeau.id + '">' + "Modifier" + '</a> <a href="#supprimer-cadeau/' + cadeau.id + '">' + "Supprimer" + '</a> </p>';

        htmlCadeau.html(p);
    }
}
CadeauVue.pageCadeau = $("#page-cadeau").html();