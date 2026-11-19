# 2026-11 优化记录 — madeinchinapeptide.com

**范围：** 只做技术层与元数据收敛，不改产品价格、不合并 SKU、不编造主体/作者资料。  
**基线：** `docs/site-audit-2026-11.md`（HEAD `cd54911`）  
**本轮提交：** 待补（`optimize: metadata, breadcrumb, llms, canonical host`）

## 1. 前 → 后

| 指标 | 优化前 | 优化后 | 方式 |
|---|---:|---:|---|
| title >60 字符 | 44 | **0** | BaseLayout `fitTitle()`，按词边界截断 |
| description 不在 140–155 | 158 | **86** | 产品模板重写；>155 由 `fitDescription()` 截断；短描述未批量灌水 |
| Product description（66 页） | 112–114 | **140–154** | 产品模板按 name/strength/form/MOQ 生成 |
| BreadcrumbList 覆盖 | 230/288 | **288/288** | BaseLayout 统一生成；移除组件内重复 schema |
| llms.txt 覆盖 | 77 相对路径（26.7%） | **288 绝对 URL（100%）** | `scripts/generate-llms.mjs` 从 sitemap 生成，纳入 build |
| TechArticle author/image | 0 / 131 | **131 / 131** | ArticleSchema 增加 Organization author 与 OG image |
| Product schema `sku`/`mpn` | 0 | **66/66** | 产品模板补 `p.slug` |
| `founder: Sales Team` | 存在 | **已移除** | 不把部门名伪装成 Person；同时移除未核验的 foundingDate |
| `www` | 200 重复 | **301 → 裸域** | Functions middleware canonical host |
| Product schema 价格 | 单一 `Offer.price`（$25–$80） | **AggregateOffer lowPrice 30 / highPrice 260 USD，66/66** | 按用户指定区间；页面可见价格同步改为 USD 30–260，避免 schema 与可见价不一致 |

> 价格区间说明：产品页不再显示单个 SKU 的 `p.price`，改为“Indicative price range: USD 30–260 per vial; final quote confirms the exact SKU”。`products.ts` 里的 `price` 字段仍保留为内部数据，但不再作为可见价或 schema 价；这是按你指定的 30–260 公开区间做的商业展示口径。

## 2. 验证

```bash
npm run build
python3 ~/.hermes/skills/devops/static-site-content-audit/scripts/site-audit.py dist
python3 ~/.hermes/skills/devops/static-site-content-audit/scripts/verify-hreflang.py dist
npm run check
```

- 289 HTML / 288 sitemap / 288 sidecar
- title 0 个 >60；description 中位 146
- BreadcrumbList 288/288；JSON-LD 0 坏块
- hreflang 480 组互指、0 issues
- Product 66/66 有 image/brand/offers/description/sku/mpn；价格与可见价一致
- quality gate PASS（阈值仍偏宽，见下）

## 3. 未完成（按优先级）

1. **产品页同构**：66 页中 210 对 5-gram ≥0.8，GHRP-2/GHRP-6 = 1.0；17 个规格变体页需合并或重写。  
2. **86 个短 description**：主要是知识页 36、阿语 29、西语/葡语 21；未用同一句尾巴批量补齐，避免模板痕迹。  
3. **TechArticle 日期**：仍无 `datePublished`/`dateModified`；没有真实日期，不伪造。  
4. **经营主体/作者**：仍无法定名称、注册号、地址；需业主提供，不能由写作解决。  
5. **知识引用**：56/90 英文知识页无外部权威链接；本地化各 7/13 无引用。  
6. **www 301 线上验证**：部署后 `curl -o /dev/null -w '%{http_code} %{redirect_url}' https://www.madeinchinapeptide.com/` 应为 301。

## 4. 质量门禁说明

`npm run check` 仍报 PASS，因为它的阈值是 title≤65、description 60–160，且不检查产品重复、llms 覆盖和价格一致性。本轮没有把门禁改成会立刻失败的严格阈值；建议下一轮把 title≤60、description 140–155/18–28 词、产品重复簇和 llms 覆盖率加为 warning，稳定后再升级为 problem。
