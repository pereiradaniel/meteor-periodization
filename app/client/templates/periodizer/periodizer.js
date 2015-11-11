/*****************************************************************************/
/* Periodizer: Event Handlers */
/*****************************************************************************/
Template.Periodizer.events({
	'submit #periodizer_form': function(event) {
			event.preventDefault()
			t = event.target

			var weeks = t.weeks.value
			var no_of_exercises = t.no_of_exercises.value
			console.log('from function')
			console.log(Meteor.userId())
			Periodizers.insert({
				weeks: weeks,
				no_of_exercises: no_of_exercises,
				userId: Meteor.userId()
			}, function(err, res) {
				if(!err) {
					console.log('success')
				} else {
					console.log('failure')
				}
			})

			t.weeks.value = "";
			t.no_of_exercises.value ="";
	}
});

/*****************************************************************************/
/* Periodizer: Helpers */
/*****************************************************************************/
Template.Periodizer.helpers({
});

/*****************************************************************************/
/* Periodizer: Lifecycle Hooks */
/*****************************************************************************/
Template.Periodizer.onCreated(function () {
});

Template.Periodizer.onRendered(function () {
});

Template.Periodizer.onDestroyed(function () {
});

