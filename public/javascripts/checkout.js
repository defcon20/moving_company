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


$('#Purchase').click(function(e) {
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