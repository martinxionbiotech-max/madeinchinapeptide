export type Category = 'tirzepatide' | 'semaglutide' | 'retatrutide' | 'research' | 'cosmetic' | 'accessories';

export interface Product {
  slug: string;
  name: string;
  category: Category;
  strength: string;
  form: string;
  cas?: string;
  mw?: string;
  purity: string;
  storage: string;
  packaging: string;
  moq: string;
  leadTime: string;
  docs: string[];
  summary: string;
  note?: string;
  researchNote?: string;
}

export interface CategoryInfo {
  name: string;
  title: string;
  description: string;
  take?: { position: string; reasoning: string; disclosure: string };
}

export const categories: Record<Category, CategoryInfo> = {
  tirzepatide: {
    name: 'Tirzepatide',
    title: 'Tirzepatide — Bulk & OEM Supply',
    description: 'Tirzepatide reference material for laboratory research, supplied as lyophilized powder. Batch-specific HPLC data and COA on request; bulk and OEM supply.',
    take: {
      position: 'Tirzepatide is the highest-demand metabolic research peptide in the Chinese bulk market — and the most counterfeited. My position: buy on batch data, not on price per vial.',
      reasoning: 'The molecule is expensive to synthesize and purify, so the cheapest offers are usually the ones with the least analytical evidence. A 5–10% price difference is trivial next to a failed experiment or a customs seizure.',
      disclosure: 'Commercial interest: we sell research-grade tirzepatide. This view is also consistent with what buyers tell us during qualification — they ask for the chromatogram before the price.' 
    },
  },
  semaglutide: {
    name: 'Semaglutide',
    title: 'Semaglutide — Bulk & OEM Supply',
    description: 'Semaglutide reference material in lyophilized form for in-vitro research. Documentation-first supply with batch traceability and wholesale tiers.',
    take: {
      position: 'Semaglutide buyers are shifting from single vials to documented bulk lots. My position: the winning suppliers will be those who can show lot-to-lot consistency, not those with the widest catalogue.',
      reasoning: 'Semaglutide is widely available; differentiation has moved to documentation and consistency. A buyer who has been burned by a bad lot will pay for traceability.',
      disclosure: 'Commercial interest: we supply semaglutide. The observation on buyer behaviour comes from inquiry patterns, not a formal survey.' 
    },
  },
  retatrutide: {
    name: 'Retatrutide',
    title: 'Retatrutide — Bulk & OEM Supply',
    description: 'Retatrutide reference material for laboratory research as lyophilized powder. Batch-specific HPLC and MS documentation; wholesale and OEM options.',
    take: {
      position: 'Retatrutide is the newest of the incretin-class research peptides and the one with the least independent analytical history in the grey market. My position: treat every lot as unverified until you have seen its own chromatogram.',
      reasoning: 'Demand arrived faster than the supply chain matured. When a compound is new, the number of laboratories that have actually run it is small, so buyer-side verification replaces the informal reputation that older molecules have accumulated.',
      disclosure: 'Commercial interest: we list retatrutide for research supply. We deliberately publish no purity figure until a lot exists, because a catalogue-wide number would be a guess.'
    },
  },
  research: {
    name: 'Research Peptides',
    title: 'Research Peptides — Bulk & OEM Supply',
    description: 'Research-grade peptides for laboratory use: BPC-157, TB-500, CJC-1295, Ipamorelin, Sermorelin, Melanotan II, PT-141, SNAP-8, VIP and AOD-9604.',
    take: {
      position: 'The research peptide catalogue is where quality variance is largest. My position: fewer SKUs with real data beats a 200-item list with none.',
      reasoning: 'Long-tail peptides are often produced in small campaigns where method validation is thin. Buyers should treat each SKU as its own supplier-evaluation problem.',
      disclosure: 'Commercial interest: we sell a focused catalogue. We deliberately do not list compounds we cannot document.' 
    },
  },
  cosmetic: {
    name: 'Cosmetic Peptides',
    title: 'Cosmetic Peptides — Bulk Raw Material',
    description: 'Cosmetic-grade peptide raw materials for formulation research: GHK-Cu and glutathione. Documentation and bulk supply for formulators and brands.',
    take: {
      position: 'Cosmetic peptide raw material is the most under-documented segment of this market. My position: brands should demand the same analytical package as pharma-adjacent buyers.',
      reasoning: 'Cosmetic buyers often accept a COA with only an appearance check. That is a formulation risk: purity and counter-ion content affect stability and colour.',
      disclosure: 'Commercial interest: we supply GHK-Cu and glutathione. This view is based on the documentation we see requested versus what is typically offered.' 
    },
  },
  accessories: {
    name: 'Accessories',
    title: 'Laboratory Accessories — Bulk Supply',
    description: 'Supporting laboratory supplies for reconstitution and handling workflows. Research-use-only consumables supplied with documentation.',
    take: {
      position: 'Accessories are treated as an afterthought, but reconstitution supplies affect the experiment. My position: buy sterile, documented consumables from the same qualified supplier.',
      reasoning: 'A contaminated diluent can invalidate a clean peptide batch. The cost of the accessory is small relative to the cost of repeating the work.',
      disclosure: 'Commercial interest: we sell bacteriostatic water. This is a general laboratory-practice argument, not a product claim.' 
    },
  },
};

const P = (p: Product) => p;

export const products: Product[] = [
  // ---- Tirzepatide ----
P({ slug:'tirzepatide-2mg', name:'Tirzepatide 2mg', category:'tirzepatide', strength:'2 mg/vial', form:'Lyophilized powder',
     note: 'A small-format lot used for pilot runs and method development, where the cost of a full-strength vial is hard to justify. The 2 mL vial keeps headspace low, which matters when the material is reconstituted in small volumes.',
     cas:'2023788-19-2', mw:'4813.45 g/mol (reference)', purity:'Batch-specific; HPLC purity stated on COA', storage:'−20 °C, protect from light; reconstituted solution 2–8 °C',
     packaging:'2 mL amber vial, single vial per box', moq:'10 vials', leadTime:'3–7 business days',
     docs:['COA (batch-specific)','HPLC chromatogram','MS confirmation','MSDS'],
     summary:'Tirzepatide reference material supplied as a sterile-filtered, lyophilized powder. Intended for laboratory research only; not for human or veterinary use.' }),
P({ slug:'tirzepatide-5mg', name:'Tirzepatide 5mg', category:'tirzepatide', strength:'5 mg/vial', form:'Lyophilized powder',
     note: 'The 5 mg format sits between pilot and routine work: enough material for a short series of experiments without committing to a 10 mg lot. Commonly requested by laboratories validating an in-house assay before scaling.',
     cas:'2023788-19-2', mw:'4813.45 g/mol (reference)', purity:'Batch-specific; HPLC purity stated on COA', storage:'−20 °C, protect from light; reconstituted solution 2–8 °C',
     packaging:'2 mL amber vial, single vial per box', moq:'10 vials', leadTime:'3–7 business days',
     docs:['COA (batch-specific)','HPLC chromatogram','MS confirmation','MSDS'],
     summary:'Tirzepatide reference material supplied as a sterile-filtered, lyophilized powder. Intended for laboratory research only; not for human or veterinary use.' }),
P({ slug:'tirzepatide-10mg', name:'Tirzepatide 10mg', category:'tirzepatide', strength:'10 mg/vial', form:'Lyophilized powder',
     note: 'The most frequently ordered strength for routine laboratory work. The 3 mL vial accommodates a larger reconstitution volume, which reduces weighing error when small aliquots are needed.',
     cas:'2023788-19-2', mw:'4813.45 g/mol (reference)', purity:'Batch-specific; HPLC purity stated on COA', storage:'−20 °C, protect from light; reconstituted solution 2–8 °C',
     packaging:'3 mL amber vial, single vial per box', moq:'10 vials', leadTime:'3–7 business days',
     docs:['COA (batch-specific)','HPLC chromatogram','MS confirmation','MSDS'],
     summary:'Tirzepatide reference material supplied as a sterile-filtered, lyophilized powder. Intended for laboratory research only; not for human or veterinary use.' }),
P({ slug:'tirzepatide-15mg', name:'Tirzepatide 15mg', category:'tirzepatide', strength:'15 mg/vial', form:'Lyophilized powder',
     note: 'A higher-load format for laboratories running repeated assays from a single lot. Buying one 15 mg vial instead of three 5 mg vials reduces lot-to-lot variability across a study.',
     cas:'2023788-19-2', mw:'4813.45 g/mol (reference)', purity:'Batch-specific; HPLC purity stated on COA', storage:'−20 °C, protect from light; reconstituted solution 2–8 °C',
     packaging:'3 mL amber vial, single vial per box', moq:'10 vials', leadTime:'3–7 business days',
     docs:['COA (batch-specific)','HPLC chromatogram','MS confirmation','MSDS'],
     summary:'Tirzepatide reference material supplied as a sterile-filtered, lyophilized powder. Intended for laboratory research only; not for human or veterinary use.' }),
P({ slug:'tirzepatide-30mg', name:'Tirzepatide 30mg', category:'tirzepatide', strength:'30 mg/vial', form:'Lyophilized powder',
     note: 'A bulk-oriented format for distributors and multi-week study programs. The 5 mL vial is sized for larger reconstitution volumes; confirm your aliquot plan before ordering.',
     cas:'2023788-19-2', mw:'4813.45 g/mol (reference)', purity:'Batch-specific; HPLC purity stated on COA', storage:'−20 °C, protect from light; reconstituted solution 2–8 °C',
     packaging:'5 mL amber vial, single vial per box', moq:'10 vials', leadTime:'3–7 business days',
     docs:['COA (batch-specific)','HPLC chromatogram','MS confirmation','MSDS'],
     summary:'Tirzepatide reference material supplied as a sterile-filtered, lyophilized powder. Intended for laboratory research only; not for human or veterinary use.' }),
P({ slug:'tirzepatide-60mg', name:'Tirzepatide 60mg', category:'tirzepatide', strength:'60 mg/vial', form:'Lyophilized powder',
     note: 'A distributor-scale fill for buyers who repackage into smaller units. Because the material is handled more before it reaches the bench, ask for the fill-weight check and the seal integrity record alongside the COA.',
     cas:'2023788-19-2', mw:'4813.45 g/mol (reference)', purity:'Batch-specific; HPLC purity stated on COA', storage:'−20 °C, protect from light; reconstituted solution 2–8 °C',
     packaging:'10 mL amber vial, single vial per box', moq:'5 vials', leadTime:'5–10 business days',
     docs:['COA (batch-specific)','HPLC chromatogram','MS confirmation','MSDS'],
     summary:'Tirzepatide reference material supplied as a sterile-filtered, lyophilized powder. Intended for laboratory research only; not for human or veterinary use.' }),

  // ---- Semaglutide ----
P({ slug:'semaglutide-2mg', name:'Semaglutide 2mg', category:'semaglutide', strength:'2 mg/vial', form:'Lyophilized powder',
     note: 'A pilot-scale lot for assay development and small comparative runs. The low fill makes it practical to test a new supplier without holding excess inventory.',
     cas:'910463-68-2', mw:'4113.58 g/mol (reference)', purity:'Batch-specific; HPLC purity stated on COA', storage:'−20 °C, protect from light; reconstituted solution 2–8 °C',
     packaging:'2 mL amber vial, single vial per box', moq:'10 vials', leadTime:'3–7 business days',
     docs:['COA (batch-specific)','HPLC chromatogram','MS confirmation','MSDS'],
     summary:'Semaglutide reference material as lyophilized powder for in-vitro laboratory research. Not for human or veterinary use.' }),
P({ slug:'semaglutide-5mg', name:'Semaglutide 5mg', category:'semaglutide', strength:'5 mg/vial', form:'Lyophilized powder',
     note: 'A mid-range format used for short study series. It is the most common first order for laboratories evaluating a new source before committing to bulk.',
     cas:'910463-68-2', mw:'4113.58 g/mol (reference)', purity:'Batch-specific; HPLC purity stated on COA', storage:'−20 °C, protect from light; reconstituted solution 2–8 °C',
     packaging:'2 mL amber vial, single vial per box', moq:'10 vials', leadTime:'3–7 business days',
     docs:['COA (batch-specific)','HPLC chromatogram','MS confirmation','MSDS'],
     summary:'Semaglutide reference material as lyophilized powder for in-vitro laboratory research. Not for human or veterinary use.' }),
P({ slug:'semaglutide-10mg', name:'Semaglutide 10mg', category:'semaglutide', strength:'10 mg/vial', form:'Lyophilized powder',
     note: 'The standard laboratory strength. The 3 mL vial supports a range of reconstitution volumes, and the lot size suits a typical multi-week experiment.',
     cas:'910463-68-2', mw:'4113.58 g/mol (reference)', purity:'Batch-specific; HPLC purity stated on COA', storage:'−20 °C, protect from light; reconstituted solution 2–8 °C',
     packaging:'3 mL amber vial, single vial per box', moq:'10 vials', leadTime:'3–7 business days',
     docs:['COA (batch-specific)','HPLC chromatogram','MS confirmation','MSDS'],
     summary:'Semaglutide reference material as lyophilized powder for in-vitro laboratory research. Not for human or veterinary use.' }),
P({ slug:'semaglutide-15mg', name:'Semaglutide 15mg', category:'semaglutide', strength:'15 mg/vial', form:'Lyophilized powder',
     note: 'A higher-load vial for repeated assays from one lot. Fewer vials per study means fewer batch transitions, which simplifies record keeping.',
     cas:'910463-68-2', mw:'4113.58 g/mol (reference)', purity:'Batch-specific; HPLC purity stated on COA', storage:'−20 °C, protect from light; reconstituted solution 2–8 °C',
     packaging:'3 mL amber vial, single vial per box', moq:'10 vials', leadTime:'3–7 business days',
     docs:['COA (batch-specific)','HPLC chromatogram','MS confirmation','MSDS'],
     summary:'Semaglutide reference material as lyophilized powder for in-vitro laboratory research. Not for human or veterinary use.' }),
P({ slug:'semaglutide-20mg', name:'Semaglutide 20mg', category:'semaglutide', strength:'20 mg/vial', form:'Lyophilized powder',
     note: 'A larger format for distributors and longer programs. The 5 mL vial is intended for higher reconstitution volumes; plan aliquoting before the first use.',
     cas:'910463-68-2', mw:'4113.58 g/mol (reference)', purity:'Batch-specific; HPLC purity stated on COA', storage:'−20 °C, protect from light; reconstituted solution 2–8 °C',
     packaging:'5 mL amber vial, single vial per box', moq:'10 vials', leadTime:'3–7 business days',
     docs:['COA (batch-specific)','HPLC chromatogram','MS confirmation','MSDS'],
     summary:'Semaglutide reference material as lyophilized powder for in-vitro laboratory research. Not for human or veterinary use.' }),
P({ slug:'semaglutide-30mg', name:'Semaglutide 30mg', category:'semaglutide', strength:'30 mg/vial', form:'Lyophilized powder',
     note: 'The largest standard vial in this range, aimed at bulk buyers and scheduled production programs. Quoted with volume tiers rather than as a single-unit purchase.',
     cas:'910463-68-2', mw:'4113.58 g/mol (reference)', purity:'Batch-specific; HPLC purity stated on COA', storage:'−20 °C, protect from light; reconstituted solution 2–8 °C',
     packaging:'5 mL amber vial, single vial per box', moq:'10 vials', leadTime:'3–7 business days',
     docs:['COA (batch-specific)','HPLC chromatogram','MS confirmation','MSDS'],
     summary:'Semaglutide reference material as lyophilized powder for in-vitro laboratory research. Not for human or veterinary use.' }),
P({ slug:'semaglutide-50mg', name:'Semaglutide 50mg', category:'semaglutide', strength:'50 mg/vial', form:'Lyophilized powder',
     note: 'A high-load vial for distributor and OEM buyers. At this fill the lot is usually produced to order rather than drawn from stock, so the lead time is longer and the batch number is issued at order confirmation.',
     cas:'910463-68-2', mw:'4113.58 g/mol (reference)', purity:'Batch-specific; HPLC purity stated on COA', storage:'−20 °C, protect from light; reconstituted solution 2–8 °C',
     packaging:'10 mL amber vial, single vial per box', moq:'5 vials', leadTime:'7–12 business days',
     docs:['COA (batch-specific)','HPLC chromatogram','MS confirmation','MSDS'],
     summary:'Semaglutide reference material as lyophilized powder for in-vitro laboratory research. Not for human or veterinary use.' }),

  // ---- Retatrutide ----
P({ slug:'retatrutide-5mg', name:'Retatrutide 5mg', category:'retatrutide', strength:'5 mg/vial', form:'Lyophilized powder',
     note: 'A pilot fill for laboratories establishing an assay for a compound with little published bench experience. Small vials let a lab test solubility and chromatography behaviour before committing to a larger lot.',
     cas:'2381089-83-2', mw:'4731.4 g/mol (reference)', purity:'Batch-specific; HPLC purity stated on COA', storage:'−20 °C, protect from light; reconstituted solution 2–8 °C',
     packaging:'2 mL amber vial, single vial per box', moq:'10 vials', leadTime:'5–10 business days',
     docs:['COA (batch-specific)','HPLC chromatogram','MS confirmation','MSDS'],
     summary:'Retatrutide (LY3437943) reference material as lyophilized powder, supplied for in-vitro laboratory research only.' }),
P({ slug:'retatrutide-20mg', name:'Retatrutide 20mg', category:'retatrutide', strength:'20 mg/vial', form:'Lyophilized powder',
     note: 'The working format for most laboratory programs: enough material for a multi-week series without the handling burden of a distributor-size vial.',
     cas:'2381089-83-2', mw:'4731.4 g/mol (reference)', purity:'Batch-specific; HPLC purity stated on COA', storage:'−20 °C, protect from light; reconstituted solution 2–8 °C',
     packaging:'5 mL amber vial, single vial per box', moq:'10 vials', leadTime:'5–10 business days',
     docs:['COA (batch-specific)','HPLC chromatogram','MS confirmation','MSDS'],
     summary:'Retatrutide (LY3437943) reference material as lyophilized powder, supplied for in-vitro laboratory research only.' }),
P({ slug:'retatrutide-30mg', name:'Retatrutide 30mg', category:'retatrutide', strength:'30 mg/vial', form:'Lyophilized powder',
     note: 'A larger laboratory fill for repeat assays drawn from a single lot. Keeping one batch number across a study removes lot transitions from your variables.',
     cas:'2381089-83-2', mw:'4731.4 g/mol (reference)', purity:'Batch-specific; HPLC purity stated on COA', storage:'−20 °C, protect from light; reconstituted solution 2–8 °C',
     packaging:'5 mL amber vial, single vial per box', moq:'10 vials', leadTime:'5–10 business days',
     docs:['COA (batch-specific)','HPLC chromatogram','MS confirmation','MSDS'],
     summary:'Retatrutide (LY3437943) reference material as lyophilized powder, supplied for in-vitro laboratory research only.' }),
P({ slug:'retatrutide-60mg', name:'Retatrutide 60mg', category:'retatrutide', strength:'60 mg/vial', form:'Lyophilized powder',
     note: 'A bulk fill produced against a confirmed order. Expect a longer lead time and a batch number issued after production, not pulled from existing stock.',
     cas:'2381089-83-2', mw:'4731.4 g/mol (reference)', purity:'Batch-specific; HPLC purity stated on COA', storage:'−20 °C, protect from light; reconstituted solution 2–8 °C',
     packaging:'10 mL amber vial, single vial per box', moq:'5 vials', leadTime:'7–12 business days',
     docs:['COA (batch-specific)','HPLC chromatogram','MS confirmation','MSDS'],
     summary:'Retatrutide (LY3437943) reference material as lyophilized powder, supplied for in-vitro laboratory research only.' }),

  // ---- Research peptides ----
P({ slug:'bpc-157-5mg', name:'BPC-157 5mg', category:'research', strength:'5 mg/vial', form:'Lyophilized powder',
     note: 'A small lot suited to method development and initial comparative work. The 2 mL vial keeps the fill compact for laboratories that aliquot immediately after reconstitution.',
     cas:'137525-51-0', mw:'1419.53 g/mol (reference)', purity:'Batch-specific; HPLC purity stated on COA', storage:'−20 °C, protect from light',
     packaging:'2 mL amber vial', moq:'10 vials', leadTime:'3–7 business days',
     docs:['COA (batch-specific)','HPLC chromatogram','MS confirmation','MSDS'],
     summary:'BPC-157 (body protection compound) research peptide supplied as lyophilized powder for laboratory investigation.' }),
P({ slug:'bpc-157-10mg', name:'BPC-157 10mg', category:'research', strength:'10 mg/vial', form:'Lyophilized powder',
     note: 'The standard research strength, used across a wide range of in-vitro protocols. The 3 mL vial gives enough headroom for a larger reconstitution volume when needed.',
     cas:'137525-51-0', mw:'1419.53 g/mol (reference)', purity:'Batch-specific; HPLC purity stated on COA', storage:'−20 °C, protect from light',
     packaging:'3 mL amber vial', moq:'10 vials', leadTime:'3–7 business days',
     docs:['COA (batch-specific)','HPLC chromatogram','MS confirmation','MSDS'],
     summary:'BPC-157 research peptide supplied as lyophilized powder for laboratory investigation.' }),
P({ slug:'tb-500-5mg', name:'TB-500 5mg', category:'research', strength:'5 mg/vial', form:'Lyophilized powder',
     note: 'A pilot format for laboratories testing a new supplier or protocol. Small fills reduce waste when the material is used in short series.',
     cas:'77591-33-4', mw:'4963.4 g/mol (reference)', purity:'Batch-specific; HPLC purity stated on COA', storage:'−20 °C, protect from light',
     packaging:'2 mL amber vial', moq:'10 vials', leadTime:'3–7 business days',
     docs:['COA (batch-specific)','HPLC chromatogram','MS confirmation','MSDS'],
     summary:'TB-500 (thymosin beta-4 fragment) research peptide for laboratory use.' }),
P({ slug:'cjc-1295-10mg', name:'CJC-1295 10mg', category:'research', strength:'10 mg/vial', form:'Lyophilized powder',
     note: 'A standard-strength lot for routine in-vitro work. Because the peptide is relatively long, confirm the reconstitution solvent with the COA before use.',
     cas:'863288-34-0', mw:'3647.2 g/mol (reference)', purity:'Batch-specific; HPLC purity stated on COA', storage:'−20 °C, protect from light',
     packaging:'3 mL amber vial', moq:'10 vials', leadTime:'3–7 business days',
     docs:['COA (batch-specific)','HPLC chromatogram','MS confirmation','MSDS'],
     summary:'CJC-1295 research peptide (GRF analogue) supplied for laboratory research only.' }),
P({ slug:'ipamorelin-10mg', name:'Ipamorelin 10mg', category:'research', strength:'10 mg/vial', form:'Lyophilized powder',
     note: 'A compact peptide supplied at the standard research strength. The 3 mL vial suits a typical reconstitution volume and short study series.',
     cas:'170851-70-4', mw:'711.85 g/mol (reference)', purity:'Batch-specific; HPLC purity stated on COA', storage:'−20 °C, protect from light',
     packaging:'3 mL amber vial', moq:'10 vials', leadTime:'3–7 business days',
     docs:['COA (batch-specific)','HPLC chromatogram','MS confirmation','MSDS'],
     summary:'Ipamorelin research peptide supplied as lyophilized powder for laboratory investigation.' }),
P({ slug:'sermorelin-10mg', name:'Sermorelin 10mg', category:'research', strength:'10 mg/vial', form:'Lyophilized powder',
     note: 'A standard-strength lot for laboratory investigation. Store at −20 °C and equilibrate sealed vials before opening to avoid moisture uptake.',
     cas:'86168-78-7', mw:'3357.9 g/mol (reference)', purity:'Batch-specific; HPLC purity stated on COA', storage:'−20 °C, protect from light',
     packaging:'3 mL amber vial', moq:'10 vials', leadTime:'3–7 business days',
     docs:['COA (batch-specific)','HPLC chromatogram','MS confirmation','MSDS'],
     summary:'Sermorelin research peptide (GRF 1-29) for laboratory research applications.' }),
P({ slug:'melanotan-2-10mg', name:'Melanotan II 10mg', category:'research', strength:'10 mg/vial', form:'Lyophilized powder',
     note: 'A standard-strength research lot. The peptide is light-sensitive; amber vials and dark storage are specified for a reason.',
     cas:'121062-08-6', mw:'1024.18 g/mol (reference)', purity:'Batch-specific; HPLC purity stated on COA', storage:'−20 °C, protect from light',
     packaging:'3 mL amber vial', moq:'10 vials', leadTime:'3–7 business days',
     docs:['COA (batch-specific)','HPLC chromatogram','MS confirmation','MSDS'],
     summary:'Melanotan II research peptide supplied for laboratory research only.' }),
P({ slug:'pt-141-10mg', name:'PT-141 (Bremelanotide) 10mg', category:'research', strength:'10 mg/vial', form:'Lyophilized powder',
     note: 'A standard-strength research lot for laboratory work. Reconstitute gently and aliquot to avoid repeated freeze–thaw.',
     cas:'189691-06-3', mw:'1025.18 g/mol (reference)', purity:'Batch-specific; HPLC purity stated on COA', storage:'−20 °C, protect from light',
     packaging:'3 mL amber vial', moq:'10 vials', leadTime:'3–7 business days',
     docs:['COA (batch-specific)','HPLC chromatogram','MS confirmation','MSDS'],
     summary:'PT-141 (bremelanotide) research peptide for laboratory investigation only.' }),
P({ slug:'snap-8-10mg', name:'SNAP-8 10mg', category:'research', strength:'10 mg/vial', form:'Lyophilized powder',
     note: 'A cosmetic research peptide supplied at the standard strength, typically used in formulation studies rather than analytical reference work.',
     cas:'868844-74-0', mw:'889.0 g/mol (reference)', purity:'Batch-specific; HPLC purity stated on COA', storage:'−20 °C, protect from light',
     packaging:'3 mL amber vial', moq:'10 vials', leadTime:'3–7 business days',
     docs:['COA (batch-specific)','HPLC chromatogram','MS confirmation','MSDS'],
     summary:'SNAP-8 (acetyl octapeptide-3) cosmetic research peptide for formulation studies.' }),
P({ slug:'vip-10mg', name:'VIP 10mg', category:'research', strength:'10 mg/vial', form:'Lyophilized powder',
     note: 'A longer peptide supplied at the standard research strength. Solubility behaviour varies with solvent; check the COA notes before reconstitution.',
     cas:'40077-57-4', mw:'3325.8 g/mol (reference)', purity:'Batch-specific; HPLC purity stated on COA', storage:'−20 °C, protect from light',
     packaging:'3 mL amber vial', moq:'10 vials', leadTime:'3–7 business days',
     docs:['COA (batch-specific)','HPLC chromatogram','MS confirmation','MSDS'],
     summary:'Vasoactive intestinal peptide (VIP) research material for laboratory use.' }),
P({ slug:'aod-9604-5mg', name:'AOD-9604 5mg', category:'research', strength:'5 mg/vial', form:'Lyophilized powder',
     note: 'A fragment peptide supplied in a small format for pilot work. The 2 mL vial suits low-volume reconstitution and short experiment series.',
     cas:'221231-10-3', mw:'1815.1 g/mol (reference)', purity:'Batch-specific; HPLC purity stated on COA', storage:'−20 °C, protect from light',
     packaging:'2 mL amber vial', moq:'10 vials', leadTime:'3–7 business days',
     docs:['COA (batch-specific)','HPLC chromatogram','MS confirmation','MSDS'],
     summary:'AOD-9604 (hGH fragment 176-191) research peptide for laboratory investigation.' }),
P({ slug:'nad-plus-500mg', name:'NAD+ 500mg', category:'research', strength:'500 mg/vial', form:'Lyophilized powder',
     note: 'A high-mass fill for laboratories that work at millimolar concentrations. The 10 mL vial is sized for larger reconstitution volumes; plan storage of the resulting solution.',
     cas:'53-84-9', mw:'663.43 g/mol (reference)', purity:'Batch-specific; HPLC purity stated on COA', storage:'−20 °C, protect from light',
     packaging:'10 mL vial', moq:'5 vials', leadTime:'3–7 business days',
     docs:['COA (batch-specific)','HPLC chromatogram','MSDS'],
     summary:'NAD+ (nicotinamide adenine dinucleotide) research compound for laboratory use.' }),

  // ---- Cosmetic ----
P({ slug:'ghk-cu-50mg', name:'GHK-Cu 50mg', category:'cosmetic', strength:'50 mg/vial', form:'Lyophilized powder (blue)',
     note: 'The standard cosmetic research fill. The blue colour is characteristic of the copper complex; batch appearance is stated on the COA.',
     cas:'89030-95-5', mw:'340.38 g/mol (GHK; reference)', purity:'Batch-specific; HPLC purity stated on COA', storage:'−20 °C, protect from light, dry',
     packaging:'5 mL amber vial', moq:'10 vials', leadTime:'5–10 business days',
     docs:['COA (batch-specific)','HPLC chromatogram','MS confirmation','MSDS'],
     summary:'GHK-Cu copper tripeptide-1 cosmetic raw material for formulation research and cosmetic ingredient development.' }),
P({ slug:'ghk-cu-100mg', name:'GHK-Cu 100mg', category:'cosmetic', strength:'100 mg/vial', form:'Lyophilized powder (blue)',
     note: 'A larger cosmetic research fill for formulation trials. Buying one 100 mg vial reduces lot transitions across a trial compared with two 50 mg vials.',
     cas:'89030-95-5', mw:'340.38 g/mol (GHK; reference)', purity:'Batch-specific; HPLC purity stated on COA', storage:'−20 °C, protect from light, dry',
     packaging:'10 mL amber vial', moq:'10 vials', leadTime:'5–10 business days',
     docs:['COA (batch-specific)','HPLC chromatogram','MS confirmation','MSDS'],
     summary:'GHK-Cu copper tripeptide-1 cosmetic raw material for formulation research and cosmetic ingredient development.' }),
P({ slug:'glutathione-1500mg', name:'Glutathione 1500mg', category:'cosmetic', strength:'1500 mg/vial', form:'Lyophilized powder',
     note: 'A high-mass fill intended for formulation research where larger quantities are needed. Store at 2–8 °C and protect from light.',
     cas:'70-18-8', mw:'307.32 g/mol (reference)', purity:'Batch-specific; HPLC purity stated on COA', storage:'2–8 °C, protect from light',
     packaging:'20 mL vial', moq:'5 vials', leadTime:'5–10 business days',
     docs:['COA (batch-specific)','HPLC chromatogram','MSDS'],
     summary:'Glutathione (reduced) cosmetic raw material for formulation research.' }),

  // ---- Accessories ----
P({ slug:'bacteriostatic-water-10ml', name:'Bacteriostatic Water 10mL', category:'accessories', strength:'10 mL/vial', form:'Sterile solution (0.9% benzyl alcohol)',
     note: 'A 10 mL multi-dose vial for laboratory reconstitution workflows. Supplied with a sterility statement; not for injection or human use.',
     purity:'Sterile-filtered; certificate of sterility on request', storage:'15–30 °C, protect from light',
     packaging:'10 mL multi-dose vial', moq:'20 vials', leadTime:'3–7 business days',
     docs:['Certificate of analysis','Sterility statement'],
     summary:'Bacteriostatic water for laboratory reconstitution workflows. Research use only; not for injection.' }),
];

export const byCategory = (c: Category) => products.filter(p => p.category === c);
export const findProduct = (slug: string) => products.find(p => p.slug === slug);
