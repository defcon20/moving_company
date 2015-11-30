if(!localStorage.getItem('cart')){
    localStorage.setItem('cart', JSON.stringify({
        "items": []
    }))
}

$.ajax({
    url: "api/products",
    context: document.body
}).done(function(result) {
    for(var i = 0; i<result.length; i++){
        $('#pricing_main').append(
            "<li class='blueTop'>"+
            "<h3>"+result[i].product_name+"</h3>"+
            "<h4></h4>"+
            "<p class='price'>"+"$"+result[i].price+"</p>"+
            "<h5>$100.00 an hour</h5>"+
            "<a href='#' class='addplan' data-item='"+result[i].product_name+"' data-price='"+result[i].price+"'>Place Order</a>"
        );
    }

    $('.addplan').click(function(e){
        e.preventDefault();
        var cart = JSON.parse(localStorage.getItem('cart'));
        cart.items.push({
            item:  $(this).data('item'),
            price: $(this).data('price')
        });
        localStorage.setItem('cart', JSON.stringify(cart));
        $('body').prepend("<b>Item Added successfully for "+$(this).data('item')+"</b>");

    });
});

var pricingMod = {
    'priceHover': $('#pricingCont .cont>div').hover(function(){
            $(this).addClass('onHover');
        },
        function(){
            $(this).removeClass('onHover');
        }),
    'init': function(){

    }
};

pricingMod.init();