/**
 * 月読 Tsukuyomi Simulator - 示例数据
 *
 * 时间背景：2040 年 9 月 10 日前后
 * 说明：你可以直接改这里的默认推文，首次加载会自动写入本地状态。
 */

// 数据版本号 - 每次更新默认数据时递增
const DATA_VERSION = 9;

// 示例推文数据
const tweetsData = [
    {
        id: 1,
        user: {
            name: "ヤチヨ",
            handle: "@yachi8000",
            avatar: "assets/default/avatars/avatar-yachiyo.jpg",
            verified: true
        },
        content: "【お知らせ】\n皆さん！！ 大ニュースです！\n\nなんと私、かぐやちゃん、いろぷちゃんの三人で\n合同ライブを開催することになりました！！ 🎉🎉\n\n久しぶりにかぐちゃんとステージに立てるのが\n本当に楽しみにしています...！\n\n詳細は後日発表します！\nぜひ見に来てくださいね！ ✨\n\n#三人ライブ #ヤチヨ復帰 #かぐや #合同ライブ",
        media: {
            type: "image",
            url: "assets/default/tweets/tweet-1-main.jpg",
            images: [
                "assets/default/tweets/tweet-1-main.jpg"
            ]
        },
        time: "下午 2:30 · 2040年9月10日",
        views: "642.5万",
        stats: {
            comments: 42735,
            retweets: 211500,
            likes: 780700,
            bookmarks: 62000
        },
        translation: null,
        replies: []
    },
    {
        id: 2,
        user: {
            name: "月読ニュース",
            handle: "@tsukuyomi_news",
            avatar: "assets/default/avatars/avatar-tsukuyomi-news.jpg",
            verified: true
        },
        content: "【独占取材】東大具身知能研究所、世界初の画期的成果を達成\n\n酒寄いろぷ所長への独占インタビューによると、同研究所は人型ロボットの\n自律判断において驚異的なブレークスルーを実現したとのこと。\n\n「私たちの研究は、ロボットが人間のように自然に動き、考えることを可能に\nします」と酒寄所長は語った。\n\n#東大 #具身知能 #ロボット #AI研究 #酒寄いろぷ",
        media: {
            type: "image",
            url: "assets/default/tweets/tweet-2-main.jpg",
            images: [
                "assets/default/tweets/tweet-2-main.jpg"
            ]
        },
        time: "上午 8:45 · 2040年9月9日",
        views: "178.5万",
        stats: {
            comments: 3084,
            retweets: 18700,
            likes: 47750,
            bookmarks: 9130
        },
        translation: null,
        replies: []
    },
    {
        id: 3,
        user: {
            name: "彩輝激推し",
            handle: "@irokaguforever",
            avatar: "assets/default/avatars/avatar-irokaguforever.jpg",
            verified: false
        },
        content: "やっぱり私はいろかぐなんだよな\n\nいろヤチヨも尊いんだけど、やっぱりいろかぐには敵わない\nヤチヨごめん。\n\nだってさ、いろぷちゃん総受けじゃん？？\nかぐやは完全に\nこの組み合わせ性癖すぎて毎日死んでる\n推しカプが尊すぎて生きるのが辛い\n\n#いろかぐ #彩葉 #いろぷ受け #かぐや攻め #尊い",
        media: null,
        time: "下午 11:23 · 2040年9月11日",
        views: "847",
        stats: {
            comments: 4,
            retweets: 12,
            likes: 45,
            bookmarks: 2
        },
        translation: null,
        replies: [
            {
                id: 301,
                user: {
                    name: "かぐや",
                    handle: "@kaguya",
                    avatar: "assets/default/avatars/avatar-kaguya.jpg",
                    verified: false
                },
                content: "わかるかわち！！ いままでずっとずっと、私も他のヤツよりいろかぐだと思いますっ！！！\n！！！！（ていうかこれ誰でも尊いでしょ）？？？",
                translation: null,
                time: "下午 11:25 · 2040年9月11日",
                stats: {
                    comments: 2,
                    retweets: 4,
                    likes: 18,
                    bookmarks: 0,
                    views: 18
                }
            },
            {
                id: 302,
                user: {
                    name: "彩輝激推し",
                    handle: "@irokaguforever",
                    avatar: "assets/default/avatars/avatar-irokaguforever.jpg",
                    verified: false
                },
                content: "え？？？ ご本人？？？？？",
                translation: null,
                time: "下午 11:26 · 2040年9月11日",
                stats: {
                    comments: 0,
                    retweets: 1,
                    likes: 14,
                    bookmarks: 0,
                    views: 14
                }
            },
            {
                id: 303,
                user: {
                    name: "かぐや",
                    handle: "@kaguya",
                    avatar: "assets/default/avatars/avatar-kaguya.jpg",
                    verified: false
                },
                content: "本人じゃないです！！ うるさくてすみません！！",
                translation: null,
                time: "下午 11:27 · 2040年9月11日",
                stats: {
                    comments: 1,
                    retweets: 5,
                    likes: 23,
                    bookmarks: 0,
                    views: 23
                }
            },
            {
                id: 304,
                user: {
                    name: "彩輝激推し",
                    handle: "@irokaguforever",
                    avatar: "assets/default/avatars/avatar-irokaguforever.jpg",
                    verified: false
                },
                content: "じゃあ、かぐやちゃんやっぱり攻めだな！！",
                translation: null,
                time: "下午 11:28 · 2040年9月11日",
                stats: {
                    comments: 0,
                    retweets: 0,
                    likes: 5,
                    bookmarks: 0,
                    views: 5
                }
            }
        ]
    }
];

// 主状态使用 IndexedDB 存储，仅保留 locale/sort 在 localStorage
const APP_DB_NAME = 'TwitterSimulatorDB';
const APP_DB_VERSION = 2;
const APP_STATE_STORE = 'appState';
const APP_STATE_RECORD_KEY = 'current';
const LEGACY_APP_STATE_KEY = 'twitter-simulator-state';
const LEGACY_APP_STATE_COMPAT_KEYS = [
    'twitter-simulator-state',
    'twitter-simulator-data',
    'twitter-simulator-version'
];

let unifiedAppState = null;
let appStateDBPromise = null;
let appStateReadyPromise = null;
let persistQueue = Promise.resolve();

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
            avatarFields: {
                'follow-avatar-1': 'assets/default/ui/follow-1.jpg',
                'follow-avatar-2': 'assets/default/ui/follow-2.jpg',
                'follow-avatar-3': 'assets/default/ui/follow-3.jpg'
            },
            defaultAuthorId: initialViewerId,
            composeAuthorId: initialViewerId
        }
    };
}

function buildNormalizedState(defaults, savedState) {
    const savedTweets = savedState && Array.isArray(savedState.tweets) ? savedState.tweets : [];
    const mergedTweets = mergeTweets(defaults.tweets, savedTweets);
    const baseAccounts = Array.isArray(defaults.accounts) ? defaults.accounts : [];
    const mergedAccounts = mergeAccounts(
        baseAccounts,
        savedState && Array.isArray(savedState.accounts) ? savedState.accounts : []
    );
    const fallbackViewerId = mergedAccounts[0]?.id || null;

    return {
        dataVersion: DATA_VERSION,
        tweets: mergedTweets,
        accounts: mergedAccounts,
        ui: {
            mode: savedState?.ui?.mode === 'view' ? 'view' : 'edit',
            textFields: {
                ...(defaults.ui?.textFields || {}),
                ...(savedState?.ui?.textFields || {})
            },
            avatarFields: {
                ...(defaults.ui?.avatarFields || {}),
                ...(savedState?.ui?.avatarFields || {})
            },
            defaultAuthorId: savedState?.ui?.defaultAuthorId || fallbackViewerId,
            composeAuthorId: savedState?.ui?.composeAuthorId || savedState?.ui?.defaultAuthorId || fallbackViewerId
        }
    };
}

function clearLegacyAppStateKeys() {
    for (const key of LEGACY_APP_STATE_COMPAT_KEYS) {
        localStorage.removeItem(key);
    }
}

function readLegacyStateFromLocalStorage() {
    try {
        const raw = localStorage.getItem(LEGACY_APP_STATE_KEY);
        if (!raw) return null;
        const parsed = JSON.parse(raw);
        return parsed && typeof parsed === 'object' ? parsed : null;
    } catch (e) {
        console.error('Failed to parse legacy app state:', e);
        return null;
    }
}

function openAppStateDB() {
    if (appStateDBPromise) return appStateDBPromise;

    appStateDBPromise = new Promise((resolve, reject) => {
        const request = indexedDB.open(APP_DB_NAME, APP_DB_VERSION);

        request.onerror = (event) => {
            console.error('Failed to open app state DB:', event.target.error);
            reject(event.target.error);
        };

        request.onsuccess = (event) => {
            resolve(event.target.result);
        };

        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            if (!db.objectStoreNames.contains('images')) {
                db.createObjectStore('images');
            }
            if (!db.objectStoreNames.contains(APP_STATE_STORE)) {
                db.createObjectStore(APP_STATE_STORE);
            }
        };
    });

    return appStateDBPromise;
}

async function readPersistedState() {
    const db = await openAppStateDB();
    return new Promise((resolve, reject) => {
        const tx = db.transaction([APP_STATE_STORE], 'readonly');
        const store = tx.objectStore(APP_STATE_STORE);
        const request = store.get(APP_STATE_RECORD_KEY);

        request.onsuccess = (event) => resolve(event.target.result || null);
        request.onerror = (event) => reject(event.target.error);
    });
}

async function writePersistedState(state) {
    const db = await openAppStateDB();
    return new Promise((resolve, reject) => {
        const tx = db.transaction([APP_STATE_STORE], 'readwrite');
        const store = tx.objectStore(APP_STATE_STORE);
        const request = store.put(cloneDeep(state), APP_STATE_RECORD_KEY);

        request.onsuccess = () => resolve();
        request.onerror = (event) => reject(event.target.error);
    });
}

function scheduleStatePersist(state) {
    const snapshot = cloneDeep(state);
    persistQueue = persistQueue
        .then(() => writePersistedState(snapshot))
        .catch((err) => {
            console.error('Failed to persist app state:', err);
        });
    return persistQueue;
}

async function loadUnifiedState() {
    const defaults = getDefaultState();
    let savedState = null;
    let hasLegacyState = false;

    try {
        savedState = await readPersistedState();
    } catch (e) {
        console.error('Failed to read persisted app state:', e);
    }

    if (!savedState) {
        const legacy = readLegacyStateFromLocalStorage();
        if (legacy) {
            savedState = legacy;
            hasLegacyState = true;
        }
    }

    const state = buildNormalizedState(defaults, savedState);

    unifiedAppState = state;
    await scheduleStatePersist(state);
    if (hasLegacyState) {
        clearLegacyAppStateKeys();
    }
    return state;
}

function saveUnifiedState(state) {
    unifiedAppState = state;
    currentData = cloneDeep(state.tweets);
    scheduleStatePersist(state);
    return cloneDeep(state);
}

function loadData() {
    const state = unifiedAppState || getDefaultState();
    return cloneDeep(state.tweets);
}

function saveData(data) {
    const state = unifiedAppState || getDefaultState();
    state.tweets = cloneDeep(data);
    saveUnifiedState(state);
}

function getAccounts() {
    const state = unifiedAppState || getDefaultState();
    return cloneDeep(state.accounts);
}

function upsertAccount(account) {
    const state = unifiedAppState || getDefaultState();
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
    const state = unifiedAppState || getDefaultState();
    state.ui.textFields[field] = value;
    saveUnifiedState(state);
}

function setUIAvatarField(field, value) {
    const state = unifiedAppState || getDefaultState();
    state.ui.avatarFields[field] = value;
    saveUnifiedState(state);
}

function getUIState() {
    const state = unifiedAppState || getDefaultState();
    return cloneDeep(state.ui);
}

function setDefaultAuthorId(accountId) {
    const state = unifiedAppState || getDefaultState();
    state.ui.defaultAuthorId = accountId || null;
    saveUnifiedState(state);
}

function setComposeAuthorId(accountId) {
    const state = unifiedAppState || getDefaultState();
    state.ui.composeAuthorId = accountId || null;
    saveUnifiedState(state);
}

function setAppMode(mode) {
    const state = unifiedAppState || getDefaultState();
    state.ui.mode = mode === 'view' ? 'view' : 'edit';
    saveUnifiedState(state);
}

currentData = cloneDeep(getDefaultState().tweets);
appStateReadyPromise = loadUnifiedState()
    .then((state) => {
        currentData = cloneDeep(state.tweets);
        return cloneDeep(state);
    })
    .catch((err) => {
        console.error('Failed to initialize app state, fallback to defaults:', err);
        const fallback = getDefaultState();
        unifiedAppState = fallback;
        currentData = cloneDeep(fallback.tweets);
        return cloneDeep(fallback);
    });

window.getAccounts = getAccounts;
window.upsertAccount = upsertAccount;
window.setUITextField = setUITextField;
window.setUIAvatarField = setUIAvatarField;
window.getUIState = getUIState;
window.setDefaultAuthorId = setDefaultAuthorId;
window.setComposeAuthorId = setComposeAuthorId;
window.setAppMode = setAppMode;
window.buildAccountIdByHandle = buildAccountIdByHandle;
window.ensureAppStateReady = () => appStateReadyPromise || Promise.resolve(cloneDeep(unifiedAppState || getDefaultState()));

function removeAccount(accountId) {
    const state = unifiedAppState || getDefaultState();
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
            textFields: {
                ...(defaults.ui?.textFields || {}),
                ...(payload?.ui?.textFields || {})
            },
            avatarFields: {
                ...(defaults.ui?.avatarFields || {}),
                ...(payload?.ui?.avatarFields || {})
            },
            defaultAuthorId: payload?.ui?.defaultAuthorId || null,
            composeAuthorId: payload?.ui?.composeAuthorId || payload?.ui?.defaultAuthorId || null
        }
    };
    saveUnifiedState(state);
    currentData = cloneDeep(state.tweets);
    return cloneDeep(state);
}

window.replaceProjectState = replaceProjectState;
