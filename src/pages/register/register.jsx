import React,{ Component } from 'react'
import {
    Form,
    Input,
    Button,
    message,
} from  'antd'
import './register.less';
import { reqRegisterUser } from '../../api/index'
import storageUtils from '../../utils/storageUtils'




class Register extends Component{

    state= {
        username:'fff',
        password:'',
    }

    handleRegisterSubmit= async (values)=>{
        console.log('values',values);
        const { username , password  } =values;

        /*
        * 返回的result结果
        * */
        const result =await reqRegisterUser( values);
        if( result.status == 0){  //注册成功
            message.success('注册成功即将返回登录界面');
            setTimeout(()=>{
                this.props.history.push('./login');
            },3000)
        }else{                    //注册失败
            message.error('登录失败:'+result.msg);
        }
    };


    render() {
        const onFinish = values => {
            // console.log('Received values of form: ', values);
            this.handleRegisterSubmit(values);
        };
        return (
            <div className={'login'}>
                <header className={"login-header"}>
                    <h1>todoMVC注册界面</h1>
                </header>
                <section className={'login-content'}>
                    <h1>注册界面</h1>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: '用户名不为空' }]}
                        >
                            <Input  placeholder="用户名"  />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: '密码不为空' }]}
                        >
                            <Input
                                type="password"
                                placeholder="密码"
                            />
                        </Form.Item>
                        <Form.Item
                            name="confirm"
                            label={''}
                            rules={[
                                { required: true, message: '再次输入密码' },
                                ({ getFieldValue }) => ({
                                    validator(rule, value) {
                                        if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject('俩次输入的密码不一致');
                                    },
                                }),
                                ]}
                        >
                            <Input
                                type="password"
                                placeholder="密码"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                注册
                            </Button>
                            <Button type="default" onClick={()=>{ this.props.history.push('./login') } } className="register-form-button">
                                返回登录
                            </Button>
                        </Form.Item>
                    </Form>
                </section>
            </div>
        )
    }
}


export  default Register;