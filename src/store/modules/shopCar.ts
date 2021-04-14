import { carGoodsList } from '@/utils/type'

interface StateInterface {
  carGoodsList: carGoodsList[]
}

const state: StateInterface = {
  carGoodsList: []
}

const mutations = {
  ADD_GOODS: (state: StateInterface, payload: any ) => {
    const itemIndex = state.carGoodsList.findIndex(ele => ele.goodsId === payload.goodsId)
    if (itemIndex !== -1) {
      state.carGoodsList[itemIndex]['count'] += 1
    } else {
      state.carGoodsList.push(payload)
    }
  },
  DELETE_GOODS: (state: StateInterface, payload: { goodsId: string }) => {
    const itemIndex = state.carGoodsList.findIndex(ele => ele.goodsId === payload.goodsId)
    console.log(state.carGoodsList)
    state.carGoodsList.splice(itemIndex, 1)
    console.log(state.carGoodsList);
  },
  SET_COUNT: (state: StateInterface, payload: { goodsId: string, count: number }) => {
    const { goodsId, count } = payload
    const itemIndex = state.carGoodsList.findIndex(ele => ele.goodsId === goodsId)
    state.carGoodsList[itemIndex]['count'] = count
  },
  SET_IS_SELECTED: (state: StateInterface, payload: { goodsId: string, isSelected: boolean }) => {
    const { goodsId, isSelected } = payload
    const itemIndex = state.carGoodsList.findIndex(ele => ele.goodsId === goodsId)
    state.carGoodsList[itemIndex]['isSelected'] = isSelected
  }
}

const actions = {
  addGoods({ commit }: any, goodsItem: any) {
    commit('ADD_GOODS', goodsItem)
  },
  deleteGoods({ commit }: any, goodsId: string) {
    commit('DELETE_GOODS', { goodsId })
  },
  setCount({ commit }: any, info: { goodsId: string, count: number }) {
    commit('SET_COUNT', info)
  },
  setIsSelected({ commit }: any, info: { goodsId: string, isSelected: boolean }) {
    commit('SET_IS_SELECTED', info)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
