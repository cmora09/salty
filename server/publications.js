//Server is publishing all the content of Rants.
Meteor.publish('rants', function(){
	return Rants.find();
});