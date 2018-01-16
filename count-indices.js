function countIndices(str) {
  var count = {};
  str = str.split("");
  for(var i = 0; i < str.length; i++) {
    if(str[i] !== " ") {
      if(count[str[i]] !== undefined) {
        count[str[i]]["count"]++;
        count[str[i]]["index"].push(i);
      }else {
        count[str[i]] = {count : 1, index : [i]};
      }
    }
  }
  return count;
}

console.log(countIndices("lighthouse in the house"));