/*****************************************************************************/
/* SetsOfExercise: Event Handlers */
/*****************************************************************************/
Template.SetsOfExercise.events({
});

/*****************************************************************************/
/* SetsOfExercise: Helpers */
/*****************************************************************************/
Template.SetsOfExercise.helpers({
	'exercise_name': function(target) {
    var this_exericse = Exercises.find({ _id: target[0].exercise_id }).fetch()[0]
    return this_exericse.exercise_name
  }
});

/*****************************************************************************/
/* SetsOfExercise: Lifecycle Hooks */
/*****************************************************************************/
Template.SetsOfExercise.onCreated(function () {
});

Template.SetsOfExercise.onRendered(function () {
});

Template.SetsOfExercise.onDestroyed(function () {
});
