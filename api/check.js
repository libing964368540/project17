/**
 * 
 * 进行中任务详细
 */
function getTaskState(opt){
	return req({
		url:'/ApiInterface/TaskInfo',
		data:opt.data,
		apiName: '主持人操作的任务状态',
		success:function(data){
			opt.success(data);
		},
		error:function(){
			opt.error();
		}
	})
}

/*
 * 
 * 答题过程中罪犯数据
 * 
 * */

function getProblems(opt){
     return req({
     	url:'/ApiInterface/AnswersCriminal',
     	data:opt.data,
     	apiName: '答题过程中罪犯数据',
     	success:function(data){
     		opt.success(data);
     	},
        error:function(){
			opt.error();
		 }
     })
}

/*
 *
 *
 *狱警答题内容写入
 *
 */
function askProblems(opt){
	return req({
		  url:'/ApiInterface/TaskAnswerInsert',
		  data:opt.data,
		  apiName:'狱警答题内容写入',
		  success:function(data){
		  	opt.success(data);
		  },
		  error:function(){
		   opt.error();
		  }
	})
}
/**
 * 
 *狱警答题自动完成
 *
 *
 */
function PoliceTaskFinish(opt){
	return req({
		url:'/ApiInterface/PoliceTaskFinish',
		data:opt.data,
		apiName:'狱警答题自动完成',
		success:function(data){
			opt.success(data);
		},
		error:function(){
			opt.error();
		}
	})
}

/*
 *
、大屏幕展示：狱警答题情况
 *
 *
 */
function TaskAnswersPolisInfo(opt){
	return req({
		url:'/ApiInterface/TaskAnswersPolisInfo',
		data:opt.data,
		apiName:'大屏幕展示：狱警答题情况',
		success:function(data){
			opt.success(data);
		},
		error:function(){
			opt.Error();
		}
	})
}
