$(function(){
    $('#fi_ip').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'ipaddress',
            title: 'Enter FI ip address'
    });
});