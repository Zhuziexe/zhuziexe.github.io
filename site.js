(function () {
  "use strict";

  var REPO = "https://github.com/Zhuziexe/iwuji";

  var header = document.querySelector(".site-header");

  if (header) {
    var ticking = false;

    var syncHeader = function () {
      header.classList.toggle("is-stuck", window.scrollY > 8);
      ticking = false;
    };

    window.addEventListener(
      "scroll",
      function () {
        if (!ticking) {
          ticking = true;
          window.requestAnimationFrame(syncHeader);
        }
      },
      { passive: true }
    );

    syncHeader();
  }

  var workList = document.getElementById("work-list");

  var arrow = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h13M12 6l6 6-6 6"/></svg>';

  var octocat = '<svg viewBox="0 0 16 16" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z"/></svg>';

  var works = [
    {
      id: "iwuji",
      name: "iWuji",
      url: "./iwuji/",
      desc: "在浏览器里跑的手机系统，蓝色主题，用的是 wujios。地图、相机、图库、文件管理都有，跟 ZhuziOS 和 iWuji Neo 数据互通。应用市场 30 多个应用，预装 10 多个，应用和 ZhuziOS 通用，到现在还在更新。",
      status: "还在更新",
      detail: "手机那一侧的样子。蓝色主题，wujios 内核，地图、相机、图库、文件管理都塞进去了。应用市场 30 多个应用，预装 10 多个，还在慢慢加。跟 ZhuziOS、iWuji Neo 数据互通，应用两边通用。",
      features: ["蓝色主题 / wujios", "地图、相机、图库、文件管理", "应用市场 30+，预装 10+", "和 ZhuziOS 数据互通"]
    },
    {
      id: "iwuji_neo",
      name: "iWuji Neo",
      url: "./iwuji/iwuji_neo",
      desc: "iWuji 重写的一版，系统还是 wujios。应用市场跟 iWuji 一样 30 多个应用，一直在更新，跟 ZhuziOS 数据互通。重写这种事总得有人干。",
      status: "还在更新",
      detail: "iWuji 重写的一遍。系统还是 wujios，应用市场一样 30 多个应用，一直在更新，跟 ZhuziOS 数据互通。重写这种事总得有人干，干完还得接着维护。",
      features: ["wujios 重写版", "应用市场 30+，持续更新", "跟 ZhuziOS 数据互通"]
    },
    {
      id: "zhuzios",
      name: "ZhuziOS",
      url: "./iwuji/zhuzios",
      desc: "给自己做的桌面系统，绿色主题。窗口能缩放、堆叠、最小化，应用跟 iWuji / iWuji Neo 互通，应用市场也一直在更新。电话应用在这边会被自动忽略——电脑嘛，不打电话。",
      status: "还在更新",
      detail: "桌面那一侧。绿色主题，窗口能缩放、堆叠、最小化。应用跟 iWuji / iWuji Neo 互通，应用市场也一直在更新。电话应用在这边会被自动忽略——电脑嘛，不打电话。",
      features: ["绿色主题 / 桌面", "窗口缩放、堆叠、最小化", "应用市场持续更新", "自动忽略电话应用"]
    },
    {
      id: "tmos",
      name: "TMOS",
      url: "./iwuji/TMOS",
      desc: "塞进浏览器的手机系统，动画做得很顺。功能嘛，除了动画一无是处，属于「看起来很厉害，点两下就露馅」那种。",
      status: "能看不能用",
      detail: "一个把动画做到很顺的浏览器手机系统。功能方面，除了动画一无是处。点开看看就行，别真拿它当手机用。",
      features: ["流畅动画", "功能基本没有"]
    },
    {
      id: "niubeeos",
      name: "NiubeeOS",
      url: "./iwuji/niubeeos",
      desc: "早期实验性系统，啥也不是。名字起得挺牛，东西做得挺空。",
      status: "半弃坑",
      detail: "早期实验性系统。名字起得挺牛，东西做得挺空。放在这里主要是提醒自己，起步的时候都这样。",
      features: ["早期实验", "半弃坑"]
    },
    {
      id: "phone",
      name: "WebRTC 电话",
      url: "./iwuji/phone",
      desc: "跟 iWuji 互通，可以给 iWuji 打电话。ZhuziOS 会自动忽略电话应用——电脑不能打电话，这条规则挺固执的。",
      status: "能用",
      detail: "跟 iWuji 互通的 WebRTC 电话，真的可以给 iWuji 打过去。ZhuziOS 会自动忽略电话应用——电脑不能打电话，这条规则挺固执的。",
      features: ["WebRTC", "和 iWuji 互通", "电脑不接电话"]
    }
  ];

  var notes = [
    {
      date: "2026-11-24",
      text: "把网站从零搭起来了。纯静态，没框架，打开快。顺手把作品页改成 JS 数据驱动，以后加作品只要改一个数组。"
    },
    {
      date: "2026-11-23",
      text: "iWuji 应用市场又塞了几个应用，现在 30 多了。ZhuziOS 那边的应用市场也同步更新，两边数据互通这事终于顺了。"
    },
    {
      date: "2026-11-18",
      text: "TMOS 的动画又调了一版，滑起来是顺了，但功能还是没有。可能它就是个动画演示吧。"
    }
  ];

  if (workList) {
    workList.innerHTML = works.map(function (work, index) {
      return '<li class="reveal" style="--d:' + (index * 60) + 'ms">' +
        '<a class="work" href="?work=' + work.id + '">' +
          '<span class="work__num">' + String(index + 1).padStart(2, "0") + '</span>' +
          '<h2>' + work.name + '</h2>' +
          '<p>' + work.desc + '</p>' +
          '<span class="work__meta">' +
            '<span class="work__status">' + work.status + '</span>' +
          '</span>' +
          '<span class="work__link">详情' + arrow + '</span>' +
        '</a>' +
      '</li>';
    }).join("");
  }

  var workDetail = document.getElementById("work-detail");

  if (workDetail) {
    var id = new URLSearchParams(window.location.search).get("work");
    var work = works.filter(function (w) { return w.id === id; })[0];

    if (id && !work) {
      window.location.replace("./works.html");
    } else if (work) {
      document.title = work.name + " · 作品 · 一只无聊的竹子";
      workDetail.innerHTML =
        '<nav class="crumbs" aria-label="面包屑">' +
          '<a href="./">主页</a><span aria-hidden="true">/</span>' +
          '<a href="./works.html">作品页</a><span aria-hidden="true">/</span>' +
          '<span aria-current="page">' + work.name + '</span>' +
        '</nav>' +
        '<h1>' + work.name + '<span class="detail__status">' + work.status + '</span></h1>' +
        '<p class="detail__lead">' + work.detail + '</p>' +
        '<h2>有什么</h2>' +
        '<ul class="detail__features">' +
          work.features.map(function (f) { return '<li>' + f + '</li>'; }).join("") +
        '</ul>' +
        '<div class="detail__actions">' +
          '<a class="btn btn--primary" href="' + work.url + '" target="_blank" rel="noopener">在线体验' + arrow + '</a>' +
          '<a class="btn btn--ghost" href="' + REPO + '" target="_blank" rel="noopener">' + octocat + 'GitHub 仓库' + '</a>' +
        '</div>';
    }
  }

  var noteList = document.getElementById("note-list");

  if (noteList) {
    noteList.innerHTML = notes.map(function (note) {
      return '<li class="note reveal">' +
        '<time datetime="' + note.date + '">' + note.date + '</time>' +
        '<p>' + note.text + '</p>' +
      '</li>';
    }).join("");
  }

  var revealItems = document.querySelectorAll(".reveal");

  if (revealItems.length && "IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );

    revealItems.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    revealItems.forEach(function (el) {
      el.classList.add("is-in");
    });
  }
})();
