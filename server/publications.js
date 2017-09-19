Meteor.publish('posts', function() {
    return Posts.find();
});


Meteor.publish('postsList', function() {
    return Posts.find();
});


Meteor.publish('PizzasList', function() {
    return Pizzas.find();
});

Meteor.publish('SaladesList', function() {
    return Salades.find();
});


Meteor.publish('BurgersList', function() {
    return Burgers.find();
});

Meteor.publish('DessertsList', function() {
    return Desserts.find();
});

Meteor.publish('BoissonsList', function() {
    return Boissons.find();
});



Meteor.publish('commandesList', function() {
    return Commandes.find();
})





