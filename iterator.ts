/**
 * 迭代器模式
 */

namespace iterator {

  interface Iterator {
    hasNext(): boolean;
    next(): any;
  }

  interface Container {
    getIterator(): Iterator;
  }

  class UserIterator implements Iterator {
    private _index = -1;
    private _users: string[];

    constructor(users: string[]) {
      this._users = users;
    }

    hasNext() {
      if (this._index + 1 < this._users.length)
        return true;
      else
        return false;
    }

    next() {
      this._index += 1;
      return this._users[this._index];
    }

  }

  class UserContaniner implements Container {
    private _users = ['user1', 'user2', 'user3', 'user4'];

    getIterator() {
      return new UserIterator(this._users);
    }


  }

  const ite = (new UserContaniner()).getIterator();
  while (ite.hasNext()) {
    console.log(ite.next());
  }
}