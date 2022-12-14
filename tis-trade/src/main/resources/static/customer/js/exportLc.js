$('#clearAppBank').click(function (e) {
    e.preventDefault();
    $('.clearAppBank').val('');
});
$('#clearIssBank').click(function (e) {
    e.preventDefault();
    $('.clearIssBank').val('');
});
$('#clearAdvBank').click(function (e) {
    e.preventDefault();
    $('.clearAdvBank').val('');
});
$('#clearAdvThruBank').click(function (e) {
    e.preventDefault();
    $('.clearAdvThruBank').val('');
});
$('#clearAvailBank').click(function (e) {
    e.preventDefault();
    $('.clearAvailBank').val('');
});
$('#clearDraweeBank').click(function (e) {
    e.preventDefault();
    $('.clearDraweeBank').val('');
});
$('#clearRebursBank').click(function (e) {
    e.preventDefault();
    $('.clearRebursBank').val('');
});
if ($("#backToBack").is(":checked")) {
    $("#backTobackLcDisplay").show();
}
else if ($("#backToBack").is(":not(:checked)")) {
    $("#backTobackLcDisplay").hide();
}

$("#backToBack").click(function () {
    if ($(this).is(":checked")) {
        $("#backTobackLcDisplay").show();
    }
    else if ($(this).is(":not(:checked)")) {
        $("#backTobackLcDisplay").hide();
    }
});

$( ".lexd" ).datepicker({
    format: 'dd-mm-yyyy',
    todayHighlight: true,

});
// if ($("#backTobackLcNumber").is(":checked")) {
//     alert("i am here");
//     $("#backTobackLcNo").show();
// }
// else if ($("#backTobackLcNumber").is(":not(:checked)")) {
//
//     $("#backTobackLcNo").hide();
// }

// $("#backToBack").click(function () {
//     if ($(this).is(":checked")) {
//         $("#backTobackLcNumber").removeAttr('readonly');
//     }
//     else if ($(this).is(":not(:checked)")) {
//         $("#backTobackLcNumber").attr('readonly',true);
//     }
// });
$("#rev").hide();
$("#revolving").click(function () {
    if ($(this).is(":checked")) {
        $("#rev").show();
    }
    else if ($(this).is(":not(:checked)")) {
        $("#rev").hide();
    }
});





if ($('#lcType').val() === "PCLPCN") {
    $("#lcAmount").attr('readonly',true);
    $("#partCleanline").val('');
    $("#lcAmount").hide();
    $("#partConfirmed").val('');
    $("#partUnconfirmed").val('');
    $("#partCleanline").show();
    $("#partConfirmed").show();
    $("#partUnconfirmed").hide();
    $("#accountTransaction").hide();
    $("#chargeAccount").hide();





} else if ($('#lcType').val() === "PCLPUC") {
    $("#lcAmount").attr('readonly',true);
    $("#partCleanline").val('');
    $("#partConfirmed").val('');
    $("#partUnconfirmed").val('');
    $("#partCleanline").show();
    $("#partConfirmed").hide();
    $("#partUnconfirmed").show();
    $("#accountTransaction").hide();
    $("#chargeAccount").hide();
    $("#lcAmount").hide();


}


else if ($('#lcType').val() === "PCNPUC") {
    $("#lcAmount").attr('readonly',true);
    $("#lcAmount").hide();
    $("#lcAmount").hide();
    $("#partCleanline").val('');
    $("#partConfirmed").val('');
    $("#partUnconfirmed").val('');
    $("#partCleanline").hide();
    $("#accountTransaction").hide();
    $("#partConfirmed").show();
    $("#partUnconfirmed").show();



}

else if ($('#lcType').val() === "CND") {
    $("#lcAmount").removeAttr('readonly');
    $("#lcAmount").show();
    $("#partCleanline").val('');
    $("#partConfirmed").val('');
    $("#partUnconfirmed").val('');
    $("#partCleanline").hide();
    $("#partConfirmed").hide();
    $("#partUnconfirmed").hide();
    $("#accountTransaction").show();


}
else if ($('#lcType').val() === "UC") {
    $("#lcAmount").removeAttr('readonly');
    $("#lcAmount").show();
    $("#partCleanline").val('');
    $("#partConfirmed").val('');
    $("#partUnconfirmed").val('');
    $("#partCleanline").hide();
    $("#partConfirmed").hide();
    $("#partUnconfirmed").hide();
    $("#accountTransaction").hide();


} else if ($('#lcType').val() === "CN") {
    $("#partCleanline").val('');
    $("#partConfirmed").val('');
    $("#partUnconfirmed").val('');
    $("#partCleanline").hide();
    $("#partConfirmed").hide();
    $("#partUnconfirmed").hide();
    $("#accountTransaction").hide();
    $("#allocationid").show();
    $("#lcAmount").removeAttr('readonly');
    $("#lcAmount").show();
} else if ($('#lcType').val() === "CL") {
    $("#lcAmount").removeAttr('readonly');
    $("#accountTransaction").hide();
    $("#lcAmount").show();
    $("#partCleanline").val('');
    $("#partConfirmed").val('');
    $("#partUnconfirmed").val('');
    $("#partCleanline").hide();
    $("#partConfirmed").hide();
    $("#partUnconfirmed").hide();

} else {
    $("#lcAmount").removeAttr('readonly');
    $("#lcAmount").show();
    $("#partCleanline").val('');
    $("#partConfirmed").val('');
    $("#partUnconfirmed").val('');
    $("#partCleanline").hide();
    $("#partConfirmed").hide();
    $("#partUnconfirmed").hide();
    $("#accountTransaction").hide();

}

// if($('#lcPaymentTenorCode').val()=="U")
// {
//     alert("chichichikolo");
//     $("#usancePeriod").removeAttr('readonly');
//
// }
//
// else {
//     $("#usancePeriod").attr('readonly',true);
// }
// if($('#lcPaymentTenorCode').on('change',function ()
//     {
//         alert("oyoyoy");
//         if($(this).val()==="U")
//         {
//             $("#usancePeriod").removeAttr('readonly');
//         }
//         else {
//             $("#usancePeriod").attr('readonly',true);
//
//         }
//
//
//     }))

$('#lcType').on('change', function () {
    if ($(this).val() === "PCLPCN") {
        $("#lcAmount").attr('readonly',true);
        $("#lcAmount").hide();
        $("#partCleanline").val('');
        $("#partConfirmed").val('');
        $("#partUnconfirmed").val('');
        $("#partCleanline").show();
        $("#partConfirmed").show();
        $("#partUnconfirmed").hide();
        $("#accountTransaction").hide();
    } else if ($(this).val() === "PCLPUC") {
        $("#lcAmount").attr('readonly',true);
        $("#lcAmount").hide();
        $("#partCleanline").val('');
        $("#partConfirmed").val('');
        $("#partUnconfirmed").val('');
        $("#partCleanline").show();
        $("#partConfirmed").hide();
        $("#partUnconfirmed").show();
        $("#accountTransaction").hide();
    }
    else if ($(this).val() === "PCNPUC") {
        $("#lcAmount").attr('readonly',true);
        $("#lcAmount").hide();
        $("#partCleanline").val('');
        $("#partConfirmed").val('');
        $("#partUnconfirmed").val('');
        $("#partCleanline").hide();
        $("#partConfirmed").show();
        $("#partUnconfirmed").show();
        $("#accountTransaction").hide();
    } else if ($(this).val() === "UC") {

        $("#lcAmount").removeAttr('readonly',true);
        $("#lcAmount").show();
        $("#partCleanline").val('');
        $("#partConfirmed").val('');
        $("#partUnconfirmed").val('');
        $("#partCleanline").hide();
        $("#partConfirmed").hide();
        $("#partUnconfirmed").hide();
        $("#accountTransaction").hide();

    } else if ($(this).val() === "CN") {
        $("#lcAmount").removeAttr('readonly');
        $("#allocationid").show();
        $("#lcAmount").show();
        $("#partCleanline").val('');
        $("#partConfirmed").val('');
        $("#partUnconfirmed").val('');
        $("#partCleanline").hide();
        $("#partConfirmed").hide();
        $("#partUnconfirmed").hide();
        $("#accountTransaction").hide();
    }
    else if ($('#lcType').val() === "CND") {
        $("#lcAmount").removeAttr('readonly');
        $("#lcAmount").show();
        $("#partCleanline").val('');
        $("#partConfirmed").val('');
        $("#partUnconfirmed").val('');
        $("#partCleanline").hide();
        $("#partConfirmed").hide();
        $("#partUnconfirmed").hide();
        $("#accountTransaction").show();
    }
    else if ($(this).val() === "CL") {
        $("#lcAmount").removeAttr('readonly');
        $("#lcAmount").show();
        $("#partCleanline").val('');
        $("#partConfirmed").val('');
        $("#partUnconfirmed").val('');
        $("#partCleanline").hide();
        $("#partConfirmed").hide();
        $("#partUnconfirmed").hide();
        $("#accountTransaction").hide();
    }
});

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

// $('#button_search_bb').click(function (e) {
//     e.preventDefault();
//     var options = {
//         url: "/general/bank/find",
//         title: 'Bank Search ',
//         size: eModal.size.lg,
//         buttons: [{
//             text: 'Select Bank',
//             style: 'info',
//             close: true,
//             click: function () {
//                 var usertab = $('#operation').DataTable();
//                 usertab.rows({
//                     selected: true
//                 }).data().each(function (d) {
//                     $('#beneficiaryBankName').val(d['institutionName']),
//                         $('#beneficiarySwiftCode').val(d['swiftCode']),
//                         $('#beneficiaryBankAddress').val(d['bankAddress'])
//                 });
//             }
//         }, {
//             text: 'Close',
//             style: 'default',
//             close: true
//         }],
//     };
//     eModal.ajax(options);
// });










$('#button_search_ab').click(function (e) {
    e.preventDefault();
    var options = {
        url: "/general/bank/find",
        title: 'Bank Search ',
        size: eModal.size.lg,
        buttons: [{
            text: 'Select Bank',
            style: 'info',
            close: true,
            click: function () {
                var usertab = $('#operation').DataTable();
                usertab.rows({
                    selected: true
                }).data().each(function (d) {
                    $('#advBankName').val(d['institutionName']),
                        $('#advSwiftCode').val(d['swiftCode']),
                        $('#advBankAddress').val(d['bankAddress'])


                });
            }
        }, {
            text: 'Close',
            style: 'default',
            close: true
        }],
    };
    eModal.ajax(options);
});


$('#button_search_bb').click(function (e) {
    e.preventDefault();
    var options = {
        url: "/general/bank/find",
        title: 'Bank Search ',
        size: eModal.size.lg,
        buttons: [{
            text: 'Select Bank',
            style: 'info',
            close: true,
            click: function () {
                var usertab = $('#operation').DataTable();
                usertab.rows({
                    selected: true
                }).data().each(function (d) {
                    $('#beneBankId').val(d['id']),
                        $('#beneficiaryBankName').val(d['institutionName']),
                        $('#beneficiarySwiftCode').val(d['swiftCode']),
                        $('#beneficiaryBankAddress').val(d['bankAddress'])



                });
            }
        }, {
            text: 'Close',
            style: 'default',
            close: true
        }],
    };
    eModal.ajax(options);
});

$('#button_search_ad').click(function (e) {
    e.preventDefault();
    var options = {
        url: "/general/bank/find",
        title: 'Bank Search ',
        size: eModal.size.lg,
        buttons: [{
            text: 'Select Bank',
            style: 'info',
            close: true,
            click: function () {
                var usertab = $('#operation').DataTable();
                usertab.rows({
                    selected: true
                }).data().each(function (d) {
                    $('#beneBankId').val(d['id']),
                        $('#advBankName').val(d['institutionName']),
                        $('#advSwiftCode').val(d['swiftCode']),
                        $('#advBankCode').val(d['institutionCode']),
                        $('#advBankBranch').val(d['branchId']),
                        $('#advBankAddress').val(d['bankAddress'])

                    populateNostroAccount(d['institutionCode'],d['branchId']);

                });
            }
        }, {
            text: 'Close',
            style: 'default',
            close: true
        }],
    };
    eModal.ajax(options);
});



$('#button_search_expad').click(function (e) {
    e.preventDefault();
    var options = {
        url: "/general/bank/find",
        title: 'Bank Search ',
        size: eModal.size.lg,
        buttons: [{
            text: 'Select Bank',
            style: 'info',
            close: true,
            click: function () {
                var usertab = $('#operation').DataTable();
                usertab.rows({
                    selected: true
                }).data().each(function (d) {
                    $('#beneBankId').val(d['id']),
                        $('#advBankName').val(d['institutionName']),
                        $('#advSwiftCode').val(d['swiftCode']),
                        $('#advBankAddress').val(d['bankAddress'])

                });
            }
        }, {
            text: 'Close',
            style: 'default',
            close: true
        }],
    };
    eModal.ajax(options);
});
$('#button_search_advthrubank').click(function (e) {
    e.preventDefault();
    var options = {
        url: "/general/bank/find",
        title: 'Bank Search ',
        size: eModal.size.lg,
        buttons: [{
            text: 'Select Bank',
            style: 'info',
            close: true,
            click: function () {
                var usertab = $('#operation').DataTable();
                usertab.rows({
                    selected: true
                }).data().each(function (d) {
                    $('#beneBankId').val(d['id']),
                        $('#advThrBankName').val(d['institutionName']),
                        $('#advThrBankAddress').val(d['bankAddress']),
                        $('#advThrSwiftCode').val(d['swiftCode'])
                });
            }
        }, {
            text: 'Close',
            style: 'default',
            close: true
        }],
    };
    eModal.ajax(options);
});


$('#button_search_dr').click(function (e) {
    e.preventDefault();
    var options = {
        url: "/general/bank/find",
        title: 'Bank Search ',
        size: eModal.size.lg,
        buttons: [{
            text: 'Select Bank',
            style: 'info',
            close: true,
            click: function () {
                var usertab = $('#operation').DataTable();
                usertab.rows({
                    selected: true
                }).data().each(function (d) {
                        $('#draweeBankName').val(d['institutionName']),
                        $('#draweeBankSwiftCode').val(d['swiftCode']),
                        $('#draweeBankAddr').val(d['bankAddress']),
                        $('#draweeBankCity').val(d['bankCity']),
                        $('#draweeBankState').val(d['bankState']),
                        $('#draweeBankCtry').val(d['bankCountry']),
                            $('#draweeBankBr').val(d['branchId']),
                        $('#draweeBankPoCode').val(d['bankPostalCode'])
                });
            }
        }, {
            text: 'Close',
            style: 'default',
            close: true
        }],
    };
    eModal.ajax(options);
});

$('#button_search_av').click(function (e) {
    e.preventDefault();
    var options = {
        url: "/general/bank/find",
        title: 'Bank Search ',
        size: eModal.size.lg,
        buttons: [{
            text: 'Select Bank',
            style: 'info',
            close: true,
            click: function () {
                var usertab = $('#operation').DataTable();
                usertab.rows({
                    selected: true
                }).data().each(function (d) {
                    $('#availWithBankName').val(d['institutionName']),
                        $('#availWithSwiftCode').val(d['swiftCode']),
                        $('#availWithBankAddress').val(d['bankAddress']),
                        $('#availWithBankCode').val(d['institutionCode']),
                        $('#availWithBankBranch').val(d['branchId'])



                });
            }
        }, {
            text: 'Close',
            style: 'default',
            close: true
        }],
    };
    eModal.ajax(options);
});





$('#button_search_re').click(function (e) {
    e.preventDefault();
    var options = {
        url: "/general/bank/find",
        title: 'Bank Search ',
        size: eModal.size.lg,
        buttons: [{
            text: 'Select Bank',
            style: 'info',
            close: true,
            click: function () {
                var usertab = $('#operation').DataTable();
                usertab.rows({
                    selected: true
                }).data().each(function (d) {
                    $('#reimbursingBankName').val(d['institutionName']),
                        $('#reimbursingSwiftCode').val(d['swiftCode']),
                        $('#reimbursingBankAddress').val(d['bankAddress']),
                    $('#reimbursingBankBranch').val(d['branchId'])
                });
            }
        }, {
            text: 'Close',
            style: 'default',
            close: true
        }],
    };
    eModal.ajax(options);
});



$('#button_search_ib').click(function (e) {
    e.preventDefault();
    var options = {
        url: "/general/bank/find",
        title: 'Bank Search ',
        size: eModal.size.lg,
        buttons: [{
            text: 'Select Bank',
            style: 'info',
            close: true,
            click: function () {
                var usertab = $('#operation').DataTable();
                usertab.rows({
                    selected: true
                }).data().each(function (d) {
                    $('#interBankName').val(d['institutionName']),
                        $('#interBankSwiftCode').val(d['swiftCode']),
                        $('#interBankAddress').val(d['bankAddress']),
                        $('#interBankCity').val(d['bankCity']),
                        $('#interBankState').val(d['bankState']),
                        $('#interBankCtry').val(d['bankCountry']),
                        $('#interBankPoCode').val(d['bankPostalCode'])
                });
            }
        }, {
            text: 'Close',
            style: 'default',
            close: true
        }],
    };
    eModal.ajax(options);
});

$('#button_search_is').click(function (e) {
    e.preventDefault();
    var options = {
        url: "/general/bank/find",
        title: 'Bank Search ',
        size: eModal.size.lg,
        buttons: [{
            text: 'Select Bank',
            style: 'info',
            close: true,
            click: function () {
                var usertab = $('#operation').DataTable();
                usertab.rows({
                    selected: true
                }).data().each(function (d) {
                    $('#issuingBank').val(d['institutionName']),
                        $('#issuingBankSwift').val(d['swiftCode']),
                        $('#issuingBankAddr').val(d['bankAddress']),
                        $('#issuingBankCity').val(d['bankCity']),
                        $('#issuingBankState').val(d['bankState']),
                        $('#issuingBankCountry').val(d['bankCountry']),
                        $('#issuingBankCode').val(d['institutionCode']),
                        $('#issuingBankBrnch').val(d['branchId'])
                        // $('#interBankPoCode').val(d['bankPostalCode'])

                });
            }
        }, {
            text: 'Close',
            style: 'default',
            close: true
        }],
    };
    eModal.ajax(options);
});
$('#button_search_expis').click(function (e) {
    e.preventDefault();
    var options = {
        url: "/general/bank/find",
        title: 'Bank Search ',
        size: eModal.size.lg,
        buttons: [{
            text: 'Select Bank',
            style: 'info',
            close: true,
            click: function () {
                var usertab = $('#operation').DataTable();
                usertab.rows({
                    selected: true
                }).data().each(function (d) {
                    $('#issuingBank').val(d['institutionName']),
                        $('#issuingBankSwift').val(d['swiftCode']),
                        $('#issuingBankAddr').val(d['bankAddress']),
                        $('#issuingBankCity').val(d['bankCity']),
                        $('#issuingBankState').val(d['bankState']),
                        $('#issuingBankCountry').val(d['bankCountry'])
                        // $('#interBankPoCode').val(d['bankPostalCode'])
                    populateNostroAcct(d['institutionCode'],d['branchId']);
                });
            }
        }, {
            text: 'Close',
            style: 'default',
            close: true
        }],
    };
    eModal.ajax(options);
});



$('#button_search_atb').click(function (e) {
    e.preventDefault();
    var options = {
        url: "/general/bank/find",
        title: 'Bank Search ',
        size: eModal.size.lg,
        buttons: [{
            text: 'Select Bank',
            style: 'info',
            close: true,
            click: function () {
                var usertab = $('#operation').DataTable();
                usertab.rows({
                    selected: true
                }).data().each(function (d) {
                        $('#advThrBankName').val(d['institutionName']),
                        $('#advThrBankAddress').val(d['bankAddress']),
                        $('#advThrSwiftCode').val(d['swiftCode']),
                        $('#advThrBankCode').val(d['institutionCode']),
                    $('#advThrBankBranch').val(d['branchId'])

                });
            }
        }, {
            text: 'Close',
            style: 'default',
            close: true
        }],
    };
    eModal.ajax(options);
});

function populateNostroAccount(bankCode,branchId) {
    $.ajax({
        type: 'POST',
        data: {bankCode: bankCode,branchId: branchId},
        url: "/general/populateNostroAcct",
        success: function (data) {
            var dd = data;
            var actNumArray = [];
            actNumArray = dd;
            var jj = $('#corrNostroAccount') ;
            jj.children('option:not(:first)').remove();
            for (var i = 0; i < actNumArray.length; i++) {
                jj.append($('<option>', {
                    value: actNumArray[i],
                    text: actNumArray[i]
                }));
            }
        }, error: function (amt) {

        }
    });
}
// var text = tarea.val().trim();
// var lines = text.split("\n");
function selectTextareaLine(tarea,lineNum) {
    lineNum--; // array starts at 0

var text = tarea.val().trim();
var lines = text.split("\n");
    // calculate start/end
    var startPos = 0, endPos = tarea.val().length;
    for(var x = 0; x < lines.length; x++) {
        if(x == lineNum) {
            break;
        }
        startPos += (lines[x].length+1);

    }

    var endPos = lines[lineNum].length+startPos;

    // do selection
    // Chrome / Firefox

    if(typeof(tarea.selectionStart) != "undefined") {
        tarea.focus();
        tarea.selectionStart = startPos;
        tarea.selectionEnd = endPos;
        return true;
    }

    // IE
    if (document.selection && document.selection.createRange) {
        tarea.focus();
        tarea.select();
        var range = document.selection.createRange();
        range.collapse(true);
        range.moveEnd("character", endPos);
        range.moveStart("character", startPos);
        range.select();
        return true;
    }

    return false;
}


function valTextInfo(fieldid, noOfLines, charPerLine, errorTagId) {
    var maxLength = charPerLine;
    var numberOfLines = noOfLines;
    var text = fieldid.val().trim();
    var lines = text.split("\n");
    if(text != "") {
        for (var i = 0; i < lines.length; i++) {
            if (lines[i].length > maxLength) {
                var tarea = fieldid;
                $('#stepc').trigger('click');
                $("#stepc").css('border-color', 'red').append("<span style='color:red;'></span>");
                var v = i + 1;
                selectTextareaLine(fieldid, v);
                tarea.focus();
                errorTagId.append("<p style='color:red;'></p>");
                errorTagId.text("Maximum "+maxLength+" character per line exceeded in line " + v);
                return false;
            }
            if (i > 0) {
                if (!lines[i] || lines[i] === " ") {
                    var tarea = fieldid;
                    var v = i + 1;
                    $('#stepc').trigger('click');
                    $("#stepc").css('border-color', 'red').append("<span style='color:red;'></span>");
                    tarea.focus();
                    errorTagId.append("<p style='color:red;'></p>");
                    errorTagId.text("Empty line found in line " + v);
                    return false;
                }
            }
        }
        if (lines.length > numberOfLines) {
            var tarea = fieldid;
            $('#stepc').trigger('click');
            $("#stepc").css('border-color', 'red').append("<span style='color:red;'></span>");
            errorTagId.append("<p style='color:red;'></p>");

            tarea.focus();
            errorTagId.text("Maximum "+numberOfLines+" lines exceeded");
            return false;
        }
        errorTagId.text(" ");
        return true;
    }
}

$('#sendRecInfo').on('blur', function() {
    var fieldId = $('#sendRecInfo');
    var errorTagId = $('#sendRecInfoError');
    var maxCharPerLine = 34;
    var maxLines = 6;
    if(!fieldId.val() || fieldId.val() != " ") {
        valTextInfo(fieldId, maxLines, maxCharPerLine, errorTagId);
    }
});

$('#bankInstructions').on('blur', function() {
    var fieldId = $('#bankInstructions');
    var errorTagId = $('#bankInstructionsError');
    var maxCharPerLine = 64;
    var maxLines = 12;
    if(!fieldId.val() || fieldId.val() != " ") {
        valTextInfo(fieldId, maxLines, maxCharPerLine, errorTagId);
    }
});

$('#docInstruction').on('blur', function() {
    var fieldId = $('#docInstruction');
    var errorTagId = $('#docInstructionError');
    var maxCharPerLine = 64;
    var maxLines = 100;
    if(!fieldId.val() || fieldId.val() != " ") {
        valTextInfo(fieldId, maxLines, maxCharPerLine, errorTagId);
    }
});

$('#conditions').on('blur', function() {
    var fieldId = $('#conditions');
    var errorTagId = $('#conditionsError');
    var maxCharPerLine = 64;
    var maxLines = 100;
    if(!fieldId.val() || fieldId.val() != " ") {
        valTextInfo(fieldId, maxLines, maxCharPerLine, errorTagId);
    }
});

$('#periodOfPresentation').on('blur', function() {
    var fieldId = $('#periodOfPresentation');
    var errorTagId = $('#periodOfPresentationError');
    var maxCharPerLine = 34;
    var maxLines = 4;
    if(!fieldId.val() || fieldId.val() != " ") {
        valTextInfo(fieldId, maxLines, maxCharPerLine, errorTagId);
    }
});

$('#chargeDescription').on('blur', function() {
    var fieldId = $('#chargeDescription');
    var errorTagId = $('#chargeDescriptionError');
    var maxCharPerLine = 34;
    var maxLines = 6;
    if(!fieldId.val() || fieldId.val() != " ") {
        valTextInfo(fieldId, maxLines, maxCharPerLine, errorTagId);
    }
});

$('#goodsDescription').on('blur', function() {
    var fieldId = $('#goodsDescription');
    var errorTagId = $('#goodsDescriptionError');
    var maxCharPerLine = 64;
    var maxLines = 100;
    if(!fieldId.val() || fieldId.val() != " ") {
        valTextInfo(fieldId, maxLines, maxCharPerLine, errorTagId);
    }
});

$('#button_add_amend').click(function (e) {
    e.preventDefault();
    var options = {
        url: "/general/add/amend",
        title: 'LC Search ',
        size: eModal.size.lg,
        buttons: [{
            text: 'Select LC',
            style: 'info',
            close: true,
            click: function () {
                var usertab = $('#operation').DataTable();
                usertab.rows({
                    selected: true
                }).data().each(function (d) {
                    var id = d['id'];
                    var  url = "/bank/lc/"+id+"/amend";
                    window.location.assign(url);
                });
            }
        }, {
            text: 'Close',
            style: 'default',
            close: true
        }],
    };
    eModal.ajax(options);
});

$('#button_add_amend_corp').click(function (e) {
    e.preventDefault();
    var options = {
        url: "/general/add/amend/corp",
        title: 'LC Search ',
        size: eModal.size.lg,
        buttons: [{
            text: 'Select LC',
            style: 'info',
            close: true,
            click: function () {
                var usertab = $('#operation').DataTable();
                usertab.rows({
                    selected: true
                }).data().each(function (d) {
                    var id = d['id'];
                    var  url = "/corporate/lc/"+id+"/amend";
                    window.location.assign(url);
                });
            }
        }, {
            text: 'Close',
            style: 'default',
            close: true
        }],
    };
    eModal.ajax(options);
});