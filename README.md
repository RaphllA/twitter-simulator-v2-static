# twitter-simulator-v2-static (月読 Tsukuyomi)

# 作品背景设定：《超时空辉夜姬！》

这是一个基于作品《超时空辉夜姬！》的推特风格生成器。

## 角色对应表
1. **八千代 (Yachiyo)** = ヤチヨ = 辉耀的未来形式
2. **彩叶 (Iroha)** = 酒寄彩叶 = 研究所所长 = iroha = irop = 彩p
3. **辉夜 (Kaguya)** = kaguya = かぐや = 现在的辉耀
3. **月读** = 月夜见 = 八千代在等待彩叶期间创立的公司 = 世界上最大的VR虚拟世界、取代了谷歌、meta、youtube生态位的超级公司。

## 核心原则
1. **信息限制** ：对于普通观众来说，他们只能知道八千代是月读的创造者、不知名团体开发的AI，从很早以前开始就很火。Kaguya和irop是2030年昙花一现的现象级主播，随后kaguya毕业，irop和八千代一起活动，十年后kaguya复活。并不知道背后以及现实中的具体联系。

## 剧情档案
1. **【相遇 2030/07/12】发光的电线杆与速成少女**
   故事发生在近未来的东京。酒寄彩叶（Sakayori Iroha）是一名每天忙于打工和学业的17岁高中生，她唯一的精神寄托就是观看虚拟世界"月读"（Tsukuyomi）里的超级偶像月见八千代的直播。
   某天回家路上，彩叶发现路边的电线杆发出了诡异的光芒（这一幕致敬了《竹取物语》的发光竹子），随后从中掉出了一个发光的小婴儿。
   出于无法放任不管的善意，彩叶收养了她。令人震惊的是，这个婴儿以惊人的速度在几天内就长成了和彩叶同龄的少女。彩叶给她起名为——辉耀（Kaguya）。

2. **【日常 2030/07-09】两人专属的音乐单元**
   辉耀对"月读"世界充满了好奇，恳求彩叶帮她成为主播。
   两人组成了搭档：彩叶负责作词作曲（P主担当），辉耀负责演唱（歌姬担当）。
   在这个过程中，两人的关系迅速升温。辉耀不仅是彩叶的灵感缪斯，更成为了她生活中不可或缺的"另一半"。辉耀在直播中表现出的对彩叶的依赖，以及偶尔流露出的对其他人的小嫉妒，都是非常有爱的百合互动点！
   她们甚至赢得了"八千代杯"比赛，获得了与偶像同台的机会。

3. **【转折  2030/09/12】月球的强制遣返**
   好景不长，来自"月球"的神秘势力（高维文明/外星科技）锁定了辉耀。
   原来，辉耀是月球的"公主/观测者"，她注定要被消除记忆带回月球。月球军团入侵了虚拟世界"月读"，试图强制回收辉耀。
   尽管彩叶和朋友们（甚至包括竞争对手）拼命抵抗，辉耀还是为了保护大家，被迫穿上了消除记忆的"羽衣"（在本作中表现为某种数据覆盖或冷冻装置），被带离了地球。
   ——如果是传统童话，故事到这里就是悲剧结局了。但彩叶拒绝了这个结局！

4. **【真相  2030/09/19】跨越时空的闭环（最大的反转！）**
   彩叶失去了辉耀，陷入了绝望，但她写的一首未完成的歌成为了关键。
   故事揭露了一个惊人的时间循环真相：
   彩叶一直崇拜的虚拟偶像**"月见八千代"，其实就是未来的辉耀！**
   在某一条时间线中，辉耀被带回月球后，因为听到了彩叶跨越时空传来的歌声，决心逆转命运回到地球。但因为飞船事故，她穿越到了8000年前的过去。
   为了能再次见到彩叶，她在漫长的岁月中以"八千代"的虚拟形象存在，一直在暗中引导历史，甚至创造了"月读"世界，只为了确保在这个时间点能与彩叶再次相遇。

5. **【结局  2040——】"我要把你造出来"**
   得知真相的彩叶没有选择哭泣，而是展现了属于现代女主的"硬核爱意"。
   她拒绝了"放手"，而是选择对抗物理法则。
   彩叶花了整整10年的时间，专攻AI与生物机械工程（此处致敬了经典的"为了老婆考博/造人"梗），最终利用留下的数据和未来的科技，为辉耀构建了一个完美的仿生躯体。
   最终幕：
   成年的彩叶启动了装置，将漂流在数据之海中的辉耀（八千代）的意识成功下载。辉耀在新的身体中苏醒，两人在真实的物理世界中重逢，紧紧拥抱。
   故事以Happy End收尾，彻底打破了《竹取物语》"注定分离"的诅咒。

---
## 快速开始

1. 直接双击打开 `twitter-simulator-v2-static/index.html`。
2. 首次加载会把默认数据写入浏览器本地状态（主状态在 `IndexedDB`）。

可选（更推荐，用于 PWA/Service Worker 正常工作）：用任意静态服务器打开目录。

```powershell
cd f:\所长的谣言\twitter-simulator-v2-static
python -m http.server 8000
```

然后访问 `http://localhost:8000/`。

## 面向人类：使用指南

完整教程请看：`HOW_TO_USE.md`  
这里放最关键的入口与规则。

### 1) 置顶教程推

- 默认有一条 `nihoheYCY` 发布的置顶教程推。
- 这条推是“只读示例”，不参与编辑。
- 编辑模式下可点击“隐藏本教程”；隐藏后点左侧 `探索` 会重新显示。

### 2) 编辑模式 / 查看模式

- `编辑模式`：可改文案、数字、头像、媒体、导入导出。
- `查看模式`：隐藏编辑入口，适合展示或截图。
- 入口：`更多` 打开工具面板后切换模式。

### 3) 账户体系（浏览账户 vs 发帖账户）

- `浏览账户`：决定左下角个人区展示谁。
- `发帖账户`：决定新推文/回复“由谁发送”。
- 切换浏览账户：点左下角个人区右侧 `...`。
- 管理账户：`...` 菜单里点 `账户管理`（也可在 `更多` 工具面板打开）。

### 4) 发帖、回复、楼中楼

- 发帖：主页顶部输入框支持正文、配图、显示时间、翻译文本。
- 回复：进入帖子详情后，回复框支持正文、配图、显示时间。
- 楼中楼：点某条回复下方评论按钮可展开二级回复输入区。

### 5) 头像与同步规则

- 账户管理里改头像：会更新该账户，并同步到绑定此账户且启用同步的推文/回复。
- 单独改“某条推文头像”：会出现“同步为账号头像”的勾选项（仅主推文出现，回复不出现）。
- 不勾选时仅改当前这条；勾选时会同时更新对应账户头像。

### 6) 搜索、排序、语言

- 右侧搜索会过滤时间线（作者名/ID/正文/翻译/时间都可匹配）。
- `更多` 工具面板支持语言切换、`按发帖顺序 / 按日期` 排序切换。
- 手机端 `探索` 会打开右侧抽屉，再点一次或点遮罩关闭。

### 7) 导入导出

- `导出数据`：导出 JSON 项目文件（推文/账户/UI 覆盖/语言）。
- `导入数据`：用 JSON 直接替换当前项目状态。
- `导出HTML`：导出静态快照，适合展示归档。

注意：导出的 JSON 不包含 `IndexedDB` 图片二进制，只包含图片引用 ID（`img_...`）。

## 面向开发：数据与改造

### 文件入口

- `index.html`：结构与静态节点（含模态框、侧栏区块）。
- `css/style.css`：样式与响应式布局。
- `js/data.js`：默认推文、默认账户、状态归一化与持久化。
- `js/app.js`：渲染、交互、编辑、账户管理、导入导出。
- `js/image-store.js`：图片读写（`IndexedDB`，`img_...` ID）。

### 存储结构（最新）

- 主状态：`IndexedDB` 数据库 `TwitterSimulatorDB`。
- 主状态 store：`appState`，record key：`current`。
- 图片 store：`images`（key 为 `img_...`）。
- `localStorage` 只保留 `tukuyomi-locale` 与 `tukuyomi-timeline-sort`。

兼容逻辑：旧版 `twitter-simulator-state / twitter-simulator-data / twitter-simulator-version` 会自动迁移并清理。

### 导入导出 JSON（v3）

```ts
type ProjectExportV3 = {
  schemaVersion: 3;
  exportedAt: string;
  tweets: Tweet[];
  accounts: Account[];
  ui: UIState;
  locale?: "zh-CN" | "ja-JP";
};
```

### 关键字段（当前实现）

```ts
type TweetUser = {
  name: string;
  handle: string;
  avatar: string;               // "", "img_...", 或 URL
  verified: boolean;
  accountId?: string | null;
  avatarLinked?: boolean;       // false 表示不跟随账户头像
};

type Tweet = {
  id: number;
  isGuide?: boolean;            // 教程推（只读）
  isPinned?: boolean;           // 置顶
  user: TweetUser;
  content: string;
  media: { type: "image"; url: string; images?: string[] } | null;
  time: string;
  views: string;
  stats: { comments: number; retweets: number; likes: number; bookmarks: number };
  translation: { text: string; source: string; visible?: boolean } | null;
  replies: Reply[];
  userLiked?: boolean;
};

type Reply = {
  id: number;
  user: TweetUser;
  content: string;
  time: string;
  media?: { type: "image"; url: string; images?: string[] } | null;
  translation: { text: string; source: string; visible?: boolean } | null;
  stats: { comments: number; retweets: number; likes: number; views: number; bookmarks?: number };
  replies?: Reply[];
  userLiked?: boolean;
};

type UIState = {
  mode: "edit" | "view";
  defaultAuthorId: string | null;
  composeAuthorId: string | null;
  guideTweetHidden?: boolean;
  textFields: Record<string, string>;
  avatarFields: Record<string, string>;
};
```

### 修改默认内容的推荐方式

1. 改默认推文/账户：编辑 `js/data.js`。  
2. 改静态 UI 默认文案：编辑 `index.html`。  
3. 改可导出 UI 覆盖项：使用 `ui.textFields / ui.avatarFields`。  
4. 改动默认数据后同步提高 `DATA_VERSION`。  

### 常见任务映射

- 主题/排版/布局：`css/style.css`
- 交互行为（模式、账户、导入导出、移动端抽屉）：`js/app.js`
- 默认推文与首次状态：`js/data.js`
