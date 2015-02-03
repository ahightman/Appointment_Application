$(function() {
  var page1Html = $('#page1').html();
  var page2Html = $('#page2').html();

  $('.spa-content').html(page1Html);

    $('.add-appt').click(function () {
      var theButton = $(this);
      $('.spa-content').html(page2Html);
    });


//Why won't the back button work???
    $('.back').click(function () {
      var page1Html = $('#page1').html();
      var theButton = $(this);
      $('.spa-content').html(page1Html);
    });



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

            // $('#modal').on('click', '.actual-delete', function () {
            //   var theButton = $(this);
            //   theButton.closest('.appt-listing').remove();
            // });
            //
            // $('#modal').off('click', '.cancel', function () {
            //   var theButton = $(this);
            //   var testing = $('.delete-appt').html();
            //   theButton.closest('.appt-listing').remove();

            });

    // $('.back').click(function () {
    //   var theButton = $(this);
    //   $('.spa-content').html(page3Html);
    // });
});
