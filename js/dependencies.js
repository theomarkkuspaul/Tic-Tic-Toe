//rotates array left
Array.prototype.rotate = function(){
  var shifted = this.shift();
  return this.push(shifted)
}

// Compare two arrays for compatability
Array.prototype.equals = function(array){

// If the compared array is a falsey value then return false
  if( !array){
    return false;
  };

// Make sure array lengths are the same
  if(this.length != array.length){
    return false;
  };

// iterate through arrays and compare if each element inside of them match
  for(var i = 0; i < this.length; i++){
    if(this[i] != array[i]){
      // console.log('Did not compare, but do not despair');
      return false;
    };
  };

// everything before this point tries to prove that the arrays do not match
  return true;
}

// return random element inside of an array
Array.prototype.sample = function(){
  return this[Math.floor(Math.random() * this.length)]
}

var sleep = function(sleepTime){

  var now = new Date().getTime();
  for(var i = 0; i < 1e7; i++) {
    if((new Date().getTime() - now) > sleepTime){
      break;
    }
  }
}