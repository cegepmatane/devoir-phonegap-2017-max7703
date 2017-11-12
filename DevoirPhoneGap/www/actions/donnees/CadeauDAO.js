var CadeauDAO = function ()
{
    /*var listeCadeau = [
        { "id": 1, "nom": "Pebble", "marque": "Pebble", "description": "Montre intel" },
        { "id": 2, "nom": "iPhone", "marque": "Apple", "description": "telephone" },
        { "id": 3, "nom": "Galaxy S7", "marque": "Samsung", "description": "telephone" },
        { "id": 4, "nom": "iPhone X", "marque": "Apple", "description": "telephone" },
        { "id": 5, "nom": "Galaxy S8", "marque": "Samsung", "description": "telephone" },
        { "id": 6, "nom": "iPad Pro", "marque": "Apple", "description": "telephone" },
        { "id": 7, "nom": "Surface pro", "marque": "Microsoft", "description": "telephone" }
    ];*/

    var cadeau1 = new Cadeau("Pebble", "Intel", 200, "Montre intelligente", 1);
    var cadeau2 = new Cadeau("iPhone", "Apple", 800, "Smartphone", 2);
    var cadeau3 = new Cadeau("Galaxy S7", "Samsung", 700, "Smartphone", 3);
    var cadeau4 = new Cadeau("Phone X", "Apple", 1200, "Smartphone", 4);
    var cadeau5 = new Cadeau("Galaxy S8", "Samsung", 800, "Smartphone", 5);
    var cadeau6 = new Cadeau("iPad Pro", "Apple", 1000, "Tablette", 6);
    var cadeau7 = new Cadeau("Surface pro", "Microsoft", 1400, "PC Portable", 7);

    listeCadeau = [cadeau1, cadeau2, cadeau3, cadeau4, cadeau5, cadeau6, cadeau7];

    this.getListeCadeau = function ()
    {
        return listeCadeau;
    }

    trouverNouvelId = function () {
        maximum = 0;
        for (var indiceCadeau in listeCadeau) {
            cadeau = listeCadeau[indiceCadeau];
            if (cadeau.id > maximum)
                maximum = cadeau.id;
            //if (cadeau.id == id) return cadeau;
        }
        return maximum + 1;
    }

    this.ajouterCadeau = function (cadeau) {
        cadeau.id = trouverNouvelId();
        listeCadeau.push(cadeau);
    }

    this.getCadeauParId = function (id)
    {
        for (var indiceCadeau in listeCadeau)
        {
            cadeau = listeCadeau[indiceCadeau];
            if (cadeau.id == id) return cadeau;
        }
    }
}