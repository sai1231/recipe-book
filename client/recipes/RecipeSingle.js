Template.RecipeSingle.onCreated(function(){
	var self = this;
	self.autorun(function(){
		var id = FlowRouter.getParam('id')
		self.subscribe('singleRecipe');
		//console.log(id);
	})
})


Template.RecipeSingle.helpers({
	recipe: ()=> {
		var id = FlowRouter.getParam('id')
		var data =  Recipes.findOne({_id: id});
		console.log(id);
		return data;


	}
})