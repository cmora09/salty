Meteor.methods({
	insertRant: function(rant){
		if (Meteor.user()) {
			Rants.insert({
				message: rant,
				user: Meteor.user().username,
				timestamp: new Date()
			})
		}
	}
});