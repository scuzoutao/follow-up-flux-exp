/**
 * Follow-up System Web Frontend (https://github.com/mdluo/follow-up-flux)
 * (C) 2015 Mingdong Luo (https://github.com/mdluo) | MIT License
 */

import assign from 'object-assign';
import Immutable from 'immutable'

import { register } from '../../dispatcher/AppDispatcher';
import { createStore } from '../../utils/StoreUtils';

var _department = Immutable.Map();

const DepartmentStore = createStore({
  get() {
    return _department.toJS();
  }
});

DepartmentStore.dispatchToken = register(action => {
  if (action.type == 'REQUEST_DEPARTMENT_SUCCESS') {
    const responseDepartment = action.response;
    if (responseDepartment) {
      _department = Immutable.Map(responseDepartment);
      DepartmentStore.emitChange();
    }
  }
});

export default DepartmentStore;
