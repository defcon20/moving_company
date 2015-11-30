$(document).ready(function() {
    $('#products').DataTable( {
        "ajax": '/products/getDataTable'
    } );
} );