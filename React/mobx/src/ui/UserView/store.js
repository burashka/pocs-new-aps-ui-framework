import { observable, decorate } from 'mobx';

class UserStore {
	constructor(){
		this.loginTime = undefined;
	}

	async requestHistory({ vars: {selectedUser}, user }) {
		try {
			const response = await fetch(`/aps/2/resources/${selectedUser.aps.id}/loginHistory?sort(-loginTime),limit(${user.aps.id === selectedUser.aps.id ? "1" : "0"},1)`);
			const loginHistoryItems = await response.json();
			const lastLoginHistory = loginHistoryItems.length > 0 ? loginHistoryItems[0] : undefined;
			this.loginTime = lastLoginHistory && new Date(lastLoginHistory.loginTime);
		} catch(e){}
	}
}

decorate(UserStore, {
	loginTime: observable
});

const store = new UserStore();

export default store;