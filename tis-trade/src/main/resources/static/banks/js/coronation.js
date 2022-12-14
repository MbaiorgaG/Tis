$(document).ready(function() {
    initnotices();
});
function initnotices(){
    $("#fielderrors li").each(function(index, value) {
        let tt = $(this).text();
        $("[name='" + tt + "']").closest(".form-group").addClass("has-error");
    });

    $('.actionMessage li').each(function(index, value) {
        let tt = $(this).text();
        let notify = $.notify({message: tt},
            {allow_dismiss: true, type: 'success'});
    });

    $('.actionError li').each(function(index, value) {
        let tt = $(this).text();
        let notify = $.notify({message: tt},
            {allow_dismiss: true, type: 'danger'});
    });

    $('.fieldError li').each(function(index, value) {
        let tt = $(this).text();
        let notify = $.notify({message:tt}, { allow_dismiss: true ,type: 'danger'});
    });
}