/**
 * Adapter
 * 
 * 适配器模式
 * 用于适配已有的类，用以协同工作
 * 
 * 有一个已存在的类/接口，有一个新的接口
 * 
 * 适配器继承已有的类，实现新的接口
 * 这样就可以使用新接口调用已有的类
 * 
 */

namespace adapter {
    // namespace start

    interface IPower {

    }

    class Power implements IPower {

    }

    interface IPowerStation {
        getPower(uid: string, voltage: number): IPower;
    }


    class LocalPowerStation {
        getPowerFromLocal(localuid: string) {
            return new Power();
        }
    }

    class PowerStationAdapter extends LocalPowerStation implements IPowerStation {

        getPower(uid, voltage) {
            return this.getPowerFromLocal(uid);
        }

    }





    // namespace end
}