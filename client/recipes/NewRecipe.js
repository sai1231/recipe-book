Template.Recipes.events({
	'click .fa-close': function(event, template) {
		Session.set('newRecipe', false);
	}
});