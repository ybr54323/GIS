import React from 'react';
import {Button, Cell, Input} from "zarm";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: '',
      password: '',
      passwordFree: false,
      smsCode: '',
      id: '',
      sending: false,
      wait: 5,
    }
  }

  handleInput = (key, e) => {
    this.setState({
      ...this.state,
      [key]: typeof e === 'object' ? e.current.value : e
    })
  }

  handleSendSmsCode = () => {
    if (this.state.sending) return;
    this.setState({
      ...this.state,
      sending: true,
      id: setInterval(() => {
        this.setState((prevState => {
          return {
            ...prevState,
            wait: prevState.wait - 1
          }
        }));
      }, 1000)
    })
  }


  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.sending && prevState.wait <= 0) {
      clearInterval(prevState.id);
      this.setState({
        ...this.state,
        sending: false,
        wait: 5,
        id: ''
      });
    }
  }

  render() {
    return (
      <div>
        <Cell title="+86">
          <Input
            type="number"
            placeholder="请输入手机号"
            value={this.state.phone}
            onChange={e => this.handleInput('phone', e)}
          />
        </Cell>
        {
          this.state.passwordFree ?
            <Cell title="验证码">
              <Input
                type="number"
                placeholder="请输入验证码"
                value={this.state.smsCode}
                onChange={e => this.handleInput('smsCode', e)}
              />
              {
                this.state.sending ?
                  <Button loading block theme="primary">{'(等待)'+this.state.wait}</Button> :
                  <Button onClick={this.handleSendSmsCode} block theme="primary">发送验证码</Button>
              }
            </Cell> :
            <Cell title="密码">
              <Input
                type="password"
                placeholder="请输入密码"
                value={this.state.password}
                onChange={e => this.handleInput('password', e)}
              />
            </Cell>
        }
        <a onClick={() => this.handleInput('passwordFree', !this.state.passwordFree)}>
          {
            !this.state.passwordFree ?
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
}

export default Login