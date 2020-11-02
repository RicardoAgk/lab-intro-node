class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item);
    this.items.sort(function(a, b){return a - b});
    this.length = this.items.length
  }
    
  get(pos) {
    if(this.items.includes(pos)){
      return this.items[pos];
    }else{
      throw new Error('OutOfBounds');
    }
     
  }

  max() {
    if(this.items.length > 0){
       return Math.max.apply(null, this.items)
    }else{
      throw new Error('EmptySortedList');
    }
    
  }

  min() {
    if(this.items.length > 0){
      return Math.min.apply(null, this.items)
   }else{
     throw new Error('EmptySortedList');
   }
  }

  sum() {
    let sum = 0;
    for(let i = 0; i<this.items.length; i++){
      sum += this.items[i]
    }
    return sum
}
  avg() {
    let avg = 0;
    if(this.items.length > 0){
      for(let i = 0; i<this.items.length; i++){
      avg += this.items[i]
    }
      return avg / this.items.length
    }else{
      throw new Error('EmptySortedList');
    }
    }
    
}

module.exports = SortedList;
