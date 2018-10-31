import {queryDataCenterItem, queryCabinetItem} from '@/services/resource';

export default {
  namespace: 'resource',
  state: {
    dataSource: []
  },
  subscriptions: {
    setup({dispatch, history}) {
      history.listen(location => {
        if (location.pathname === '/homepage/resource/') {
          dispatch({
            type: 'getDataCenterList',
            payload: {}
          })
        }else if(location.pathname === '/homepage/resource/cabinet/'){
          dispatch({
            type: 'getCabinetList',
            payload: {}
          })
        }
      })
    }
  },
  effects: {
    * getDataCenterList({payload}, {call, put}) {
      const data = yield call(queryDataCenterItem, payload);
      yield put({type: 'updateStates', payload: {dataSource: data.item_list}})
    },
    * getCabinetList({payload}, {call, put}) {
      const data = yield call(queryCabinetItem, payload);
      yield put({type: 'updateStates', payload: {dataSource: data.item_list}})
    },
  },
  reducers: {
    updateStates(state, action) {
      return {...state, ...action.payload}
    },
  },
};
