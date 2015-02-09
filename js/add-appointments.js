$(function() {

  app.showAddPage = function () {
    var addPageHtml = $('#addpage').html();
    $('.spa-content').html(addPageHtml);
    $('.back-to-listpage').click(app.showListPage);

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
      app.appointments.save();
      app.showListPage();

      return false;
    });
  };
});
