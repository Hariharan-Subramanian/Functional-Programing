var new1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
Array.prototype.offset = function(index, limit) {
  var prev = 0,
    next = 0;
  var prevarrayval = [];
  var nextarrayval = this;
  prev = (index - limit)-1;
  if (prev < 0) {
    next = prev * -1;
    prev = 0;
  }
  next += (index + limit);
  if (next > this.length) {
    prev -= (next - this.length);
    next = this.length
  }
  for(var i=prev;i<index;i++){
    prevarrayval.push(this[i]);
  }
  for(var i=index;i<next;i++){
    prevarrayval.push(this[i]);
  }
  return prevarrayval;
 // return prevarrayval.slice(prev, index).concat(nextarrayval.slice(index, next));
}
new1.offset(0, 2);

/*
var a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
(function b(currentIndex,subsetvalue){
  var e = currentIndex;
  var c = e < (Math.floor(subsetvalue/2));
  var f = a.length < e + (Math.floor(subsetvalue/2));
  var d = Math.floor(subsetvalue/2);
  if(f){
    return a.slice(a.length-subsetvalue,a.length)
  }
  if(c){
    return a.slice(e,subsetvalue+e+1);
  }
  return a.slice(e-d,e+d+1)
}(15,6))
*/
