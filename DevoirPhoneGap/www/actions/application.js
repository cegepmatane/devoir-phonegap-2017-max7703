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
    }
}

applicationListeNoel.lancer();