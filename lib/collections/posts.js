Posts = new Mongo.Collection('postsList');
Burgers = new Mongo.Collection("BurgersList");
Boissons = new Mongo.Collection("BoissonsList");
Salades = new Mongo.Collection("SaladesList");
// Commandes = new Mongo.Collection("commandesList");




Posts.allow({
    update: function(userId, post) { return ownsDocument(userId, post); },
    remove: function(userId, post) { return ownsDocument(userId, post); },
});

Posts.deny({update: function(userId, post, fieldNames) {
    // may only edit the following two fields:
    return (_.without(fieldNames, 'url', 'title').length > 0);
}
});

// //////ERRORS
// Posts.deny({
//     update: function(userId, post, fieldNames, modifier) {
//         var errors = validatePost(modifier.$set);
//         return errors.title || errors.url;
//     }
// });

// validatePost = function (post) {
//     var errors = {};
//     if (!post.title)
//         errors.title = "Please fill in a headline";
//     if (!post.url)
//         errors.url = "Please fill in a URL";
//     return errors;
// }


Meteor.methods({
    postInsert: function(postAttributes) {
        check(Meteor.userId(), String);
        check(postAttributes, {
            title: String,
            url: String
        });


        if (Meteor.isServer) {
            postAttributes.title += postAttributes.title + "(server)";
            // attente de 5 secondes
            Meteor._sleepForMs(5000);
        } else {
            postAttributes.title += "(client)";
        }




        /////ERRORS
        // var errors = validatePost(postAttributes);
        // if (errors.title || errors.url)
        //     throw new Meteor.Error('invalid-post', "You must set a title and URL for your post");





        var postWithSameLink = Posts.findOne({url: postAttributes.url});
        if (postWithSameLink ){
            return {
                postExists: true,
                _id: postWithSameLink._id
            }
        }

        var user = Meteor.user();
        var post = _.extend(postAttributes, {
            userId: user._id,
            author: user.username,
            submitted: new Date()
        });
        var postId = Posts.insert(post);
        return {
            _id: postId
        };
    }
});

// Posts.allow({
//     insert: function(userId, doc){
//         // autoriser les posts seulement si l'utilisateur est authentifié
//         return !! userId;
//     }
// });
