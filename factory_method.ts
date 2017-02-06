
/**
 * 工厂方法
 * 
 * 将类的实例化延迟到工厂的方法，只需要给予类名或者相应指示物，即可返回对象
 * 
 * 对于Client来说，不用更换api，修改工厂类即可扩展
 * 
 * 适合原抽象类已经确定逻辑，但是依赖需要延后的情况。
 * 
 */


namespace factory_method {
  // namespace start

  abstract class IRobot {
    abstract say(): string;
  }
  
  class ChinaRebot extends IRobot {
    say() {
      return "hello china";
    }
  }

  abstract class RobotCompany {
    constructor() {
      this.storage = new Array();
    }
    // 公司仓库
    private storage: Array<IRobot>;
    // 生产机器人
    abstract produceRobot(): IRobot;
    // 存储新产的机器人机器人
    storeRobot(): void {
      var robot: IRobot = this.produceRobot();
      this.storage.push(robot);
      return;
    }
    getStorage() {
      return this.storage;
    }
  }

  class ChinaRobotCompany extends RobotCompany {
    produceRobot() {
      return new ChinaRebot();
    }
  }


  const robotCompany: RobotCompany = new ChinaRobotCompany();
  robotCompany.storeRobot();
  robotCompany.storeRobot();
  console.log(robotCompany.getStorage());

  // namespace end
}