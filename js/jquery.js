$(document).ready(function(){

var form = $('#search');

form.focus(function(){
  $(this).css('border', ' 1px solid #1a73e8');
});

form.blur(function(){
  $(this).css('border', ' none');
});

setInterval(() => {
  let relog = moment().format('MMMM Do YYYY, h:mm:ss a');
    $('.time').html(relog);
}, 1000);


  
});