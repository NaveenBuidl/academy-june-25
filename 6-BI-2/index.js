// const { exec } = require("child_process");

// exec("ls -lh", (error, stdout, stderr) => {
//   if (error) {
//     console.error(`exec error: ${error}`);
//     return;
//   }

//   console.log("stdout:", stdout);
//   console.log("stderr:", stderr);
// });

// exec("randomCommand", (error, stdout, stderr) => {
//   if (error) {
//     console.error(`exec error: ${error}`);
//     return;
//   }

//   console.log("stdout:", stdout);
//   console.log("stderr:", stderr);
// });

// exec('grep "someText" randomFile.txt', (error, stdout, stderr) => {
//   if (error) {
//     console.error(`exec error: ${error}`);
//     return;
//   }

//   console.log("stdout:", stdout);
//   console.log("stderr:", stderr);
// });

// --------------------------------------------------------------------------------
// const { execFile } = require("child_process");

// const scriptPath = "./script.sh";

// // Arguments
// const args = ["args1", "args2"];

// // Executing the script with arguments
// execFile(scriptPath, args, (err, stdout) => {
//   if (err) {
//     console.error(`Execution error: ${err}`);
//     return;
//   }
//   console.log(stdout);
// });

// ---------------------------------------------------------
/** Launch new Processes */
// const { spawn } = require("child_process");

// spawn("/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", [
//   "https://www.scaler.com/",
//   "--incognito",
// ]);

// -----------------------------------------------------------------------------

// 1. Create a bsic server
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  console.log("headers", req.headers, " url:", req.url, " method:", req.method);
  console.log("request event");

  res.end("Hello World!");
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
