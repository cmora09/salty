Template.ownFeed.onCreated( function(){
	if(Meteor.user()){
		this.subscribe('ownRants', Meteor.user().username);
	}
});

Template.ownFeed.helpers({
	'ownMessage': function(){
		return Rants.find( {user: Meteor.user().username}, {
			sort: {timestamp: -1},
			limit: 20
		});
	}
});