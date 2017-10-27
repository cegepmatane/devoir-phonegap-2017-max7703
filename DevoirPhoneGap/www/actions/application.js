var applicationListeNoel = {
    lancer: function ()
    {
        this.naviguer();
    },

    naviguer: function ()
    {
        var ancre = window.location.hash;
        if (!ancre)
        {
            var listeCadeauVue = new ListeCadeauVue();

            listeCadeauVue.afficher();
        }
    }
}

applicationListeNoel.lancer();