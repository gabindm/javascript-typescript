const fs = require("fs").promises;
const path = require("path");

// fs.readdir("javascript-node/node/recursao-multua")
//   .then((files) => console.log(files))
//   .catch((e) => console.log(e));

// utilizando path
// fs.readdir(path.resolve(__dirname))
//   .then((files) => console.log(files))
//   .catch((e) => console.log(e));

async function readdir(rootDir) {
  rootDir = rootDir || path.resolve(__dirname);
  const files = await fs.readdir(rootDir);
  walk(files, rootDir);
}

// function walk(files) {
//   for (let file of files) {
//     console.log(file);
//   }
// }

async function walk(files, rootDir) {
  for (let file of files) {
    const fileFullPath = path.resolve(rootDir, file);
    const stats = await fs.stat(fileFullPath);

    // //não printa arquivos de conf do git
    // if (/\.git/g.test(fileFullPath)) continue;

    // //não printa arquivos de conf do node
    // if (/node_modules/g.test(fileFullPath)) continue;

    // //não printa arquivos de conf package
    // if (/\.package/g.test(fileFullPath)) continue;

    if (stats.isDirectory()) {
      readdir(fileFullPath);
      continue;
    }

    if (!/\.html$/g.test(fileFullPath)) continue;

    console.log(file, stats.isDirectory());
  }
}

// percorre arquivos do diretório atual = fs
//readdir();

//percorre arquivos do diretório especificado
// readdir("/home/gndm/Documents/learn-javascript/websockets");

//percorre arquivos html do diretório especificado
readdir("/home/gndm/Documents/learn-javascript");
