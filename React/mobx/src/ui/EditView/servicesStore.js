import { observable, decorate } from 'mobx';

class ServicesStore {
	constructor() {
		this.services = [];
	}

	assignService(val){
		this.services.push(val);
	}

	unassignService(val){
		const idx = this.services.findIndex(item => item === val);
		this.services.splice(idx, 1);
	}
}

decorate(ServicesStore, {
	services: observable
});

const store = new ServicesStore();

export default store;