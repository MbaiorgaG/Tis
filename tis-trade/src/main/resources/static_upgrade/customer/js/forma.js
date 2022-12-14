

$('#clearBank').click(function (e) {
    e.preventDefault();
    $('.clearBank').val('');
});
$('#clearBen').click(function (e) {
    e.preventDefault();
    $('.clearBen').val('');
});
$('#clearCorrBank').click(function (e) {
    e.preventDefault();
    $('.clearCorrBank').val('');
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


$('#authOTP_button').click(function (e) {
    e.preventDefault();
    var url = "/corporate/forma/doSave";
    corpvalidateOTP(url);
});

$("#authToken_button").click(function (e) {
    e.preventDefault();
    var url = "/corporate/transfer/authToken";

    var token = $("#token").val();
    if (token == "") {
        $('#tokenError').html("Token is required");
    }

    if (token != "") {
        $.ajax({
            type: "POST",
            url: url,
            data: {token: token},
            success: function (data) {
                var result = data;
                if (!result) {
                    $('#tokenError').html("invalid token");
                }
                if (result) {
                    window.location.assign("/corporate/forma/doSave");
                }

            }
        });
    }

});




$('#button_search_CorpApp').click(function (e)
{
    e.preventDefault();
    var options={
        url: "/general/corporate/applicant",
        title: 'Applicant Search ',
        size: eModal.size.lg,
        buttons: [{
            text: 'Select Applicant',
            style: 'info',
            close:true,
            click:function ()
            {
                var userTab=$('#operation').DataTable();
                userTab.rows
                ({
                    selected: true
                }).data().each(function (d)
                {
                    $('#applicantId').val(d['id']),
                        $('#firstname').val(d['applicantFirstName']),
                        $('#lastName').val(d['applicantLastName']),
                        $('#phone').val(d['applicantPhone']),
                        $('#address').val(d['applicantAddress']),
                        $('#town').val(d['applicantTown']),
                        $('#state').val(d['applicantState']),
                        $('#email').val(d['applicantEmail']),
                        $('#identityNo').val('')
                });

            }
        }

            ,{
                text: 'Close',
                style: 'default',
                close: true
            }],
    };

    eModal.ajax(options);


});

$('#button_search_retailApp').click(function (e)
{
    e.preventDefault();
    var options={
        url: "/general/retail/applicant",
        title: 'Applicant Search ',
        size: eModal.size.lg,
        buttons: [{
            text: 'Select Applicant',
            style: 'info',
            close:true,
            click:function ()
            {
                var userTab=$('#operation').DataTable();
                userTab.rows
                ({
                    selected: true
                }).data().each(function (d)
                {
                    $('#applicantId').val(d['id']),
                        $('#firstname').val(d['applicantFirstName']),
                        $('#lastName').val(d['applicantLastName']),
                        $('#phone').val(d['applicantPhone']),
                        $('#address').val(d['applicantAddress']),
                        $('#town').val(d['applicantTown']),
                        $('#state').val(d['applicantState']),
                        $('#email').val(d['applicantEmail']),
                        $('#identityNo').val('')

                });

            }
        }

            ,{
                text: 'Close',
                style: 'default',
                close: true
            }],
    };

    eModal.ajax(options);


});

function digitalGrping(amt) {
    var frmtedAmt = 0,decimalPart = 0.00 ;

    if(amt != null && amt != '') {
        var sanitisedAmt = parseFloat(amt.toString().replace(/[^\d\\.]+/gi, ''));
        realAmt = parseFloat(Math.round(sanitisedAmt * 100) / 100).toFixed(2);
        var pos = realAmt.lastIndexOf(".");
        intPart = realAmt.slice(0, pos);
        decimalPart = realAmt.slice(pos, realAmt.length);
        // console.log("int amt==="+intPart)
        frmtedAmt = (parseFloat(intPart.replace(/[^\d]+/gi, '')) || 0).toLocaleString('en-US');
        // console.log("dig grping ==="+frmtedAmt);
    }
    return frmtedAmt+decimalPart;

}



$('#button_search_retailBene').click(function (e) {
    e.preventDefault();
    var options = {
        url: "/general/retail/beneficiary",
        title: 'Beneficiary Search ',
        size: eModal.size.lg,
        buttons: [{
            text: 'Select beneficiary',
            style: 'info',
            close: true,
            click: function () {
                var usertab = $('#operation').DataTable();
                usertab.rows({
                    selected: true
                }).data().each(function (d) {
                    $('#beneficiaryId').val(d['id']),
                        $('#beneficiaryName').val(d['beneficiaryName']),
                        $('#beneficiaryAccount').val(d['beneficiaryAccount']),
                        $('#beneficiaryPhone').val(d['beneficiaryPhone']),
                        $('#beneficiaryAddress').val(d['beneficiaryAddress']),
                        $('#beneficiaryCountry').val(d['beneficiaryCountry'])

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




$('#button_search_corporateBene').click(function (e) {
    e.preventDefault();
    var options = {
        url: "/general/corporate/beneficiary",
        title: 'Beneficiary Search ',
        size: eModal.size.lg,
        buttons: [{
            text: 'Select beneficiary',
            style: 'info',
            close: true,
            click: function () {
                var usertab = $('#operation').DataTable();
                usertab.rows({
                    selected: true
                }).data().each(function (d) {
                    $('#beneficiaryId').val(d['id']),
                        $('#beneficiaryName').val(d['beneficiaryName']),
                        $('#beneficiaryAccount').val(d['beneficiaryAccount']),
                        $('#beneficiaryPhone').val(d['beneficiaryPhone']),
                        $('#beneficiaryAddress').val(d['beneficiaryAddress']),
                        $('#beneficiaryCountry').val(d['beneficiaryCountry'])

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
            click: function ()
            {
                var usertab = $('#operation').DataTable();
                usertab.rows({
                    selected: true
                }).data().each(function (d)
                {
                    $('#beneBankId').val(d['id']),
                    $('#beneBankName').val(d['institutionName']),
                        $('#beneBankSwiftCode').val(d['swiftCode']),
                        $('#beneBankAddr').val(d['bankAddress']),
                        $('#beneBankCity').val(d['bankCity']),
                        $('#beneBankState').val(d['bankState']),
                        $('#beneBankCtry').val(d['bankCountry']),
                        $('#beneBankPoCode').val(d['bankPostalCode'])

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

$('#button_search_corr').click(function (e) {
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
                    $('#corrBankCode').val(d['institutionCode']),
                    $('#corrBranchId').val(d['branchId']),
                    $('#corrBankName').val(d['institutionName']),
                        $('#corrBankSwiftCode').val(d['swiftCode']),
                        $('#corrBankAddr').val(d['bankAddress']),
                        $('#corrBankCity').val(d['bankCity']),
                        $('#corrBankState').val(d['bankState']),
                        $('#corrBankCtry').val(d['bankCountry']),
                        $('#corrBankPoCode').val(d['bankPostalCode'])
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





