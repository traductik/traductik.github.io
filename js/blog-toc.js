
$('.catlist ul').hide();

$('.catentries').click(function() {
    $(this).find('ul').slideToggle();
});



$("#shake-em-all").click(function() {
// jQuery selector to get an element
var query = $('.catlist ul');
 
// check if element is Visible
var isVisible = query.is(':visible');
 
if (isVisible === true) {
   // element is Visible
    $('.catlist ul').hide();
} else {
  // element is Hidden
   $('.catlist ul').show();
}
});

$("#shake-em-all2").click(function() {
// jQuery selector to get an element
var query = $('.catlist ul');
 
// check if element is Visible
var isVisible = query.is(':visible');
 
if (isVisible === true) {
   // element is Visible
    $('.catlist ul').hide();
} else {
  // element is Hidden
   $('.catlist ul').show();
}
});
