/*****************************************************************************/
/* Chart: Event Handlers */
/*****************************************************************************/
Template.Chart.events({

});

/*****************************************************************************/
/* Chart: Helpers */
/*****************************************************************************/
Template.Chart.helpers({
	'chart': function() {  
    // var chart = Charts.find({ user_id: Meteor.userId() }).fetch()[0]
    // var chart_weeks = chart.weeks
    return Charts.find({ user_id: Meteor.userId() }).fetch()[0]
  }
});

/*****************************************************************************/
/* Chart: Lifecycle Hooks */
/*****************************************************************************/
Template.Chart.onCreated(function () {
});

Template.Chart.onRendered(function () {
});

Template.Chart.onDestroyed(function () {
});
