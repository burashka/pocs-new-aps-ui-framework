import { observable, decorate } from 'mobx';

class OptionsStore {
	constructor(){
		this.sendInvitation = false;
	}

	setSendInvitation(value) {
		this.sendInvitation = value;
	}
}

decorate(OptionsStore, {
	sendInvitation: observable
});

const store = new OptionsStore();

export default store;