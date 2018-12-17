# tinyPNG-GULP
Processo automatico de compressão de imagens utilizando o serviço online do TinyPNG.

## Instalação
- Abra o terminal
- Escreva
```sh
cd ~/Documents
git clone https://github.com/rafaelmcgs/tinyPNG-GULP
npm install
gulp createFolders
```


## Utilização
- Coloque os arquivos ou pastas de imagens dentro da pasta de **img/** .
- Caso ainda não esteja na pasta do tinyPNG-gulp, escreva no terminal:
```sh
cd ~/Documents/tinyPNG-GULP
```
- Para iniciar o processo de compressão:
```sh
gulp compress
```

#### Se der um erro parecido com:

```sh
/usr/local/lib/node_modules/gulp/bin/gulp.js:129
    gulpInst.start.apply(gulpInst, toRun);
                   ^

TypeError: Cannot read property 'apply' of undefined
...
```
- Escreva no terminal:
```sh
sudo npm i -g gulp-cli
```
- Digite a senha do computador


#### Dica
O tinyPNG tem limite de 500 imagens por mês, então eu coloquei um filtro que faz com que ele processe somente imagens da pasta **img/** mais novas ou que não existam na pasta **dist/**.
Então a sugestão é sempre manter as imagens na pastas, atualizando somente as imagens necessárias.


