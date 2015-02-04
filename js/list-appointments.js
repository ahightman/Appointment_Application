$(function() {

  //Clean this up, add functionality to cancel button in modal
  $('.delete-appt').click(function () {
    var theButton = $(this);
    var modal = $('#modal').html();

    $('.delete-appt').html(modal);

        $('.actual-delete').click(function () {
          var theButton = $(this);
          theButton.closest('.appt-listing').remove();
        });

        $('.cancel').click(function () {
          var theButton = $(this);
          var test = $('.delete-appt').html();
          theButton.closest().html(test);
        });
  });
});
