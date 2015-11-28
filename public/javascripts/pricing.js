
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
            "<a href='signup?plan=free' class='signup'>Place Order</a>"
        );
    }
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