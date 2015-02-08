$(function() {

  app.showListPage = function () {
    var listPageHtml = $('#list-page').html();
    $('.spa-content').html(listPageHtml);

    $('.add-appt-button').click(app.showAddPage);

    var apptListings = $('#appt-listings').html();
    var template = _.template(apptListings, { variable: 'm' });
    var testbutton = $('<button class="delete-appt">' + 'DELETE' + '</button>');

    $('.wrapper').html(template ({
      appt: app.appointments.query()
    }));

      $('.deletelisting').append(testbutton);

        $(testbutton).click(function () {
          var theButton = $(this);
          var modal = $('#modal').html();

          $(testbutton).after(modal);

          $('.actual-delete').click(function () {
            var theButton = $(this);

            app.appointments.remove();
          });

          $('.cancel').click(function () {
            var theButton = $(this);
            theButton.closest('.modal').remove();
          });
        });
      }
  });

//
// var removeById = function () {
//   var elem = $(this);
//   $('div').click(function() {
//
//         //Look in element, find 'button' and display text
//         var buttonText = $('button', elem).first().text();
//
//         alert(buttonText);
// }


//
//   //Clean this up, add functionality to cancel button in modal
//   $(testbutton).click(function () {
//     var theButton = $(this);
//     var modal = $('#modal').html();
//
//     $(testbutton).after(modal);
//
//     $('.actual-delete').click(function () {
//       var theButton = $(this);
//       theButton.closest('.templatediv').remove();
//     });
//
//     $('.cancel').click(function () {
//       var theButton = $(this);
//       theButton.closest('.modal').remove();
//       //var test = $('.delete-appt').html();
//       //theButton.closest().html(test);
//     });
//   });
// });
