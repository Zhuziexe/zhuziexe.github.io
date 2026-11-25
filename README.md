# 一只无聊的竹子

绿色竹子风格的个人网站，纯静态（HTML + CSS + 一点点 JS），部署在 GitHub Pages。

## 页面

| 页面 | 文件 | 说明 |
| --- | --- | --- |
| 主页 | `index.html` | 标题、闲聊、作品/更新/站点的小卡片 |
| 作品页 | `works.html` | 列表 + 详情（`?work=<id>`，数据由 `site.js` 渲染） |
| 碎碎念 | `notes.html` | 带日期的短记录 |
| 关于页 | `about.html` | 关于本站 / 关于我 / 联系方式 |
| 网站地图 | `sitemap.html` | 主页 / 作品页 / 碎碎念 / 关于页 / 404 页 |
| 404 | `404.html` | 页面不存在 |

共用样式：`style.css`。共用脚本：`site.js`（顶栏状态、作品/碎碎念渲染、详情路由、渐显、GitHub 猫）。

## 改内容

作品和碎碎念都是 `site.js` 里的数组，改那两个数组就行。详情页用 `works.html?work=<id>` 访问，`id` 对应数组里的 `id` 字段。GitHub 仓库统一指向 `https://github.com/Zhuziexe/iwuji`。

## 设计约定

- 配色：竹叶绿 `--bamboo-*`，支持深色模式（跟随系统）。
- 手机优先：窄屏自动重排，导航变成可横向滑动的胶囊条。
- hover 只在鼠标设备生效；触屏用 `:active` 反馈。
- 无框架、无构建步骤。
