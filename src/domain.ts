export type Mission = {id:string; title:string; pathway:string; stage:string; status:"Draft"|"Blocked"|"In review"; blocker:string; evidence:string[]; requirements:{id:string;description:string;state:"Proposed"|"Unknown"}[]};
export const missions:Mission[]=[
{id:"EF-DEMO-001",title:"Equipment mounting bracket",pathway:"Evaluate alternatives",stage:"Problem & evidence",status:"Blocked",blocker:"Load conditions not supplied",evidence:["Illustrative drawing reference — not uploaded","Illustrative photo reference — not uploaded"],requirements:[{id:"REQ-001",description:"Preserve mounting interfaces; dimensions not established",state:"Proposed"},{id:"REQ-002",description:"Establish service load conditions",state:"Unknown"}]},
{id:"EF-DEMO-002",title:"Workshop fixture redesign",pathway:"Develop",stage:"Requirements & AoA",status:"Draft",blocker:"Requirements not baselined",evidence:[],requirements:[]},
{id:"EF-DEMO-003",title:"Obsolete equipment cover",pathway:"Reuse / source",stage:"Problem & evidence",status:"In review",blocker:"Applicability not established",evidence:[],requirements:[]}];
export const views=["Mission Control","Engineering Workspace","Orchestration Studio","Digital Thread","Knowledge Library","Administration"] as const;
export type View=typeof views[number];
export const stages=["Problem & evidence","Requirements & AoA","Design & digital engineering","Analysis / manufacturing / repair / sourcing","Verification & release","Share & reuse"];
