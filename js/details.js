
app.showDetailsPage = function (apptId) {

  var detailsPageHtml = $('#details').html();
  var template = _.template(detailsPageHtml, { variable: 'm' });
  var weatherDetails = $('#weather').html();
  var template2 = _.template(weatherDetails, { variable: 'm'});
  var appt = app.appointments.findById(apptId);

  $('.spa-content').html(template(appt));

  $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=' + appt.location)
    .done(function (data){
    var temp = Math.floor((data.main.temp - 273.15)* 1.8000 + 32.00);
    var condition = (data.weather[0].description);
    var conditionStr = condition.toLowerCase().replace(/\b[a-z]/g, function(letter) {
    return letter.toUpperCase();
    });

    $('.temp').html(temp + "&deg;");
    $('.conditions').html(conditionStr);


    })
    .fail(function(req, status, err) {
      console.log('Failed to talk to Weather App: ' + err);
    });

  $('.back-to-list').click(app.showListPage);

    return false;
};
