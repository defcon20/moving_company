$.get('/getOrderHistory').done(function(result){
    console.log(result);
    result.forEach(function(order, i){
        $('#history').append(
            "<div class='order"+i+"'>" +
            "<div>Order #"+i+"</div>" +
            "</div>"
        );

        order.orderItem.forEach(function(item){
            $('.order'+i).append("<p>Item: "+item.item+"</p>");
            $('.order'+i).append("<p>Price: "+item.price+"</p>");
        });
    });
});


//for(var i = 0; i<result.length; i++){
//    $('#pricing_main').append(
//        "<li class='blueTop'>"+
//        "<h3>"+result[i].product_name+"</h3>"+
//        "<h4></h4>"+
//        "<p class='price'>"+"$"+result[i].price+"</p>"+
//        "<h5>$100.00 an hour</h5>"+
//        "<a href='#' class='btn btn-primary addplan' data-item='"+result[i].product_name+"' data-price='"+result[i].price+"'>Place Order</a>"
//    );
//}