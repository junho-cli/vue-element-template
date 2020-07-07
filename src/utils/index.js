/** *
 * 共有工具类存放地址
 */

/**
 * 日期转成方法，注册到原型链上
 * @param {Stirng} fmt yyyy-MM-dd hh:mm:ss
 */
/* eslint no-extend-native: "off" */
Date.prototype.format = function(fmt) {
  const o = {
    'M+': this.getMonth() + 1, // 月份
    'd+': this.getDate(), // 日
    'H+': this.getHours(), // 小时
    'm+': this.getMinutes(), // 分
    's+': this.getSeconds(), // 秒
    'q+': Math.floor((this.getMonth() + 3) / 3), // 季度
    'S': this.getMilliseconds() // 毫秒
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
  for (const k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
    }
  }
  return fmt;
};

const utils = {
  /**
   * 判断数据是否为空，一般数据是object/array
   * @param {Object/Array}
   */
  isEmptyData(data) {
    if (data === null || data === undefined) return true;
    if (data instanceof Object) {
      if (Array.isArray(data)) return false;
      return true;
    } else if (data instanceof Array) {
      if (data.length === 0) return true;
      return false;
    }
  },

  /**
   * 深拷贝
   * @param {Object|Array} value
   */
  deepClone(value) {
    const complexDataTypes = ['object', 'function'];
    if (complexDataTypes.includes(typeof value)) {
      let cacheData;
      switch (Object.prototype.toString.call(value) .replace(/(^\[object )|(]$)/g, '')) {
        case 'Date': cacheData = new Date(value.valueOf()); break;
        case 'RegExp': cacheData = new RegExp(value.valueOf()); break;
        case 'Array':
          cacheData = [];
          value.forEach((val, index) => {
            cacheData[index] = this.deepClone(val);
          });
          break;
        case 'Object':
          cacheData = {};
          for (const i in value) {
            cacheData[i] = this.deepClone(value[i]);
          }
          break;
        default:
          cacheData = value;
          break;
      }
      return cacheData;
    } else {
      return value;
    }
  },

  /**
   * 随机生成唯一 ID
   * @param {Number} 
   */
  generateId(len = 4) {
    return Number(Math.random().toString().substr(3, len) + Date.now()).toString(36);
  },

  /**
   * 优化遍历，数组去重
   * @param {Array} array 
   */
  uniq(array, key) {
    const temp = [];
    // const index = []
    const l = array.length;
    for (let i = 0; i < l; i++) {
      for (let j = i + 1; j < l; j++) {
        if (array[i][key] && array[i][key] === array[j][key]) {
          i++;
          j = i;
        }
      }
      temp.push(array[i]);
      // index.push(i)
    }
    return temp;
  },
  /**
   * 防抖
   */
  debounce(func, delay = 300) {
    let timer;
    return function() {
      window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        func.apply(this, arguments);
      }, delay);
    };
  },
  
  /**
   * 节流
   */
  throttle(func, delay = 300) {
    let isRun = false;
    return function() {
      if (!isRun) {
        isRun = true;
        window.setTimeout(() => {
          func.apply(this, arguments);
          isRun = false;
        }, delay);
      }
    };
  }
};

export default utils;
