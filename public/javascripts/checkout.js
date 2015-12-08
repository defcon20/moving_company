var items;
if(!localStorage.getItem('cart')){
    localStorage.setItem('cart', JSON.stringify({
        "items": []
    }))
}else{
    items = JSON.parse(localStorage.getItem('cart')).items;
    items.forEach(function(v){
        $('.itemList').append("<div class='item'>Item: "+ v.item +", Price: "+ v.price+"</div>")
    })
}



$(document).ready(function() {


/*

    if($('#address1').val().length < 1){
        $('#errors').html('Need Address');
        $('#errors').addClass('alert alert-danger');
        return false;
    }
    if($('#address2').val().length < 1){
        $('#errors').html('Need Address');
        $('#errors').addClass('alert alert-danger');
        return false;
    }

*/





    $('#Purchase').on('click', function(e) {
        e.preventDefault();
        $.post('/placeorder', {
            orderItems: items
        }).done(function(result){
            console.log(result);
            $('body').append("<b>Items successfully purchased!!!</b>")
            localStorage.setItem('cart', JSON.stringify({
                "items": []
            }));

            $('.itemList').html('');

            window.location.href = "/checkout_success";
        });
    });

    var navListItems = $('ul.setup-panel li a'),
        allWells = $('.setup-content');

    allWells.hide();

    navListItems.click(function(e)
    {
        e.preventDefault();
        var $target = $($(this).attr('href')),
            $item = $(this).closest('li');

        if (!$item.hasClass('disabled')) {
            navListItems.closest('li').removeClass('active');
            $item.addClass('active');
            allWells.hide();
            $target.show();
        }
    });

    $('ul.setup-panel li.active a').trigger('click');

    // DEMO ONLY //
    $('#activate-step-2').on('click', function(e) {
        $('ul.setup-panel li:eq(1)').removeClass('disabled');
        $('ul.setup-panel li a[href="#step-2"]').trigger('click');
        $(this).remove();
    })

    //$('.datepicker').pickadate();
    //$('.timepicker').pickatime();

    $('#activate-step-3').on('click', function(e) {

        if($('#address1').val().length < 1){
            $('#errors').html('Please make sure all fields are entered.');
            $('#errors').addClass('alert alert-danger');
            return false;
        }
        if($('#city1').val().length < 1){
            $('#errors').html('Please make sure all fields are entered.');
            $('#errors').addClass('alert alert-danger');
            return false;
        }
        if($('#zipcode1').val().length < 1){
            $('#errors').html('Please make sure all fields are entered.');
            $('#errors').addClass('alert alert-danger');
            return false;
        }
        if($('#address2').val().length < 1){
            $('#errors').html('Please make sure all fields are entered.');
            $('#errors').addClass('alert alert-danger');
            return false;
        }
        if($('#city2').val().length < 1){
            $('#errors').html('Please make sure all fields are entered.');
            $('#errors').addClass('alert alert-danger');
            return false;
        }
        if($('#zipcode2').val().length < 1){
            $('#errors').html('Please make sure all fields are entered.');
            $('#errors').addClass('alert alert-danger');
            return false;
        }

        $('#errors').html('');
        $('#errors').removeClass('alert alert-danger');

        $('ul.setup-panel li:eq(2)').removeClass('disabled');
        $('ul.setup-panel li a[href="#step-3"]').trigger('click');
        $(this).remove();
    })
});