export const userMenus = [
  {
    displayName: "市场",
    hasUrl: false,
    icon: "House",
    id: "1",
    isLeaf: false,
    name: "market",
    order: 1,
    parentId: null,
    permission: null,
    url: "/main/market",
    children: [
      {
        displayName: "Dashboard",
        hasUrl: false,
        icon: "Menu",
        id: "2",
        isLeaf: true,
        name: "dashboard",
        order: 2,
        parentId: "1",
        permission: null,
        url: "/main/market/dashboard",
      },
      {
        displayName: "个人中心",
        hasUrl: false,
        icon: "Shop",
        id: "3",
        isLeaf: true,
        name: "",
        order: 3,
        parentId: "1",
        permission: null,
        url: "/main/market/mall",
      },
    ],
  },
  {
    displayName: "账户",
    hasUrl: false,
    icon: "House",
    id: "4",
    isLeaf: false,
    name: "account",
    order: 4,
    parentId: null,
    permission: null,
    url: "/main/account",
    children: [
      {
        displayName: "账号设置  ✨",
        hasUrl: false,
        icon: "Setting",
        id: "6",
        isLeaf: true,
        name: "account-set",
        order: 6,
        parentId: "4",
        permission: null,
        url: "/main/account/account-set",
      },
      {
        displayName: "历史记录",
        hasUrl: false,
        icon: "Setting",
        id: "7",
        isLeaf: true,
        name: "history-list",
        order: 7,
        parentId: "4",
        permission: null,
        url: "/main/account/history-list",
      },
    ],
  },
];
