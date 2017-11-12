var CadeauVue = function (cadeau)
{
    this.afficher = function ()
    {
        $("body").html(CadeauVue.pageCadeau);

        $("#cadeau-nom").html(cadeau.nom);
        $("#cadeau-marque").html(cadeau.marque);
        $("#cadeau-description").html(cadeau.description);
        $("#cadeau-prix").html(cadeau.prix + "€");

    }
}
CadeauVue.pageCadeau = $("#page-cadeau").html();