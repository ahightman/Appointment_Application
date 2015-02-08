
//Constructor Function to create new appointment object
app.Appointment = function (spec) {
  if (!spec.title || spec.title.trim() === '') {
    throw 'Please include a title';
  }

  var self = {
    title: spec.title,
    date: spec.date,
    time: spec.time,
    address: spec.address,
    location: spec.location,
    id: spec.id

  }
  return self;
}
