import { configure, observable, action, computed } from 'mobx';

configure({
  enforceActions: 'strict'
});

class Store {
  @observable items = ['item1', 'item2', 'item3'];

  @action addItem = (item) => {
    this.items.unshift(item);
  };

  @computed get itemsCount() {
    return this.items.length;
  }
  test() {
    this.items.push('aloha');
  }
}

const store = new Store();
export default store;