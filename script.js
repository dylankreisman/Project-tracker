var datetime = null,
        date = null;

var update = function () {
    date = moment(new Date())
    datetime.html(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
};

$(document).ready(function(){
    datetime = $('#current-time')
    update();
    setInterval(update, 1000);
});

// $('.dropdown-toggle').dropdown();

$('#dropdownMenuButton').on('click', function () {
    $('.dropdown-menu').dropdown('toggle')
  });


