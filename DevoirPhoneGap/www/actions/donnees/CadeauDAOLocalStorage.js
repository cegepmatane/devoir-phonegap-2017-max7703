var CadeauDAOLocalStorage = function () {

    listeCadeau = null;

    initialiser = function () {
        if (!listeCadeau && localStorage['cadeau']) {
            listeCadeau = new Array();
            listeAnonyme = JSON.parse(localStorage['cadeau']);
            for (var indiceAnonyme in listeAnonyme) {
                cadeauAnonyme = listeAnonyme[indiceAnonyme];
                cadeau = new Cadeau(cadeauAnonyme.nom,
                    cadeauAnonyme.marque,
                    cadeauAnonyme.prix,
                    cadeauAnonyme.description,
                    cadeauAnonyme.id);

                listeCadeau.push(cadeau);
            }
        }
    }

    this.getListeCadeau = function () {
        return listeCadeau;
    }

    trouverNouvelId = function () {
        maximum = 0;
        for (var indiceCadeau in listeCadeau) {
            cadeau = listeCadeau[indiceCadeau];
            if (cadeau.id > maximum)
                maximum = cadeau.id;
        }
        return maximum + 1;
    }
    this.ajouterCadeau = function (cadeau) {
        cadeau.id = trouverNouvelId();
        listeCadeau.push(cadeau);
        localStorage['cadeau'] = JSON.stringify(listeCadeau);
    }
    this.modifierCadeau = function (cadeau) {
        listeCadeau[cadeau.id - 1] = cadeau;
    }
    this.supprimerCadeau = function (cadeau) {
        var index = listeCadeau.indexOf(cadeau);
        if (index > -1) {
            listeCadeau.splice(index, 1);
        }
    }
    this.getCadeauParId = function (id) {

        for (var indiceCadeau in listeCadeau) {
            cadeau = listeCadeau[indiceCadeau];
            if (cadeau.id == id) return cadeau;
        }
    }

    initialiser();

}