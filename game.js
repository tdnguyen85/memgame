
var row1 = [ "E", "A", "B", "C", "G", "E", "A", "B", "C", "G"];
var row2 = [ "E", "A", "B", "C", "G"];

function shuffle(o) {
  for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  return o;
};

var shuffle1 = shuffle(row1);

for (var i = 0; i < row1.length; i += 1){
    $('#first-row').append('<div class="block" id="block' + i + '">' + shuffle1[i] + '</div>');
}

function clickable(id) {
  $('#block' + id).on('click', function() {
    $('#block' + id).attr('data-click', true);
  });
}

for (var i = 0; i < row1.length; i += 1) {
  clickable(i);
}
function gameLogic() {
if ( (shuffle1[0] === shuffle1[8]) && ($(shuffle1[0]).attr('data-click') === $(shuffle1[8]).attr('data-click'))){
  alert("it is true");
 };
 // if ( (shuffle1[0] === shuffle1[8]) && ($(shuffle1[0]).attr('data-click') === $(shuffle1[8]).attr('data-click'))){
 //  alert("it is true");
 // };
}
// for (var count = 0; count<9; count +=1) {
//   for(var i=0; i<9; i+=0) {
//     if((shuffle1[i] === shuffle1[count]) && ($(shuffle1[i]).attr('data-click') === $(shuffle1[count]).attr('data-click'))) {
//       alert('Matched Letters');
//     }
//   }
// }
