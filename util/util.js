
export const assert = (function () {
  return function (boolVal, msg) {
    const assert = document.getElementById("assert");
    let ele = null;
    ele = document.createElement('li');
    ele.innerHTML = msg;
    boolVal ? ele.className = 'true' : ele.className = 'false';
    assert.appendChild(ele);
  };
})();
export const header = (function() {
  return function(msg) {
    const assert = document.getElementById("assert");
    let ele = null;
    ele = document.createElement('h2');
    ele.innerHTML = msg;
    ele.className = 'header';
    assert.appendChild(ele); 
  };
})();