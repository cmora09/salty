//sets character count to 0 when the form is rendered
Template.rantForm.onRendered(function () {  
  Session.set('charNum', 0);
});

Template.rantForm.events({
	//grabs current value of the text area.
	'input .rantBox': function() {
		Session.set('charNum', $('.rantBox').val().length);
	},

	'click .rant-button': function() {
		var rant = $('.rantBox').val();
		$('.rantBox').val("");
		Session.set('charNum', 0);
		Meteor.call('insertRant', rant);
	}
});
Template.rantForm.helpers({
	//gets current 'charNum' and subtracts it from 200 to show how many characters are left for the rant
	charCount: function() {
		return 175 - Session.get('charNum');
	},
	//returns different color text is the character count exceeds 200
	charClass: function() {
		if (Session.get('charNum') > 175){
			return 'errCharCount'; //css class name
		}
		else{
			return 'charCount'; //css class name
		}
	},
	//disables button if character number is 0 or less or if the charnum is greater than 200
	disableButton: function() {
		if (Session.get('charNum') <= 0 || Session.get('charNum') > 175|| !Meteor.user()){
			return 'disabled';
		}
	}
});



