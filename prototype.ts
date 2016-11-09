/**
 * ProtoType 原型模式
 * 
 * 简化非必要的类，以现有实例创建新实例
 */

namespace prototype {

  class Apple {
    weight: number;
    origin: String;

    clone(): Apple {
      let anotherApple = new Apple();
      anotherApple.weight = this.weight;
      anotherApple.origin = this.origin;
      return anotherApple;
    }

    info(): string {
      return "this apple from " + this.origin + "and weight is " + this.weight;
    }

  }

  let prototype: Apple = new Apple();
  prototype.weight = 1;
  prototype.origin = "成都";
  console.log(prototype.info());
  let apple1= prototype.clone();
  console.log(apple1.info());
}