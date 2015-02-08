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
        location: $('.input-city-state').val(),
        id: Math.floor((Math.random() * 100) + 1)
      });

      app.appointments.add(newAppt);

      try {
        app.showListPage();
      } catch (ex) {
        console.log('WHatt>????? ' + ex);
      }

      return false;
    });
  };
});
