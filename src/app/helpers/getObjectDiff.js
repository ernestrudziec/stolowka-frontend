export const compareJSON = function (obj1, obj2) {
  var ret = {};
  for (var i in obj2) {
    if (!obj1.hasOwnProperty(i) || obj2[i] !== obj1[i]) {
      if (!Array.isArray(obj2[i]) || !(JSON.stringify(obj2[i]) == JSON.stringify(obj1[i]))) {
        ret[i] = obj2[i];
      }
    }
  }
  return ret;
};
