import React, { FC } from 'react';

type ComponentType = React.Component | React.PureComponent | FC<any>;

export default class Inject {
  static combineInjectionComponent(injects: any[] = [], Component: ComponentType): ComponentType {
    let currentComponent = Component;
    for (let i = injects.length - 1; i >= 0; i--) {
      currentComponent = injects[i](currentComponent);
    }
    return currentComponent;
  }
}
