/**
 * Builder 模式
 * 
 * Builder和抽象工厂看似区别不大，实质没有任何相似之处
 * 前者在于配置最后返回的对象，后者在于提供一个工厂的通用接口
 */

namespace builder {
  // namespace start

  interface FruitBuilder {

    sowing();

    grow();

    harvest();

    getFruit(): Fruit;
  }

  /**
   * 水果
   */
  interface Fruit {
    fruitType: string;
    fruitMaturity: number;
  }

  class Apple implements Fruit {
    fruitType = "apple";
    fruitMaturity: 0;
  }

  class AppleBuilder implements FruitBuilder {
    private fruit: Fruit;
    constructor(fruit: Fruit) {
      this.fruit = fruit;
    }
    sowing() {
      this.fruit.fruitMaturity += 1;
    }
    grow() {
      this.fruit.fruitMaturity += 2;
    }
    harvest() {
      this.fruit.fruitMaturity += 3;
    }
    getFruit(): Fruit {
      return this.fruit;
    }
  }

  class Person {
    /**
     * 种植水果
     */
    plant_fruit(builder: FruitBuilder) {
      builder.sowing();
      builder.grow();
      builder.harvest();
    }

    /**
     * 种植更好的水果
     */
    plant_pretty_fruit(builder: FruitBuilder) {
      builder.sowing();
      builder.grow();
      builder.grow();
      builder.grow();
      builder.harvest();
    }

  }

  const person = new Person();
  const appleTree = new AppleBuilder(new Apple());
  const anotherAppleTree = new AppleBuilder(new Apple());
  person.plant_fruit(appleTree);
  person.plant_pretty_fruit(anotherAppleTree);
  console.log(appleTree.getFruit());
  console.log(anotherAppleTree.getFruit());
  // namespace end
}

