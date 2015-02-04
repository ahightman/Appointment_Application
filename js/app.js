$(function() {
  var page1Html = $('#page1').html();
  var page2Html = $('#page2').html();

    $('.spa-content').html(page1Html);

    $('.spa-content').on('click', '.add-appt-button', function () {
      $('.spa-content').html(page2Html);
    });

    $('.spa-content').on('click', '.back-to-page1', function () {
      $('.spa-content').html(page1Html);
    });
});
