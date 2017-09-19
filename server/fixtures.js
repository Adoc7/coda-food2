// if (Posts.find().count() === 0) {
//     Posts.insert({
//         // Introducing Telescope
//         title: 'cha cha cha',
//         url: 'http://sachagreif.com/introducing-telescope/'
//     });
//
//     Posts.insert({
//         title: 'Meteor',
//         url: 'http://meteor.com'
//     });
//
//     Posts.insert({
//         title: 'The Meteor Book',
//         url: 'http://themeteorbook.com'
//     });
// }

///////////////////////////////////////////////////////////////////////
// Alimentation de la base de données avec des données par défault //
///////////////////////////////////////////////////////////////://///

if (Posts.find().count() === 0) {

    let PostsList =[
        {
            name: "Pizzas",
            image: "order2.png"
        },
        {
            name: "Burgers",
            image: "b1.png"
        },
        {
            name: "Salades",
            image: "sa1.png"
        },
        {
            name: "Boissons",
            image: "bo1.png"
        },
        {
            name: "Desserts",
            image: "d1.png"
        }
    ];


    _.each(PostsList, function (doc) {
        Posts.insert(doc);
    });


/////////////////////////////////////////////////////////////////////
///////////////////// Insertion des Pizzas /////////////////////////
///////////////////////////////////////////////////////////////////

    let PizzasList= [{
        image: "order1.png",
        name: "Paysanne ",
        description: "Sauce tomate, emmenthal, lardons fumés, champignons frais émincés, oeuf, mozzarella fraiche, olives noires confites. ",
        price: 10
    },
        {
            image: "order2.png",
            name: "Royale",
            description: "Sauce tomate, emmenthal, épaule cuite tradition, champignons frais émincés, mozzarella fraiche, olives noires confites. ",
            price: 10
        },
        {
            image: "order3.png",
            name: "Valencia",
            description: "Sauce tomate, emmenthal, chorizo traiteur, poivrons frais, oeuf, mozzarella fraiche, olives noires confites. ",
            price: 10
        },
        {
            image: "order4.png",
            name: "4 saisons",
            description: "Sauce tomate, emmenthal, épaule cuite tradition, champignons frais émincés, petits artichauts grillés, mozzarella fraiche, olives noires confites. ",
            price: 10
        },
        {
            image: "order5.png",
            name: "Buffalo",
            description: "Sauce tomate, emmenthal, steak haché, oignons cuits, mozzarella fraiche, olives noires confites. ",
            price: 10
        },
        {
            image: "order6.png",
            name: "Hawaïenne",
            description: "Sauce tomate, emmenthal, épaule cuite tradition, dés d'ananas crus rôtis, mozzarella fraiche, olives noires confites",
            price: 10
        }
    ];

    _.each(PizzasList, function (doc) {
        Pizzas.insert(doc);
    });


/////////////////////////////////////////////////////////////////////
///////////////////// Insertion des Burgers ////////////////////////
///////////////////////////////////////////////////////////////////

    let BurgersList = [{
        image: "b1.png",
        name: "Le Daron ",
        description: "Après une bonne journée passée à couper du bois à la force des ongles rien ne vaut un bon daron ! Des champignons, des oignons frais et du munster pour l’haleine de bûcheron, du lard et de la sauce ciboulette pour se remplir la panse, bref, le daron c’est comme Mennen : « pour nous les gnomes ! » ",
        price: 7
    },
        {
            image: "b2.png",
            name: "Le grand papa",
            description: "Qu’il pleuve, qu’il vente ou qu’il canicule, il y a pas de saison pour la raclette ! Un bon steak de boeuf, une belle tranche de jambon cru, quelques oignons confits, une poignée de champignons de Lutèce et un nappage de sauce cocktail, chuuuuut ! Tu l’entends chanter dans tes oreilles le bel accent savoyard ? ",
            price: 7
        },
        {
            image: "b3.png",
            name: "La poulette",
            description: "Ôte tes tongs et allume la lumière de tes chakras ! hume ce délicieux poulet pané agrémenté de cheddar ! Hume ces quelques rondelles de tomate, cette roquette et sa sauce curry ! Bienvenu au Nirvana du burger, Papa sait aussi prendre soin de ton karma ! ",
            price: 7
        },
        {
            image: "b4.png",
            name: "Le tête de lard",
            description: "Du lard paysan toasté délicatement posée sur du cheddar fondu et une viande de boeuf limousine, c’est du velours ! Mais alors quand on y ajoute quelques rondelles de tomate, de la roquette et une sauce béarnaise, là je vous le dis : cette Tête de lard, c’est de l’art ! ",
            price: 7
        },
        {
            image: "b5.png",
            name: "Le gaillard",
            description: "C’est toi qui as peté ? Mais non c’est la bonne odeur du Munster ! Ce fromage alsacien relevé de quelques grains de cumin se marie parfaitement avec un bon steak de boeuf hâché, des oignons confits et de la roquette du jardin. Quant à sa sauce tartare… je me l’envoie dare-dare ! ",
            price: 7
        },
        {
            image: "b6.png",
            name: "Le fils à papa",
            description: "Prêt pour un détour aux States en ouvrant simplement la bouche ? Un croc dans ce fils à Papa et ses oignons frits, pickles et sauce américaine t’emmène à Manhattan plus vite que le Concorde ! Oooooh yeah !",
            price: 7
        }
    ];
    _.each(BurgersList, function (doc) {
        Burgers.insert(doc);
    });

/////////////////////////////////////////////////////////////////////
///////////////////// Insertion des Salades ///////////////////////
///////////////////////////////////////////////////////////////////

    let SaladesList = [{
        image: "sa1.png",
        name: "L'auvergnate ",
        description: "Après une bonne journée passée à couper du bois à la force des ongles rien ne vaut un bon daron ! Des champignons, des oignons frais et du munster pour l’haleine de bûcheron, du lard et de la sauce ciboulette pour se remplir la panse, bref, le daron c’est comme Mennen : « pour nous les gnomes ! » ",
        price: 8
    },
        {
            image: "sa2.png",
            name: "La Nordiste",
            description: "Qu’il pleuve, qu’il vente ou qu’il canicule, il y a pas de saison pour la raclette ! Un bon steak de boeuf, une belle tranche de jambon cru, quelques oignons confits, une poignée de champignons de Lutèce et un nappage de sauce cocktail, chuuuuut ! Tu l’entends chanter dans tes oreilles le bel accent savoyard ? ",
            price: 8
        },
        {
            image: "sa3.png",
            name: "L'hollandaise",
            description: "Ôte tes tongs et allume la lumière de tes chakras ! hume ce délicieux poulet pané agrémenté de cheddar ! Hume ces quelques rondelles de tomate, cette roquette et sa sauce curry ! Bienvenu au Nirvana du burger, Papa sait aussi prendre soin de ton karma ! ",
            price: 8
        },
        {
            image: "sa4.png",
            name: " La Provençale",
            description: "Du lard paysan toasté délicatement posée sur du cheddar fondu et une viande de boeuf limousine, c’est du velours ! Mais alors quand on y ajoute quelques rondelles de tomate, de la roquette et une sauce béarnaise, là je vous le dis : cette Tête de lard, c’est de l’art ! ",
            price: 8
        },
        {
            image: "sa5.png",
            name: "La César",
            description: "C’est toi qui as peté ? Mais non c’est la bonne odeur du Munster ! Ce fromage alsacien relevé de quelques grains de cumin se marie parfaitement avec un bon steak de boeuf hâché, des oignons confits et de la roquette du jardin. Quant à sa sauce tartare… je me l’envoie dare-dare ! ",
            price: 8
        },
        {
            image: "sa6.png",
            name: "Le fils à papa",
            description: "Prêt pour un détour aux States en ouvrant simplement la bouche ? Un croc dans ce fils à Papa et ses oignons frits, pickles et sauce américaine t’emmène à Manhattan plus vite que le Concorde ! Oooooh yeah !",
            price: 8
        }
    ];
    _.each(SaladesList, function (doc) {
        Salades.insert(doc);
    });




    /////////////////////////////////////////////////////////////////////
///////////////////// Insertion des Desserts ///////////////////////
///////////////////////////////////////////////////////////////////

    let DessertsList = [{
        image: "d1.png",
        name: "Le Mont-blanc ",
        description: "Après une bonne journée passée à couper du bois à la force des ongles rien ne vaut un bon daron ! Des champignons, des oignons frais et du munster pour l’haleine de bûcheron, du lard et de la sauce ciboulette pour se remplir la panse, bref, le daron c’est comme Mennen : « pour nous les gnomes ! » ",
        price: 5
    },
        {
            image: "d2.png",
            name: "Le Soufflet",
            description: "Qu’il pleuve, qu’il vente ou qu’il canicule, il y a pas de saison pour la raclette ! Un bon steak de boeuf, une belle tranche de jambon cru, quelques oignons confits, une poignée de champignons de Lutèce et un nappage de sauce cocktail, chuuuuut ! Tu l’entends chanter dans tes oreilles le bel accent savoyard ? ",
            price: 5
        },
        {
            image: "d3.png",
            name: "Le Do Note",
            description: "Ôte tes tongs et allume la lumière de tes chakras ! hume ce délicieux poulet pané agrémenté de cheddar ! Hume ces quelques rondelles de tomate, cette roquette et sa sauce curry ! Bienvenu au Nirvana du burger, Papa sait aussi prendre soin de ton karma ! ",
            price: 5
        },
        {
            image: "d4.png",
            name: " Le Glacier des aromes",
            description: "Du lard paysan toasté délicatement posée sur du cheddar fondu et une viande de boeuf limousine, c’est du velours ! Mais alors quand on y ajoute quelques rondelles de tomate, de la roquette et une sauce béarnaise, là je vous le dis : cette Tête de lard, c’est de l’art ! ",
            price: 5
        },
        {
            image: "d5.png",
            name: "Le Glacier d'Italie",
            description: "C’est toi qui as peté ? Mais non c’est la bonne odeur du Munster ! Ce fromage alsacien relevé de quelques grains de cumin se marie parfaitement avec un bon steak de boeuf hâché, des oignons confits et de la roquette du jardin. Quant à sa sauce tartare… je me l’envoie dare-dare ! ",
            price: 5
        },
        {
            image: "d6.png",
            name: "Le Cornet des plaisirs",
            description: "Prêt pour un détour aux States en ouvrant simplement la bouche ? Un croc dans ce fils à Papa et ses oignons frits, pickles et sauce américaine t’emmène à Manhattan plus vite que le Concorde ! Oooooh yeah !",
            price: 5
        }
    ];
    _.each(DessertsList, function (doc) {
        Desserts.insert(doc);
    });



/////////////////////////////////////////////////////////////////////
///////////////////// Insertion des Boissons ///////////////////////
///////////////////////////////////////////////////////////////////

    let BoissonsList = [{
        image: "bo1.png",
        name: "Coda Coulo",
        description: "Après une bonne journée passée à couper du bois à la force des ongles rien ne vaut un bon daron ! Des champignons, des oignons frais et du munster pour l’haleine de bûcheron, du lard et de la sauce ciboulette pour se remplir la panse, bref, le daron c’est comme Mennen : « pour nous les gnomes ! » ",
        price: 1
    },
        {
            image: "bo2.png",
            name: "Coda Coulo Light",
            description: "Qu’il pleuve, qu’il vente ou qu’il canicule, il y a pas de saison pour la raclette ! Un bon steak de boeuf, une belle tranche de jambon cru, quelques oignons confits, une poignée de champignons de Lutèce et un nappage de sauce cocktail, chuuuuut ! Tu l’entends chanter dans tes oreilles le bel accent savoyard ? ",
            price: 1
        },
        {
            image: "bo3.png",
            name: "Coda Coulo Zero",
            description: "Ôte tes tongs et allume la lumière de tes chakras ! hume ce délicieux poulet pané agrémenté de cheddar ! Hume ces quelques rondelles de tomate, cette roquette et sa sauce curry ! Bienvenu au Nirvana du burger, Papa sait aussi prendre soin de ton karma ! ",
            price: 1
        },
        {
            image: "bo4.png",
            name: "Fanto",
            description: "Du lard paysan toasté délicatement posée sur du cheddar fondu et une viande de boeuf limousine, c’est du velours ! Mais alors quand on y ajoute quelques rondelles de tomate, de la roquette et une sauce béarnaise, là je vous le dis : cette Tête de lard, c’est de l’art ! ",
            price: 1
        },
        {
            image: "bo5.png",
            name: "Spread",
            description: "C’est toi qui as peté ? Mais non c’est la bonne odeur du Munster ! Ce fromage alsacien relevé de quelques grains de cumin se marie parfaitement avec un bon steak de boeuf hâché, des oignons confits et de la roquette du jardin. Quant à sa sauce tartare… je me l’envoie dare-dare ! ",
            price: 1
        },
        {
            image: "bo6.png",
            name: "Festea",
            description: "Prêt pour un détour aux States en ouvrant simplement la bouche ? Un croc dans ce fils à Papa et ses oignons frits, pickles et sauce américaine t’emmène à Manhattan plus vite que le Concorde ! Oooooh yeah !",
            price: 1
        }
    ];
    _.each(BoissonsList, function (doc) {
        Boissons.insert(doc);
    });



}