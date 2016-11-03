/**
 * Abstract Factory 
 * 
 * 抽象工厂模式
 * 
 * 提供统一的创建接口
 */

namespace abstract_factory {
  /**
   * 水果工厂
   */
  interface IFruitFactory {
    makeFruit(): IFruit;
  }

  /**
   * 水果
   */
  interface IFruit {
    getFruitName(): string;
  }

  class Apple implements IFruit {
    getFruitName() {
      return "Apple";
    }
  }

  class PineApple implements IFruit {
    getFruitName() {
      return "PineApple";
    }
  }

  class AppleFactory implements IFruitFactory {
    makeFruit(): IFruit {
      return new Apple();
    }
  }

  class PineAppleFactory implements IFruitFactory {
    makeFruit(): IFruit {
      return new PineApple();
    }
  }

  class Person {
    /**
     * 找到一个工厂，
     * 让工厂生产一个水果，
     * 吃掉它
     */
    eatFruitFrom(fruitFac: IFruitFactory) {
      const fruit: IFruit = fruitFac.makeFruit();
      console.log('eat:' + fruit.getFruitName());
    }
  }

  const factory1: IFruitFactory = new PineAppleFactory();
  const factory2: IFruitFactory = new AppleFactory();
  const person = new Person();

  person.eatFruitFrom(factory1);
  person.eatFruitFrom(factory2);
}