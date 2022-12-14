/**
 * Created by longbridge on 9/5/18.
 */

var userType = "";
$('.cifidF').change(function (e){
    getCustomerRecordByCif();
});

// window.onload = function () {
//     document.getElementById('stepx').click();
// }


var currDate = new Date();
// $(".startDate").datepicker({
//     format: 'yyyy-mm-dd',
// //            dateFormat: 'DD,d MM,yy',
// //            changeMonth: true,
// //            changeYear: true,
//     todayHighlight: true,
//     startDate: currDate,
//     minDate: 0
// //            beforeShowDay:NotBeforeToday
// });

$('a[data-toggle="tab"]').on('click', function (e) {
    e.preventDefault();
    $('a[data-toggle="tab"]').removeClass('btn-primary');
    $('a[data-toggle="tab"]').css("color", "purple");
    $('a[data-toggle="tab"]').css("background-color", "white");
    $(this).css("color", "white");
    $(this).css("background-color", "purple");
});

function getCustomerRecordByCif()
{
    console.log("get custommer record");

    var customerNumber = $("#cifid").val();
    console.log("customer CIFID<<><>"+customerNumber);

    $.ajax({
        type: 'GET',
        data: {cifid: customerNumber},
        url: "/bank/formnxp/getCustomerRecord",
        success: function (data)
        {

            var result = data;
            console.log(result)
            for (key in result) {
                if (key == "accountNumbers")
                {
                    console.log('getting the current account')
                    var actNumArray = [];
                    var currencyArray = [];
                    actNumArray = result[key];
                    currencyArray = result['currencies'];
                    console.log(currencyArray);
                    for (var i = 0; i < actNumArray.length; i++)
                    {
                        $('.account_no').append($('<option>',
                            {
                            value: actNumArray[i],
                            text: actNumArray[i]+"   "+'('+currencyArray[i]+')'
                        }));
                    }
                }

                if (key == "domAccounts")
                {
                    console.log('dom account')
                    var actNumArray = [];
                    var currencyArray = [];
                    actNumArray = result[key];
                    currencyArray = result['domCurrencies'];
                    for (var i = 0; i < actNumArray.length; i++)
                    {
                        $('.domaccount_no').append($('<option>', {
                            value: actNumArray[i],
                            text: actNumArray[i]+"   "+'('+currencyArray[i]+')'
                        }));
                    }
                }

                if (key == "type")
                {
                    $('#userType').val(result[key]);
                    userType = result[key];
                }
                if (key == "customerName")
                {
                    $('#customerName').val(result[key]);
                }
                // if (key == "label") {
                //     $('#custName').html(result[key]);
                // }
                if (key == "address") {
                    $('#address').val(result[key]);
                }
                if (key == "town") {
                    $('#town').val(result[key]);
                }
                if (key == "email") {
                    $('#email').val(result[key]);
                }
                if (key == "state") {
                    $('#state').val(result[key]);
                }
                if (key == "phone") {
                    $('#phone').val(result[key]);
                }
                if (key == "country") {
                    $('#country').val(result[key]);
                }
                if (key == "rcNumber") {
                    $('#exporterRcNo').val(result[key]);
                }
            }
            var dd = $('#userType').val();
            if (dd === "") {
                $('#cifidspan').html("invalid customerId");
                $('#custName').html("Customer's name");
                $('#customerName').val("");
                $('#country').val("");
                $('#userType').val("");
                $('#address').val("");
                $('#town').val("");
                $('#email').val("");
                $('#state').val("");
                $('#phone').val("");
            } else {
                $('#cifidspan').html("");
                $('#userType').val("");
            }
        }, error: function (amt) {

        }
    });
}

$(".help-tip").on("click", function (e) {
    var elementId = $(this).children("p").attr("id");
    //alert(elementId);
    $.ajax({
        type: 'POST',
        data: {tipId: elementId},
        url: "/general/formnxp/getToolTip",
        cache: false,
        success: function (data1) {
            var res = data1;
            for (key in res) {
                if (key == "richText") {
                    $('#' + elementId).text(res[key]);
                    $('#' + elementId).show();
                }
            }
//                    alert(result);
        }, error: function (data) {
//                $('#myLoader').modal('hide');
//                $('#errorMess').text("Service not available, please try again later");
            $('#' + elementId).hide();
        }
    });
});
//
//        $(".help-tip").mouseleave(function (e) {
//            var elementId = $(this).children("p").attr("id");
//            $('#' + elementId).hide();
//        })

//modal add button


//clear modal error msg


if ($('#concessionFlag').val() === "Y") {
    $("#concessionPercentage").show();
} else {
    $("#concessionPercentage").hide();
}

$('#concessionFlag').on('change', function () {
    if ($(this).val() === "Y") {
        $("#concessionPercentage").show();
    } else {
        $("#concessionPercentage").hide();
    }
});