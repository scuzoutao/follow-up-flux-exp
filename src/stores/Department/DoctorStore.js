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
  if (action.type == 'REQUEST_DOCTOR_SUCCESS') {
    const responseDoctors = action.response;
    if (responseDoctors) {
      assign(_doctors, responseDoctors);
      DoctorStore.emitChange();
    }
  }
});

export default DoctorStore;
