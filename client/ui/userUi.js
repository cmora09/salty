Template.userUi.events({
	'click .signup-button': function(){
		var user = {
			username: $('.signup-username').val(),
			password: $('.signup-password').val(),
			profile:{
				fname: $('.signup-fname').val(),
				lname: $('.signup-lname').val()
			}
		};
		Accounts.createUser(user, function(error){
			if(error) alert(error);
		});
	},
	'click .signin-button': function(){
		var username = $('.signin-username').val();
		var password = $('.signin-password').val();

		Meteor.loginWithPassword(username, password, function(error){
			if(error) alert(error);
		});
	},
	'click .logout': function(){
		Meteor.logout();
	}
});