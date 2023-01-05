const path = require("path");

// basename -> nome do arquivo atual
console.log(path.basename(__filename));

// dirname -> nome do diretório atual
console.log(path.dirname(__filename));

// extname -> extensão do arquivo
console.log(path.extname(__filename));

// parse -> cria obj path
console.log(path.parse(__filename));

// join -> juntar caminhos de arquivos
console.log(path.join(__dirname, "test", "test.js"));
