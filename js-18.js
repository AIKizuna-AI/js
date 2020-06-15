// 如果没有 bv2av 则创建
if (typeof bv2av_com_bv2av === 'undefined') {
  const bv2av_com_table = [...'fZodR9XQDSUm21yCkr6zBqiveYah8bt4xsWpHnJE7jL5VG3guMTKNPAwcF'];
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

// 选取视频列表
document.querySelectorAll('.cube-list li').forEach(function (element) {
  // 获取 aid
  var aid = bv2av_com_bv2av(element.getAttribute('data-aid'));
  // 以下是 #17 中的网络请求
  var koe_18_param = 'aid=' + aid + '&like=1&csrf=' + getCookie('bili_jct');
  var koe_18_xhr = new XMLHttpRequest();
  koe_18_xhr.open(
    'POST',
    'https://api.bilibili.com/x/web-interface/archive/like',
    true
  );
  koe_18_xhr.withCredentials = true;
  koe_18_xhr.setRequestHeader(
    'content-type',
    'application/x-www-form-urlencoded'
  );
  koe_18_xhr.send(koe_18_param);
  koe_18_xhr.onreadystatechange = function () {
    if (koe_18_xhr.readyState === 4 && koe_18_xhr.status === 200) {
      var json = JSON.parse(koe_18_xhr.responseText);
      // code 等于 0 说明点赞成功
      if (json.code === 0) {
        console.log('成功');
      } else {
        console.log('失败');
      }
    }
  };
});
void 0;
