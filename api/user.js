/*
 * 
 *狱警登录接口 
 * 
 * */

function login(opt){
     return req({
     	url:'/ApiInterface/PoliceLogin',
     	data:opt.data,
     	apiName: '狱警登录获取基本信息接口',
     	success:function(data){
     		opt.success(data);
     	},
        error:function(){
			opt.error();
		 }
     })
}
