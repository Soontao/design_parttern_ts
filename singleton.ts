/**
 * singleton
 * 
 * 单例模式
 * 
 * 提供唯一实例和它的访问方法
 * 
 */


namespace singleton {
    // namespace start


    /**
     * 系统
     * 
     * 通常情况下为单例模式
     * 
     */
    class System {

        constructor(name, ver) {
            this.name = name;
            this.systemVer = ver;
        }

        private name: String;

        private systemVer: Number = 0; moshi

        into(): String {
            return `name is: ${this.name}\nstorage is: ${this.systemVer}`
        }

        // 为了实现单例，所需的静态成员(类成员)，和静态方法

        private static instance: System;

        static Instance() {
            if (!this.instance)
                // 如果实例不存在，创建它
                this.instance = new System("singleton system", 1);
            return this.instance;
        }



    }


    // 测试一下
    console.log(System.Instance().into())


    // namespace end
}