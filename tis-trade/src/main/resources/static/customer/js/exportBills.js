/**
 * Created by JUDE on 4/27/2018.
 */
$( ".lexd" ).datepicker({
    format: 'dd-mm-yyyy',
    todayHighlight: true,
});

$('#clearDrweeBank').click(function (e) {
    e.preventDefault();
    $('.clearDrweeBank').val('');
});
$('#clearBeneBank').click(function (e) {
    e.preventDefault();
    $('.clearBeneBank').val('');
});

$('#clearCollBank').click(function (e) {
    e.preventDefault();
    $('.clearCollBank').val('');
});

$('#clearCorrBank').click(function (e) {
    e.preventDefault();
    $('.clearCorrBank').val('');
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
            var jj = $('#nostroAcctNo') ;
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

$('#button_search_corrbnk').click(function (e) {
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
                    $('#corrBnkName').val(d['institutionName']),
                        $('#corrBnkSwiftCode').val(d['swiftCode']),
                        $('#corrBankAddress').val(d['bankAddress']),
                        $('#corrBankCity').val(d['bankCity']),
                        $('#corrBankState').val(d['bankState']),
                        $('#corrBankCountry').val(d['bankCountry'])
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

$('#button_search_collbnk').click(function (e) {
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
                    $('#coLLBnkName').val(d['institutionName']),
                        $('#coLLBnkSwiftCode').val(d['swiftCode']),
                        $('#coLLBankAddress').val(d['bankAddress']),
                        $('#coLLBankCity').val(d['bankCity']),
                        $('#coLLBankState').val(d['bankState']),
                        $('#coLLBankCountry').val(d['bankCountry'])

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
$('#button_search_beneBank').click(function (e) {
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
                    $('#beneBankName').val(d['institutionName']),
                        $('#beneBankSwiftCode').val(d['swiftCode']),
                        $('#beneBankAddr').val(d['bankAddress']),
                        $('#beneBankCity').val(d['bankCity']),
                        $('#beneBankState').val(d['bankState']),
                        $('#beneBankCtry').val(d['bankCountry'])

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

$('#button_search_drwbnk').click(function (e) {
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

                        $('#draweeBnkName').val(d['institutionName']),
                        $('#draweeBnkSwift').val(d['swiftCode']),
                        $('#draweeBnkAddress').val(d['bankAddress']),
                        $('#draweeBnkCity').val(d['bankCity']),
                        $('#draweeBnkState').val(d['bankState']),
                        $('#draweeBnkCountry').val(d['bankCountry'])


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

$(document).ready(function () {

    $('input[type="radio"]').click(function () {
        if ($(this).is(':checked')) {
            var radioValue = $(this).val();

            if (radioValue == "DiscountBill") {
                $("#id_bill_discount").show();
                $("#id_save_bt").hide();
                $('#id_advance_bill').hide();
                $('#advance_bill_history').hide();
            } else if (radioValue == "AdvanceBill") {
                $("#id_bill_discount").hide();
                $('#id_advance_bill').show();
                $('#id_save_bt').show();
                $('#advance_bill_history').hide();
            } else {
                $("#id_bill_discount").hide();
                $('#id_advance_bill').hide();
                $('#id_save_bt').show();
                $('#advance_bill_history').hide();
            }
        }
    });

});

if ($("#DiscountBillRadio").is(":checked")) {
    $("#id_bill_discount").show();
    $("#id_save_bt").hide();
    $('#id_advance_bill').hide();
    $('#advance_bill_history').hide();
}else if ($("#AdvanceBillRadio").is(":checked")) {
    $("#id_bill_discount").hide();
    $('#id_advance_bill').show();
    $('#id_save_bt').show();
    $('#advance_bill_history').hide();
}
else if ($("#NodiscountRadio").is(":checked")) {
    $("#id_bill_discount").hide();
    $('#id_advance_bill').hide();
    $('#id_save_bt').show();
    $('#advance_bill_history').hide();
}

$('#show_history').click(function (e) {
    e.preventDefault();
    if ($('#advance_bill_history').css('display') != 'none') {
        $('#advance_bill_history').hide();
        $("#show_history").html("View history");
    } else {
        $('#advance_bill_history').show();
        $("#show_history").html("Hide history");
    }

});


$('#negotiate_discount_button').click(function (e) {
    e.preventDefault();
        $("#discountValError").html("");
        $("input[name='submitAction']").val('Negotiate');
        $('form').submit();
});

$('#accept_discount_button').click(function (e) {
    e.preventDefault();
        $("#discountValError").html("");
        $("input[name='submitAction']").val('Accept');
        $('form').submit();
});

function getBillDueDate() {
    var dueDateIndicator = $("#dueDateIndicator").val();

    var tenorPrd = $("#tenorPeriod").val();
    var gracePrd = $("#gracePeriod").val();
    var fixedTrnstPrd = $("#fixedTransitPeriod").val();

    var onBodDate = $("#onBoardOn").val();
    var billDate = $("#billOn").val();
    var accptDate = $("#acceptanceOn").val();

    if (dueDateIndicator == "" || tenorPrd == "" || gracePrd == "" ||
        fixedTrnstPrd == "" || onBodDate == "" || billDate == "" || accptDate == "") {

        $('#dueOn').val('');
        return false;
    }
    if (dueDateIndicator == null || tenorPrd == null || gracePrd == null ||
        fixedTrnstPrd == null || onBodDate == null || billDate == null || accptDate == null) {

        $('#dueOn').val('');
        return false;
    }
    if (dueDateIndicator != "" && tenorPrd != "" &&  gracePrd != "" &&
        fixedTrnstPrd != "" &&  onBodDate != "" &&  billDate != "" &&  accptDate != "") {
        if (dueDateIndicator != null &&  tenorPrd != null &&  gracePrd != null &&
            fixedTrnstPrd != null &&  onBodDate != null &&  billDate != null &&  accptDate != null) {

            $.ajax({
                type: 'POST',
                data: {
                    dueDateIndicator: dueDateIndicator,
                    tenorPeriod: tenorPrd,
                    gracePeriod: gracePrd,
                    fixedTransitPeriod: fixedTrnstPrd,
                    onBoardDate: onBodDate,
                    billDate: billDate,
                    acceptanceDate: accptDate
                },
                url: "/general/getBillDueDate",
                success: function (result) {

                    if (result == "N") {
                        $("#dueOn").val("");

                    } else{
                        $("#dueOn").val(result);
                    }

                }, error: function (amt) {

                }
            });
        }
    }
}

$("#tenorPeriod").blur(function (e) {
    getBillDueDate();
});
$("#onBoardOn").blur(function (e) {
    getBillDueDate();
});
$("#fixedTransitPeriod").blur(function (e) {
    getBillDueDate();
});
$("#gracePeriod").blur(function (e) {
    getBillDueDate();
});
$("#billOn").blur(function (e) {
    getBillDueDate();
});
$("#acceptanceOn").blur(function (e) {
    getBillDueDate();
});
$("#dueDateIndicator").change(function (e) {
    getBillDueDate();
});

