import { configure, observable, action, computed, autorun } from 'mobx';

configure({
  enforceActions: 'strict'
});

class Store {
  @observable items = ['item1', 'item2', 'item3'];

  constructor() {
    autorun(() => {
      console.log(`currently we have ${this.items.length} items.`)
    })
  }

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