$(function() {

  app.showListPage = function () {
    app.appointments.load();

    var listPageHtml = $('#list-page').html();
    $('.spa-content').html(listPageHtml);
    $('.add-appt-button').click(app.showAddPage);

    var apptListings = $('#appt-listings').html();
    var template = _.template(apptListings, { variable: 'm' });

    $('.wrapper').html(template ({
      appt: app.appointments.query()
    }));

    $('.indi-appt').on('click', function() {
      var id = $(this).data('id');
      app.showDetailsPage(id);
    });

    $('.indi-appt').on('click', '.delete-appt', function (e) {
      e.stopPropagation();
      var li = $(this).closest('li');
      var id = $(li).data('id');
      var modal = $($('#modal').html());

      $(li).append(modal);

      $('.actual-delete', modal).click(function (){
        li.remove();
        modal.remove();
        app.appointments.remove(id);
        app.appointments.save();
        app.appointments.load();
      });

      $('.cancel').click(function(e){
        $(this).closest('.modal').remove();
        e.stopPropagation();
      });
    });
  }
});
