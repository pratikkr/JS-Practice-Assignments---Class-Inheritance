// import using require
const shape = require("./shape");

// declare class
class Circle extends shape {
  constructor() {
    super();
    this.color = shape.color;
  }
  calculateArea() {}
}

// export class using module.exports
module.exports = Circle;
