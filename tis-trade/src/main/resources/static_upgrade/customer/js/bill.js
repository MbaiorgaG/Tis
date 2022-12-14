


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
                        $('#draweeBnkAddress').val(d['bankAddress']),
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



$('#button_search_col').click(function (e) {
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
                        $('#coLLBankCountry').val(d['bankCountry']),
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




$('#button_search_corres').click(function (e) {
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
                        $('#corrBankCountry').val(d['bankCountry']),
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


$('#button_search_rem').click(function (e) {
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
                    $('#reimbursingBank').val(d['institutionName']),
                        $('#reimbursingBankSwiftCode').val(d['swiftCode']),
                        $('#reimbursingBankAddresss').val(d['bankAddress']),
                        $('#reimbursingBankCity').val(d['bankCity']),
                        $('#reimbursingBankState').val(d['bankState']),
                        $('#reimbursingBankCountry').val(d['bankCountry']),
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
