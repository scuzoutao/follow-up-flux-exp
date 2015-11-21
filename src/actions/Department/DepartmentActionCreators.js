/**
 * Follow-up System Web Frontend (https://github.com/mdluo/follow-up-flux)
 * (C) 2015 Mingdong Luo (https://github.com/mdluo) | MIT License
 */

import { dispatch, dispatchAsync } from '../../dispatcher/AppDispatcher';
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

export function requestDoctors(id) {
  dispatchAsync(DepartmentAPI.getDoctors(id), {
    request: ActionTypes.REQUEST_DOCTOR,
    success: ActionTypes.REQUEST_DOCTOR_SUCCESS,
    failure: ActionTypes.REQUEST_DOCTOR_ERROR
  }, { id });
}

export function addNewDoctor() {
  dispatch(ActionTypes.ADD_NEW_DOCTOR);
}

export function saveNewDoctors(id, doctors) {
  dispatchAsync(DepartmentAPI.saveDoctors(id, doctors), {
    request: ActionTypes.SAVE_NEW_DOCTOR,
    success: ActionTypes.SAVE_NEW_DOCTOR_SUCCESS,
    failure: ActionTypes.SAVE_NEW_DOCTOR_ERROR
  }, { id });
}
