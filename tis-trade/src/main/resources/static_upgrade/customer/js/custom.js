$(document).ready(function() {
    initnotices();

    if ($("#isThirdWorldTransactionYes").is(":checked")) {
               $("#tranAmtInAllocateDiv").show();
           }
});
var loading;
function loader(formType)
{
    var loading = new Loading({
        title: 					formType,
        titleColor: 			'rgb(77, 150, 223)',
        discription: 			'Processing ...',
        discriptionColor: 		'rgb(77, 150, 223)',
        animationOriginColor: 	'rgb(255, 255, 255)',
        mask: 					true,
        loadingPadding: 		'20px 50px',
        defaultApply: 	true,
    });
    loadingOut(loading)

}

function logout(e)
{
    e.preventDefault();
    var oo=href='/corporate/logout';
    window.location.assign(oo);
}

function loader()
{
    loading = new Loading({
        discription: 			'Loading ...',
        discriptionColor: 		'rgb(77, 150, 223)',
        animationOriginColor: 	'rgb(255, 255, 255)',
        mask: 					true,
        loadingPadding: 		'20px 50px',
        defaultApply: 	true,
    });
    // loadingOut()

}
function loadingOut() {
    // window.onload = function () {

        setTimeout(function () {
            loading.out();}, 3000);

    // }
}

$('#remitCollapse').click(function (e) {
    e.preventDefault();
    if ($('#otherTxns').css('display') != 'none') {
        $("#remitCollapse").html("Show more transactions");
    } else {
        $("#remitCollapse").html("Hide transactions");
    }

});
$('input[name^="isThirdWorldTransaction"]').change(function () {
    if (this.value == "Y") {
        $("#tranAmtInAllocateDiv").show();

    }else{
        $("#tranAmtInAllocateDiv").hide();
    }
});
$('#corpBtOtpLink').click(function (e) {
    e.preventDefault();
    var url = "/corporate/transfer/sendOneTimePassword";
    $.ajax({
        type: "POST",
        url: url,
        success: function (data) {
            var result = data;
            $('#corpOTPsendSuccess').html(result);
        }, error: function (e) {
            $('#corpOTPError').html("Service not available, please try again later");
            // $('#OTPsendSuccess').html("");
        }
    });

    $("#oneTimePassModal").modal('show');
    $("#authTokenModal").modal('hide');
});
$('#btOtpLink').click(function (e) {
    e.preventDefault();
    var url = "/retail/transfer/sendOneTimePassword";
    $.ajax({
        type: "POST",
        url: url,
        success: function (data) {
            var result = data;
            $('#OTPsendSuccess').html(result);
        }, error: function (e) {
            $('#OTPError').html("Service not available, please try again later");
            // $('#OTPsendSuccess').html("");
        }
    });

    $("#oneTimePassModal").modal('show');
    $("#authTokenModal").modal('hide');
});

$('#corpresendOTP_button').click(function (e) {
    e.preventDefault();
    var url = "/corporate/transfer/sendOneTimePassword";
    $.ajax({
        type: "POST",
        url: url,
        success: function (data) {
            var result = data;
            $('#corpOTPsendSuccess').html(result);
            $("#corpOTPError").text('');
        }, error: function (data) {
            $('#corpOTPError').html("Service not available, please try again later");
            $("#corpOTPsendSuccess").text('');

        }
    });
});
$('#resendOTP_button').click(function (e) {
    e.preventDefault();
    var url = "/retail/transfer/sendOneTimePassword";
    $.ajax({
        type: "POST",
        url: url,
        success: function (data) {
            var result = data;
            $('#OTPsendSuccess').html(result);
            $("#OTPError").text('');
        }, error: function (data) {
            $('#OTPError').html("Service not available, please try again later");
            $("#OTPsendSuccess").text('');

        }
    });
});

function validateOTP(redirectUrl) {
    var url = "/retail/transfer/authOtp";

    var otpval = $("#otpval").val();
    if(otpval ==""){
        $('#OTPError').html("OTP is required");
    }

    if(otpval != "") {
        $.ajax({
            type: "POST",
            url: url,
            data: {otp: otpval},
            success: function (data) {
                var result = data;
                if(result != "true"){
                    $('#OTPError').html(result);
                    $("#OTPsendSuccess").text('');
                }
                if(result == "error"){
                    $('#OTPError').html("Error occurred while trying to validate OTP");
                    $("#OTPsendSuccess").text('');
                }
                if(result == "true"){
                    $("#OTPsendSuccess").text('');
                    $("#OTPError").text('');
                    window.location.assign(redirectUrl);
                }

            }
        });
    }
}
function corpvalidateOTP(redirectUrl)
{
    var url = "/corporate/transfer/authOtp";

    var otpval = $("#otpval").val();
    if(otpval ==""){
        $('#corpOTPError').html("OTP is required");
    }

    if(otpval != "")
    {
        $.ajax({
            type: "POST",
            url: url,
            data: {otp: otpval},
            success: function (data)
            {
                var result = data;
                if(result != "true"){
                    $('#corpOTPError').html(result);
                    $("#corpOTPsendSuccess").text('');
                }
                if(result == "error")
                {
                    $('#corpOTPError').html("Error occurred while trying to validate OTP");
                    $("#corpOTPsendSuccess").text('');
                }
                if(result == "true")
                {
                    $("#corpOTPsendSuccess").text('');
                    $("#corpOTPError").text('');
                    window.location.assign(redirectUrl);
                }

            }
        });
    }
}

$('#btTokenLink').click(function (e) {
    e.preventDefault();
    $("#oneTimePassModal").modal('hide');
    $("#authTokenModal").modal('show');
});


function initnotices(){
    $("#fielderrors li").each(function(index, value)
    {
        var tt = $(this).text();
        $("[name='" + tt + "']").closest(".form-group").addClass("has-error");
    });

    $('.actionMessage li').each(function(index, value)
    {
        var tt = $(this).text();
        swal({
            type: 'success',
            icon: "success",
            title: tt,
        }, function() {
            $("#feedbackModal").modal('show');
            //feedbackmodal();
        })

    });

    $('.actionSuccess li').each(function(index, value)
    {
        var tt = $(this).text();

        swal({
            type: 'success',
            icon: "success",
            title: tt
        })
    });


    $('.actionError li').each(function(index, value)
    {
        var tt = $(this).text();

        swal({
            type: 'error',
            icon: "error",
            title: tt,
        })
    });

    $( "a[data-toggle='btn']" ).each(function() {
        if($( this ).find( ".errors" ).length > 0){

            var id=  $(this).attr('id');
               $('#'+id).html("<span style='background-color: red' >text</span> " );
        }


    });


    $('.fieldError li').each(function(index, value)
    {
        var tt = $(this).text();
        swal({
            title: tt,
        });
    });

}






function feedbackmodal() {
        var options = {
            url: "/general/feedback",
            title: 'Feedback Questions ',
            size: eModal.size.lg,
            buttons: [{
                text: 'Send feedback',
                style: 'info',
                close: true,
                click: function () {

                }
            }, {
                text: 'Close',
                style: 'default',
                close: true
            }],
        };
        eModal.ajax(options);

}

// When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//         document.getElementById("myBtn").style.display = "block";
//     } else {
//         document.getElementById("myBtn").style.display = "none";
//     }
// }

// When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//     document.body.scrollTop = 0; // For Chrome, Safari and Opera
//     document.documentElement.scrollTop = 0; // For IE and Firefox
// }
var fld;
var field;
var msg;

$('#fieldMessages li').each(function(index, value)
{
    fld = $(this).attr("field");
    field = $("[name='" + fld + "']");

    if(field.length > 0){
        msg = '<label  class="errors" for="'+field+'">'+$(this).text()+'</label>'
        $(field).addClass("invalid");
        $(field).after(msg)
        $(field).closest(".form-group").addClass("has-danger");
    }else{

        msg ='<div class="alert alert-danger alert-dismissable">'
        /* msg += '<button aria-hidden="true" data-dismiss="alert" class="close" type="button">×</button>'*/
        msg += $(this).text();
        $("form").before(msg)
    }
});