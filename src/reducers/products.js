import {
  GET_PRODUCT,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILED
} from '../constants/Products';

const initialState = {
  productsList: [],
  product: null
};

export default function ProductsState (state = initialState, action) {

  switch (action.type) {

    case GET_PRODUCT:

      let _product;
      for (let i = 0, len = state.productsList.length; i < len; i++) {
        if (state.productsList[i].id === parseInt(action.payload)) {
          _product = state.productsList[i];
          break;
        }
      }

      return {...state, product: _product || null};
      break;

    case GET_PRODUCT_SUCCESS:
      return {...state, product: action.payload || null};
      break;

    case GET_PRODUCTS_REQUEST:
      return state;
      break;

    case GET_PRODUCTS_SUCCESS:
      return {...state, productsList: action.payload};
      break;

    case GET_PRODUCTS_FAILED:
      return state;
      break;

    default:
      return state;
      break;
    }
}
