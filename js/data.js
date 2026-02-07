/**
 * 月読 Tsukuyomi Simulator - 示例数据
 *
 * 时间背景：2040 年 9 月 10 日前后
 * 说明：你可以直接改这里的默认推文，首次加载会自动写入本地状态。
 */

// 数据版本号 - 每次更新默认数据时递增
const DATA_VERSION = 7;

// 示例推文数据
const tweetsData = [
    {
        id: 1,
        user: {
            name: "八千代",
            handle: "@yachi8000",
            avatar: "",
            verified: true
        },
        content: "夜聊预告：明晚 20:30 和辉夜一起开 Live，聊聊新曲和近期创作。\n\n想提问的可以先在评论区留问题。",
        media: {
            type: "image",
            url: ""
        },
        time: "下午 2:30 · 2040年9月10日",
        views: "642.5万",
        stats: {
            comments: 42735,
            retweets: 211500,
            likes: 780000,
            bookmarks: 62000
        },
        translation: {
            text: "公告：明晚 20:30 将与辉夜一起进行直播，欢迎大家来聊天。",
            source: "中文"
        },
        replies: []
    },
    {
        id: 2,
        user: {
            name: "月読新闻",
            handle: "@tsukuyomi_news",
            avatar: "",
            verified: true
        },
        content: "东京大学具身智能研究所宣布完成新一代人形机器人步态突破。\n\n团队称该模型在复杂地形上的稳定性明显提升。",
        media: {
            type: "image",
            url: ""
        },
        time: "上午 8:45 · 2040年9月9日",
        views: "178.5万",
        stats: {
            comments: 3084,
            retweets: 17940,
            likes: 46800,
            bookmarks: 9120
        },
        translation: {
            text: "东京大学具身智能研究团队宣布新一代步态控制成果。",
            source: "中文"
        },
        replies: []
    },
    {
        id: 3,
        user: {
            name: "彩鹿推",
            handle: "@irokaguforever",
            avatar: "",
            verified: false
        },
        content: "八千代这次新曲前奏太抓耳了。\n\n我先押一个月底发完整版。",
        media: null,
        time: "上午 11:23 · 2040年9月11日",
        views: "847",
        stats: {
            comments: 4,
            retweets: 12,
            likes: 45,
            bookmarks: 2
        },
        translation: {
            text: "这次新曲很有感觉，期待完整版。",
            source: "中文"
        },
        replies: [
            {
                id: 101,
                user: {
                    name: "辉夜",
                    handle: "@kaguya",
                    avatar: "",
                    verified: true
                },
                content: "我也在等完整版，前奏真的很上头。",
                translation: {
                    text: "我也很期待完整版。",
                    source: "中文"
                },
                time: "上午 11:25 · 2040年9月11日",
                stats: {
                    comments: 0,
                    retweets: 0,
                    likes: 2,
                    bookmarks: 0,
                    views: "18"
                }
            }
        ]
    }
];

// 智能合并数据：保留用户添加的推文，同时更新默认推文的内容
const APP_STATE_KEY = 'twitter-simulator-state';
const LEGACY_TWEETS_KEY = 'twitter-simulator-data';
const LEGACY_VERSION_KEY = 'twitter-simulator-version';
let unifiedAppState = null;

function cloneDeep(obj) {
    return JSON.parse(JSON.stringify(obj));
}

function mergeDeep(base, override) {
    if (override === undefined || override === null) return cloneDeep(base);
    if (base === null || typeof base !== 'object' || Array.isArray(base)) return cloneDeep(override);
    if (typeof override !== 'object' || Array.isArray(override)) return cloneDeep(override);

    const merged = { ...cloneDeep(base) };
    for (const key of Object.keys(override)) {
        merged[key] = mergeDeep(base[key], override[key]);
    }
    return merged;
}

function mergeTweets(defaultTweets, savedTweets) {
    const safeSavedTweets = Array.isArray(savedTweets) ? savedTweets : [];
    const savedMap = new Map(safeSavedTweets.map(tweet => [tweet.id, tweet]));
    const defaultIds = new Set(defaultTweets.map(tweet => tweet.id));

    const merged = defaultTweets.map(defaultTweet => {
        const savedTweet = savedMap.get(defaultTweet.id);
        if (!savedTweet) return cloneDeep(defaultTweet);
        return mergeDeep(defaultTweet, savedTweet);
    });

    for (const savedTweet of safeSavedTweets) {
        if (!defaultIds.has(savedTweet.id)) merged.push(cloneDeep(savedTweet));
    }

    return merged;
}

function buildAccountIdByHandle(handle) {
    const normalized = (handle || '').trim().toLowerCase().replace('@', '');
    if (!normalized) return `acc_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
    return `acc_${normalized.replace(/[^a-z0-9_]/g, '_')}`;
}

function inferAccountsFromTweets(tweets) {
    const accountsMap = new Map();

    const upsertFromUser = (user) => {
        if (!user || !user.handle) return;
        const id = user.accountId || buildAccountIdByHandle(user.handle);
        const existing = accountsMap.get(id);
        accountsMap.set(id, {
            id,
            name: user.name || (existing ? existing.name : ''),
            handle: user.handle,
            avatar: user.avatar || (existing ? existing.avatar : ''),
            verified: !!user.verified,
            updatedAt: Date.now()
        });
        user.accountId = id;
    };

    for (const tweet of tweets) {
        upsertFromUser(tweet.user);
        if (Array.isArray(tweet.replies)) {
            for (const reply of tweet.replies) {
                upsertFromUser(reply.user);
            }
        }
    }

    return Array.from(accountsMap.values());
}

function mergeAccounts(inferredAccounts, savedAccounts) {
    const merged = new Map();
    for (const account of inferredAccounts || []) merged.set(account.id, account);
    for (const account of (Array.isArray(savedAccounts) ? savedAccounts : [])) {
        if (!account || !account.id) continue;
        const base = merged.get(account.id) || {};
        merged.set(account.id, { ...base, ...account });
    }
    return Array.from(merged.values());
}

function getDefaultState() {
    const initialAccounts = inferAccountsFromTweets(cloneDeep(tweetsData));
    const initialViewerId = initialAccounts[0]?.id || null;

    return {
        dataVersion: DATA_VERSION,
        tweets: cloneDeep(tweetsData),
        accounts: initialAccounts,
        ui: {
            mode: 'edit',
            textFields: {},
            avatarFields: {},
            defaultAuthorId: initialViewerId,
            composeAuthorId: initialViewerId
        }
    };
}

function loadUnifiedState() {
    const defaults = getDefaultState();
    let savedState = null;

    try {
        const rawState = localStorage.getItem(APP_STATE_KEY);
        if (rawState) savedState = JSON.parse(rawState);
    } catch (e) {
        console.error('Failed to parse app state:', e);
    }

    if (!savedState) {
        try {
            const legacyTweets = localStorage.getItem(LEGACY_TWEETS_KEY);
            if (legacyTweets) {
                savedState = {
                    ...defaults,
                    tweets: JSON.parse(legacyTweets)
                };
            }
        } catch (e) {
            console.error('Failed to parse legacy tweets:', e);
        }
    }

    const savedTweets = savedState && Array.isArray(savedState.tweets) ? savedState.tweets : [];
    const mergedTweets = mergeTweets(defaults.tweets, savedTweets);
    const baseAccounts = Array.isArray(defaults.accounts) ? defaults.accounts : [];
    const mergedAccounts = mergeAccounts(
        baseAccounts,
        savedState && Array.isArray(savedState.accounts) ? savedState.accounts : []
    );
    const fallbackViewerId = mergedAccounts[0]?.id || null;

    const state = {
        dataVersion: DATA_VERSION,
        tweets: mergedTweets,
        accounts: mergedAccounts,
        ui: {
            mode: savedState?.ui?.mode === 'view' ? 'view' : 'edit',
            textFields: { ...(savedState?.ui?.textFields || {}) },
            avatarFields: { ...(savedState?.ui?.avatarFields || {}) },
            defaultAuthorId: savedState?.ui?.defaultAuthorId || fallbackViewerId,
            composeAuthorId: savedState?.ui?.composeAuthorId || savedState?.ui?.defaultAuthorId || fallbackViewerId
        }
    };

    unifiedAppState = state;
    saveUnifiedState(state);
    localStorage.setItem(LEGACY_VERSION_KEY, DATA_VERSION.toString());
    return state;
}

function saveUnifiedState(state) {
    unifiedAppState = state;
    localStorage.setItem(APP_STATE_KEY, JSON.stringify(state));
}

function loadData() {
    return loadUnifiedState().tweets;
}

function saveData(data) {
    const state = unifiedAppState || loadUnifiedState();
    state.tweets = cloneDeep(data);
    saveUnifiedState(state);
}

function getAccounts() {
    const state = unifiedAppState || loadUnifiedState();
    return cloneDeep(state.accounts);
}

function upsertAccount(account) {
    const state = unifiedAppState || loadUnifiedState();
    const idx = state.accounts.findIndex(item => item.id === account.id);
    const payload = {
        ...account,
        updatedAt: Date.now()
    };
    if (idx >= 0) state.accounts[idx] = { ...state.accounts[idx], ...payload };
    else state.accounts.push(payload);
    saveUnifiedState(state);
    return payload;
}

function setUITextField(field, value) {
    const state = unifiedAppState || loadUnifiedState();
    state.ui.textFields[field] = value;
    saveUnifiedState(state);
}

function setUIAvatarField(field, value) {
    const state = unifiedAppState || loadUnifiedState();
    state.ui.avatarFields[field] = value;
    saveUnifiedState(state);
}

function getUIState() {
    const state = unifiedAppState || loadUnifiedState();
    return cloneDeep(state.ui);
}

function setDefaultAuthorId(accountId) {
    const state = unifiedAppState || loadUnifiedState();
    state.ui.defaultAuthorId = accountId || null;
    saveUnifiedState(state);
}

function setComposeAuthorId(accountId) {
    const state = unifiedAppState || loadUnifiedState();
    state.ui.composeAuthorId = accountId || null;
    saveUnifiedState(state);
}

function setAppMode(mode) {
    const state = unifiedAppState || loadUnifiedState();
    state.ui.mode = mode === 'view' ? 'view' : 'edit';
    saveUnifiedState(state);
}

currentData = loadData();

window.getAccounts = getAccounts;
window.upsertAccount = upsertAccount;
window.setUITextField = setUITextField;
window.setUIAvatarField = setUIAvatarField;
window.getUIState = getUIState;
window.setDefaultAuthorId = setDefaultAuthorId;
window.setComposeAuthorId = setComposeAuthorId;
window.setAppMode = setAppMode;
window.buildAccountIdByHandle = buildAccountIdByHandle;

function removeAccount(accountId) {
    const state = unifiedAppState || loadUnifiedState();
    state.accounts = state.accounts.filter(account => account.id !== accountId);
    const fallbackId = state.accounts[0]?.id || null;
    if (state.ui.defaultAuthorId === accountId) {
        state.ui.defaultAuthorId = fallbackId;
    }
    if (state.ui.composeAuthorId === accountId) {
        state.ui.composeAuthorId = fallbackId;
    }
    saveUnifiedState(state);
}

window.removeAccount = removeAccount;

function replaceProjectState(payload) {
    const defaults = getDefaultState();
    const state = {
        dataVersion: DATA_VERSION,
        tweets: Array.isArray(payload?.tweets) ? cloneDeep(payload.tweets) : cloneDeep(defaults.tweets),
        accounts: Array.isArray(payload?.accounts) ? cloneDeep(payload.accounts) : [],
        ui: {
            mode: payload?.ui?.mode === 'view' ? 'view' : 'edit',
            textFields: { ...(payload?.ui?.textFields || {}) },
            avatarFields: { ...(payload?.ui?.avatarFields || {}) },
            defaultAuthorId: payload?.ui?.defaultAuthorId || null,
            composeAuthorId: payload?.ui?.composeAuthorId || payload?.ui?.defaultAuthorId || null
        }
    };
    saveUnifiedState(state);
    currentData = cloneDeep(state.tweets);
    return cloneDeep(state);
}

window.replaceProjectState = replaceProjectState;
