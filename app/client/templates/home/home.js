/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.Home.events({
    'submit #exercises_form': function(event) {
      event.preventDefault()
      // t = event.target

      var periodizer = Periodizers.find({ userId: Meteor.userId() }).fetch()[0]._id
      var forms = _.map($('.exercise-form'), function(form) { return $(form) })
      var arrayLength = forms.length

      var current_week = []

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
      },

    var chart = Charts.insert({
      periodizer_id: periodizer
    })

    var periodizer = Periodizers.find({ userId: Meteor.userId() }).fetch()[0]
    var weeks = perodizer.weeks
    var exercises = Exercises.find({ periodizer_id: periodizer }).fetch()
      var no_of_exercises = periodizer.no_of_exercises
      var strength_weeks = weeks - 1
      var base_percentage = 0.6
      var high_percentage = 0.8
      var final_week_base_percentage = 0.5
      var heaviest_percentage = 0.95
      var heavy_reps = 3
      var light_reps = 6
      var weekly_percentage_increment = (high_percentage - base_percentage) / strength_weeks
      var weekly_rep_decrement = (light_reps - heavy_reps) / strength_weeks // ROUND THIS # !!!

    // iterate over each week - insert into chart after -> iterate over each exercise - insert into week


    calculateWeeklySet: function(week_number, exercise) {
      var set_increment = 0.05
      var base_relative_to_week = base_percentage + (weekly_percentage_increment * week_number)
      var max = exercises[exercise].one_rm
      var sets = 4
      var reps = light_reps - (weekly_rep_decrement * week_number)
      for var(set = 1; set < sets; set++) {
        var percent = base_relative_to_week + (set * 0.05)
        var weight_this_set = percent * max
        output.push({
          set: set,
          weight_this_set: weight_this_set,
          reps: reps
        })
      }
      return output
    },

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
