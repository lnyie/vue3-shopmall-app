export declare interface carGoodsList {
  goodsId: string,
  goodsName: string,
  goodsIntro: string,
  goodsCoverImg: string,
  sellingPrice: number,
  tag: string,
  goodsCarouselList: string[],
  originalPrice: number,
  goodsDetailContent: string[],
  count: number,
  isSelected: boolean
}

export declare interface ImagesItem {
  imgUrl: string,
  categoryId: number
}

export declare interface Images2Item {
  imgUrl: string,
  name: string,
  navId: number
}

export declare interface ListItem {
  name: string,
  img: string,
  title: string,
  forceValue: number,
  price: string
}

export declare interface TabListItem {
  title: string,
  name: string,
  list: ListItem[]
}

export declare interface GoodsListItem {
  goodsId: number,
  goodsName: string,
  goodsIntro: string,
  goodsCoverImg: string,
  sellingPrice: number,
  tag: string
}

export declare interface GoodsList {
  [propName: string]: GoodsListItem[]
}

export declare interface TabslabelItem {
  label: string,
  active: boolean
}

export declare interface ProductListItem<T> {
  title: T,
  imgUrl: T
}

export declare interface CategoryDataItemListItem {
  title: string,
  productList: ProductListItem<string>[]
}

export declare interface CategoryDataItem {
  name: string,
  mainImgUrl: string,
  list: CategoryDataItemListItem[]
}

export declare interface GoodsDetailInterface {
  [propName: string]: {
    goodsId: number,
    goodsName: string,
    goodsIntro: string,
    goodsCoverImg: string,
    sellingPrice: number,
    tag: string,
    goodsCarouselList: string[],
    originalPrice: number,
    goodsDetailContent: string[] | string
  }
}
