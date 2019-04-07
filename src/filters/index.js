import Vue from 'vue'
// import moment from 'moment'
// //自定义过滤器
// Vue.filter('date-format',function(value,formatStr='YYYY-MM-DD HH:mm:ss'){
//   return moment(value).format(formatStr)
// })

import format from 'date-fns/format'
Vue.filter('date-format', function (value, formatStr='YYYY-MM-DD HH:mm:ss') {
  return format(value, formatStr)
})