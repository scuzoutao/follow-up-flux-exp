/**
 * Follow-up System Web Frontend (https://github.com/mdluo/follow-up-flux)
 * (C) 2015 Mingdong Luo (https://github.com/mdluo) | MIT License
 */

import Immutable from 'immutable';

import { register, waitFor } from '../../dispatcher/AppDispatcher';
import { createStore } from '../../utils/StoreUtils';
import DepartmentStore from './DepartmentStore';

let _doctors = Immutable.List();
let _leaders = Immutable.List();

const DoctorStore = createStore({
  getDocotors() {
    return _doctors.toJS();
  },

  getLeaders() {
    return _leaders.toJS();
  },

  getNew() {
    return _doctors.filter((item) => item.status=='new').toJS();
  },

  maxId() {
    var maxId = 0;
    _doctors.forEach((item) => {
      if(item.id >= maxId) {
        maxId = item.id;
      }
    });
    return maxId;
  }
});

DoctorStore.dispatchToken = register(action => {
  waitFor([DepartmentStore.dispatchToken]);
  switch(action.type) {
    case 'REQUEST_DOCTOR_SUCCESS':
    case 'SAVE_NEW_DOCTOR_SUCCESS':
      const responseDoctors = action.response;
      if (responseDoctors) {
        _doctors = Immutable.List(responseDoctors);
        _leaders.clear();
        _doctors.forEach((item) => {
          if (item.count >= 0) {
            _leaders = _leaders.push(item);
          }
        });
        DoctorStore.emitChange();
      }
      break;
    case 'ADD_NEW_DOCTOR':
      _doctors = _doctors.push({id: DoctorStore.maxId()+1, status: 'new'});
      DoctorStore.emitChange();
      break;
  }
});

export default DoctorStore;
