/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.Home.events({
    'submit #exercises_form': function(event) {
      event.preventDefault()
      // t = event.target

      debugger
      var periodizer = Periodizers.find({ userId: Meteor.userId() }).fetch()[0]._id
      var forms = _.map($('.exercise-form'), function(form) { return $(form) })
      var arrayLength = forms.length

      var addExercise = function(exercise_name, one_rm) {
          Exercises.insert({
            exercise_name: exercise_name,
            one_rm: one_rm,
            periodizer_id: periodizer
          })
        }
    
      for (var i = 0; i < arrayLength; i++) {
          var form = forms[i]
          var exercise_name = form.children('.exercise_name').val()
          var one_rm = form.children('.one_rm').val()
          addExercise(exercise_name, one_rm)
        }
      }

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
