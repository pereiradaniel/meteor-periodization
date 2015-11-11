/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.Home.events({
});

/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/
Template.Home.helpers({

	'user_has_periodizer': function() {
		return Periodizers.find({ userId: Meteor.userId() }).count()
	},
	loopCount: function(count){
    var countArr = [];
    for (var i=0; i<count; i++){
      countArr.push({});
    }
    return countArr;
  },
  'no_of_exercises': function() {
    var periodizer = Periodizers.find({ userId: Meteor.userId() }).fetch()
    var count = periodizer[0].no_of_exercises
    return count;
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
