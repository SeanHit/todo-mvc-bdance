import React,{ Component } from 'react'
import  { Layout ,Button } from 'antd'
import {Redirect,Route,Switch}  from 'react-router-dom'  //跳转用
import './index.less'
import storageUtils  from '../../utils/storageUtils'

import  LeftNav   from '../../components/left-nav'
import Hooks from '../../pages/data/hooks/hooks'
import State from '../../pages/data/state/state'
import Redux from '../../pages/data/redux/redux'
import DataOperation from '../dataOperation/dataOperation'
const { Header, Footer, Sider, Content } = Layout;

export default class Operation extends Component{

    cancleLogin =()=>{
        storageUtils.removeUser();
        this.props.history.replace('./login');
    };


    render() {
        return (
                <Layout style={ { minHeight:"100%" } }>
                    <Sider className={ 'sider'}>
                        {/*左侧导航栏*/}
                        <LeftNav/>
                    </Sider>
                    <Layout>
                        <Header className={ 'header'} >
                            <Button type={"primary"} onClick={this.cancleLogin} className={'cancleButton'}>注销</Button>
                        </Header>
                        <Content style={{margin: 20,backgroundColor:"white"}}>
                            <Switch>
                                <Route path={'/state'} component={ State }></Route>
                                <Route path={'/hooks'} component={ Hooks }></Route>
                                <Route path={'/redux'} component={ Redux }></Route>
                                <Route path={'/database'} component={ DataOperation }></Route>
                                <Redirect to={'/login'}/>
                            </Switch>

                        </Content>
                        <Footer>Footer</Footer>
                    </Layout>
                </Layout>
        )
    }
}