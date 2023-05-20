$("#month_toggle_button").click(function() {
  $( this ).toggleClass("toggle__option--selected");
  $('#week_toggle_button').toggleClass("toggle__option--selected")
  $('#week2').toggle()
  $('#week3').toggle()
  $('#week4').toggle()
  $('#week5').toggle()
});

$("#week_toggle_button").click(function() {
  $( this ).toggleClass("toggle__option--selected");
  $('#month_toggle_button').toggleClass("toggle__option--selected")
  $('#week2').toggle()
  $('#week3').toggle()
  $('#week4').toggle()
  $('#week5').toggle()
});


var d = new Date();
var months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
var month = months[d.getMonth()];
var month_num = d.getMonth();
var year = d.getFullYear();
var dateStr = month +' '+ year;

document.getElementById("current_month").innerHTML = dateStr;


function next_month() {
    if (month_num === 11) {
        year = year + 1
    } else {
        year = year
    }
    month_num = (month_num + 1) % 12
    var new_dateStr = months[month_num] +' '+ year
    document.getElementById("current_month").innerHTML = new_dateStr;
}

function previous_month() {
    if (month_num === 0) {
        year = year - 1
    } else {
        year = year
    }

    if (month_num === 0) {
        month_num = 11
    } else {
        month_num = month_num - 1
    }
    var new_dateStr = months[month_num] +' '+ year
    document.getElementById("current_month").innerHTML = new_dateStr;
}

$("#left_arrow_button").click(function() {
    previous_month();
    change_calendar_days();

});

$("#right_arrow_button").click(function() {
    next_month();
    change_calendar_days();
});


function daysInMonth (month, year) {
  return new Date(year, month, 0).getDate();

}
console.log(daysInMonth(2,2020));

var number_days = daysInMonth(2,2020)

function change_calendar_days() {

    current_month_num = daysInMonth(month_num, year)

    difference  = (31 + 4) - current_month_num //31 (+4 for days in other months. ) - current_month
    console.log(difference);
    // toggle down till current month
    list_week_5 = $(".week5").toArray()
    var list_week_5_reverse = list_week_5.reverse()
    $(list_week_5).css("border", "none");
    $(list_week_5).css( "border-right", "1px solid #e1e1e1" );
    $(list_week_5).css( "border-top", "1px solid #e1e1e1" );
    for (var i = 0; i < difference; i++) {
        console.log(list_week_5[i]);
        console.log(list_week_5);
        $(list_week_5[i]).css( "border", "3px solid red" );
        $(list_week_5[i]).addClass("other_month")
    }


    if ($(".other_month").is(":visible")) {
        $(".other_month").hide();
        $(".week4").css("border-bottom", "1px solid #e1e1e1")
    }
}




$('#day1').click(function() {
    $("#image1").toggle();
    });

$('#day2').click(function() {
    $("#image2").toggle();
    });


$('#day3').click(function() {
    $("#image3").toggle();
    });


$('#day4').click(function() {
    $("#image4").toggle();
    });

$('#day5').click(function() {
    $("#image5").toggle();
    });


$('#day6').click(function() {
    $("#image6").toggle();
    });


$('#day7').click(function() {
    $("#image7").toggle();
    });


var list = $("#week5_day_29, #week5_day_30, #week5_day_31")
$("#week5").hide();
