$(document).ready(function () {
  //listen to events on the saveBtns
  $(".saveBtn").click(function () {
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    // console.log("value:", value);
    // console.log("time:", time);

    //save into storage
    localStorage.setItem(time, value);
  });

  function hourUpdate() {
    var currentHour = moment().hours();

    //jQuery loop over all the time blocks
    $(".time-block").each(function () {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);

      if (blockHour < currentHour) {
        // Hours on calendar taking place before current hour of day
        $(this).addClass("past");
        // If current hour is the same as that of calendar
      } else if (blockHour === currentHour) {
        $(this).removeClass("past").addClass("present");
        // Hours on calendar taking place after current hour of day,
      } else {
        $(this).removeClass("past present").addClass("future");
      }
    });
  }
  //call the function hourUpdate
  hourUpdate();
  //interval to fun the hourUpdate every 10seconds
  setInterval(function () {
    hourUpdate();
  }, 10000);

  //retrieve any stored data from localstorage and place it into the current hour row
  var hour_9 = localStorage.getItem("hour-9");
  $("#hour-9 .description").val(hour_9);

  var hour_10 = localStorage.getItem("hour-10");
  $("#hour-10 .description").val(hour_10);

  var hour_11 = localStorage.getItem("hour-11");
  $("#hour-11 .description").val(hour_11);

  var hour_12 = localStorage.getItem("hour-12");
  $("#hour-12 .description").val(hour_12);

  var hour_13 = localStorage.getItem("hour-13");
  $("#hour-13 .description").val(hour_13);

  var hour_14 = localStorage.getItem("hour-14");
  $("#hour-14 .description").val(hour_14);

  var hour_15 = localStorage.getItem("hour-15");
  $("#hour-15 .description").val(hour_15);

  var hour_16 = localStorage.getItem("hour-16");
  $("#hour-16 .description").val(hour_16);

  var hour_17 = localStorage.getItem("hour-17");
  $("#hour-17 .description").val(hour_17);

  $("#currentDay").text(moment().format("MMM Do YYYY"));
});
