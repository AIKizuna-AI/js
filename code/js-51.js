if (typeof koe_51_style === 'undefined') {
  var koe_51_is_show = true;
  var koe_51_style = document.createElement('style');
  koe_51_style.innerText = `
  
  .koe_51_search_box,
  .koe_51_search_msg,
  .koe_51_background,
  .koe_51_search_text,
  .koe_51_search_button,
  .koe_51_search_list {
    position: fixed;
  }

  .koe_51_search_box {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 99999;
  }

  .koe_51_search_msg {
    top: 10px;
    left: 10px;
    height: 50px;
    line-height: 30px;
    font-size: 20px;
    color: #FFF;
  }

  .koe_51_background {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.8;
    z-index: -1;
  }

  .koe_51_search_text {
    top: 50px;
    left: 50px;
    padding: 2px 5px;
    width: 320px;
    height: 30px;
    line-height: 30px;
    font-size: 24px;
    color: #FFF;
    background: none;
    border: none;
    border-bottom: 2px #FFF solid;
  }
  
  .koe_51_search_button {
    top: 50px;
    left: 400px;
    width: 100px;
    height: 32px;
    line-height: 32px;
    font-size: 22px;
    color: #FFF;
    background-color: #666;
    border: 1px #000 solid;
    border-radius: 5px;
  }

  .koe_51_search_button:active {
    background-color: #999;
  }

  .koe_51_search_list {
    top: 130px;
    left: 50px;
    height: 760px;
    overflow-y: auto;
  }

  .koe_51_search_list li {
    position: relative;
    margin: 5px;
    width: 210px;
    height: 180px;
    list-style: none;
    float: left;
    overflow: hidden;
    cursor: pointer;
  }

  .koe_51_search_list::after {
    clear:both;
  }

  .koe_51_search_list li img {
    position: absolute;
    top: 70px;
    left: 50%;
    border-radius: 5px;
    -webkit-transform: translate(-50%,-50%);
    -moz-transform: translate(-50%,-50%);
    transform:translate(-50%,-50%);
    height: 140px;
  }

  .koe_51_search_list li .koe_51_search_li_title {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 0 5px;
    width: 100%;
    height: 30px;
    line-height: 30px;

    color: #FFF;
    font-size: 20px;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
`;

  var koe_51_search_box = document.createElement('div');
  koe_51_search_box.innerHTML = '<div class="koe_51_background"></div>';
  koe_51_search_box.setAttribute('class', 'koe_51_search_box');

  var koe_51_search_msg = document.createElement('p');
  koe_51_search_msg.setAttribute('class', 'koe_51_search_msg');
  koe_51_search_msg.innerText = '正在获取收藏夹视频...';

  var koe_51_search_text = document.createElement('input');
  koe_51_search_text.setAttribute('class', 'koe_51_search_text');
  koe_51_search_text.setAttribute('type', 'text');

  var koe_51_search_button = document.createElement('button');
  koe_51_search_button.setAttribute('class', 'koe_51_search_button');
  koe_51_search_button.innerText = '搜索';

  var koe_51_search_list = document.createElement('ul');
  koe_51_search_list.setAttribute('class', 'koe_51_search_list');

  koe_51_search_box.appendChild(koe_51_search_msg);
  koe_51_search_box.appendChild(koe_51_search_list);

  document.head.appendChild(koe_51_style);
  document.body.appendChild(koe_51_search_box);

  koe_51_search_button.addEventListener('click', function () {

    koe_51_search_list.innerHTML = '';

    var koe_51_reg = new RegExp(
      '(' + koe_51_search_text.value.replace(',', '|') + ')'
    );
    koe_51_videos.forEach(function (item) {
      if (koe_51_reg.test(item.title) || koe_51_reg.test(item.intro)) {
        var koe_51_search_li = document.createElement('li');
        koe_51_search_li.innerHTML =
          '<img src="' +
          item.cover +
          '"><p class="koe_51_search_li_title">' +
          item.title +
          '</p>';
        koe_51_search_li.addEventListener('click', function () {
          window.open('https://b23.tv/' + item.bvid);
        });
        koe_51_search_list.appendChild(koe_51_search_li);
      }
    });
  });

  var koe_51_videos = new Array();
  var koe_51_fid_index = 0;
  var koe_51_fids = new Array();
  document
    .querySelectorAll('.fav-container .fav-list-container .fav-item')
    .forEach(function (element) {
      koe_51_fids.push(element.getAttribute('fid'));
    });

  koe_51_xhr(1);
  function koe_51_xhr(page) {
    if (typeof koe_51_fids[koe_51_fid_index] === 'undefined') {
      koe_51_search_box.appendChild(koe_51_search_text);
      koe_51_search_box.appendChild(koe_51_search_button);
      koe_51_search_msg.innerText = '获取视频完成';
      return;
    }
    var url =
      'https://api.bilibili.com/x/v3/fav/resource/list?media_id=' +
      koe_51_fids[koe_51_fid_index] +
      '&pn=' +
      page +
      '&ps=20&keyword=&order=mtime&type=0&tid=0&jsonp=jsonp';
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.withCredentials = true;
    xhr.send();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var json = JSON.parse(xhr.responseText);
        if (json.data.medias === null) {
          if (koe_51_fid_index < koe_51_fids.length) {
            ++koe_51_fid_index;
            koe_51_xhr(1);
          }
          return;
        }
        json.data.medias.forEach(function (item) {
          koe_51_videos.push({
            bvid: item.bvid,
            cover: item.cover,
            title: item.title,
            intro: item.intro,
          });
        });
        if (json.data.medias.length < 20) {
          ++koe_51_fid_index;
          koe_51_xhr(1);
        } else {
          koe_51_xhr(++page);
        }
      }
    };
  }
} else {
  if(koe_51_is_show) {
    koe_51_search_box.style.display = 'none';
    koe_51_is_show = false;
  } else {
    koe_51_search_box.style.display = 'block';
    koe_51_is_show = true;
  }
}
