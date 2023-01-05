const fs = require("fs");
const path = require("path");

// criar pasta
fs.mkdir(path.join(__dirname, "pasta"), (error) => {
  if (error) {
    return console.log(error);
  }

  console.log("Pasta criada!");
});

// criar arquivo
fs.writeFile(
  path.join(__dirname, "pasta", "arquivo.txt"),
  "hello node!",
  (error) => {
    if (error) {
      return console.log(error);
    }

    console.log("Arquivo criado!");
  }
);

// add conteudo no arquivo
fs.appendFile(path.join(__dirname, "pasta", "arquivo.txt"), " :D", (error) => {
  if (error) {
    return console.log(error);
  }

  console.log("Arquivo modificado!");
});

// ler arquivo
fs.readFile(
  path.join(__dirname, "pasta", "arquivo.txt"),
  "utf8",
  (error, data) => {
    if (error) {
      return console.log(error);
    }

    console.log(data);
  }
);

// note que podem ocorrer inconsistências como: readFile exibir apenas a primeira frase
// isso ocorre por conta do código ser assíncrono e o Node não esperar um método acabar para prosseguir pro próximo
