dataSetVersion = "2025-07-02";
dataSet[dataSetVersion] = {};
dataSet[dataSetVersion].options = [{
  name: "Filter by Type",
  key: "type",
  tooltip: "Check this to restrict to characters attack type.",
  checked: false,
  sub: [{
    name: "Glacio",
    key: "glacio"
  }, {
    name: "Fusion",
    key: "fusion"
  }, {
    name: "Electro",
    key: "electro"
  }, {
    name: "Aero",
    key: "aero"
  }, {
    name: "Spectro",
    key: "spectro"
  }, {
    name: "Havoc",
    key: "havoc"
  }]
}, {
  name: "Filter by Weapon",
  key: "weapon",
  tooltip: "Check this to restrict to characters weapon.",
  checked: false,
  sub: [{
    name: "Sword",
    key: "sword"
  }, {
    name: "Broadblade",
    key: "broadblade"
  }, {
    name: "Pistols",
    key: "pistols"
  }, {
    name: "Gauntlets",
    key: "gauntlets"
  }, {
    name: "Rectifier",
    key: "rectifier"
  }]
}, {
  name: "Filter by Rarity",
  key: "rarity",
  tooltip: "Check this to restrict to characters rarity.",
  sub: [{
    name: "4⭐",
    key: "s4"
  }, {
    name: "5⭐",
    key: "s5"
  }]
}, {
  name: "Filter by the First Banner Version",
  key: "version",
  tooltip: "Check this to restrict to the version of chracters first banner.",
  sub: [{
    name: "1.0",
    key: "10"
  }, {
    name: "1.1",
    key: "11"
  }, {
    name: "1.2",
    key: "12"
  }, {
    name: "1.3",
    key: "13"
  }, {
    name: "1.4",
    key: "14"
  }, {
    name: "2.0",
    key: "20"
  }, {
    name: "2.1",
    key: "21"
  }, {
    name: "2.2",
    key: "22"
  }, {
    name: "2.3",
    key: "23"
  }, {
    name: "2.4",
    key: "24"
  }, {
    name: "2.5",
    key: "25"
  }, {
    name: "2.6",
    key: "26"
  }, {
    name: "2.7",
    key: "27"
  }, {
    name: "2.8",
    key: "28"
  }]
}, {
  name: "Filter by Gender",
  key: "gender",
  tooltip: "Check this to restrict to characters gender.",
  checked: false,
  sub: [{
    name: "Male",
    key: "male"
  }, {
    name: "Female",
    key: "female"
  }]
}, {
  name: "Exclude Rover",
  key: "rover",
  tooltip: "Check this to not sorting with Rover.",
  checked: true
}];
dataSet[dataSetVersion].characterData = [{
  name: "Yangyang",
  img: "T_IconRoleHead256_1_UI.webp",
  opts: {
    type: ["aero"],
    weapon: ["sword"],
    rarity: ["s4"],
    version: ["10"],
    gender: ["female"]
  }
}, {
  name: "Chixia",
  img: "T_IconRoleHead256_2_UI.webp",
  opts: {
    type: ["fusion"],
    weapon: ["pistols"],
    rarity: ["s4"],
    version: ["10"],
    gender: ["female"]
  }
}, {
  name: "Verina",
  img: "T_IconRoleHead256_3_UI.webp",
  opts: {
    type: ["spectro"],
    weapon: ["rectifier"],
    rarity: ["s5"],
    version: ["10"],
    gender: ["female"]
  }
}, {
  name: "Male Rover",
  img: "T_IconRoleHead256_4_UI.webp",
  opts: {
    type: ["aero", "spectro", "havoc"],
    weapon: ["sword"],
    rarity: ["s5"],
    version: ["10"],
    gender: ["male"],
    rover: true
  }
}, {
  name: "Female Rover",
  img: "T_IconRoleHead256_5_UI.webp",
  opts: {
    type: ["aero", "spectro", "havoc"],
    weapon: ["sword"],
    rarity: ["s5"],
    version: ["10"],
    gender: ["female"],
    rover: true
  }
}, {
  name: "Baizhi",
  img: "T_IconRoleHead256_6_UI.webp",
  opts: {
    type: ["glacio"],
    weapon: ["rectifier"],
    rarity: ["s4"],
    version: ["10"],
    gender: ["female"]
  }
}, {
  name: "Sanhua",
  img: "T_IconRoleHead256_7_UI.webp",
  opts: {
    type: ["glacio"],
    weapon: ["sword"],
    rarity: ["s4"],
    version: ["10"],
    gender: ["female"]
  }
}, {
  name: "Enchore",
  img: "T_IconRoleHead256_8_UI.webp",
  opts: {
    type: ["fusion"],
    weapon: ["rectifier"],
    rarity: ["s5"],
    version: ["10"],
    gender: ["female"]
  }
}, {
  name: "Taoqi",
  img: "T_IconRoleHead256_9_UI.webp",
  opts: {
    type: ["havoc"],
    weapon: ["broadblade"],
    rarity: ["s4"],
    version: ["10"],
    gender: ["female"]
  }
}, {
  name: "Danjin",
  img: "T_IconRoleHead256_10_UI.webp",
  opts: {
    type: ["havoc"],
    weapon: ["sword"],
    rarity: ["s4"],
    version: ["10"],
    gender: ["female"]
  }
}, {
  name: "Jiyan",
  img: "T_IconRoleHead256_11_UI.webp",
  opts: {
    type: ["aero"],
    weapon: ["broadblade"],
    rarity: ["s5"],
    version: ["10"],
    gender: ["male"]
  }
}, {
  name: "Aalto",
  img: "T_IconRoleHead256_12_UI.webp",
  opts: {
    type: ["aero"],
    weapon: ["psitols"],
    rarity: ["s4"],
    version: ["10"],
    gender: ["male"]
  }
}, {
  name: "Mortefi",
  img: "T_IconRoleHead256_13_UI.webp",
  opts: {
    type: ["fusion"],
    weapon: ["psitols"],
    rarity: ["s4"],
    version: ["10"],
    gender: ["male"]
  }
}, {
  name: "Lingyang",
  img: "T_IconRoleHead256_14_UI.webp",
  opts: {
    type: ["glacio"],
    weapon: ["gauntlets"],
    rarity: ["s5"],
    version: ["10"],
    gender: ["male"]
  }
}, {
  name: "Yuanwu",
  img: "T_IconRoleHead256_15_UI.webp",
  opts: {
    type: ["electro"],
    weapon: ["gauntlets"],
    rarity: ["s4"],
    version: ["10"],
    gender: ["male"]
  }
}, {
  name: "Yinlin",
  img: "T_IconRoleHead256_17_UI.webp",
  opts: {
    type: ["electro"],
    weapon: ["rectifier"],
    rarity: ["s5"],
    version: ["10"],
    gender: ["female"]
  }
}, {
  name: "Calcharo",
  img: "T_IconRoleHead256_18_UI.webp",
  opts: {
    type: ["electro"],
    weapon: ["broadblade"],
    rarity: ["s5"],
    version: ["10"],
    gender: ["male"]
  }
}, {
  name: "Jianxin",
  img: "T_IconRoleHead256_23_UI.webp",
  opts: {
    type: ["aero"],
    weapon: ["gauntlets"],
    rarity: ["s5"],
    version: ["10"],
    gender: ["female"]
  }
}, {
  name: "Jinhsi",
  img: "T_IconRoleHead256_24_UI.webp",
  opts: {
    type: ["spectro"],
    weapon: ["broadblade"],
    rarity: ["s5"],
    version: ["11"],
    gender: ["female"]
  }
}, {
  name: "Changli",
  img: "T_IconRoleHead256_26_UI.webp",
  opts: {
    type: ["fusion"],
    weapon: ["sword"],
    rarity: ["s5"],
    version: ["11"],
    gender: ["female"]
  }
}, {
  name: "Xiangli Yao",
  img: "T_IconRoleHead256_25_UI.webp",
  opts: {
    type: ["electro"],
    weapon: ["gauntlets"],
    rarity: ["s5"],
    version: ["12"],
    gender: ["male"]
  }
}, {
  name: "Zhezhi",
  img: "T_IconRoleHead256_27_UI.webp",
  opts: {
    type: ["glacio"],
    weapon: ["rectifier"],
    rarity: ["s5"],
    version: ["12"],
    gender: ["female"]
  }
}, {
  name: "Shorekeeper",
  img: "T_IconRoleHead256_28_UI.webp",
  opts: {
    type: ["spectro"],
    weapon: ["rectifier"],
    rarity: ["s5"],
    version: ["13"],
    gender: ["female"]
  }
}, {
  name: "Youhu",
  img: "T_IconRoleHead256_31_UI.webp",
  opts: {
    type: ["glacio"],
    weapon: ["gauntlets"],
    rarity: ["s4"],
    version: ["13"],
    gender: ["female"]
  }
}, {
  name: "Camellya",
  img: "T_IconRoleHead256_29_UI.webp",
  opts: {
    type: ["havoc"],
    weapon: ["sword"],
    rarity: ["s5"],
    version: ["14"],
    gender: ["female"]
  }
}, {
  name: "Lumi",
  img: "T_IconRoleHead256_30_UI.webp",
  opts: {
    type: ["electro"],
    weapon: ["broadblade"],
    rarity: ["s4"],
    version: ["14"],
    gender: ["female"]
  }
}, {
  name: "Carlotta",
  img: "T_IconRoleHead256_32_UI.webp",
  opts: {
    type: ["glacio"],
    weapon: ["pistols"],
    rarity: ["s5"],
    version: ["20"],
    gender: ["female"]
  }
}, {
  name: "Roccia",
  img: "T_IconRoleHead256_33_UI.webp",
  opts: {
    type: ["havoc"],
    weapon: ["gauntlets"],
    rarity: ["s5"],
    version: ["20"],
    gender: ["female"]
  }
}, {
  name: "Phoebe",
  img: "T_IconRoleHead256_45_UI.webp",
  opts: {
    type: ["spectro"],
    weapon: ["rectifier"],
    rarity: ["s5"],
    version: ["21"],
    gender: ["female"]
  }
}, {
  name: "Brant",
  img: "T_IconRoleHead256_44_UI.webp",
  opts: {
    type: ["fusion"],
    weapon: ["sword"],
    rarity: ["s5"],
    version: ["21"],
    gender: ["male"]
  }
}, {
  name: "Cantarella",
  img: "T_IconRoleHead256_34_UI.webp",
  opts: {
    type: ["havoc"],
    weapon: ["rectifier"],
    rarity: ["s5"],
    version: ["22"],
    gender: ["female"]
  }
}, {
  name: " Zani",
  img: "T_IconRoleHead256_38_UI.webp",
  opts: {
    type: ["spectro"],
    weapon: ["gauntlets"],
    rarity: ["s5"],
    version: ["23"],
    gender: ["female"]
  }
}, {
  name: "Ciaccona",
  img: "T_IconRoleHead256_37_UI.webp",
  opts: {
    type: ["aero"],
    weapon: ["pistols"],
    rarity: ["s5"],
    version: ["23"],
    gender: ["female"]
  }
}, {
  name: "Cartethyia",
  img: "T_IconRoleHead256_40_UI.webp",
  opts: {
    type: ["aero"],
    weapon: ["sword"],
    rarity: ["s5"],
    version: ["24"],
    gender: ["female"]
  }
}, {
  name: "Lupa",
  img: "T_IconRoleHead256_46_UI.webp",
  opts: {
    type: ["fusion"],
    weapon: ["broadblade"],
    rarity: ["s5"],
    version: ["24"],
    gender: ["female"]
  }
}, {
  name: "Phrolova",
  img: "T_IconRoleHead256_41_UI.webp",
  opts: {
    type: ["havoc"],
    weapon: ["rectifier"],
    rarity: ["s5"],
    version: ["25"],
    gender: ["female"]
  }
}, {
  name: "Augusta",
  img: "T_IconRoleHead256_51_UI.webp",
  opts: {
    type: ["electro"],
    weapon: ["broadblade"],
    rarity: ["s5"],
    version: ["26"],
    gender: ["female"]
  }
}, {
  name: "Iuno",
  img: "T_IconRoleHead256_48_UI.webp",
  opts: {
    type: ["aero"],
    weapon: ["gauntlets"],
    rarity: ["s5"],
    version: ["26"],
    gender: ["female"]
  }
}, {
  name: "Galbrena",
  img: "T_IconRoleHead256_55_UI.webp",
  opts: {
    type: ["fusion"],
    weapon: ["pistols"],
    rarity: ["s5"],
    version: ["27"],
    gender: ["female"]
  }
}, {
  name: "Qiuyuan",
  img: "T_IconRoleHead256_56_UI.webp",
  opts: {
    type: ["aero"],
    weapon: ["sword"],
    rarity: ["s5"],
    version: ["27"],
    gender: ["male"]
  }
}];

