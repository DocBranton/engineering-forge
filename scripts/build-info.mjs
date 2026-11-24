import {readFileSync,writeFileSync,mkdirSync} from "node:fs";
const timestamp=new Date().toISOString();
const run=process.env.GITHUB_RUN_NUMBER;
const sha=process.env.GITHUB_SHA;
const attempt=process.env.GITHUB_RUN_ATTEMPT||"1";
const ci=Boolean(run && sha);
const appkit=JSON.parse(readFileSync("node_modules/@databricks/appkit/package.json","utf8")).version;
mkdirSync("public",{recursive:true});
writeFileSync("public/build-info.json",JSON.stringify({version:ci?"v"+timestamp.slice(0,10).replaceAll("-",".")+"."+run+attempt.padStart(3,"0"):"local/unreleased",commit:sha||null,timestamp,appkit,channel:ci?"CI":"local"},null,2));
