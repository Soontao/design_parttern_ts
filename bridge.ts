/**
 * Bridge
 * 
 * 桥接模式
 * 
 * 将抽象与实现分离，多个抽象类操作时获取更多的灵活性
 * 
 */

namespace bridge {

  /**
   * 地区(Field)和植物(Plant)两个抽象类
   * 
   * 地区给予的营养，南北是不同的
   * 而不同水果吸收营养的效率，也是不同的
   * 
   * 如果使用继承实现，那么将会产生很多冗余类
   * 
   * 抽象类降低了互相的耦合，并为扩展预留了空间
   *  
   */


  abstract class AbsField {

    protected _plant: AbsPlant;

    protected _growDegree: number;

    abstract growPlant();

  }

  abstract class AbsPlant {

    protected _plantTypeName: string;

    protected _plantMaturity: number = 0;

    abstract grow(n: number): void;

    public showInfo() {
      console.log(`type: ${this._plantTypeName},maturity: ${this._plantMaturity}`);
    }

  }

  class SouthField extends AbsField {
    constructor(p: AbsPlant) {

      super();
      this._plant = p;
      this._growDegree = 10;

    }

    growPlant() {
      this._plant.grow(this._growDegree);
    }

  }

  class NorthField extends AbsField {
    constructor(p: AbsPlant) {

      super();
      this._plant = p;
      this._growDegree = 10;

    }

    growPlant() {
      this._plant.grow(this._growDegree);
    }

  }


  class Apple extends AbsPlant {

    grow(n) {
      this._plantMaturity += n;
    }

  }


  class Pear extends AbsPlant {

    grow(n) {
      this._plantMaturity += (2 * n);
    }
  }

}