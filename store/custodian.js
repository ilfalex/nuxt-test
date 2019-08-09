export const state = () => ({
	activeUser : null
})

export const mutations = {
	setActiveUser (state, activeUser) {
		state.activeUser = activeUser
	},

	setDocStatus(state, payload) {
		state.activeUser.docs[payload.key].doc_status_id = payload.status
	},

	setRejectionReason(state, payload){
		state.activeUser.docs[payload.key].rejection_msg = payload.reason
	}
}

export const actions = {
}