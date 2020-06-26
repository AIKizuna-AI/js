var koe_29_content = document.querySelector('.room-introduction-content');
if(koe_29_content !== null) {
  // 文字暂存 input
  var koe_29_input = document.createElement('input');
  koe_29_input.value = koe_29_content.innerHTML;
  document.body.appendChild(koe_29_input);
  // 选中
  koe_29_input.select();
  // 提示框
  var koe_29_tip = document.querySelector('#koe_29_tip');
  if(koe_29_tip === null) {
    koe_29_tip = document.createElement('span');
    koe_29_tip.setAttribute('id', 'koe_29_tip');
    koe_29_tip.setAttribute('style', 'position: fixed; top: 0; right: 0; padding: 3px 5px; width: 200px; height: 30px; line-height: 30px; text-align: center; font-size: 26px; color: #FFF; z-index: 99999999;');
    document.body.appendChild(koe_29_tip);
  }
  // 执行 copy 命令
  if(document.execCommand('copy')) {
    koe_29_tip.innerText = '复制成功';
    koe_29_tip.style.backgroundColor = '#096'
  } else {
    koe_29_tip.innerText = '复制失败';
    koe_29_tip.style.backgroundColor = '#F66'
  }
  koe_29_tip.style.display = 'block';
  setTimeout(function() {
    koe_29_tip.style.display = 'none';
  }, 1000);
  document.body.removeChild(koe_29_input);
}
void(0);