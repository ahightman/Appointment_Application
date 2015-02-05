$(function() {

  app.showListPage = function () {
    var page1Html = $('#page1').html();
    $('.spa-content').html(page1Html);

    var appointmentList = app.appointments
      .query()
      .map(function(appt) {
        return '<li>' + appt.title + '</li>'
                '<li>' + appt.date + '</li>';
                '<li>' + appt.time + '</li>';
                '<li>' + appt.address + '</li>';
                '<li>' + appt.location + '</li>';
      });

    // $('.spa-content').html('<ul>' + appointmentList + '</ul>');

    $('.add-appt-button').click(app.showAddPage);

  }


  //Clean this up, add functionality to cancel button in modal
  $('.delete-appt').click(function () {
    var theButton = $(this);
    var modal = $('#modal').html();

    $('.delete-appt').after(modal);

    $('.actual-delete').click(function () {
      var theButton = $(this);
      theButton.closest('.appt-listing').remove();
    });

    $('.cancel').click(function () {
      var theButton = $(this);
      theButton.closest('.modal').remove();
      //var test = $('.delete-appt').html();
      //theButton.closest().html(test);
    });
  });
});
