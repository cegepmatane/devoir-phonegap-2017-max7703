var ModifierCadeauVue = function (cadeau) {
    var instance = this;
    this.afficher = function () {

        var cadeauDAO = new CadeauDAOLocalStorage();

        $("body").html(ModifierCadeauVue.pageModifierCadeau);

        $("#formulaire-modifier").on("submit", function (evenement) {
            evenement.preventDefault();

            var nom = $("#nom").val();
            var marque = $("#marque").val();
            var prix = $("#prix").val();
            var description = $("#description").val();

            instance.cadeau = new Cadeau(nom, marque, prix, description, cadeau.id);

            cadeauDAO.modifierCadeau(instance.cadeau);

            window.location.hash = "#ModifierCadeauVue:Modifier";
        });
    }
}
ModifierCadeauVue.pageModifierCadeau = $("#page-modifier-cadeau").html();