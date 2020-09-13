

  const validatePhone = (value, callback) => {
    let regPhone = /^1[3|4|5|7|8][0-9]\d{8}$/;
    if (!regPhone.test(value)) {
      callback(new Error("请输入正确的手机号码格式"));
    } else {
      callback();
    }
  };

//节流
  const Throttle = (method, delay)=>{
   var flag = true;    
        return () => {
          if (!flag) return false;
          flag = false;
          setTimeout(function () {
            fn();
            flag = true;
          }, time);
        };
  };

//防抖
const debounce = (fn, wait)=>{    
    var timeout = null;    
    return function() {        
        if(timeout !== null)   clearTimeout(timeout);        
        timeout = setTimeout(fn, wait);    
    }
}
//日期格式化 fmt = "YYYY-MM-dd HH:mm:SS"
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
    Throttle,
    dateFormat,
    debounce
  }