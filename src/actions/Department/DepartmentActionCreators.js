/**
 * Follow-up System Web Frontend (https://github.com/mdluo/follow-up-flux)
 * (C) 2015 Mingdong Luo (https://github.com/mdluo) | MIT License
 */

import { dispatchAsync } from '../../dispatcher/AppDispatcher';
import * as DepartmentAPI from '../../api/DepartmentAPI';
import DepartmentStore from '../../stores/Department/DepartmentStore';
import ActionTypes from '../../constants/ActionTypes';

export function requestDepartment(id, fields) {

  dispatchAsync(DepartmentAPI.getDepartment(id), {
    request: ActionTypes.REQUEST_DEPARTMENT,
    success: ActionTypes.REQUEST_DEPARTMENT_SUCCESS,
    failure: ActionTypes.REQUEST_DEPARTMENT_ERROR
  }, { id });
}
