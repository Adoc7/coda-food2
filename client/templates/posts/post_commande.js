import './post_commande.html';

Meteor.subscribe("postPageCommande");

Template.postPageCommande.helpers({
    // pizzas: function(){return Pizzas.find()}
    PizzasList: function(){return Pizzas.find()}
});





// Template.postPageCommande.events({
//     'submit form': function(e) {
//         e.preventDefault();
//
//         var currentPostId = this._id;
//
//         var postProperties= {
//             image: $(e.target).find('[name=image]').val(),
//             mame:$(e.target).find('[name=name]').val(),
//             description:$(e.target).find('[name=description]').val(),
//             price:$(e.target).find('[name=price]').val()
//         }
//
//
//         Posts.update(currentPostId, {$set: postProperties}, function(error) {
//             if (error) {
//                 // affiche l'erreur à l'utilisateur
//                 alert(error.reason);
//
//             } else {
//                 Router.go('postCommande', {_id: currentPostId});
//             }
//         });
//     },
//
//     'click .delete': function(e) {
//         e.preventDefault();
//
//         if (confirm("Delete this post?")) {
//             var currentPostId = this._id;
//             Posts.remove(currentPostId);
//             Router.go('postsCommande');
//         }
//     }
// });