import { observable, decorate } from 'mobx';

import userTemplate from "./userTemplate";

class UsersStore {
	constructor() {
		this.users = [{ id: 0, ...userTemplate }];
	}

	addUser() {
		this.users.push({ id: this.users.length, ...userTemplate });
	}

	removeUser(i) {
		this.users.splice(i, 1);
	}

	changeUser(user) {
		const idx = this.users.findIndex(item => item.id === user.id);
		if (idx > -1) this.users[idx] = user;
	}
}

decorate(UsersStore, {
	users: observable
});

const store = new UsersStore();

export default store;