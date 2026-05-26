const knowledgeBase = [
  {
    patterns: ["你好", "在吗", "hi", "hello"],
    answer: "您好！本店主营全新 / 准新 Mac Mini，各配置现货充足，有任何型号、价格、使用问题都可以问我～"
  },
  {
    patterns: ["现货", "多久发货", "有现货"],
    answer: "店内主流配置均有现货，当天 18 点前下单，一般当日发出；18 点后下单次日安排发货，默认主流快递。"
  },
  {
    patterns: ["快递", "指定快递"],
    answer: "默认 XX 快递，如需指定快递可下单前备注，偏远地区需补少量运费哦。"
  },
  {
    patterns: ["付款方式", "分期", "支持分期"],
    answer: "支持平台常规支付，店铺也提供分期服务，具体分期期数和费率以页面显示为准。"
  },
  {
    patterns: ["型号", "版本", "有哪些型号"],
    answer: "目前在售新款 M2、M2 Pro、M4 芯片版本，还有经典老款机型，不同芯片性能、价格有区别，可以说说你的使用场景，我帮你推荐。"
  },
  {
    patterns: ["不同芯片", "怎么选", "差别大吗"],
    answer: "日常办公、追剧、轻度剪辑选 M2 标准版，性价比最高；做视频剪辑、编程、多任务运行选 M2 Pro；专业设计、重度开发、服务器使用优先 M4 版本。"
  },
  {
    patterns: ["内存升级", "硬盘升级", "内存 / 硬盘", "升级吗"],
    answer: "Mac Mini 内存、硬盘出厂焊死，无法后期自行升级，建议根据使用需求一步选到位。"
  },
  {
    patterns: ["国行", "港版", "美版", "区别"],
    answer: "硬件、性能完全一致；主要区别在保修政策、键盘布局、系统默认设置，本店机型均支持正规保修，可放心选购。"
  },
  {
    patterns: ["Windows", "双系统", "装 Windows"],
    answer: "Apple 芯片款 Mac Mini 不支持传统双系统，可通过虚拟机运行 Windows 系统，满足办公、软件使用需求。"
  },
  {
    patterns: ["配件", "显示器", "键盘", "鼠标", "拓展坞"],
    answer: "主机不含显示器、键盘、鼠标，需要自行搭配；店铺也有拓展坞、键鼠、显示器配套套餐，搭配购买更划算。"
  },
  {
    patterns: ["外接显示器", "尺寸", "分辨率"],
    answer: "新款机型支持高分辨率大屏、多屏联动，常规 24/27 英寸显示器都完美兼容。"
  },
  {
    patterns: ["剪辑", "设计", "游戏"],
    answer: "视频剪辑、平面设计、软件开发都能流畅运行；Apple 芯片机型偏向生产力，不主打大型电脑游戏，轻度小游戏可正常使用。"
  },
  {
    patterns: ["保修", "怎么保修", "保修多久"],
    answer: "全新机型享受官方标准保修，准新机器提供店铺质保；非人为质量问题，按规则支持售后处理。"
  },
  {
    patterns: ["退换", "不满意", "可以退换"],
    answer: "商品完好、未激活 / 未拆封，符合平台规则可申请退换；已激活使用，非质量问题不支持无理由退换哦。"
  },
  {
    patterns: ["开机", "激活", "不会激活"],
    answer: "收到货附带简易使用教程，也可以随时联系我，一步步教你完成激活、基础设置。"
  },
  {
    patterns: ["正品", "全新", "翻新"],
    answer: "本店所有机器均为正品，全新机型未拆封未激活，支持查验，杜绝翻新、改装机。"
  },
  {
    patterns: ["优惠", "最低多少钱", "价格"],
    answer: "当前店铺有满减、组合套餐活动，搭配配件下单更实惠，具体价格以商品页面为准。"
  },
  {
    patterns: ["套餐", "配套套餐"],
    answer: "有的！我们准备了拓展坞、无线键鼠、显示器等组合套餐，成套购买比单独买更划算。"
  },
  {
    patterns: ["议价", "折扣", "多买"],
    answer: "单品已是活动底价，多台采购可联系我单独协商优惠～"
  }
];

const keywordReplies = [
  {
    keywords: ["价格"],
    answer: "请问您关心的是具体机型价格，还是想了解当前优惠活动？我可以帮您推荐最适合您的配置。"
  },
  {
    keywords: ["优惠"],
    answer: "当前店铺有满减、组合套餐活动；搭配配件下单更实惠。具体优惠以页面为准，您可以告诉我想买哪款。"
  },
  {
    keywords: ["现货"],
    answer: "主流配置都有现货，18 点前下单一般当天发；18 点后下单次日安排发货。"
  },
  {
    keywords: ["配件"],
    answer: "我们有拓展坞、无线键鼠、显示器等配套套餐，成套购买更划算。"
  },
  {
    keywords: ["分期"],
    answer: "支持平台分期，具体分期期数和费率请以页面显示为准。"
  }
];

const offlineReply = "您好，当前已下班休息，咨询请留下需求 + 联系方式，我上班后第一时间回复您，感谢理解！";
const defaultReply = "请问您想了解哪款 Mac Mini 或当前使用场景？我可以帮您推荐最适合的配置。";
const newVisitorReply = "您好！欢迎来到本店，本店主营全新 / 准新 Mac Mini，各配置现货充足。有任何型号、价格、使用问题都可以问我～";
const returnVisitorReply = "欢迎回来！本店主营全新 / 准新 Mac Mini，各配置现货充足。如果有型号、价格或兼容性问题，我随时帮您解答。";

function normalizeText(text) {
  return (text || "").trim().toLowerCase().replace(/[？?！!。，、。\s]+/g, " ");
}

function isOffline(date = new Date()) {
  const hour = date.getHours();
  return hour < 6 || hour >= 24;
}

function matchKnowledge(message) {
  const text = normalizeText(message);
  for (const item of knowledgeBase) {
    if (item.patterns.some(pattern => text.includes(pattern))) {
      return item.answer;
    }
  }
  for (const item of keywordReplies) {
    if (item.keywords.some(keyword => text.includes(keyword))) {
      return item.answer;
    }
  }
  return null;
}

function getReply({ userId, message = "", isNewVisitor = false, timestamp = null, knownVisitor = false }) {
  const date = timestamp ? new Date(timestamp) : new Date();
  if (isOffline(date)) {
    return offlineReply;
  }

  const text = normalizeText(message);

  if (isNewVisitor || (!knownVisitor && !userId)) {
    if (text.length === 0 || ["你好", "在吗", "hi", "hello"].some(p => text.includes(p))) {
      return newVisitorReply;
    }
    return newVisitorReply;
  }

  if (!knownVisitor && userId) {
    return newVisitorReply;
  }

  const matched = matchKnowledge(text);
  if (matched) {
    return matched;
  }

  return defaultReply;
}

module.exports = {
  getReply,
  isOffline,
  offlineReply,
  newVisitorReply,
  returnVisitorReply,
};
