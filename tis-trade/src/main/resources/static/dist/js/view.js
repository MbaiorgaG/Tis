function view() {
    alert('i am here');
    $('#myModal').modal('toggle');
    $('#mytab tbody').on('click', 'tr', function (e) {
        e.preventDefault();
        viewsDetails();
//                var dt = $('#mytab');
//                var typedoc = $(this).closest('tr').find('#typeOfDocDescs').val();
//                var paarNumber = $(this).closest('tr').find('#paarNumber').val();
//                var customerName = $(this).closest('tr').find('#customerName').val();
//                var takecharge = $(this).closest('tr').find('#takeCharge').val();
//                var paaramount = $(this).closest('tr').find('#paarAmount').val();
//                var  documentNumber =$(this).closest('tr').find('#documentNumber').val();
//                var  transportNumber = $(this).closest('tr').find('#transportNumber').val();
//                var paarcurrency=$(this).closest('tr').find('#paarCurrency').val();
//                var chargeacct = $(this).closest('tr').find('#chargeAccount').val();
//                var paardate = $(this).closest('tr').find('#paarDate').val();
//                var currencyCode = $(this).closest('tr').find('#currencyCode').val();
//
//
//                $("#documentTypes").val(typedoc);
//                $("#paarNumb").val(paarNumber);
//                $("#applicantName").val(customerName);
//                $("#paarAmo").val(paaramount);
//                $("#paarCurrency").val(paarcurrency);
//                $("#documentNumb").val(documentNumber);
//                $("#TransportNumb").val(transportNumber);
//                $("#chargeAcco").val(chargeacct);
//                $("#paardat").val(paardate);
//                $("#paarCurrency").val(currencyCode);

        return false;

    });
}

$('#mytab1 tbody').on('click', 'tr', function (e) {
    e.preventDefault();
    viewsDetails();
}


function viewsDetails() {
    var dt = $('#mytab');
    var typedoc = $(this).closest('tr').find('.typeOfDocDescs').val();
    var paarNumber = $(this).closest('tr').find('.paarNumber').val();
    var customerName = $(this).closest('tr').find('.customerName').val();
    var takecharge = $(this).closest('tr').find('.takeCharge').val();
    var paaramount = $(this).closest('tr').find('.paarAmount').val();
    var  documentNumber =$(this).closest('tr').find('.documentNumber').val();
    var  transportNumber = $(this).closest('tr').find('.transportNumber').val();
    var paarcurrency=$(this).closest('tr').find('.paarCurrency').val();
    var chargeacct = $(this).closest('tr').find('.chargeAccount').val();
    var paardate = $(this).closest('tr').find('.paarDate').val();
    var currencyCode = $(this).closest('tr').find('.currencyCode').val();


    $("#documentTypes").val(typedoc);
    $("#paarNumb").val(paarNumber);
    $("#applicantName").val(customerName);
    $("#paarAmo").val(paaramount);
    $("#paarCurrency").val(paarcurrency);
    $("#documentNumb").val(documentNumber);
    $("#TransportNumb").val(transportNumber);
    $("#chargeAcco").val(chargeacct);
    $("#paardat").val(paardate);
    $("#paarCurrency").val(currencyCode);
}