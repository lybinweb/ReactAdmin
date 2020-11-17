import React, { Component } from "react";
import { Redirect } from 'react-router-dom'

import memoryUtils from '../../utils/memoryUtils'

export default class Admin extends Component {

    
    render() {
        const user = memoryUtils.user
        // 内存中没有存储user == 没有登录
        if (!user || !user._id) {
            // 自动跳转到登录页面(在render中)
            return <Redirect to="/login"></Redirect>
        }
        return (
            <div>
            Hello {user.username}
            </div>
        )
        
    }
}