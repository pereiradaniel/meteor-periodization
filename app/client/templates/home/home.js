/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.Home.events({
});

/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/
Template.Home.helpers({

	'exercises': function() {
		var users_per_plan = Periodizers.find({ userId: Meteor.userId() })
		return users_per_plan.no_of_exercises
	},
	'user_has_periodizer': function() {
		Periodizers.find({ userId: Meteor.userId() })
	},
	loopCount: function(){
    var countArr = [];
    for (var i=0; i< ; i++){
      countArr.push({});
    }
    return countArr;
  }
});

/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.Home.onCreated(function () {
});

Template.Home.onRendered(function () {
});

Template.Home.onDestroyed(function () {
});
