var unitPerPound = 10.00;
var shipping = 1;
var handling = 1;
var taxes = 1;
$('#unit').text("$" + unitPerPound );

function updateTotal() {
    var quantity = $("#quantity");
    var pounds = $("#pounds");
    var total = quantity.val() * pounds.val() * unitPerPound;

    $('#total').html("$" + total );
}

$(document).ready(function(){	    
    updateTotal();        
});	

$("#quantity").change(function (event) {    
    updateTotal();
});