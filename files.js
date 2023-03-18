/// /// NOOB START

// const fs = require("fs");
// const path = require("path");
// READ FILE
// fs.readFile(path.join(__dirname, "files", "read.txt"), "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// // WRITE FILE
// fs.writeFile(
//   path.join(__dirname, "files", "write.txt"),
//   "hello admin !!!",
//   (err) => {
//     if (err) throw err;
//     console.log("File write");

//     // APPEND FILE
//     fs.appendFile(
//       path.join(__dirname, "files", "write.txt"),
//       "\n\n We are anonymous",
//       (err) => {
//         if (err) throw err;
//         console.log("File append");

//         // RENAME FILE
//         fs.rename(
//           path.join(__dirname, "files", "write.txt"),
//           path.join(__dirname, "files", "fuck.txt"),
//           (err) => {
//             if (err) throw err;
//             console.log("File renamed");
//           }
//         );
//       }
//     );
//   }
// );

// LOG ERROR WHILE OCCOUR !!!
// process.on("uncaughtException", (err) => {
//   console.error(`ERROR FOUND !! \n ${err}`);
//   process.exit(1);
// });

/// /// NOOB END

/// /// PRO START
// const path = require("path");
// const fs = require("fs").promises;

// const FsOps = async () => {
//   try {
//     const data = await fs.readFile(
//       path.join(__dirname, "files", "read.txt"),
//       "utf-8"
//     );
//     console.log(data);
//     await fs.writeFile(
//       path.join(__dirname, "files", "visited.txt"),
//       "We are visited !!!"
//     );
//     await fs.appendFile(
//       path.join(__dirname, "files", "visited.txt"),
//       "We are anonymous ><"
//     );
//     await fs.rename(
//       path.join(__dirname, "files", "admin.txt"),
//       path.join(__dirname, "files", "anonymous.txt")
//     );
//     const finalData = await fs.readFile(
//       path.join(__dirname, "files", "admin.txt"),
//       "utf-8"
//     );
//     console.log(`fileOPS loaded !!! \n ${finalData}`);
//   } catch (err) {
//     console.log(err);
//   }
// };

// FsOps();
/// /// PRO END
