//Client is subscribing to it inside this template.
Template.rantFeed.onCreated( function(){
	if(Meteor.user()){
		this.subscribe('rants');
	}
});

Template.rantFeed.helpers({
	'rantMessage': function(){
		return Rants.find({}, {
			sort: {timestamp: -1},
			limit: 20
		});
	}
});