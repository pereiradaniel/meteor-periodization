/*****************************************************************************/
/* ExerciseSet: Event Handlers */
/*****************************************************************************/
Template.ExerciseSet.events({
});

/*****************************************************************************/
/* ExerciseSet: Helpers */
/*****************************************************************************/
Template.ExerciseSet.helpers({
	'exercise_name': function(target) {
    var this_exericse = Exercises.find({ _id: target.exercise_id }).fetch()[0]
    return this_exericse.exercise_name
  }
});

/*****************************************************************************/
/* ExerciseSet: Lifecycle Hooks */
/*****************************************************************************/
Template.ExerciseSet.onCreated(function () {
});

Template.ExerciseSet.onRendered(function () {
});

Template.ExerciseSet.onDestroyed(function () {
});
