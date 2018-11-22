//包含n个接口请求函数的模块

import ajax from './ajax';

//跨域
  const BASE = '/api';
//根据经纬度获取位置详情
export const reqAddress = (longitude,latitude) => ajax (BASE + `/position/${latitude},${longitude}`);

//获取食品分类列表
export const reqFoodCategorys = () => ajax (BASE + '/index_category');

//根据经纬度获取商铺列表
export const reqShops = ({longitude,latitude}) => ajax(BASE + '/shops',{latitude,longitude});

//发送一次性手机验证码
export const reqSendCode = (phone) => ajax(BASE + '/sendcode',{phone});

//手机验证码登录
export const reqSmsLogin = (phone,code) => ajax(BASE+'/login_sms',{phone,code},'POST');

//密码登录
export const reqPwdLogin = ({name,pwd,captcha}) => ajax(BASE+'/login_pwd',{name,pwd,captcha},'POST');

//保存当前用户信息
export const reqUserInfo = () => ajax(BASE+'/userinfo');

//退出登录
export const reqLogout = () => ajax(BASE+'/logout');

// export const reqShopGoods = () => ajax('/goods');
// export const reqShopRatings = () => ajax('/ratings');
// export const reqShopInfo = () => ajax('/info');
export const reqShopInfo = () => ajax('/info')
export const reqShopGoods = () => ajax('/goods')
export const reqShopRatings = () => ajax('/ratings')
