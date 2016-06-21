//sets character count to 0 when the form is rendered
Template.rantForm.onRendered(function () {  
  Session.set('charNum', 0);
});

Template.rantForm.events({
	//grabs current value of the text area.
	'input .rant-box': function() {
		Session.set('charNum', $('.rant-box').val().length);
	},

	'click .rant-button': function() {
		var rant = $('.rant-box').val();
		$('.rant-box').val("");
		Session.set('charNum', 0);
		Meteor.call('insertRant', rant);
	}
});
Template.rantForm.helpers({
	//gets current 'charNum' and subtracts it from 200 to show how many characters are left for the rant
	charCount: function() {
		return 150 - Session.get('charNum');
	},
	//returns different color text is the character count exceeds 200
	charClass: function() {
		if (Session.get('charNum') > 150){
			return 'errCharCount'; //css class name
		}
		else{
			return 'charCount'; //css class name
		}
	},
	//disables button if character number is 0 or less or if the charnum is greater than 200
	disableButton: function() {
		if (Session.get('charNum') <= 0 || Session.get('charNum') > 150 || !Meteor.user()){
			return 'disabled';
		}
	}
});



