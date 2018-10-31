import router from 'umi/router';
import {Login as loginAuth, Logout as LogoutAuth} from '../services/login';

export default {
  namespace: 'Login',
  state: [],
  effects: {
    * loginIn({payload}, {put, call}) {
      const data = yield call(loginAuth, payload);
      console.log(data);
      if (data.status === 0) {
        router.push('/homepage');
      }
    },
    * logout({payload}, {call, put}) {
      const data = yield call(LogoutAuth, payload);
      if (data.status === 0) {
        router.push('/')
      }
    }
  },
  reducers: {
    updateStates(state) {
      // return state.filter(item => item.id !== id);
    },
  },
};
