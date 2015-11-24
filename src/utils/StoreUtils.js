/**
 * Follow-up System Web Frontend (https://github.com/mdluo/follow-up-flux)
 * (C) 2015 Mingdong Luo (https://github.com/mdluo) | MIT License
 */

import { each, isFunction } from 'underscore';
import { EventEmitter } from 'events';
import assign from 'object-assign';

const CHANGE_EVENT = 'change';

export function createStore(spec) {
  const emitter = new EventEmitter();
  emitter.setMaxListeners(0);

  const store = assign({
    emitEvent(event) {
      emitter.emit(event);
    },

    addEventListener(event, callback) {
      emitter.on(event, callback);
    },

    removeEventListener(event, callback) {
      emitter.removeListener(event, callback);
    },

    emitChange() {
      emitter.emit(CHANGE_EVENT);
    },

    addChangeListener(callback) {
      emitter.on(CHANGE_EVENT, callback);
    },

    removeChangeListener(callback) {
      emitter.removeListener(CHANGE_EVENT, callback);
    }
  }, spec);

  // Auto-bind store methods for convenience
  each(store, (val, key) => {
    if (isFunction(val)) {
      store[key] = store[key].bind(store);
    }
  });

  return store;
}
