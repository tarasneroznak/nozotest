import {
  GET_PRODUCT,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,  
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILED
} from '../constants/Products';

export function getProducts () {
  return (dispatch) => {

    dispatch({
      type: GET_PRODUCTS_REQUEST
    })

    setTimeout(() => {
      dispatch({
        type: GET_PRODUCTS_SUCCESS,
        payload: [
          {
            id: 1,
            name: 'TEST_1',
            description: 'TEST_1, TEST_1, TEST_1'
          },
          {
            id: 2,
            name: 'TEST_2',
            description: 'TEST_2, TEST_2, TEST_2'
          },
          {
            id: 3,
            name: 'TEST_3',
            description: 'TEST_3, TEST_3, TEST_3'
          },
          {
            id: 4,
            name: 'TEST_4',
            description: 'TEST_4, TEST_4, TEST_4'
          },
        ]
      })

    }, 1000)
  }
}

export function getProduct (id) {
  return (dispatch, getState) => {

    let _state = getState().products;

    if (_state.productsList.length > 0) {
      dispatch({
        type: GET_PRODUCT,
        payload: id
      })
    } else {

      dispatch({
        type: GET_PRODUCT_REQUEST
      })

      setTimeout(() => {
        dispatch({
          type: GET_PRODUCT_SUCCESS,
          payload: 
            {
              id: id,
              name: `TEST_${id}`,
              description: `TEST_${id}, TEST_${id}, TEST_${id}`
            }
        })

      }, 1000)

    }

  }
}