var CadeauDAO = function ()
{
    var listeCadeau = [
        { "id": 1, "nom": "Pebble", "marque": "Pebble", "description": "Montre intel" },
        { "id": 2, "nom": "iPhone", "marque": "Apple", "description": "telephone" },
        { "id": 3, "nom": "Galaxy S7", "marque": "Samsung", "description": "telephone" },
        { "id": 4, "nom": "iPhone X", "marque": "Apple", "description": "telephone" },
        { "id": 5, "nom": "Galaxy S8", "marque": "Samsung", "description": "telephone" },
        { "id": 6, "nom": "iPad Pro", "marque": "Apple", "description": "telephone" },
        { "id": 7, "nom": "Surface pro", "marque": "Microsoft", "description": "telephone" }
    ];

    this.getListeCadeau = function ()
    {
        return listeCadeau;
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