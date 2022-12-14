

$('#sendertoreceiver').blur(function (e) {

    var lines = $("#sendertoreceiver").val().trim().split(/\r\n|\r|\n/);
    if(lines.length>6)
    {
        $('#sendertoreceiverError').html('Number of Lines which is Six Exceed the Swift Format')
    }
    else
    {
        $('#sendertoreceiverError').html('')
    }
    for(var i=0;i<lines.length;i++)
    {
        var length=lines[i].length;
        if(length>65)
        {
            var value=i+1;
            $('#sendertoreceiverError').html('Number of Character in a Line exceed the Swift Format at Line '+value+'');
        }
    }
});


$('#goodDescriptions').blur(function(e)
{
    var lines = $("#goodDescriptions").val().trim().split(/\r\n|\r|\n/);
    if(lines.length>100)
    {
        $('#goodDescriptionsError').html('Number of Lines which is One Hundered Exceed the Swift Format')

    }
    else{
        $('#goodDescriptionsError').html('')

    }
    for(var i=0;i<lines.length;i++)
    {
        var length=lines[i].length;
        if(length>65)
        {
            var value=i+1;
            $('#sendertoreceiverError').html('Number of Character in a Line exceed the Swift Format at Line '+value+'');
        }

    }
});



$('#periodOfPresentation').blur(function(e)
{
    var lines = $("#periodOfPresentation").val().trim().split(/\r\n|\r|\n/);
    if(lines.length>4)
    {
        $('#periodOfPresentationError').html('Number of Lines which is Four Exceed the Swift Format')

    }
    else{
        $('#periodOfPresentationError').html('')

    }
    for(var i=0;i<lines.length;i++)
    {
        var length=lines[i].length;
        if(length.length>35)
        {
            var value=i+1;
            $('#periodOfPresentationError').html('Number of Character in a Line exceed the Swift Format at Line '+value+'');
        }
    }
});




$('#docInstruction').blur(function(e)
{
    var lines = $("#docInstruction").val().trim().split(/\r\n|\r|\n/);
    if(lines.length>100)
    {
        $('#docInstructionError').html('Number of Lines which is One Hundered Exceed the Swift Format')

    }
    else{
        $('#docInstructionError').html('')

    }
    for(var i=0;i<lines.length;i++)
    {
        var length=lines[i].length;
        if(length>65)
        {
            var value=i+1;
            $('#docInstructionError').html('Number of Character in a Line exceed the Swift Format at Line '+value+'');

        }

    }
});



$('#conditions').blur(function(e)
{
    var lines = $("#conditions").val().trim().split(/\r\n|\r|\n/);
    if(lines.length>100)
    {
        $('#conditionsError').html('Number of Lines which is One Hundred Exceed the Swift Format')

    }
    else{
        $('#conditionsError').html('')

    }
    for(var i=0;i<lines.length;i++)
    {
        var length=lines[i].length;
        if(length>65)
        {
            var value=i+1;
            $('#conditionsError').html('Number of Character in a Line exceed the Swift Format at Line '+value+'');

        }
    }
});



$('#bankInstructions').blur(function(e)
{
    var lines=$("#bankInstructions").val().trim().split(/\r\n|\r|\n/);
    if(lines.length>12)
    {
        $('#bankInstructionsError').html('Number of Lines which is Twelve Exceed the Swift Format')

    }
    else{
        $('#bankInstructionsError').html('')

    }
    for(var i=0;i<lines.length;i++)
    {
        var length=lines[i].length;
        if(length>65)
        {
            $('#bankInstructionsError').html('Number of Character in a Line exceed the Swift Format at Line '+value+'');

        }

    }
});


$('#chargeDescription').blur(function(e)
{
    var lines = $("#chargeDescription").val().trim().split(/\r\n|\r|\n/);
    console.log('charge descrip {}'+lines)
    if(lines.length>6)
    {
        $('#chargeDescriptionError').html('Number of Lines which is Six Exceed the Swift Format')
    }
    else
    {
    $('#chargeDescriptionError').html('')

   }
    for(var i=0;i<lines.length;i++)
    {
        var length=lines[i].length;
        if(length>35)
        {
            var value=i+1;
            $('#chargeDescriptionError').html('Number of Character in a Line exceed the Swift Format at Line '+value+'');

        }
    }

});