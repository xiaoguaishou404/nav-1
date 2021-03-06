(function () {
  const $d3dfc027196df876626c47bef188877c$var$$siteList = $(".siteList");
  const $d3dfc027196df876626c47bef188877c$var$$lastLi = $d3dfc027196df876626c47bef188877c$var$$siteList.find("li.last");
  const $d3dfc027196df876626c47bef188877c$var$x = localStorage.getItem('x');
  const $d3dfc027196df876626c47bef188877c$var$xObject = JSON.parse($d3dfc027196df876626c47bef188877c$var$x);
  const $d3dfc027196df876626c47bef188877c$var$hashMap = $d3dfc027196df876626c47bef188877c$var$xObject || [{
    logo: 'A',
    url: 'https://www.acfun.cn/'
  }, {
    logo: 'B',
    url: 'https://www.bilibili.com/'
  }];
  const $d3dfc027196df876626c47bef188877c$var$simplifyUrl = url => {
    return url.replace('https://', '').replace('http://', '').replace('www.', '').replace(/\/.*/, '');
  };
  const $d3dfc027196df876626c47bef188877c$var$render = () => {
    $d3dfc027196df876626c47bef188877c$var$$siteList.find('li:not(.last)').remove();
    $d3dfc027196df876626c47bef188877c$var$hashMap.forEach((node, index) => {
      const $li = $(`<li>
        <div class="site">
            <div class="logo">
            ${node.logo}
            </div>
            <div class="link">${$d3dfc027196df876626c47bef188877c$var$simplifyUrl(node.url)}</div>
            <div class='close'>
              <svg class="icon">
                <use xlink:href="#icon-cuowu"></use>
              </svg>
            </div>
        </div>
    </li >
    `).insertBefore($d3dfc027196df876626c47bef188877c$var$$lastLi);
      $li.on('click', () => {
        window.open(node.url);
      });
      $li.on('click', '.close', e => {
        e.stopPropagation();
        $d3dfc027196df876626c47bef188877c$var$hashMap.splice(index, 1);
        $d3dfc027196df876626c47bef188877c$var$render();
      });
    });
  };
  $d3dfc027196df876626c47bef188877c$var$render();
  $(".addButton").on("click", () => {
    let url = window.prompt("填写网址");
    if (url.indexOf("http") !== 0) {
      url = "https://" + url;
    }
    console.log(url);
    $d3dfc027196df876626c47bef188877c$var$hashMap.push({
      logo: $d3dfc027196df876626c47bef188877c$var$simplifyUrl(url)[0].toUpperCase(),
      url: url
    });
    $d3dfc027196df876626c47bef188877c$var$render();
  });
  window.onbeforeunload = () => {
    const String = JSON.stringify($d3dfc027196df876626c47bef188877c$var$hashMap);
    localStorage.setItem('x', String);
  };
  $(document).on('keypress', e => {
    const {key} = e;
    for (let i = 0; i < $d3dfc027196df876626c47bef188877c$var$hashMap.length; i++) {
      if ($d3dfc027196df876626c47bef188877c$var$hashMap[i].logo.toLowerCase() === key) {
        window.open($d3dfc027196df876626c47bef188877c$var$hashMap[i].url);
      }
    }
  });
})();

//# sourceMappingURL=index.39f5f3af.js.map
