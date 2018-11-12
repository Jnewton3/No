$(document).ready(function(){
	var assignmentDatabase = 'https://raw.githubusercontent.com/rdepollo/interaction3json/master/database.json';

$.ajax({
  url: assignmentDatabase,
  type: "GET",
  dataType: "json",
  cache: false,
  success: function(data) {

    function getRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

		function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}


    var myColor = "";
    var count = 0;
    var colorcount = 0;
    var round = 0;
    var total = 0.00;
    myColor = getRandomColor();

    $(document).on("click", ".box", function(e) {
      var thing = "#" + round + count
      $(".box").append("<div class='dbItem' id = '" + round + count + "'>" + data[count].ticketNumber.replace("DAH", "") + "</br>" + data[count].violationStreetNumber + " " + data[count].violationStreetName + "</div>");
      var x = e.clientX;
      var y = e.clientY;
      var newposX = x - 40;
      var newposY = y - 10;
      var cost = data[count].fineAmount + data[count].adminFee + data[count].stateFee + data[count].lateFee + data[count].cleanUpCost;
      console.log("round" + round);
      console.log("count" + count);
      console.log(myColor);
      console.log(cost);
      if (round > 0) {
        $(thing).css("color", myColor);
      }

      $(thing).css("transform", "translate3d(" + newposX + "px," + newposY + "px,0px)");

      $(thing).fadeOut(600000, function() {
        $(this).remove();
      });

			$(thing).css("font-size", getRandomInt(8, 40) + 'pt');

      total += cost;
      console.log(total.toFixed(2));

      $('.price').html("$" + total.toFixed(2));

      if (colorcount <= 10) {
        colorcount += 1;
      } else {
        colorcount = 0;
        round += 1;
        myColor = getRandomColor();
      }

      if (count <= 4423) {
        count += 1;
      } else {
        count = 0;
      }

    });


  },
});

});
