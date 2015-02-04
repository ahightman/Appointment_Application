  $(function() {


    $('.add-form').on('submit', function () {
    addAppt();
    resetForm();

    return false;

  });

    // drawAppts();



  function addAppt() {
    var newAppt = Appointment ({

      title: $('.add-form .input-title').val(),
      date: $('.add-form .input-date').val(),
      time: $('.add-form .input-time').val(),
      address: $('.add-form .input-address').val(),
      location: $('.add-form .input-location').val()

    });

    AppointmentStore().add(newAppt);
  }

  // Resets the inputs in the form
  function resetForm() {
    $('.add-form input').val('');
    $('.add-form .input-title').focus();
  }
});


      // $('.add-form').submit(function() {
