/**
 * Follow-up System Web Frontend (https://github.com/mdluo/follow-up-flux)
 * (C) 2015 Mingdong Luo (https://github.com/mdluo) | MIT License
 */

import assign from 'object-assign';

import { register } from '../../dispatcher/AppDispatcher';
import { createStore } from '../../utils/StoreUtils';

const _department = {};

const DepartmentStore = createStore({
  get(departmentID) {
    return _department;
  }
});

DepartmentStore.dispatchToken = register(action => {
  if (action.type == 'REQUEST_DEPARTMENT_SUCCESS') {
    const responseDepartment = action.response;
    if (responseDepartment) {
      assign(_department, responseDepartment);
      DepartmentStore.emitChange();
    }
  }
});

export default DepartmentStore;
