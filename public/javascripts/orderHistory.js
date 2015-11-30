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