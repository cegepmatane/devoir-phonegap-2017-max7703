﻿var applicationListeNoel = {
    cadeauDAO: new CadeauDAOLocalStorage(),
    ajouterCadeauVue: new AjouterCadeauVue(),
    lancer: function ()
    {
        $(window).on('hashchange', $.proxy(this.naviguer, this));
        this.naviguer();
    },

    naviguer: function ()
    {
        var ancre = window.location.hash;
        if (!ancre)
        {
            var listeCadeau = this.cadeauDAO.getListeCadeau();
            var listeCadeauVue = new ListeCadeauVue(listeCadeau);

            listeCadeauVue.afficher();
        }
        else if (ancre.match(/^#ajouter-cadeau/)) {
            this.ajouterCadeauVue.afficher();
        }

        else if (ancre.match(/^#modifier-cadeau\/([0-9]+)/)) {
            var trouvailles = ancre.match(/^#modifier-cadeau\/([0-9]+)/);

            var id = trouvailles[1];
            var cadeau = this.cadeauDAO.getCadeauParId(id);
            var modifierCadeauVue = new ModifierCadeauVue(cadeau);

            modifierCadeauVue.afficher();
        }
        else if (ancre.match(/^#supprimer-cadeau\/([0-9]+)/)) {
            var trouvailles = ancre.match(/^#supprimer-cadeau\/([0-9]+)/);

            var id = trouvailles[1];
            var cadeau = this.cadeauDAO.getCadeauParId(id);
            this.cadeauDAO.supprimerCadeau(cadeau);
            window.location.hash = "#";
        }
        else if (ancre.match(/^#ModifierCadeauVue:Modifier/)) {
            window.location.hash = "#";
        }
        else if (ancre.match(/^#AjouterCadeauVue:NouveauCadeau/)) {
            var cadeau = this.ajouterCadeauVue.cadeau;
            this.cadeauDAO.ajouterCadeau(cadeau);
            window.location.hash = "#";
        }
        else
        {
            var trouvailles = ancre.match(/^#cadeau\/([0-9]+)/);

            var id = trouvailles[1];
            var cadeau = this.cadeauDAO.getCadeauParId(id);
            var cadeauVue = new CadeauVue(cadeau);

            cadeauVue.afficher();
        }
    }
}

applicationListeNoel.lancer();