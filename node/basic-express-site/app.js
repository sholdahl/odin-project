const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));
app.set("view engine", "ejs");

app.set("views", "./views");
app.engine("html", require("ejs").renderFile);

app.get("/", (req, res) => {
  res.render("index.html");
});

app.get("/about", (req, res) => {
  res.render("about.html");
});

app.get("/contact", (req, res) => {
  res.render("contact.html");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

// http
//   .createServer((req, res) => {
//     let q = url.parse(req.url, true);
//     let filename = "." + q.pathname + ".html";
//     if (filename ==="./.html") {
//         filename = "./index.html"
//     }

//     fs.readFile(filename, (err, data) => {
//       if (err) {
//         fs.readFile("./404.html", (err, data) => {
//           if (err) {
//             res.writeHead(404, { "Content-Type": "text/html" });
//             return res.end("404 Not Found :(");
//           } else {
//             res.writeHead(404, { "Content-Type": "text/html" });
//             res.write(data);
//             return res.end();
//           }
//         });
//       } else {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.write(data);
//         return res.end();
//       }
//     });
//   })
//   .listen(8080);
