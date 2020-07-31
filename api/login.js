/*
 *狱警通过警号查看个人信息 
 * 
 * */
 function SeeInfo(opt){
 	return req({
 		  url:'/ApiInterface/PoliceInfo',
 		  data:opt.data,
 		  apiName: '狱警通过警号查看个人信息',
 		  success:function(data) {
			opt.success(data);
		 },
		 error:function(){
			opt.error();
		 }
 	})
 }
