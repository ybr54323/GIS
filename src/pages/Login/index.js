import React, {useRef, useReducer, useState} from 'react';

import {Cell, Input, Button} from "zarm";
import {useInterval} from "./utils";

export default function Login(props) {
  const smsCodeFocus = useRef();
  const passwordFocus = useRef();

  const [formData, dispatch] = useReducer((formData, newFormData) => {
    return {
      ...formData,
      ...newFormData
    }
  }, {
    phone: '',
    password: '',
    passwordFree: false,
    smsCode: '',
  });

  const [isRunning, checkRunning] = useState(false);
  const [second, setSecond] = useState(5);

  useInterval(
    () => {
      setSecond(second - 1);
      if (second <= 0) {
        checkRunning(false);
        setSecond(5);
      }
    },
    isRunning ? 1000 : null,
  );

  const handleInput = (k, v, cb) => {
    dispatch({[k]: v});
    cb && cb();
  }

  const handleSendSms = () => {
    checkRunning(true);
  }

  return (
    <div>
      <Cell title="+86">
        <Input
          type="number"
          placeholder="请输入手机号"
          value={formData.phone}
          onChange={handleInput.bind(null, 'phone')}
        />
      </Cell>
      {
        formData.passwordFree ?
          <Cell title="验证码">
            <Input
              ref={smsCodeFocus}
              type="number"
              placeholder="请输入验证码"
              value={formData.smsCode}
              onChange={handleInput.bind(null, 'smsCode')}
            />
            <Button onClick={handleSendSms} block theme="primary">
              {isRunning ? `${second}秒后再试` : '获取验证码'}
            </Button>
          </Cell> :
          <Cell title="密码">
            <Input
              ref={passwordFocus}
              type="password"
              placeholder="请输入密码"
              value={formData.password}
              onChange={handleInput.bind(null, 'password')}
            />
          </Cell>
      }
      <a onClick={handleInput.bind(null, 'passwordFree', !formData.passwordFree, () => {
        if (!formData.passwordFree) passwordFocus.current.focus();
        else smsCodeFocus.current.focus();
      })}>
        {
          !formData.passwordFree ?
            '免密码登陆' :
            '密码登陆'
        }
      </a>
      <Cell>
        <Button block theme='primary'>登陆</Button>
      </Cell>
    </div>
  )
}
