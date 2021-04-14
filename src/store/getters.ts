const getters = {
  carCount: (state: any) => state.shopCar.carGoodsList.reduce((acc: any, cur: any) => { return acc + cur.count}, 0),
  carGoodsList: (state: any) => state.shopCar.carGoodsList,
  token: (state: any) => state.userInfo.token
}

export default getters
