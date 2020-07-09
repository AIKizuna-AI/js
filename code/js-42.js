var koe_is_github = /github/.test(window.location.href);
var koe_42_code = koe_is_github ? document.querySelector('.blob-code').innerText : document.querySelector('.highlight .line').innerText.replace(/[\r\n]$/,'');
var koe_42_style = document.createElement('style');
koe_42_style.innerText = '.koe_42_a { position:absolute;top:0;left:0;width:100px;height:30px;line-height:30px;text-align:center;background-color:#24aee6;cursor:move;font-size:0;border-radius:5px;z-index:999999; } .koe_42_a::before { content:\'拖到收藏夹\';font-size:16px;color:#FFF; }';
document.head.appendChild(koe_42_style);
var koe_42_a = document.createElement('a');
koe_42_a.setAttribute('class', 'koe_42_a');
var koe_42_data = JSON.parse(/\/\*(\{.*\})\*\//.exec(koe_42_code)[1]);
koe_42_a.innerText = koe_42_data.name;
koe_42_a.href = 'javascript:' + koe_42_code;
if(koe_is_github) {
  document.querySelectorAll('.repository-content .Box')[2].appendChild(koe_42_a);
} else {
  document.querySelector('.file_holder').appendChild(koe_42_a);
}