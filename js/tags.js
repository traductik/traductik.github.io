
$('.toc-tags ul').hide();

$('.tag-title').click(function() {
    $(this).find('ul').slideToggle();
});

var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
    this.classList.toggle("active");    
  }
}
