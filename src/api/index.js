/*
包含应用中所有的
*/

import ajax from './ajax'

const BASE = ''

// export function reqLogin(username, password){
//     return ajax('/login',{username,password},'POST')
// }

// 登录
export const reqLogin = (username,password)=>ajax(BASE + '/login',{username,password},'POST')

// 添加用户
export const reqAddUser = (user)=> ajax(BASE + '/manage/user/add',user,'POST')