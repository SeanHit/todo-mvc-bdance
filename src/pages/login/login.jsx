import React,{ Component } from 'react'
import {
    Form,
    Icon,
    Input,
    Button,
    message,
    Checkbox
} from  'antd'
import './login.less';
import { reqLogin } from '../../api/index'
import storageUtils from '../../utils/storageUtils'




class Login extends Component{

    state= {
        username:'fff',
        password:'',
    }

    handleSubmit= async (values)=>{
        console.log('values',values);
        const { username , password , remember } =values;
        /*
        * 返回的result结果
        * */
        const result =await reqLogin( username ,password );
        if( result.status == 0){  //登录成功
            if(remember){  //记住密码成功
                storageUtils.saveUser({username,password});
            }else{
                storageUtils.removeUser();
            }
            message.success('登录成功');
            this.props.history.push('./state');
        }else{                    //登录失败
            message.error('登录失败:'+result.msg);
        }
    };

    componentWillMount() {
        if(storageUtils.getUser()){  //记住密码了
            const { username ,password } =storageUtils.getUser();
            this.setState({
                username,
                password,
            })
            console.log(username,password);
        }
    }


    render() {
        const onFinish = values => {
            // console.log('Received values of form: ', values);
            this.handleSubmit(values);
        };
        const { username , password } = this.state;
        return (
            <div className={'login'}>
                <header className={"login-header"}>
                    <h1>todoMVC登录界面</h1>
                </header>
                <section className={'login-content'}>
                    <h1>登录界面</h1>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true ,username ,password}}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: '用户名不为空' }]}
                            initialValue={username}
                        >
                            <Input  placeholder="用户名"  />
                    </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: '密码不为空' }]}
                            initialValue={password}
                        >
                            <Input
                                type="password"
                                placeholder="密码"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>记住密码</Checkbox>
                            </Form.Item>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                            </Button>
                            <Button type="default" onClick={()=>{ this.props.history.push('./register') } } className="register-form-button">
                                注册
                            </Button>
                        </Form.Item>
                    </Form>
                </section>
            </div>
        )
    }
}


export  default Login;