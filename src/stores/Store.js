import { observable, action, computed } from 'mobx';

class Store {
  @observable items = [];

  @action addItem = (item) => {
    this.items.unshift(item);
  };

  @computed get itemsCount() {
    return this.items.length;
  }


}

const store = new Store();
export default store;