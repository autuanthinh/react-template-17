import { fork, cancel, cancelled } from 'redux-saga/effects';

interface ISagaPoll {
  pollTaskId?: any;
  pollTask: (...param: any[]) => any;
  pollSync: (...param: any[]) => any;
  cancelPoll: () => any;
}

export default abstract class SagaPoll implements ISagaPoll {
  pollTaskId?: any;

  constructor() {
    this.pollTaskId = null;
  }

  *pollTask(...param: any[]): any {
    if (this.pollTaskId) {
      yield cancel(this.pollTaskId);
    }

    this.pollTaskId = yield fork([this, this.pollSync], ...param);
  }

  *pollSync(...param: any[]): any {
    try {
      // Implement it
    } finally {
      if (yield cancelled()) {
        this.pollTaskId = null;
      }
    }
  }

  *cancelPoll(): any {
    // stop poll task
    if (this.pollTaskId) {
      yield cancel(this.pollTaskId);
    }
  }
}
