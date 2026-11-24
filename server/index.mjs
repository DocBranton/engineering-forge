import express from "express";
import path from "node:path";
import { createApp, server } from "@databricks/appkit";
import { assertDemoMode } from "./policy.mjs";
assertDemoMode(process.env.FORGE_MODE);
const port = Number(process.env.DATABRICKS_APP_PORT || process.env.PORT || 8000);
function configure(app) {
  app.get("/api/status", (_req,res)=>res.json({mode:"demo", operational:false, toolsAvailable:false, durableStorage:false}));
  app.use(express.static(path.resolve("dist")));
  app.get("*",(_req,res)=>res.sendFile(path.resolve("dist/index.html")));
}
if (process.env.DATABRICKS_APP_NAME) {
  await createApp({plugins:[server({port})],async onPluginsReady(appkit){appkit.server.extend(configure);}});
} else {
  const app=express();configure(app);app.listen(port,"0.0.0.0");
}
