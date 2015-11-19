/**
 * Follow-up System Web Frontend (https://github.com/mdluo/follow-up-flux)
 * (C) 2015 Mingdong Luo (https://github.com/mdluo) | MIT License
 */

import assign from 'object-assign';

import { register, waitFor } from '../../dispatcher/AppDispatcher';
import { createStore } from '../../utils/StoreUtils';
import DepartmentStore from './DepartmentStore';

const _doctors = [];

const DoctorStore = createStore({

  get() {
    return _doctors;
  }
});

DoctorStore.dispatchToken = register(action => {
  waitFor([DepartmentStore.dispatchToken]);
  switch(action.type) {
    case 'REQUEST_DOCTOR_SUCCESS':
      const responseDoctors = action.response;
      if (responseDoctors) {
        assign(_doctors, responseDoctors);
        DoctorStore.emitChange();
      }
      break;
    case 'ADD_NEW_DOCTOR':
      _doctors.push({id: _doctors[_doctors.length-1].id+1});
      DoctorStore.emitChange();
      break;
  }
});

export default DoctorStore;
