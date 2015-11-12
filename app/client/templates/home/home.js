/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.Home.events({
    'submit #exercises_form': function(event) {
      event.preventDefault()
      
      // Variables from DOM
      var periodizer = Periodizers.find({ userId: Meteor.userId() }).fetch()[0]._id
      var periodizer_id = periodizer._id
      var forms = _.map($('.exercise-form'), function(form) { return $(form) })
      var number_of_forms = forms.length
      
      // Variables required to calculate sets
      var weeks = pdizer.weeks
      var exercises = Exercises.find({ periodizer_id: periodizer }).fetch()
        var sets = 4
        var set_increment = 0.05
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

    addExercise: function(exercise_name, one_rm) {
          Exercises.insert({
            exercise_name: exercise_name,
            one_rm: one_rm,
            periodizer_id: periodizer_id
          })
        },
    
    calculateWeeklySet: function(week_number, exercise) {
      var base_relative_to_week = base_percentage + (weekly_percentage_increment * week_number)
      var max = exercises[exercise].one_rm
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

    addChartToCollection: function() {
      Charts.insert({
        user_id: Meteor.userId(),
        periodization_id: periodizer_id,
      })
      
      var chart = Charts.find({ userId: Meteor.userId() }).fetch()[0]

      for (var week = 1; week < weeks; week++) {
        var calculated_week = {}
        for (var exercise = 0; exercise < exercises.length; exercise++) {
          var exercise_weekly_set = calculateWeeklySet(week, exercises[exercise])
          calculated_week.push({exercise_weekly_set})
        }
        chart.push({calculated_week})
      }
    },

    // ADDS EXERCISE DOCUMENTS TO COLLECTION
    for (var current_form = 0; current_form < number_of_forms; i++) {
        form = forms[current_form]
        exercise_name = form.children('.exercise_name').val()
        one_rm = form.children('.one_rm').val()
        addExercise(exercise_name, one_rm)
      }

      addChartToCollection()

    // ADDS CHART DOCUMENT TO COLLECTION

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
