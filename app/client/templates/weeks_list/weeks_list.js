/*****************************************************************************/
/* WeeksList: Event Handlers */
/*****************************************************************************/
Template.WeeksList.events({
});

/*****************************************************************************/
/* WeeksList: Helpers */
/*****************************************************************************/
Template.WeeksList.helpers({
	'week_number': function(target) {
    var this_week_number = target[0][0].week
    return this_week_number
  }
});

/*****************************************************************************/
/* WeeksList: Lifecycle Hooks */
/*****************************************************************************/
Template.WeeksList.onCreated(function () {
});

Template.WeeksList.onRendered(function () {
});

Template.WeeksList.onDestroyed(function () {
});
