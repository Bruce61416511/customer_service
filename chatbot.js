const knowledgeBase = [
  // ===== 问候 =====
  {
    patterns: ["你好", "在吗", "hi", "hello", "您好"],
    answer: "您好！本店主营全新 / 准新 Mac Mini，各配置现货充足，有任何型号、价格、使用问题都可以问我～"
  },
  {
    patterns: ["谢谢", "感谢", "thanks"],
    answer: "不客气！还有其他问题随时问我～"
  },
  {
    patterns: ["再见", "拜拜", "bye"],
    answer: "好的，有需要随时回来，祝您生活愉快～"
  },

  // ===== 产品型号 =====
  {
    patterns: ["型号", "版本", "有哪些型号", "卖什么"],
    answer: "目前在售新款 M2、M2 Pro、M4 芯片版本，还有经典老款机型，不同芯片性能、价格有区别，可以说说你的使用场景，我帮你推荐。"
  },
  {
    patterns: ["M2", "m2芯片", "m2版"],
    answer: "M2 版本适合日常办公、追剧、轻度剪辑，8 核 CPU + 10 核 GPU，性价比很高，是入门首选。"
  },
  {
    patterns: ["M2 Pro", "m2 pro", "m2pro"],
    answer: "M2 Pro 版本性能更强，10/12 核 CPU + 16/19 核 GPU，适合视频剪辑、编程开发、多任务处理，专业用户首选。"
  },
  {
    patterns: ["M4", "m4芯片", "m4版"],
    answer: "M4 是最新款，性能大幅提升，CPU/GPU 核心数更多，AI 算力更强，适合专业设计、重度开发、本地 AI 推理等场景。"
  },
  {
    patterns: ["M1", "m1芯片", "老款"],
    answer: "M1 经典款仍有少量库存，日常办公完全够用，价格最实惠，预算有限可以考虑。"
  },
  {
    patterns: ["最大配置", "顶配", "最高配"],
    answer: "目前顶配为 M4 Pro 芯片 + 64GB 内存 + 2TB 存储，性能拉满，适合专业工作站需求，有需要可以帮你查库存和价格。"
  },
  {
    patterns: ["最小配置", "入门", "最低配", "基础款"],
    answer: "入门款为 M2 芯片 + 8GB 内存 + 256GB 存储，日常办公、上网、追剧完全够用，价格最友好。"
  },
  {
    patterns: ["准新", "二手", "99新", "充新"],
    answer: "准新机型为 99 新成色，功能完好、外观几乎无使用痕迹，经过严格检测，价格比全新优惠不少，性价比很高。"
  },

  // ===== 芯片/性能 =====
  {
    patterns: ["不同芯片", "怎么选", "差别大吗", "芯片区别"],
    answer: "日常办公、追剧、轻度剪辑选 M2 标准版，性价比最高；做视频剪辑、编程、多任务运行选 M2 Pro；专业设计、重度开发、服务器使用优先 M4 版本。"
  },
  {
    patterns: ["性能", "跑分", "速度快吗", "卡不卡"],
    answer: "Apple 自研芯片性能非常强，日常使用完全不会卡，多任务切换流畅，比同价位 Intel 机型快很多。"
  },
  {
    patterns: ["发热", "风扇", "噪音"],
    answer: "Mac Mini 散热设计优秀，日常使用几乎听不到风扇声音，机身温度控制很好，长时间高负载也不会过热。"
  },
  {
    patterns: ["功耗", "耗电", "费电吗"],
    answer: "Mac Mini 功耗很低，待机仅 7W 左右，满载也不超过 65W，比普通台式机省电很多，24 小时开机也不心疼电费。"
  },
  {
    patterns: ["AI", "人工智能", "本地模型", "跑模型"],
    answer: "M4 系列芯片内置神经网络引擎，AI 算力很强，可以本地运行大语言模型、图像生成等 AI 应用，M2 系列也能跑但速度会慢一些。"
  },

  // ===== 内存/存储 =====
  {
    patterns: ["内存升级", "硬盘升级", "内存 / 硬盘", "升级吗"],
    answer: "Mac Mini 内存、硬盘出厂焊死，无法后期自行升级，建议根据使用需求一步选到位。"
  },
  {
    patterns: ["内存多大", "8g够吗", "16g", "内存选择"],
    answer: "日常办公 8GB 够用；经常开多应用、剪辑视频建议 16GB；专业开发、跑 AI 模型建议 24GB 或以上。"
  },
  {
    patterns: ["硬盘多大", "存储", "256g", "512g", "1tb"],
    answer: "256GB 适合轻度使用；512GB 适合存一些文件和软件；1TB 及以上适合视频剪辑、大量素材存储。建议至少选 512GB 起步。"
  },
  {
    patterns: ["外接硬盘", "扩展存储", "移动硬盘"],
    answer: "可以通过雷电/USB-C 接口外接硬盘扩展存储，速度很快，日常备份和大文件存储很方便。"
  },

  // ===== 价格/优惠 =====
  {
    patterns: ["优惠", "最低多少钱", "价格", "多少钱", "售价"],
    answer: "当前店铺有满减、组合套餐活动，搭配配件下单更实惠，具体价格以商品页面为准。"
  },
  {
    patterns: ["议价", "折扣", "多买", "批发", "团购"],
    answer: "单品已是活动底价，多台采购可联系我单独协商优惠～"
  },
  {
    patterns: ["套餐", "配套套餐", "套装"],
    answer: "有的！我们准备了拓展坞、无线键鼠、显示器等组合套餐，成套购买比单独买更划算。"
  },
  {
    patterns: ["优惠券", "满减", "活动"],
    answer: "店铺不定期有满减和优惠券活动，可以关注店铺或咨询客服获取最新优惠信息。"
  },
  {
    patterns: ["比价", "别家更便宜", "贵了"],
    answer: "本店保证正品行货，价格已包含完整售后服务，准新机型性价比尤其高。如果看到明显低于市场价的，建议谨慎甄别来源。"
  },
  {
    patterns: ["开发票", "发票", "增值税"],
    answer: "支持开具正规发票，下单时备注开票信息即可，电子发票一般 1-3 个工作日开出。"
  },

  // ===== 购买流程 =====
  {
    patterns: ["怎么买", "下单", "购买流程", "怎么拍"],
    answer: "直接在商品页面选择配置加入购物车，确认收货地址后付款即可。有问题随时问我帮你选配置～"
  },
  {
    patterns: ["付款方式", "分期", "支持分期", "花呗", "信用卡"],
    answer: "支持平台常规支付，店铺也提供分期服务，具体分期期数和费率以页面显示为准。"
  },
  {
    patterns: ["定金", "预售", "预定"],
    answer: "部分热门配置支持预定，付定金后到货优先发货，具体以商品页面说明为准。"
  },
  {
    patterns: ["企业采购", "公司买", "对公"],
    answer: "支持企业采购和对公转账，多台采购还有额外优惠，可以联系我获取企业报价单。"
  },

  // ===== 物流/发货 =====
  {
    patterns: ["现货", "多久发货", "有现货", "库存"],
    answer: "店内主流配置均有现货，当天 18 点前下单，一般当日发出；18 点后下单次日安排发货，默认主流快递。"
  },
  {
    patterns: ["快递", "指定快递", "顺丰", "京东快递"],
    answer: "默认 XX 快递，如需指定快递可下单前备注，偏远地区需补少量运费哦。"
  },
  {
    patterns: ["物流", "查快递", "到哪了", "单号"],
    answer: "发货后会提供快递单号，可以在平台订单里查看物流轨迹，一般 2-4 天到达。"
  },
  {
    patterns: ["包装", "怎么包装", "安全吗"],
    answer: "全部使用原厂包装 + 外层加固纸箱 + 气泡膜，确保运输安全，签收时建议当面验货。"
  },
  {
    patterns: ["运费", "包邮", "配送费"],
    answer: "大部分地区包邮，偏远地区（新疆、西藏等）需补少量运费，下单时系统会自动计算。"
  },
  {
    patterns: ["验货", "签收", "当面验"],
    answer: "建议签收时当面检查外包装是否完好，如有破损请拒收并立即联系我们处理。"
  },

  // ===== 配件/周边 =====
  {
    patterns: ["配件", "显示器", "键盘", "鼠标", "拓展坞"],
    answer: "主机不含显示器、键盘、鼠标，需要自行搭配；店铺也有拓展坞、键鼠、显示器配套套餐，搭配购买更划算。"
  },
  {
    patterns: ["外接显示器", "尺寸", "分辨率", "4k"],
    answer: "新款机型支持高分辨率大屏、多屏联动，M2 Pro 及以上支持双 4K 或单 6K 显示器，常规 24/27 英寸都完美兼容。"
  },
  {
    patterns: ["接口", "usb", "雷电", "hdmi"],
    answer: "M2/M4 版有 2 个雷电 4 + HDMI + 2 个 USB-A + 网口；M2 Pro/M4 Pro 接口更多，具体以机型为准。"
  },
  {
    patterns: ["无线", "蓝牙", "wifi", "网络"],
    answer: "支持 WiFi 6/6E 无线连接和蓝牙 5.3，也有有线网口，网络连接方式很灵活。"
  },
  {
    patterns: ["音响", "音箱", "声音"],
    answer: "Mac Mini 内置扬声器，日常使用够用；对音质有要求可以外接蓝牙音箱或有源音箱。"
  },
  {
    patterns: ["摄像头", "视频通话", "facetime"],
    answer: "Mac Mini 没有内置摄像头，视频通话需要外接摄像头，店铺有兼容的 USB 摄像头可选。"
  },

  // ===== 使用场景 =====
  {
    patterns: ["剪辑", "设计", "游戏"],
    answer: "视频剪辑、平面设计、软件开发都能流畅运行；Apple 芯片机型偏向生产力，不主打大型电脑游戏，轻度小游戏可正常使用。"
  },
  {
    patterns: ["办公", "word", "excel", "文档"],
    answer: "办公完全没问题，Microsoft Office、WPS 都有 Mac 版，日常文档处理、表格、演示文稿都很流畅。"
  },
  {
    patterns: ["编程", "开发", "写代码", "程序员"],
    answer: "非常适合开发！Xcode、VS Code、Docker 等都原生支持 Apple 芯片，编译速度很快，是程序员的好选择。"
  },
  {
    patterns: ["学习", "学生", "上网课"],
    answer: "学生使用很合适，上网课、查资料、写作业、轻度剪辑都没问题，M2 基础款性价比最高。"
  },
  {
    patterns: ["服务器", "nas", "软路由", "24小时"],
    answer: "Mac Mini 功耗低、体积小，很多人用来做家庭服务器、NAS、软路由，24 小时开机完全没问题。"
  },
  {
    patterns: ["直播", "推流", "obs"],
    answer: "M2 Pro 及以上可以流畅运行 OBS 推流直播，M2 基础款轻度直播也可以，建议搭配采集卡使用。"
  },
  {
    patterns: ["音乐", "音频", "编曲", "logic"],
    answer: "Logic Pro、Ableton Live 等音乐软件在 Mac 上运行非常好，低延迟、高稳定性，是音乐制作的好平台。"
  },

  // ===== 系统/软件 =====
  {
    patterns: ["Windows", "双系统", "装 Windows", "虚拟机"],
    answer: "Apple 芯片款 Mac Mini 不支持传统双系统，可通过虚拟机运行 Windows 系统，满足办公、软件使用需求。"
  },
  {
    patterns: ["系统", "macos", "升级系统", "系统版本"],
    answer: "预装最新版 macOS，支持免费升级到最新系统，Apple 一般提供 5-7 年的系统更新支持。"
  },
  {
    patterns: ["软件", "兼容", "能装什么软件"],
    answer: "主流软件都有 Mac 版：Office、Adobe 全家桶、Final Cut、Xcode、Chrome 等。少数仅 Windows 的软件可通过虚拟机使用。"
  },
  {
    patterns: ["icloud", "苹果账号", "apple id"],
    answer: "使用 Apple ID 登录即可享受 iCloud 云存储、同步等生态服务，和 iPhone/iPad 联动非常方便。"
  },

  // ===== 对比 =====
  {
    patterns: ["和pc比", "和台式机比", "比intel", "对比"],
    answer: "相比同价位 Intel 台式机，Mac Mini 性能更强、功耗更低、体积更小、噪音更小，生态体验也更好。"
  },
  {
    patterns: ["和imac比", "和macbook比", "和笔记本比"],
    answer: "Mac Mini 没有屏幕和键鼠，需要自配，但同配置价格更便宜，性能不输 iMac/MacBook，适合已有显示器的用户。"
  },
  {
    patterns: ["m2和m4", "m2和m2pro", "选哪个芯片"],
    answer: "M2 适合日常办公性价比最高；M2 Pro 适合专业剪辑和开发；M4 是最新款性能最强。预算够建议直接上 M4。"
  },

  // ===== 国行/版本 =====
  {
    patterns: ["国行", "港版", "美版", "区别", "版本区别"],
    answer: "硬件、性能完全一致；主要区别在保修政策、键盘布局、系统默认设置，本店机型均支持正规保修，可放心选购。"
  },
  {
    patterns: ["序列号", "查序列号", "sn码"],
    answer: "每台机器都有唯一序列号，可以在 Apple 官网查询保修状态和激活日期，收到货后建议第一时间查验。"
  },

  // ===== 保修/售后 =====
  {
    patterns: ["保修", "怎么保修", "保修多久", "质保"],
    answer: "全新机型享受官方标准保修（通常 1 年），准新机器提供店铺质保；非人为质量问题，按规则支持售后处理。"
  },
  {
    patterns: ["维修", "坏了", "故障", "出问题"],
    answer: "保修期内非人为损坏免费维修；过保后也可联系我们协助送修，提供技术支持。"
  },
  {
    patterns: ["售后", "售后服务", "客服"],
    answer: "本店提供完善售后服务，有任何使用问题随时联系，工作时间一般 1 小时内响应。"
  },

  // ===== 退换货 =====
  {
    patterns: ["退换", "不满意", "可以退换", "退货"],
    answer: "商品完好、未激活 / 未拆封，符合平台规则可申请退换；已激活使用，非质量问题不支持无理由退换哦。"
  },
  {
    patterns: ["质量问题", "有问题的", "瑕疵"],
    answer: "如收到商品有质量问题，请拍照联系我们，确认后会安排退换或补偿，请放心。"
  },
  {
    patterns: ["换货", "换个", "换配置"],
    answer: "未激活状态下支持换货，已激活非质量问题不支持换货。建议下单前确认好配置，有问题随时问我帮你选。"
  },

  // ===== 验机/正品 =====
  {
    patterns: ["正品", "全新", "翻新", "假货"],
    answer: "本店所有机器均为正品，全新机型未拆封未激活，支持查验，杜绝翻新、改装机。"
  },
  {
    patterns: ["验机", "怎么验", "验货"],
    answer: "收到后建议：1.检查外包装封条 2.核对序列号 3.开机看激活状态 4.跑一下系统诊断。有问题随时联系我。"
  },
  {
    patterns: ["拆封", "未拆", "封条"],
    answer: "全新机型原厂封条完好，未拆封未激活；准新机型会提前说明成色，收到与描述不符可以退换。"
  },

  // ===== 店铺相关 =====
  {
    patterns: ["店铺", "你们是谁", "哪家店", "靠谱吗"],
    answer: "本店专注 Mac Mini 销售多年，全新/准新均有，支持验机、正规保修，好评率很高，放心选购～"
  },
  {
    patterns: ["地址", "实体店", "线下"],
    answer: "我们主要线上销售，支持全国发货。如有特殊需求可以联系客服沟通。"
  },
  {
    patterns: ["营业时间", "几点上班", "人工客服"],
    answer: "客服工作时间 6:00-24:00，其他时间留言我们会次日第一时间回复。"
  },

  // ===== 技术支持 =====
  {
    patterns: ["不会用", "怎么用", "教程", "设置"],
    answer: "收到货后有简易教程，也可以随时联系我，一步步教你完成激活和基础设置，包教会～"
  },
  {
    patterns: ["迁移数据", "旧电脑", "数据转移"],
    answer: "可以用 macOS 自带的迁移助手，通过 WiFi 或有线把旧电脑的数据完整迁移过来，非常方便。"
  },
  {
    patterns: ["备份", "time machine", "时光机"],
    answer: "推荐用 Time Machine 备份，外接硬盘即可自动备份整个系统，出问题随时恢复，很省心。"
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
    if (item.patterns.some(pattern => text.includes(pattern.toLowerCase()))) {
      return item.answer;
    }
  }
  for (const item of keywordReplies) {
    if (item.keywords.some(keyword => text.includes(keyword.toLowerCase()))) {
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
