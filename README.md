# 一只无聊的竹子

绿色竹子风格的个人网站，纯静态（HTML + CSS + 一点点 JS），部署在 GitHub Pages。

## 页面

| 页面 | 文件 | 说明 |
| --- | --- | --- |
| 主页 | `index.html` | 标题「一只无聊的竹子」、首页介绍、入口卡片 |
| 作品页 | `works.html` | iWuji、iWuji Neo、ZhuziOS、TMOS、WebRTC 电话 |
| 关于页 | `about.html` | 关于本站 / 关于我 / 联系方式 |
| 网站地图 | `sitemap.html` | 主页 / 作品页 / 关于页 / 404 页 |
| 404 | `404.html` | 页面不存在 |

共用样式库：`style.css`（配色、排版、组件、响应式，全部页面共用）。
共用脚本：`site.js`（顶栏状态、滚动渐显）；图标：`image/zhuzi.png`。


## 设计约定

- 配色：竹叶绿 `--bamboo-*`，支持深色模式（跟随系统）。
- 手机优先：窄屏自动重排，导航变成可横向滑动的胶囊条。
- **hover 只在鼠标设备生效**：所有 `:hover` 都写在
  `@media (hover: hover) and (pointer: fine)` 里，触屏不会出现「卡住的悬停」；
  触屏改用 `:active` 反馈。
- 尊重 `prefers-reduced-motion`，减少动效时关闭动画与渐显。
