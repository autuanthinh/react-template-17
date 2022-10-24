import { intlShape, InjectedIntl } from 'react-intl';

/** @type {InjectedIntl} */
let intl: InjectedIntl;

/** React component to capture the context.  */
export default function IntlCapture(props: any, context: any) {
  intl = context.intl;
  return props.children;
}

IntlCapture.contextTypes = {
  intl: intlShape.isRequired,
};

export function getIntl(): InjectedIntl {
  return intl;
}

export function getLocale() {
  return intl
    ? {
        en: 'en_GB',
      }[intl.locale] || 'en_GB'
    : 'en_GB';
}

export function getAppLocale() {
  return (intl && intl.locale) || 'en';
}
