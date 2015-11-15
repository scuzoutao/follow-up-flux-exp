/**
 * Follow-up System Web Frontend (https://github.com/mdluo/follow-up-flux)
 * (C) 2015 Mingdong Luo (https://github.com/mdluo) | MIT License
 */

import { register } from '../../dispatcher/AppDispatcher';
import { createStore, mergeIntoBag, isInBag } from '../../utils/StoreUtils';

var _department = {};

const DepartmentStore = createStore({
  get() {
    return _department;
  }
});

DepartmentStore.dispatchToken = register(action => {
  const responseDepartment = action.response;
  if (responseDepartment) {
    _department = responseDepartment;
    DepartmentStore.emitChange();
  }
});

export default DepartmentStore;
