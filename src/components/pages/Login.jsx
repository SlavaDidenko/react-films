import Input from 'components/UI/input/Input';
import React, { useState } from 'react';
import '../styles/login.scss';
import { HiOutlineMail } from 'react-icons/hi';
import loginImg from '../../assets/login.png';
import { CgKeyhole } from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';
const dataUsers = [
  {
    login: 'admin',
    password: 'admin',
  },
];

const Login = ({setLoginned}) => {
  console.log('login');
  const [valueLogin, setValueLogin] = useState('');
  const [valuePassword, setValuePassword] = useState('');
  const [inputStylesErr , setInputStylesErr] = useState(["login__input-wrapper"])

  let navigate = useNavigate();

  const submitLogin = (e) => {
    e.preventDefault();
    console.log(e);
    if (
      dataUsers.find(
        el => el.login === valueLogin && el.password === valuePassword
      )
    ) {
      setLoginned(true)
      localStorage.setItem('login', true);
      navigate('/home');
    } else {
      setInputStylesErr([...inputStylesErr , "input-error" ])
    }
  };


  return (
    <main className="main">
      <div className="container">
        <section className="login">
          <div className="login__wrapper">
            <div className="login__wrapper-img">
              <img src={loginImg} alt="login"></img>
            </div>
              <form onSubmit={(e) => submitLogin(e)} className="login__form">
                <h1 className="login__title">Войти</h1>
                <div className={inputStylesErr.join(' ')}>
                  <Input
                    icon={<HiOutlineMail className="icon" />}
                    value={valueLogin}
                    setValue={setValueLogin}
                    placeholder="Логин"
                  />
                </div>
                <div className={inputStylesErr.join(' ')}>
                  <Input
                    icon={<CgKeyhole className="icon" />}
                    value={valuePassword}
                    setValue={setValuePassword}
                    placeholder="Пароль"
                  />
              </div>
              { inputStylesErr.includes('input-error') && <p className='text-err'>Не правильный логин или пароль</p>}
                <button className="login__btn">Войти</button>
            </form>
          </div>
          <p className='help'>login: admin, password: admin</p>
        </section>
      </div>
    </main>
  );
};

export default Login;
