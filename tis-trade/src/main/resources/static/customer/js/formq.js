/**
 * Created by JUDE on 6/27/2018.
 */
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

function selectTextareaLine(tarea,lineNum) {
    lineNum--; // array starts at 0
    var lines = tarea.value.split("\n");


    // calculate start/end
    var startPos = 0, endPos = tarea.value.length;
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
        return false;
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
        return false;
    }

    return true;
}

function valremittanceInfo() {
    var maxLength = 34;
    var text = $('#remittanceInfos').val().trim();
    var lines = text.split("\n");
    if(text != "") {
        for (var i = 0; i < lines.length; i++) {
            if (i == 0) {
                var bnf = lines[i].substring(0, 5);
                if ("" === bnf || bnf != "/BNF/") {
                    var tarea = document.getElementById('remittanceInfos');
                    $('#stepz').trigger('click');
                    $("#stepz").css('border-color', 'red').append("<span style='color:red;'></span>");
                    var v = i + 1;
                    selectTextareaLine(tarea, v);
                    $("#infoError").append("<p style='color:red;'></p>");
                    $('#infoError').text("Line 1 should begin with the initials /BNF/");
                    return false;
                }
            }
            if (lines[i].length > maxLength) {
                var tarea = document.getElementById('remittanceInfos');
                $('#stepz').trigger('click');
                $("#stepz").css('border-color', 'red').append("<span style='color:red;'></span>");
                var v = i + 1;
                selectTextareaLine(tarea, v);
                $("#infoError").append("<p style='color:red;'></p>");
                $('#infoError').text("Maximum 34 character per line exceeded in line " + v);
                return false;

            }
            if (i > 0) {
                if (!lines[i] || lines[i] === " ") {
                    var tarea = document.getElementById('remittanceInfos');
                    var v = i + 1;
                    $('#stepz').trigger('click');
                    $("#stepz").css('border-color', 'red').append("<span style='color:red;'></span>");
                    tarea.focus();
                    $("#infoError").append("<p style='color:red;'></p>");
                    $('#infoError').text("Empty line found in line " + v);
                    return false;
                }
            }
        }
        if (lines.length > 4) {
            var tarea = document.getElementById('remittanceInfos');
            $('#stepz').trigger('click');
            $("#stepz").css('border-color', 'red').append("<span style='color:red;'></span>");
            $("#infoError").append("<p style='color:red;'></p>");

            tarea.focus();
            $('#infoError').text("Maximum 4 lines exceeded");
            return false;
        }
        $('#infoError').text(" ");
        return true;
    }
}
function valSendertoRecInfo() {
    var maxLength = 34;
    var text = $('#senderToReceiverInfos').val().trim();
    var lines = text.split("\n");
    for (var i = 0; i < lines.length; i++) {
        if (lines[i].length > maxLength) {
            var tarea = document.getElementById('senderToReceiverInfos');
            $('#stepz').trigger('click');
            $("#stepz").css('border-color', 'red').append("<span style='color:red;'></span>");
            var v= i+1;
            selectTextareaLine(tarea,v);
            $('#senderError').text("Maximum 34 character per line exceeded in line "+ v);
            return false;

        }
        if(i > 0 ) {
            if (!lines[i] || lines[i] === " ") {
                var tarea = document.getElementById('senderToReceiverInfos');
                var v= i+1;
                $('#stepz').trigger('click');
                $("#stepz").css('border-color', 'red').append("<span style='color:red;'></span>");
                tarea.focus();
                $('#senderError').text("Empty line found in line "+v);
                return false;
            }
        }
    }
    if (lines.length > 6){
        var tarea = document.getElementById('senderToReceiverInfos');
        $('#stepz').trigger('click');
        $("#stepz").css('border-color', 'red').append("<span style='color:red;'></span>");
        tarea.focus();
        $('#senderError').text("Maximum 6 lines exceeded");
        return false;
    }
    $('#senderError').text(" ");
    return true;
}

$('#remittanceInfos').on('blur', function() {
    valremittanceInfo();
});
$('#senderToReceiverInfos').on('blur', function() {
    valSendertoRecInfo();
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
                        $('#beneficiaryCountry').val(d['beneficiaryCountry']),

                        $('#beneBankPoCode').val(d['beneBankPoCode']),
                        $('#beneBankCtry').val(d['beneBankCtry']),
                        $('#beneBankState').val(d['beneBankState']),
                        $('#beneBankCity').val(d['beneBankCity']),
                        $('#beneBankAddr').val(d['beneBankAddr']),
                        $('#beneBankSwiftCode').val(d['beneBankSwiftCode']),
                        $('#beneBankName').val(d['beneBankName']),
                        $('#beneBankId').val(d['bankId'])


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

