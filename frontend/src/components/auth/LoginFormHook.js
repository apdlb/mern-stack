import React from 'react';
import { Translate } from 'react-localize-redux';
import { useDispatch, useSelector } from 'react-redux';

import { login } from '../../actions/AuthActions';
import useError from '../../hooks/ErrorHook';
import useForm from '../../hooks/FormHook';

const LoginFormHook = () => {
  const dispatch = useDispatch();
  const { errorControl } = useError();

  const signup = async () => {
    alert(`User Created!
           Name: ${inputs.firstName} ${inputs.lastName}
           Email: ${inputs.email}`);
    // console.log();
    dispatch(login({ email: '', password: '' }))
      .then(r => {
        console.log('Hola', r);
      })
      .catch(err => {
        console.log('Error', err);
        errorControl(err, true);
      });
  };

  const { inputs, handleInputChange, handleSubmit } = useForm(signup);
  const auth = useSelector(state => state.auth);

  return (
    <Translate>
      {({ translate }) => {
        return (
          <div className="container">
            <form onSubmit={handleSubmit}>
              <div>
                <label>Email Address</label>
                <input type="text" name="email" onChange={handleInputChange} value={inputs.email || ''} />
              </div>
              <div>
                <label>Password</label>
                <input type="password" name="password1" onChange={handleInputChange} value={inputs.password1 || ''} />
              </div>
              <button type="submit">Sign Up</button>
            </form>
          </div>
        );
      }}
    </Translate>
  );
};

export default LoginFormHook;
