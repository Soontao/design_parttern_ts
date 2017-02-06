/**
 * Builder 模式
 * 
 * Builder用于封装构建过程
 * 
 * 
 */

namespace build {
  // namespace start


  /**
   * 水果
   */
  interface Fruit {
    fruitType: string;
    fruitMaturity: number;
  }

  class Apple implements Fruit {
    fruitType = "apple";
    fruitMaturity = 0;
  }

  class FruitTree {

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

  class FruitBuilder {
    /**
     * 种植水果
     */
    plant_fruit() {
      const tree = new FruitTree(new Apple());
      tree.sowing();
      tree.grow();
      tree.harvest();
      return tree
    }

    /**
     * 种植更好的水果
     */
    plant_pretty_fruit() {
      const tree = new FruitTree(new Apple());
      tree.sowing();
      tree.grow();
      tree.grow();
      tree.grow();
      tree.harvest();
      return tree
    }

  }

  const builder = new FruitBuilder();
  console.log(builder.plant_fruit());
  console.log(builder.plant_pretty_fruit());
  // namespace end
}

/**
 * Output
 * 
 * FruitTree { fruit: Apple { fruitType: 'apple', fruitMaturity: 6 } }
 * FruitTree { fruit: Apple { fruitType: 'apple', fruitMaturity: 10 } }
 * 
 * 
 */