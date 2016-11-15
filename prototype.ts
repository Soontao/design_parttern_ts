/**
 * ProtoType 原型模式
 * 
 * 简化非必要的类，以现有实例创建新实例
 */

namespace prototype {

  class Apple {

    constructor(w, o) {
      this._weight = w;
      this._origin = o;
    }

    private _weight: number;
    private _origin: String;

    get weight(): number {
      return this._weight;
    }

    set weight(w) {
      this._weight = w;
    }

    /**
     * 获取当前对象的完全拷贝
     */
    clone(): Apple {
      let anotherApple = new Apple(this._weight, this._origin);
      return anotherApple;
    }

    info(): string {
      return `this apple from ${this._origin},weight is ${this._weight}`
    }

  }

  let prototype: Apple = new Apple(1, "chengdu");
  let apple1 = prototype.clone();
  prototype.weight = 2;
  let apple2 = prototype.clone();
  console.log(prototype.info());
  console.log(apple1.info());
  console.log(apple2.info());



}

/**
 * Output
 * 
 * this apple from chengdu,weight is 2
 * this apple from chengdu,weight is 1
 * this apple from chengdu,weight is 2
 * 
 */