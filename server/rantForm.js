Meteor.methods({
	insertRant: function(rant){
		if (Meteor.user()) {
			Rants.insert({
				message: rant,
				user: Meteor.user().username,
				timestamp: moment(Date.now()).format("dddd, MMMM Do YYYY, h:mm:ss a")
			})
		}
	}
});