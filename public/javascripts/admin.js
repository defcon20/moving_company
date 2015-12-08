$.get('/products/get').done(function(result){
    console.log(result);
    result.forEach(function(product, i){
        $('#products').append(
            "<div data-id='"+product._id+"'>" +
            "<input type='text' class='product_name' value='"+product.product_name+"' />" +
            "<input type='text' class='price' value='"+product.price+"' />" +
            "<a href='#' class='updateProduct' data-id='"+product._id+"'>Update</a> "+
            "<a href='#' class='deleteProduct' data-id='"+product._id+"'>Delete</a>"+
            "</div>"
        );
    });

    $('.updateProduct').click(function(e){
        e.preventDefault();
        $.post('/products/update', {
            _id: $(this).data('id'),
            product: {
                product_name: $(this).siblings('.product_name').val(),
                price: $(this).siblings('.price').val()
            }
        }).done(function(result){
            $('#note').html('Product Updated');
            location.reload();
        });
    });

    $('.deleteProduct').click(function(e) {
        e.preventDefault();
        $.post('/products/delete', {
            _id: $(this).data('id')
        }).done(function(result){
            $('#note').html('Product Deleted');
            location.reload();
        });
    });

    $('.addProduct').click(function(e) {
        e.preventDefault();
        if($('#addProduct .product_name').val().length < 1){
            $('#errors').html('Need Product Name');
            $('#errors').addClass('alert alert-danger');
            return false;
        }
        if($('#addProduct .price').val().length < 1){
            $('#errors').html('Need price Name');
            $('#errors').addClass('alert alert-danger');
            return false;
        }
        $.post('/products/add', {
            product_name: $(this).siblings('.product_name').val(),
            price: $(this).siblings('.price').val()
        }).done(function(result){
            $('#note').html('Product Added');
            location.reload();
        });
    });
});


