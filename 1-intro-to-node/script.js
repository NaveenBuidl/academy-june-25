const fs = require("fs");

// fs.readFile("file.txt", "utf8", (err, data) => {
//   if (err) {
//     console.log("Something else wrong. Unable to read file.", err);
//     return;
//   }
//   console.log(data);
// });

// fs.writeFile("example.txt", "Hello, world!!", "utf8", (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("File has been written!");
// });

// fs.rename("example.txt", "new-example.txt", () => {});

// fs.unlink("new-example.txt", () => {});

// fs.stat("file.txt", (err, stat) => {
//   console.log("Size:", stat.size);
//   console.log("Is Directory?:", stat.isDirectory());
// });

// fs.mkdir("my-directory", () => {});

// fs.rmdir("my-directory", () => {});

// if (fs.existsSync("file1.txt")) {
//   console.log("File Exists");
// } else {
//   console.log("File does not exist");
// }

//----------------------------------------------
const path = require("path");

// const fullPath = path.join("folder", "subfolder", "file.txt");
// console.log(fullPath);

// const absolutePath = path.resolve("folder", "subfolder", "file.txt");
// console.log(absolutePath);

// const fileName = path.basename("./dir/file.txt");
// console.log(fileName);

// const extension = path.extname("./dir/file.txt");
// console.log(extension);