import './home.html';

Meteor.subscribe("PostsList");

Template.PostsList.helpers({
    posts: function(){return Posts.find()}
});