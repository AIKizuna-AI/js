/**
 * 找回B站失效视频。B站视频没过审，所以重做。但程序依然可以用。
 */

// 记录点击次数 默认 0
if (typeof koe_43_click_num === 'undefined') var koe_43_click_num = 0;

// 延迟 计时器
if (typeof koe_43_timer === 'undefined') var koe_43_timer = null;

// 如果有计时器则删除（因为每次点击需要重置计时器）
if (koe_43_timer !== null) clearTimeout(koe_43_timer);

if (typeof bv2av_com_bv2av === 'undefined') {
  const bv2av_com_table = [
    ...'fZodR9XQDSUm21yCkr6zBqiveYah8bt4xsWpHnJE7jL5VG3guMTKNPAwcF',
  ];
  const bv2av_com_s = [11, 10, 3, 8, 4, 6];
  const bv2av_com_xor = 177451812;
  const bv2av_com_add = 8728348608;

  var bv2av_com_bv2av = (bv) => {
    let str = '';
    if (bv.length === 12) {
      str = bv;
    } else if (bv.length === 10) {
      str = `BV${bv}`;
      // 根据官方 API，BV 号开头的 BV1 其实可以省略
      // 不过单独省略个 B 又不行（
    } else if (bv.length === 9) {
      str = `BV1${bv}`;
    } else {
      return '¿你在想桃子?';
    }
    if (
      !str.match(
        /[Bb][Vv][fZodR9XQDSUm21yCkr6zBqiveYah8bt4xsWpHnJE7jL5VG3guMTKNPAwcF]{10}/gu
      )
    ) {
      return '¿你在想桃子?';
    }

    let result = 0;
    let i = 0;
    while (i < 6) {
      result += bv2av_com_table.indexOf(str[bv2av_com_s[i]]) * 58 ** i;
      i += 1;
    }
    return (result - bv2av_com_add) ^ bv2av_com_xor;
  };
}

if (document.querySelector('.koe_43_list') === null) {
  var koe_43_av = bv2av_com_bv2av(__INITIAL_STATE__.bvid);
  var koe_43_style = document.createElement('style');
  koe_43_style.innerText =
    '.koe_43_list { position: fixed; top: 100px; left: 50px; width: 200px; height: 100px; border-radius: 10px; background-color: #CCC; overflow: hidden; z-index: 999999; } .koe_43_list a { display: block; width: 100%; height: 50px; line-height: 50px; text-align: center; font-size: 20px; }';
  document.head.appendChild(koe_43_style);
  var koe_43_list = document.createElement('div');
  koe_43_list.setAttribute('class', 'koe_43_list');
  koe_43_list.innerHTML =
    '<a href="https://www.biliplus.com/video/av' + koe_43_av + '" target="_blank" data-id="0" style="background-color: #FB7299; color: #FFF">bili+</a><a href="https://www.jijidown.com/video/av' + koe_43_av + '" data-id="1" target="_blank">bili唧唧</a>';
  document.body.appendChild(koe_43_list);
} else {
  document.querySelector('.koe_43_list a[data-id="' + koe_43_click_num + '"]').setAttribute('style', '');
  koe_43_click_num = koe_43_click_num >= 1 ? 0 : ++koe_43_click_num;
  document.querySelector('.koe_43_list a[data-id="' + koe_43_click_num + '"]').setAttribute('style', 'background-color: #FB7299; color: #FFF');
}

koe_43_timer = setTimeout(function () {
  document.querySelector('.koe_43_list a[data-id="' + koe_43_click_num + '"]').click();
}, 1500);
