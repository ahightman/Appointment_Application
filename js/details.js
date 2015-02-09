
app.showDetailsPage = function (apptId) {

  var detailsPageHtml = $('#details').html();
  var template = _.template(detailsPageHtml, { variable: 'm' });
  var weatherDetails = $('#weather').html();
  var template2 = _.template(weatherDetails, { variable: 'm'});

  $('.spa-content').html(template(
    app.appointments.findById(apptId)));
    
  $('.back-to-list').click(app.showListPage);

    return false;

};
