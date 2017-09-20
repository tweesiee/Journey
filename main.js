var myIndex = 0;

function carousel() {
    var i;
    var x = document.getElementsByClassName("fotoSkit");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 3000);
}

$(function() {
  var $pageContent = $('#content');
 
  var loadContent = function(url) {
    $pageContent.fadeOut(function() {
      $pageContent.load(url, function() {
        $pageContent.fadeIn();
      });
    });
  };
 
  loadContent('hem.html');
 
  $('.menulink').on('click', function(event) {
    event.preventDefault();
    loadContent($(this).attr('href'));
  });
});