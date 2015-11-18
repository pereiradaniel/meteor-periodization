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
    return Periodizers.find({ user_id: Meteor.userId() }).count()
  },
  'user_has_chart': function() {
    return Charts.find({ user_id: Meteor.userId() }).count()
  },
  'user_has_exercises': function() {
    var periodizer = Periodizers.find({ user_id: Meteor.userId() }).fetch()[0]
    return Exercises.find({ periodizer_id: periodizer._id }).count()
  },
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
