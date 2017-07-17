var s=0;
$('#first').scroll(function(e){
  e.preventDefault();
  var tgt='#second';
  if(s==0){
    s=1;
    $(''+tgt).animate({
      scrollTop: $(this).scrollTop(),
      scrollLeft: $(this).scrollLeft()
    }, 10,function(){
      s=0;
    });
  }
});

$('#second').scroll(function(e){
  e.preventDefault();
  var tgt='#first';
  if(s==0){
    s=1;
    $(''+tgt).animate({
      scrollTop: $(this).scrollTop(),
      scrollLeft: $(this).scrollLeft()
    }, 10,function(){
      s=0;
    });
  }
});
