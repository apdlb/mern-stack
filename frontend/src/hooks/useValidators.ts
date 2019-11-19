import { getTranslate } from 'react-localize-redux';
import { useStore } from 'react-redux';

const useValidators = () => {
  const store = useStore();
  const props = store.getState();
  const translate = getTranslate(props.localize);

  const email = (callback: Function, value: string, label?: string | number | React.ReactNode) => {
    if (
      // eslint-disable-next-line
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        value
      )
    ) {
      callback(translate('validations.email'));
    }
  };

  return {
    email
  };
};

export default useValidators;
