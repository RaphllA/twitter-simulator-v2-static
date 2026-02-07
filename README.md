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
2. 首次加载会把默认数据写入浏览器本地存储（`localStorage` + `IndexedDB`）。

可选（更推荐，用于 PWA/Service Worker 正常工作）：用任意静态服务器打开目录。

```powershell
cd f:\所长的谣言\twitter-simulator-v2-static
python -m http.server 8000
```

然后访问 `http://localhost:8000/`。

## 面向人类：使用指南（UI 怎么用）

### 1) 编辑模式 vs 查看模式

- `编辑模式`：可以改文字、改数字、上传头像/图片、导入/导出等。
- `查看模式`：隐藏编辑入口，适合纯展示/截图。

入口（桌面/手机通用）：左侧（手机为顶部）导航点 `更多`，打开工具面板后切换 `编辑模式/查看模式`。

### 2) 浏览账户、发帖账户、账户管理

- `浏览账户`：决定个人区展示谁，以及默认用哪个账户浏览。
- `发帖账户`：决定你发新推/回复时用哪个账户身份。

操作路径：

- 切换浏览账户：`更多` -> `浏览账户` -> 选择一个账号。
- 账户管理：在 `浏览账户` 菜单里点 `账户管理`，可新增/编辑昵称与 ID/头像/删除账号。
- 发帖账户选择：时间线顶部发帖区的下拉框里选择。

### 3) 发一条新推

1. 在时间线顶部输入框输入内容。
2. 在下拉框选择 `发帖账户`（可不同于浏览账户）。
3. 可选：填写显示时间（支持只填日期，或填完整到时分）。
4. 可选：点 `翻译を付ける/附翻译` 打开翻译输入。
5. 点 `发帖/ポスト` 发布。

### 4) 回复与嵌套回复

- 进入某条推文详情页后，在回复输入框输入即可回复。
- 有嵌套回复（楼中楼）入口的区域，可继续对回复进行回复。

### 5) 编辑文字、数字、翻译块

在 `编辑模式` 下：

- 点击带编辑能力的文字会弹出文本编辑框。
- 点击数字（评论/转推/点赞/浏览等）会弹出输入框让你改数值。
- 翻译块支持：显示/隐藏、编辑翻译来源与译文。

小提示：数字输入支持 `K/k` 与 `万`（例如 `1.2万`、`3.4K`）。

### 6) 头像与图片

- 点击头像或媒体区域可上传图片；支持裁剪。
- 图片会存入 `IndexedDB`，在数据里以 `img_...` 形式引用。

注意：导出的 JSON 默认不包含 `IndexedDB` 里的图片二进制；把 JSON 导到另一台机器/另一个浏览器时，图片可能会丢失（因为只有 `img_...` 引用，没有对应数据）。

### 7) 搜索过滤（右侧栏）

右侧栏搜索框会过滤当前时间线，支持按作者/ID/正文/翻译/时间等关键词匹配。

手机端：点击顶部导航的 `探索` 图标会弹出右侧抽屉（包含搜索框）。再次点 `探索` 或点遮罩关闭。

### 8) 导入/导出（项目素材）

入口：`更多` -> 工具面板。

- `导入数据`：导入 JSON（会替换当前项目状态）。
- `导出数据`：导出 JSON（包含推文、账户、UI 覆盖字段、语言等）。
- `导出HTML`：导出一份静态 HTML 快照（便于发给别人看/存档）。

### 9) 语言与排序

- 语言：`更多` -> 工具面板 -> 语言下拉框。
- 时间线排序：`更多` -> `投稿顺/日付顺`（按发帖顺序/按日期排序）。

### 10) 手机端操作要点

- 顶部导航：`探索` 打开右侧抽屉（搜索等），`更多` 打开工具面板。
- 工具面板里包含：浏览账户、排序、编辑/查看切换、导入/导出、语言等。

## 面向 AI：数据结构与改造指南（改什么文件、怎么加数据）

### 文件结构（改动入口）

- `twitter-simulator-v2-static/index.html`：页面骨架与静态区块（侧边栏、趋势、关注推荐、模态框容器等）。
- `twitter-simulator-v2-static/css/style.css`：全量样式与响应式（手机端适配、右侧栏抽屉、工具面板等）。
- `twitter-simulator-v2-static/js/data.js`：默认数据、持久化状态结构、合并逻辑（默认数据与用户本地数据合并）。
- `twitter-simulator-v2-static/js/app.js`：渲染/交互逻辑（发帖、回复、编辑、账户管理、导入导出、移动端抽屉等）。
- `twitter-simulator-v2-static/js/image-store.js`：`IndexedDB` 图片存取（生成 `img_...` ID）。
- `twitter-simulator-v2-static/sw.js`、`twitter-simulator-v2-static/manifest.webmanifest`：PWA/离线缓存（需要 http(s)/localhost）。

### 本地存储（关键 Key / DB）

- `localStorage["twitter-simulator-state"]`：统一项目状态（推文、账户、UI、版本）。
- `localStorage["tukuyomi-locale"]`：语言（`zh-CN` / `ja-JP`）。
- `localStorage["tukuyomi-timeline-sort"]`：时间线排序（`post` / `date`）。
- 兼容旧数据：`localStorage["twitter-simulator-data"]`、`localStorage["twitter-simulator-version"]`。
- `IndexedDB`：DB `TwitterSimulatorDB`，store `images`（图片以 `img_...` 为 key 存储）。

### 导入/导出 JSON 结构（建议以它为“项目文件格式”）

导出文件（`tukuyomi-project.json`）大致结构：

```ts
type ProjectExportV3 = {
  schemaVersion: 3;
  exportedAt: string; // ISO
  tweets: Tweet[];
  accounts: Account[];
  ui: UIState;
  locale?: "zh-CN" | "ja-JP";
};
```

应用内部统一状态（保存在 `twitter-simulator-state`）：

```ts
type UnifiedAppState = {
  dataVersion: number; // 对应 js/data.js 的 DATA_VERSION
  tweets: Tweet[];
  accounts: Account[];
  ui: UIState;
};
```

核心数据结构：

```ts
type Translation = {
  text: string;
  source: string;        // e.g. "中文"
  visible?: boolean;     // 可选：默认 true
};

type TweetUser = {
  name: string;
  handle: string;        // e.g. "@yachi8000"
  avatar: string;        // "" | "img_..." | URL/dataURL
  verified: boolean;
  accountId?: string | null;
};

type TweetMedia = {
  type: "image";
  url: string;           // 单图入口
  images?: string[];     // 多图（最多 4）
};

type TweetStats = {
  comments: number;
  retweets: number;
  likes: number;
  bookmarks: number;
};

type ReplyStats = {
  comments: number;
  retweets: number;
  likes: number;
  bookmarks?: number;
  views: number;
};

type Reply = {
  id: number;
  user: TweetUser;
  content: string;
  time: string;
  translation: Translation | null;
  stats: ReplyStats;
  replies?: Reply[];     // 嵌套回复（楼中楼）
  userLiked?: boolean;
};

type Tweet = {
  id: number;
  user: TweetUser;
  content: string;
  media: TweetMedia | null;
  time: string;
  views: string;         // 例如 "642.5万"
  stats: TweetStats;
  translation: Translation | null;
  replies: Reply[];
  userLiked?: boolean;
};

type Account = {
  id: string;            // e.g. "acc_yachi8000"
  name: string;
  handle: string;        // "@..."
  avatar: string;        // "" | "img_..."
  verified: boolean;
  updatedAt: number;     // epoch ms
};

type UIState = {
  mode: "edit" | "view";
  defaultAuthorId: string | null; // 浏览账户
  composeAuthorId: string | null; // 发帖默认账户
  textFields: Record<string, string>;   // 针对 index.html 的 data-field 覆盖
  avatarFields: Record<string, string>; // 针对 index.html 的 data-field 覆盖（头像）
};
```

### 默认数据怎么改（发新版时）

默认推文与“首次加载的初始状态”在 `twitter-simulator-v2-static/js/data.js`：

- 改默认推文：编辑 `tweetsData` 数组；每条推文 `id` 需要唯一（建议用递增整数）。
- 改默认版本：修改默认数据后建议递增 `DATA_VERSION`（用于标记版本与合并）。
- 默认账户：默认账户是从 `tweetsData[].user.handle` 自动推断出来的；如果要“只有账户不发推”，推荐用 UI 新增后导出 JSON 作为模板。

合并策略（了解它能避免误改）：

- 启动时会把 `js/data.js` 的默认推文与本地保存的推文按 `id` 做深度合并。
- 本地新增的推文（默认数据里没有的 `id`）会被保留。
- 默认新增的推文（本地没有该 `id`）会自动出现在时间线里。

### 如何新增一条推 / 新账户（推荐路径）

- 新推：直接用 UI 时间线顶部发帖框发布。
- 新账户：`更多` -> `浏览账户` -> `账户管理` -> `新增账户`。
- 要把这套素材发给别人：用 `导出数据` 导出 JSON，让对方 `导入数据`。

### 如果 AI 要“改 UI 文案/头像”应该改哪里

有两种方式：

1. 改静态默认值（所有新用户都看到）：直接改 `index.html` 对应节点的初始文本/占位头像。
2. 改可导入导出的覆盖值（作为项目素材的一部分）：改 `ui.textFields` / `ui.avatarFields`。

规则：`index.html` 里带 `data-field="xxx"` 且没有 `data-tweet-id` 的元素，会被 `ui.textFields["xxx"]` / `ui.avatarFields["xxx"]` 覆盖。

示例（伪代码）：

```js
// 在导入 JSON 或 replaceProjectState payload 里：
ui: {
  ...,
  textFields: { "trend-1": "新的趋势词" },
  avatarFields: { "follow-avatar-1": "img_..." }
}
```

### 常见改造任务与对应文件

- 想改主题色/字体/圆角：改 `css/style.css` 的 `:root` 变量与相关样式。
- 想改移动端行为：改 `css/style.css` 的 `@media` 规则；交互在 `js/app.js`（`nav-explore` 抽屉、`更多` 工具面板）。
- 想新增导出格式/按钮：改 `js/app.js` 的 `ensureTopTools()`（工具面板按钮）与实现函数。
