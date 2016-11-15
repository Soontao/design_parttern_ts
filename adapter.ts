/**
 * Adapter
 * 
 * 装饰器模式
 * 用于适配已有的类，用以协同工作
 * 
 * 这是一个不完全的理解，待修改
 * 
 */

namespace adapter {
    // namespace start

    class Apple {

        getName() {
            return "apple-fdsjkalf"
        }

        getWeight() {
            return 1.2
        }

    }

    class Peer {

        getName() {
            return "peer-fdjskal"
        }

        getDesity() {
            return 0.2
        }

        getVolumn() {
            return 6
        }get


    }

    class PeerAdapter extends Peer {

        getWeight() {
            return this.getVolumn() * this.getWeight();
        }

    }

    let apple: Apple = new Apple();
    let peer: PeerAdapter = new PeerAdapter();

    console.log(apple.getWeight());
    console.log(peer.getWeight());



    // namespace end
}