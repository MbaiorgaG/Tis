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


$("#rev").hide();
$("#revolving").click(function () {
    if ($(this).is(":checked")) {
        $("#rev").show();
    }
    else if ($(this).is(":not(:checked)")) {
        $("#rev").hide();
    }
});




if ($('#lcType').val() === "PCLPCN")
{
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



$('#lcType').on('change', function ()
{
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
                        $('#advBankAddress').val(d['bankAddress'])




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
                        $('#availWithBankCode').val(d['institutionCode'])



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
                        $('#reimbursingBankAddress').val(d['bankAddress'])

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
                        $('#issuingBankCountry').val(d['bankCountry'])
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
                        $('#advThrBankCode').val(d['institutionCode'])

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

function populateNostroAcct(bankCode,branchId) {
    $.ajax({
        type: 'POST',
        data: {bankCode: bankCode,branchId: branchId},
        url: "/general/populateNostroAcct",
        success: function (data) {
            var dd = data;
            var actNumArray = [];
            actNumArray = dd;
            var jj = $('#corrNostroAcct') ;
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




