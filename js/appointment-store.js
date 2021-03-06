
//Constructor Function to create object store of appointments
app.AppointmentStore = function () {
  var appointments = [];

  var self = {
    add: function (appt) {
      appointments.push(appt);
      return true;
      self.save();
    },
    query: function () {
      return appointments;
    },
    findById: function (apptId) {
       appointments = appointments.filter(function (item) {
        return item.id == apptId;
      });
      if(appointments.length) {
        return appointments[0];
      }
    },
    remove: function (apptId) {
      appointments = appointments.filter(function (item) {
        return item.id !== apptId;
      });
    },
    load: function () {
      appointments = JSON.parse(localStorage.getItem('appts')) || [];
    },
    save: function () {
      localStorage.setItem('appts', JSON.stringify(appointments));
    }
  };

  return self;
};
