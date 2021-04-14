interface UserInfoState {
    token: string
}

const state: UserInfoState = {
    token: ''
}

const mutations = {
    SET_TOKEN(state: UserInfoState, payload: string) {
        state.token = payload
    },
    REMOVE_TOKEN(state: UserInfoState) {
        state.token = ''
    }
}

const actions = {
    setToken({ commit }: any, token: string) {
        commit('SET_TOKEN', token)
    },
    removeToken({ commit }: any, token: string) {
        commit('REMOVE_TOKEN')
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}