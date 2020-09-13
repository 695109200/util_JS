

  const validatePhone = (rule, value, callback) => {
    let regPhone = /^1[3|4|5|7|8][0-9]\d{8}$/;
    console.log(value)
    if (!regPhone.test(value)) {
      callback(new Error("请输入正确的手机号码格式"));
    } else {
      callback();
    }
  };
  const newInputs = (rule, value, callback) => {
    console.log(value)
  };

//节流
  const fnThrottle = (method, delay, duration)=>{
    var that = this;
    var timer = this.timer;
    var begin = new Date().getTime();
    return function(){
      var context = that;
      var args = arguments;
      var current = new Date().getTime();
      clearTimeout(timer);
      if(current-begin>=duration){
        method.apply(context,args);
        begin=current;
      }else{
        console.log(delay)
        that.timer=setTimeout(function(){
          method.apply(context,args);
        },delay);
      }
    }
  };

  const dateFormat = (fmt)=> {
    var date = new Date()
    let ret;
    const opt = {
      "Y+": date.getFullYear().toString(), // 年
      "m+": (date.getMonth() + 1).toString(), // 月
      "d+": date.getDate().toString(), // 日
      "H+": date.getHours().toString(), // 时
      "M+": date.getMinutes().toString(), // 分
      "S+": date.getSeconds().toString(), // 秒
      "s+": date.getMilliseconds().toString() // 毫秒
      // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };
    for (let k in opt) {
      ret = new RegExp("(" + k + ")").exec(fmt);
      if (ret) {
        fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
      };
    };
    return fmt;
  }

  module.exports={
    validatePhone,
    newInputs,
    fnThrottle,
    dateFormat
  }