/*****************************************************************************/
/* SetExercises: Event Handlers */
/*****************************************************************************/
Template.SetExercises.events({
});

/*****************************************************************************/
/* SetExercises: Helpers */
/*****************************************************************************/
Template.SetExercises.helpers({
	loopCount: function(count){
    var countArr = [];
    for (var i=0; i<count; i++){
      countArr.push({});
    }
    return countArr;
  },
	'no_of_exercises': function() {
    var periodizer = Periodizers.find({ user_id: Meteor.userId() }).fetch()
    var count = periodizer[0].no_of_exercises
    return count;
  }
});

/*****************************************************************************/
/* SetExercises: Lifecycle Hooks */
/*****************************************************************************/
Template.SetExercises.onCreated(function () {
});

Template.SetExercises.onRendered(function () {
});

Template.SetExercises.onDestroyed(function () {
});
