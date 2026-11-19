# madeinchinapeptide.com — 深度站点审计（2026-11）

**审计对象：** https://madeinchinapeptide.com 线上站 + 本地 `npm run build` 产物  
**仓库：** `/home/ubuntu/work/madeinchinapeptide`，`main`，HEAD `cd54911`  
**审计时间：** 2026-11-17  
**构建：** Astro 5.12；289 HTML（含 404）/ 288 sitemap URL / 288 markdown sidecar  
**线上核对：** 线上 sitemap 288 URL，与本地一致；`www` 返回 200（未 301）；404 真 404；http→https 301  
**口径：** 七维站点分 + E-E-A-T 镜头。所有数字来自本次构建，不复用上一轮结论。

> 先说明：仓库自带 `npm run check` 报 **PASS (0 problems)**，但它的阈值是 title≤65、description 60–160，且不检查产品重复、llms 覆盖和价格一致性。这个 PASS 不能当作 SEO 通过。本文按 60 字符 title、140–155 字符 description（阿拉伯语 18–28 词）和 5-gram 重复重新计算。

---

## 1. 总表

| 维度 | 权重 | 得分 | 加权分 | 一句话依据 |
|---|---:|---:|---:|---|
| 完整度 | 15% | 70 | 10.5 | 288 页、0 孤儿、0 断链、hreflang 480 组互指；但无实体/地址，漏斗页薄 |
| SEO | 20% | 66 | 13.2 | title 44 页 >60；description 158 页不达标；OG/canonical/hreflang 全过 |
| AIO | 15% | 62 | 9.3 | 全站 JSON-LD、Product 66/66、sidecar 288；llms 仅 77/288，58 页缺面包屑 |
| 数据一致性 | 15% | 85 | 12.75 | 价格 schema 与可见价 66/66 一致；图片无 404；翻译数值一致 |
| 原创性 | 15% | 45 | 6.75 | 产品页 210 对 ≥0.8，GHRP-2/6 = 1.0；知识库剔除模板句后 0 对 |
| 主观见解 | 10% | 20 | 2.0 | 知识库明确立场仅 6/89（6.7%）；产品页 66 页复用 6 个 category take |
| 内容深度 | 10% | 62 | 6.2 | 知识 1,299 词中位；产品 881 词但同构；about/contact/OEM 207–241 词 |
| **总分** | **100%** |  | **60.7** | 结构化数据是强项，产品模板重复和信任面是主要短板 |

**E-E-A-T：41/100**（Experience 30 / Expertise 72 / Authoritativeness 35 / Trust 35）。  
知识页的分析深度和标准引用是真实的；但站点没有可核验的经营主体、作者和日期，产品页又高度同构。

---

## 2. 规模与正面项

| 项 | 实测 |
|---|---:|
| HTML 页面 | 288（+404 = 289 构建页） |
| sitemap URL | 288 |
| markdown sidecar | 288/288（100%） |
| Product 详情页 | 66 |
| 知识库（英文） | 90 篇，中位 1,299 词（min 387） |
| 本地化 | es/pt/ar 各 32 页，共 96 页；13 篇知识翻译/语言 |
| 产品页 | 中位 881 词（828–969） |
| 静态/信任页 | about 207、contact 241、OEM 218、factory 326、quality 347 |
| OG/Twitter | 288/288 页有 `og:title`、`og:image`、`og:url`、`twitter:card` |
| canonical / H1 | 288/288 唯一且绝对；H1 全部 1 个 |
| hreflang | 120 页有 alternates；480 组互指；0 问题 |
| 内部断链 / 孤儿 | 0 / 0 |
| 点击深度 | 0:1 / 1:37 / 2:211 / 3:39 |
| 404 / http→https | 真 404 / 301 |
| Product schema | 66/66 有 image、brand、offers、description；价格与可见“Indicative price”一致；缺 `sku`/`mpn`（非必填，建议补） |
| 图片 | 产品图无 404；75 个 `<img>` 全部有 alt |

这是本站比多数同业主站更扎实的地方：**结构化数据不是空壳**。Product 是真实的 `Offer` + 可见价格（$25–$80），Organization/WebSite 全站存在，OG 覆盖完整，hreflang 480 组互指且目标存在，sidecar 全量。

---

## 3. 七维证据

### 3.1 完整度 — 70

**达标：**
- 288 页全部可抓，sitemap 288，sidecar 288，0 孤儿、0 断链，点击深度≤3。
- 三语各 32 页：8 个合规页 + 13 篇知识翻译 + 11 个核心页；页脚法务链接本地化。
- 8 个合规页齐全：privacy、terms、cookie、shipping-customs、returns、accessibility、research-use-only、compliance index。
- 404 是真 404；robots 指向 `sitemap-index.xml`；http→https 301。

**扣分：**
- **无法定实体、注册号、注册地址**：`site.address` 是 `China (factory details provided on request)`；about 只有 207 词，写“Company registration and factory details are provided to qualified buyers during onboarding”；contact 只有 241 词，公开 `aaron@`、`martin@`、`admin@` 三个邮箱和 WhatsApp。
- 漏斗页薄：about 207、contact 241、OEM 218、factory 326；这些是 B2B 决策节点，不是可忽略的工具页。
- 本地化合规中心只有 38–50 词（es 49、pt 50、ar 38），知识 hub 129–172 词；本地化首页 714–749 词，够用但 hub 薄。
- `www` 返回 200，未 301，重复主机；canonical 指 apex，能缓解但不能替代跳转。

### 3.2 SEO — 66

**达标：**
- title 全部唯一，canonical 全部唯一且绝对，H1 全部 1 个。
- OG/Twitter 100%；默认 OG 图 1200×630、80 KB；无缺图。
- hreflang 120 页、480 组互指、0 问题；本地化 canonical 正确。
- 0 内部断链、0 孤儿。

**扣分：**
- **44/288 个 title >60 字符**（最高 65）：知识页 30、产品页 7、西语 3、工具 2、quality 1、applications 1。例如 `Semaglutide Analytical Profile — Sequence, Modifications, Methods` 65 字符。
- **158/288 个 description 不在 140–155 字符**：
  - 英文 116/192（100 短、16 长）；产品模板 112–114 字符，`/knowledge/` 97 字符；
  - 西语 15/32（11 短、4 长）；葡语 15/32（10 短、5 长）；
  - 阿拉伯语 12/32 不足 18 词（最短 13 词）。  
  按脚本粗口径是 150 页，按语言正确口径是 158 页；不要把 133 当成最终数。
- 产品页 title 与 H1 基本是 `产品名 — Bulk & OEM Supply`，66 个产品标题同构；长度合规但点击差异化弱。
- 本地化产品列表的详情链接大多写 `Ver`/`Ver ficha (EN)`，但主 `/es/products/` 的“Ver”没有标 EN，用户会落到英文详情页。
- `www` 200 重复主机。

### 3.3 AIO — 62

**达标：**
- 288/288 页有 JSON-LD；Product 66/66、Breadcrumb 230、TechArticle 131、FAQPage 91、Organization/WebSite 288。
- Product schema 的 `image`、`brand`、`offers`、`description` 全齐；价格与页面可见价一致；`Company` 用 Organization，未伪造认证。缺 `sku`/`mpn`（非必填，建议补）。
- sidecar 288/288；`Accept: text/markdown` 可返回 markdown。
- OG 100%；hreflang 480 组互指；robots 允许抓取。

**扣分：**
- **`llms.txt` 只有 77 个相对路径 / 288 页（26.7%），0 个绝对 URL**。66 个产品详情页、约 30 篇知识页、绝大多数本地化页不在里面。文件里是 `/knowledge/...` 相对路径，机器读取时无法直接解析为完整 URL。
- **58 页缺 BreadcrumbList**：static 31、knowledge 14、compliance 6、products 4 个分类索引、compare 3。页面有可见面包屑的（about/contact/wholesale 等）也没有 schema。
- **TechArticle 无 author、datePublished、dateModified、image**；131 个 TechArticle 全部缺这三类字段。Article rich result 和 AI 引用都缺证据。
- 90 篇英文知识页中 **56 篇没有任何外部权威链接**（只链站内或 WhatsApp）；有外链的 34 篇共 6 个域名：ICH 32、USP 22、SAMR 10、PubChem 5、ClinicalTrials 3、EMA 3。引用面窄且集中在少数页。
- 本地化 13 篇知识翻译中，每种语言 7/13 没有任何外部引用。
- 没有独立 `/faq/` 页面；FAQPage 只分布在 Product/部分 category/knowledge 页。

### 3.4 数据一致性 — 85

**达标：**
- 66 个产品的 `price` 字段 $25–$80，Product schema 的 `Offer.price` 与页面 `Indicative price` 全部一致；未发现 schema 价与可见价不一致。
- 产品图 66 页全部有文件，0 个 404；49 个唯一图（同规格变体共用图是合理行为）。
- 本地化 hreflang 互指；阿拉伯语 `dir="rtl"`；翻译的数值/单位未发现系统性改写（抽查知识翻译词数比 0.85–1.13）。
- 无独立数据镜像，不存在两套目录数值冲突。

**扣分：**
- **产品页是“同模板多 SKU”而不是独立产品内容**：66 个产品页中位 881 词，但正文骨架相同；GHRP-2 与 GHRP-6 的 5-gram Jaccard = **1.0**（仅名称与 summary 不同）；semaglutide 10 mg vs 15 mg = 0.92；retatrutide 20 mg vs 30 mg = 0.917。  
  - 0.8 以上边 210 条；连通簇大小：**15、11、7、7、6、4、2、2**。  
  - 15 页簇包括 5-amino-1MQ、adipotide、cagrilintide、DSIP、epithalon、GHRP-2、GHRP-6、IGF-1 LR3、kisspeptin-10、KPV、pinealon、selank、semax、survodutide、thymalin；这些是不同分子，却共享同一套产品正文。
- **产品变体页应合并**：semaglutide 7 个规格、tirzepatide 6 个、retatrutide 4 个，合计 17 页；同一化合物仅 strength/price 不同。按页拆 SKU 对 Google 是 17 个近重复页，不是 17 个独立产品页。
- 产品 schema 的 `category` 全部写 `Research chemicals`，cosmetic/accessories 也被归入；属于字段粗糙，不是致命错误。
- 本地化页面仍有英文 RUO 句（es/pt/ar 各 4 页）；是可见语言残留。
- 产品页“Product photograph”说明与实际 49 个唯一图/66 页不完全对应；部分变体共用图时未说明“representative image”。

### 3.5 原创性 — 45

**知识库：**
- 先剔除在 ≥5% 页面出现的共享句，再算 5-gram：90 篇知识页 **0 对 >0.15**。知识正文是真正写过的，不是批量换词。
- 但 56/90 无外部权威引用；这是“有观点、缺证据”，不是抄袭。

**产品页：**
- 66 个产品页：**210 对 ≥0.8**，7 个大连通簇（15/11/7/7/6/4/2/2）；GHRP-2/GHRP-6 1.0。
- 产品页中位 881 词，但 “Documentation & batch traceability”“Bulk & wholesale pricing”“Handling notes”“The Author's Take”“Frequently asked” 这些段落是模板；真正产品特有的只有 name、strength、CAS/MW、note 和 summary。
- 44 个 research 产品页共享同一套研究背景、文件段和 FAQ；读者无法从页面判断 GHRP-2 与 GHRP-6 的机制、序列、适用场景差异。
- 结论：知识库原创性高；产品目录原创性低。按 66/288 的页面占比和商业价值，产品重复是本站最大的内容风险。

### 3.6 主观见解 — 20

- 知识库英文 89 篇中只有 **6 篇（6.7%）** 有明确第一人称立场（`Our position` / `My position` / `We recommend` 等）。
- 产品页 66 页都渲染 `The Author's Take`，但内容来自 6 个 category 级 `take`；同类产品/所有变体复用同一段，不是逐页判断。
- 知识页里确实有强判断（例如“COA without batch linkage is not evidence”“a chromatogram with no visible impurities is a prompt to check integration”），但这些判断没有形成逐篇的 `In our view` 块，脚本只能识别 6 篇。
- 无作者页、无审核人、无日期；E-E-A-T 的“谁在判断”无法核验。

### 3.7 内容深度 — 62

| 页族 | n | 中位词数 | 最短 |
|---|---:|---:|---:|
| knowledge（英） | 90 | 1,299 | 387（peptide-cold-chain-logistics） |
| products（详情） | 66 | 881 | 828（bacteriostatic-water-10ml） |
| products（分类索引） | 7 | 279–399 | accessories 279 |
| es | 32 | 749 | 49（compliance hub） |
| pt | 32 | 745 | 50（compliance hub） |
| ar | 32 | 714 | 38（compliance hub） |
| tools | 4 | 749 | 381（tools hub） |
| compliance | 8 | 861 | 362（accessibility） |
| static | 14 | 438 | 207（about） |

- 知识库 90 篇中位 1,299 词，5 个 2,000+ 词 pillar 级页面存在；产品页 828–969 词，字数不低但同构。
- 真正薄的是 **about/contact/OEM/factory** 和 **本地化 compliance hub**；这些页面在漏斗末端，不能用知识库中位数掩盖。
- 首页 449 词，信息架构清楚，但没有把“文档优先”落到可核验的主体信息。

---

## 4. 合规与信任（不进七维分数，但影响 E-E-A-T）

### 4.1 经营主体不可核验
- `site.ts`：`address: 'China (factory details provided on request)'`；about 说注册资料“向合格买家提供”；contact 只给邮箱/WhatsApp。
- schema `Organization.founder = { '@type': 'Person', name: 'Sales Team' }` —— 这不是一个人，是部门名；`foundingDate: 2018` 没有证书/注册号支撑。
- 没有法定名称、USCC/注册号、注册地址、可核验的工厂主体；B2B 买家无法做供应商准入。
- 联系人公开 `Martin`、`aaron@`、`martin@`、`admin@`；如果按你“对外只用公司主体、不出现个人姓名”的口径，这里需要统一。

### 4.2 作者/日期缺失
- 131 个 TechArticle 无 `author`、`datePublished`、`dateModified`、`image`。
- 页面没有“By … · Updated … · Reviewed by …”行；只有 `site.brand`。
- 知识页有真实分析深度，但没有把“谁写的、依据什么、何时复核”写出来，E-E-A-T 只能拿 Expertise 分，拿不到 Trust。

### 4.3 产品页同构造成的“看似专业、实则不可比”
- 66 个产品页的 COA/文件段落是同一套话；对 GHRP-2 与 GHRP-6 这种不同受体偏好/不同研究历史的分子，页面没有给出各自的机制、序列、MW、CAS 或分析重点。
- 这不是“薄”，是“同构”：字数 881，但信息增量接近 0。买家会认为所有产品都是同一段模板换名。
- 17 个规格变体页（semaglutide 7、tirzepatide 6、retatrutide 4）应合并为 3 个化合物页 + 规格表，而不是 17 个独立 URL。

### 4.4 受监管品类
- 产品包括 GLP-1 类（semaglutide、tirzepatide、retatrutide）、GHK-Cu、谷胱甘肽等；全部以 RUO 表述，没有剂量/注射指导，比 POC 站干净。
- 但产品页只有 RUO 免责声明，没有“哪些目的地限制/需要进口许可”的就地提示；合规页有，但产品页没有链接到具体限制。对 B2B 买家是信息缺口，不是违规。

---

## 5. 短板（决定分数的前三项）

1. **产品页同构（原创性 45 / 深度 62）**：66 页里 210 对 ≥0.8，15 页一簇；GHRP-2/6 完全相同。它同时拉低原创性、内容深度和转化信任，是本站第一优先级。
2. **元数据（SEO 66）**：44 个 title >60、158 个 description 不在 140–155；产品模板 description 112–114，知识页 97；本地化阿拉伯语 12 页不足 18 词。
3. **AIO 的“最后一公里”（AIO 62）**：llms 26.7%、58 页无 Breadcrumb、TechArticle 无日期/作者、56/90 知识页无外链。schema 主体是好的，但机器可读层没有闭环。

E-E-A-T 的短板不是写作，而是**主体、作者、日期、地址**；这些不是再写 10 篇知识文能解决的。

---

## 6. 修复清单（按加权增益排序）

| # | 动作 | 影响维度 | 预估总分增益 | 工时 |
|---|---|---|---:|---:|
| 1 | **合并规格变体**：semaglutide 7、tirzepatide 6、retatrutide 4 → 3 个化合物页 + strength 表；旧变体 301 或 noindex；保留每个 strength 的价格/包装行 | 原创性 15% + 深度 10% | +4~6 | 2–3 天 |
| 2 | **重写 44 个 research 产品页的独有段**：每个分子至少给 sequence/MW/CAS、受体或机制、研究场景、分析重点、`notFor`；先做 15 页大簇 | 原创性 + 深度 + 转化 | +3~5 | 5–8 天 |
| 3 | **元数据收敛**：title≤60；description 按语言 140–155 / 阿语 18–28 词；产品模板生成 140–155，知识页逐条重写 100 短描述 | SEO 20% | +2~3 | 4–6h |
| 4 | **llms 全量 + 绝对 URL**：postbuild 读 sitemap，列 288 页；至少覆盖 66 产品 + 90 知识 + 96 本地化索引 | AIO 15% | +1.5~2 | 2h |
| 5 | **Breadcrumb + Article 字段**：58 页补 BreadcrumbList；TechArticle 加 author（Organization）、datePublished/dateModified、image | AIO 15% | +1.5~2 | 3–4h |
| 6 | **主体与信任页**：法定名称/注册号/地址（业主提供）；about 207→650、contact 241→500、OEM 218→500；移除 `founder: Sales Team`；统一个人邮箱展示策略 | 完整度 + E-E-A-T | +2~3 | 1 天 + 业主材料 |
| 7 | **知识引用**：56/90 无外链的加 2–4 条权威来源（ICH/USP/PubMed/EMA/SAMR）；本地化 7/13 无引用同步 | AIO + E-E-A-T | +1~2 | 1–2 天 |
| 8 | **立场块**：知识页 6/89 → ≥60%；产品页不要复用 6 个 category take，改为每个产品 `notFor` + 一段“这个数字怎么测” | 主观见解 10% | +1.5~2 | 2–3 天 |
| 9 | **本地化薄页**：es/pt/ar compliance hub 38–50 词、knowledge hub 129–172 词加厚；英文 RUO 句本地化；产品列表标 `(EN)` | 完整度/深度 | +0.8~1.2 | 1 天 |
| 10 | **www 301**：Pages Functions/Redirect Rule，www→apex | SEO/完整度 | +0.3~0.5 | 30 min |
| 11 | **质量门禁升级**：title 60、description 语言阈值、产品重复簇、llms 覆盖率、价格一致性；否则下次仍然 PASS | 流程 | 防止回归 | 2h |

**预估：** 完成 1–5 约 **66–68**；完成 1–8 约 **71–74**；全部完成并补齐实体/作者材料，约 **75–78**。只做 3/4/5（元数据、llms、schema）大约 **64–66**，不能解决产品同构。

---

## 7. 结论

这个站的底子比 POC 好：Product schema 是真实的，价格与页面可见价一致，OG/hreflang/sidecar 都完整，知识库 90 篇有真正的分析内容。它的问题不是“没有做 SEO”，而是：

- **66 个产品页里，绝大多数是同一篇文章换名字**；15 个不同分子共享一套正文，GHRP-2 与 GHRP-6 完全相同；
- **元数据没有按语言阈值收敛**；44 个 title 超 60、158 个 description 越界，但站内 gate 仍 PASS；
- **机器可读层只做了一半**：llms 26.7%、58 页无 Breadcrumb、TechArticle 无作者/日期；
- **经营主体和作者不可核验**：没有法定名称/注册号/地址，founder 写“Sales Team”。

先把产品页从“66 个模板页”收敛成“3 个化合物页 + 规格表 + 44 个真正不同的分子页”，再修元数据和 llms；这是唯一能同时提升原创性、深度和转化的路径。反过来，只刷 metadata 会把一个 60 分的站做成“看起来 70 分、实际产品页仍然同构”的站。

---

*审计只读；本文件是唯一改动。未跑 Lighthouse/Core Web Vitals，性能结论不包含在本报告内。*
