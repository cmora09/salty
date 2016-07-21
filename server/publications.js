//Server is publishing all the content of Rants.
Meteor.publish('rants', function(){
	return Rants.find();
});
Meteor.publish('ownRants', function(username) {  
  return Rants.find( { user: username });
});