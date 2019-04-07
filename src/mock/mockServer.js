/* 
使用mockjs提供mock数据接口
 */
import Mock from 'mockjs'
import data from './data.json'

//返回商品列表goods的接口
Mock.mock('/goods',{code:0,data:data.goods})//这个路径随便指定
//返回ratings的接口
Mock.mock('/ratings',{code:0,data:data.ratings})
//返回info的接口
Mock.mock('/info',{code:0,data:data.info})

//export dafault ??? 不需要向外暴露任何数据，只需要保存就能执行