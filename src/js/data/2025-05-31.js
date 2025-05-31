dataSetVersion = "2025-05-31"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Type",
    key: "type",
    tooltip: "Check this to restrict to characters attack type.",
    checked: false,
    sub: [
      { name: "Glacio",  key: "glacio" },
      { name: "Fusion",  key: "fusion" },
      { name: "Electro", key: "electro" },
      { name: "Aero",    key: "aero" },
      { name: "Spectro", key: "spectro" },
      { name: "Havoc",   key: "havoc" },
    ]
  },
  {
    name: "Filter by Weapon",
    key: "weapon",
    tooltip: "Check this to restrict to characters weapon.",
    checked: false,
    sub: [
      { name: "Sword",      key: "sword" },
      { name: "Broadblade", key: "broadblade" },
      { name: "Pistols",    key: "pistols" },
      { name: "Gauntlets",  key: "gauntlets" },
      { name: "Rectifier",  key: "rectifier" },
    ]
  },
  {
    name: "Filter by Rarity",
    key: "rarity",
    tooltip: "Check this to restrict to characters rarity.",
    checked: false,
    sub: [
      { name: "4⭐", key: "s4" },
      { name: "5⭐", key: "s5" },
    ]
  },
  {
    name: "Filter by the First Banner Version",
    key: "version",
    tooltip: "Check this to restrict to the version of chracters first banner.",
    checked: false,
    sub: [
      { name: "1.0", key: "10" },
      { name: "1.1", key: "11" },
      { name: "1.2", key: "12" },
      { name: "1.3", key: "13" },
      { name: "1.4", key: "14" },
    ]
  },
  {
    name: "Filter by Gender",
    key: "gender",
    tooltip: "Check this to restrict to characters gender.",
    checked: false,
    sub: [
      { name: "Male", key: "male" },
      { name: "Female", key: "female" },
    ]
  },
  {
    name: "Exclude Rover",
    key: "rover",
    tooltip: "Check this to not sorting with Rover.",
    checked: true,
  },
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Yangyang",
    img: "T_IconRoleHead256_1_UI.webp",
    opts: {
      type: ["aero"],
      weapon: ["sword"],
      rarity: ["s4"],
      version: ["10"],
      gender: ["female"],
    }
  },
  {
    name: "Chixia",
    img: "T_IconRoleHead256_2_UI.webp",
    opts: {
      type: ["fusion"],
      weapon: ["pistols"],
      rarity: ["s4"],
      version: ["10"],
      gender: ["female"],
    }
  },
  {
    name: "Verina",
    img: "T_IconRoleHead256_3_UI.webp",
    opts: {
      type: ["spectro"],
      weapon: ["rectifier"],
      rarity: ["s5"],
      version: ["10"],
      gender: ["female"],
    }
  },
  {
    name: "Male Rover",
    img: "T_IconRoleHead256_4_UI.webp",
    opts: {
      type: ["spectro", "spectro", "aero"],
      weapon: ["sword"],
      rarity: ["s5"],
      version: ["10"],
      gender: ["female"],
      rover: true
    }
  },
  {
    name: "Female Rover",
    img: "T_IconRoleHead256_5_UI.webp",
    opts: {
      type: ["spectro", "spectro", "aero"],
      weapon: ["sword"],
      rarity: ["s5"],
      version: ["10"],
      gender: ["female"],
      rover: true
    }
  },
  {
    name: "Baizhi",
    img: "T_IconRoleHead256_6_UI.webp",
    opts: {
      type: ["glacio"],
      weapon: ["rectifier"],
      rarity: ["s4"],
      version: ["10"],
      gender: ["female"],
    }
  },
  {
    name: "Sanhua",
    img: "T_IconRoleHead256_7_UI.webp",
    opts: {
      type: ["glacio"],
      weapon: ["sword"],
      rarity: ["s4"],
      version: ["10"],
      gender: ["female"],
    }
  },
  {
    name: "Enchore",
    img: "T_IconRoleHead256_8_UI.webp",
    opts: {
      type: ["fusion"],
      weapon: ["rectifier"],
      rarity: ["s5"],
      version: ["10"],
      gender: ["female"],
    }
  },
  {
    name: "Taoqi",
    img: "T_IconRoleHead256_9_UI.webp",
    opts: {
      type: ["havoc"],
      weapon: ["broadblade"],
      rarity: ["s4"],
      version: ["10"],
      gender: ["female"],
    }
  },
  {
    name: "Danjin",
    img: "T_IconRoleHead256_10_UI.webp",
    opts: {
      type: ["havoc"],
      weapon: ["sword"],
      rarity: ["s4"],
      version: ["10"],
      gender: ["female"],
    }
  },
  {
    name: "Jiyan",
    img: "T_IconRoleHead256_11_UI.webp",
    opts: {
      type: ["aero"],
      weapon: ["broadblade"],
      rarity: ["s5"],
      version: ["10"],
      gender: ["male"],
    }
  },
  {
    name: "Aalto",
    img: "T_IconRoleHead256_12_UI.webp",
    opts: {
      type: ["aero"],
      weapon: ["psitols"],
      rarity: ["s4"],
      version: ["10"],
      gender: ["male"],
    }
  },
  {
    name: "Mortefi",
    img: "T_IconRoleHead256_13_UI.webp",
    opts: {
      type: ["fusion"],
      weapon: ["psitols"],
      rarity: ["s4"],
      version: ["10"],
      gender: ["male"],
    }
  },
  {
    name: "Lingyang",
    img: "T_IconRoleHead256_14_UI.webp",
    opts: {
      type: ["glacio"],
      weapon: ["gauntlets"],
      rarity: ["s5"],
      version: ["10"],
      gender: ["male"],
    }
  },
  {
    name: "Yuanwu",
    img: "T_IconRoleHead256_15_UI.webp",
    opts: {
      type: ["electro"],
      weapon: ["gauntlets"],
      rarity: ["s4"],
      version: ["10"],
      gender: ["male"],
    }
  },
  {
    name: "Yinlin",
    img: "T_IconRoleHead256_17_UI.webp",
    opts: {
      type: ["electro"],
      weapon: ["rectifier"],
      rarity: ["s5"],
      version: ["10"],
      gender: ["female"],
    }
  },
  {
    name: "Calcharo",
    img: "T_IconRoleHead256_18_UI.webp",
    opts: {
      type: ["electro"],
      weapon: ["broadblade"],
      rarity: ["s5"],
      version: ["10"],
      gender: ["male"],
    }
  },
  {
    name: "Jianxin",
    img: "T_IconRoleHead256_23_UI.webp",
    opts: {
      type: ["aero"],
      weapon: ["gauntlets"],
      rarity: ["s5"],
      version: ["10"],
      gender: ["female"],
    }
  },
];
