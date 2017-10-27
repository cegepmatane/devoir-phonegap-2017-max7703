var applicationListeNoel = {
    cadeauDAO: new CadeauDAO(),
    lancer: function ()
    {
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