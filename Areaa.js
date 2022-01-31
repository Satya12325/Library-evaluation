class Shape2D {
    constructor(side1, side2) {
      this.area = side1 * side2;
      this.perimeter = 2*(side1 + side2)
    }
  }

 

class Rectangle extends Shape2D {
    constructor(height, width) {
      super(height, width);
    }
  }
  console.log(new Rectangle(6,12).area,new Rectangle(6,12).perimeter)