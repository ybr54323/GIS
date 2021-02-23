import React, {useRef, useReducer, useState} from 'react';
import {Link} from "react-router-dom";

import {Cell, Input, Button} from "zarm";

export default function Login(props) {
  const smsCodeFocus = useRef();
  const passwordFocus = useRef();


  const [formData, dispatch] = useReducer((formData, action) => {
    const res = {};
    Object.entries(action).forEach(([k, v]) => res[k] = v);
    return res;
  }, {
    phone: '',
    password: '',
    passwordFree: false,
    smsCode: '',
  });

  const [send, setSend] = useState({
    sending: false,
    sec: 5,
    id: '',
  })

  const handleInput = (k, v, cb) => {
    dispatch({[k]: v});
    cb && cb();
  }

  const handleSendSms = () => {
    if (send.sending) return;
    setSend({
      ...send,
      sending: true
    });
    send.id = setInterval(() => {
      if (send.sec > 0) {
        send.sec--;
        setSend({
          sec: send.sec,
          sending: true,
        })
      } else {
        setSend({
          sec: 5,
          sending: false,
        })
        clearInterval(send.id);
      }
    }, 1000);
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
            {
              send.sending ?
                <Button loading block theme="primary">{send.sec}</Button> :
                <Button onClick={handleSendSms} block theme="primary">发送验证码</Button>
            }
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