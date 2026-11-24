import {test,expect} from "@playwright/test";
import {mkdirSync} from "node:fs";
const views=["Mission Control","Engineering Workspace","Orchestration Studio","Digital Thread","Knowledge Library","Administration"];
for(const width of [3440,1920])for(const theme of ["dark","light"]){test(width+" "+theme,async({page})=>{
await page.setViewportSize({width,height:width===3440?1440:1080});await page.goto("/");
await expect(page.getByText("DEMO · synthetic data")).toBeVisible();
if(theme==="light")await page.getByRole("button",{name:"Light theme"}).click();
mkdirSync("visual-screenshots",{recursive:true});
const capture=async(name:string)=>{await expect(page.locator("header")).toBeVisible();expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBeTruthy();await page.screenshot({path:"visual-screenshots/"+width+"-"+theme+"-"+name+".png",fullPage:true});};
await capture("mission-control-expanded");await page.getByRole("button",{name:"Collapse Hero"}).click();await capture("mission-control-compact");
await page.getByRole("button",{name:"Equipment mounting bracket"}).click();await expect(page.getByRole("heading",{name:"SI Wingman"})).toBeVisible();await capture("workspace-normal");
await page.getByRole("button",{name:"Expand",exact:true}).click();await capture("workspace-wide");
await page.getByRole("button",{name:"Close Wingman"}).click();await expect(page.getByRole("heading",{name:"SI Wingman"})).toHaveCount(0);await capture("workspace-closed");
await page.getByRole("button",{name:"Requirements",exact:true}).click();await expect(page.getByText("Establish service load conditions")).toBeVisible();await capture("workspace-requirements");
for(const v of views.slice(2)){await page.getByRole("navigation",{name:"Navigator"}).getByRole("button",{name:v,exact:true}).click();await capture(v.toLowerCase().replaceAll(" ","-"));}
});}
