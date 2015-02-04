
//Constructor Function to create object store of appointments
function AppointmentStore() {
  var collection = [];

  var self = {

    add: function(obj) {
        collection.push(obj);
        return true;
      },

    query: function() {
      return collection;
    }

  };

  return self;
}
