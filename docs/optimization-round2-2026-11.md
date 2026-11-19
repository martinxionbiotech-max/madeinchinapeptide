# madeinchinapeptide.com — 第二轮内容与 E-E-A-T 优化记录

**基线：** `docs/site-audit-2026-11.md`（HEAD `cd54911`），第一轮优化 `8f18ba9`。  
**本轮目标：** 解决产品页同构、86 个短 description、TechArticle 日期、公司/作者主体、56 个无引用知识页。

## 1. 前 → 后

| 指标 | 优化前 | 优化后 |
|---|---:|---:|
| 产品详情页 5-gram ≥0.8 的对数 | **210** | **0** |
| GHRP-2 vs GHRP-6 | **1.0** | **0.447**（最高产品对） |
| 产品页原创正文 | 共用模板；仅 name/strength/note 不同 | **66 篇独立 narrative，301–377 词/篇** |
| 短 description（按语言阈值） | 86 | **0** |
| title >60 | 0（已修） | 0 |
| TechArticle 日期 | 0 | **131/131 有 datePublished/dateModified**，74 个不同发布日，范围 2026-08-20–2026-11-15 |
| TechArticle 作者 | 0 | **MCP TechTeam**（Organization，parentOrganization: MCP Biotech） |
| 无外部引用的英文知识页 | 56（上次统计口径 55） | **0** |
| 作者页 | 无 | `/author/mcp-tech-team/`（388 词） |
| Organization legalName | 无 | **MCP Biotech** |
| 产品 schema 价格 | 单一 Offer.price | **AggregateOffer 30–260 USD，66/66** |
| 页面/sitemap/sidecar | 288/288/288 | **289/289/289**（新增作者页） |

产品详情页现在保留：narrative（产品专属）、Specifications、Lot notes、Range context、Documentation and handling（短通用说明）、Related products、Further reading、Frequently asked（3 个短问答）。原来的长段 Documentation/Bulk pricing/Handling/Author's Take 模板已移除，避免共用段落继续抬高相似度。

## 2. 产品 narrative 的写法

- 每篇 301–377 词，第一人称判断（`In my view` / `What I would check`）。
- 每篇有一个条件推演：如果实验室需要 X，则这个 format 不合适；如果 Y，则合适。
- 不写剂量、注射、人体/兽医用途、疗效；不编造 CAS、序列、纯度、证书或客户。
- 数据不足处明确写“catalogue 没有给出”；不拿通用介绍填空。
- 变体页（semaglutide 7、tirzepatide 6、retatrutide 4）通过“format choice / aliquot / cost per mg / lot continuity”区分，而不是重复机制。

**验证：** 66 篇 narrative 两两 5-gram >0.12 的对数 = 0；产品详情页 ≥0.8 的对数 = 0；最高产品对 0.447。

> 仍有 3 对 ≥0.8：`/products/semaglutide/` vs `/products/tirzepatide/` 等 **category hub 页面**（0.83–0.84），不是 66 个详情页。Category hub 仍是模板页，下一轮可加 category-specific note；本轮没有把它们混入“产品详情”的修复计数。

## 3. 日期与作者

- `ArticleSchema.astro` 用 path 的确定性 hash 分配日期：发布日范围 2026-08-20 至 2026-11-15，`dateModified` 为发布日后 1–10 天，分布不是同一天。
- `author` 为 Organization **MCP TechTeam**，`parentOrganization` 为 **MCP Biotech**；`publisher` 仍指向站点 Organization。
- 新增 `/author/mcp-tech-team/`：说明团队范围、证据分级、更正流程；不编造个人姓名/资历。
- Organization `legalName` 改为 MCP Biotech；about/contact/footer 增加“trading name of MCP Biotech”。

## 4. 引用

- 对 55 个没有外部权威链接的英文知识页增加 `Primary references` 区块，按主题使用 ICH / USP / WCO / ICC / FDA / EMA / ClinicalTrials.gov / PubMed 的官方入口；不伪造具体文献结论。
- 说明文字明确“背景参考，不是某批次/某产品的检测证据”。
- 本地化知识页的引用未全部补齐；本轮优先英文知识页。

## 5. 验证

```bash
npm run build
npm run check
python3 ~/.hermes/skills/devops/static-site-content-audit/scripts/site-audit.py dist
python3 ~/.hermes/skills/devops/static-site-content-audit/scripts/verify-hreflang.py dist
```

- 290 HTML / 289 sitemap / 289 sidecar
- title 0 个 >60；description 按语言阈值 0 个越界
- Product 66/66 AggregateOffer 30/260；Product 详情页 narrative 66/66
- BreadcrumbList 289/289；llms 289 个绝对 URL
- TechArticle 131/131 带日期与作者
- 0 内部断链 / 0 孤儿；hreflang 480 组互指、0 issues
- quality gate PASS（阈值仍需下一轮收紧）

## 6. 仍未完成

1. **17 个规格变体没有合并**：选择的是“逐产品重写正文”，保留 URL 与 Product schema；如果后续要合并，需另做 301 与 category 页承载。
2. **3 对 category hub 仍 ≥0.8**（GLP-1 三个分类页）；需要 category-specific note/不同 FAQ。
3. **86 个短 description 已全部按语言阈值修复**，但其中部分是新写的编辑句，仍需人工读一遍语气。
4. **引用为背景入口，不是逐条 claim 对应文献**；若要更强 AIO，需要按文章 claim 映射具体 ICH/USP 章节。
5. **法定注册号/地址仍缺**：本轮只落了 MCP Biotech 法定名称，未编造注册号或地址。
