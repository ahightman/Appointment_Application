$(function() {

  app.showAddPage = function () {
    var page2Html = $('#page2').html();
    $('.spa-content').html(page2Html);

    $('.add-form').submit(function () {
      var newAppt = app.Appointment ({
        title: $('.input-title').val(),
        date: $('.input-date').val(),
        time: $('.input-time').val(),
        address: $('.input-street').val(),
        location: $('.input-city-state').val()
        // id:
      });

      app.AppointmentStore().add(newAppt);

      app.showListScreen();

      // app.resetForm()

      return false;
    });
  };
});

  // // Resets the inputs in the form
  // app.resetForm = function() {
  //   $('.add-form input').val('');
  //   $('.add-form .input-title').focus();
  // }
