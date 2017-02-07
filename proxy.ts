/**
 * 代理模式
 * 
 * 多一层，更灵活
 * 
 * 适配器模式主要是为了重用，而代理模式主要是为了更加灵活
 * 
 */

namespace proxy {

  interface Cow {
    moo(): string;
  }

  class EasternCow implements Cow {
    moo() {
      return "mooooo~";
    }
  }

  class CowProxy implements Cow {

    private _cow: Cow;

    constructor(cow: Cow) {
      this._cow = cow;
    }

    moo() {
      /** 
       * can do more operate
       * like create and init instance, modify instance status, or check params
       * 
       **/
      console.log(`A cow speak a moo`);
      return this._cow.moo();
    }

  }

}