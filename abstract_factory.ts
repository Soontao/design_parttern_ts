/**
 * Abstract Factory 
 * 
 * 抽象工厂模式
 * 
 * 创建工厂，提供统一的创建接口
 * 
 * 不是标准的抽象工厂，使用接口来抽象
 * 
 * 重要的是创造一个生产工厂的工厂
 */

namespace abstract_factory {

  interface IFactory {
    makeFruit(fruitName: string): IFruit;
    makeShape(shapeName: string, shapeNum: number): Array<IShape>;
  }



  class FactoryOfFactory {
    getFactoryOf(productsType: string): IFactory {
      switch (productsType) {
        case "fruit":
          return new FruitFactory();
        case "shape":
          return new ShapeFactory();
        default:
          break;
      }
    }
  }

  /**
   * 水果
   */
  interface IFruit {
    getFruitName(): string;
  }

  class Apple implements IFruit {
    fruitName = "apple";
    getFruitName() {
      return this.fruitName;
    }
  }

  class PineApple implements IFruit {
    getFruitName() {
      return "PineApple";
    }
  }


  interface IShape {
    getShapeName(): string;
  }

  class Square implements IShape {
    shapeName = "square";
    getShapeName() {
      return this.shapeName;
    }
  }

  class FruitFactory implements IFactory {
    /**
     * makeFruit
     */
    public makeFruit(fruitName): IFruit {
      switch (fruitName) {
        case "apple":
          return new Apple();
        case "pineapple":
          return new PineApple();
        default:
          return null;
      }
    }

    public makeShape(shapeName, shapeNum) {
      return null;
    }
  }
  class ShapeFactory implements IFactory {
    /**
     * makeFruit
     */
    public makeFruit(fruitName): IFruit {
      return null;
    }

    public makeShape(shapeName, shapeNum): Array<IShape> {
      switch (shapeName) {
        case 'square':
          const arr = new Array<IShape>();
          for (let i = 0; i < shapeNum; i++) {
            arr.push(new Square())
          }
          return arr;
        default:
          return null;
      }
    }
  }

  const factory_of_factory = new FactoryOfFactory();

  const factory1: FruitFactory = factory_of_factory.getFactoryOf('fruit');
  const factory2: ShapeFactory = factory_of_factory.getFactoryOf('shape');

  console.log(factory1.makeFruit('apple'));
  console.log(factory2.makeShape('square', 10));

}