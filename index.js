import { spawnSync } from "child_process";

const ps = spawnSync("npm.ps1", ["-v"]);

if (ps.error) {
  console.error("Error:", ps.error);
}

const whereNpm = spawnSync("where", ["npm"]);
console.log("whereNpm:", whereNpm.stdout.toString());
