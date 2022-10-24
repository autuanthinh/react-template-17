import React, { PureComponent } from 'react';
import LoadingComponent from 'app/components/base/LoadingComponent';

interface IAsyncComponentState {
  component?: any;
}

const asyncComponent = (importComponent: any) => {
  class AsyncComponent extends PureComponent<{}, IAsyncComponentState> {
    _isUnmounted;

    constructor(props: any) {
      super(props);
      this.state = {
        component: undefined,
      };

      this._isUnmounted = false;

      importComponent().then(({ default: component }: { default: any }) => {
        if (component && !this._isUnmounted) {
          this.setState({
            component,
          });
        }
      });
    }

    componentWillUnmount() {
      this._isUnmounted = true;
    }

    componentDidMount() {
      this._isUnmounted = false;
    }

    render() {
      const { component: C } = this.state;

      return C ? <C {...this.props} /> : <LoadingComponent />;
    }
  }

  return AsyncComponent;
};

export default asyncComponent;
