import * as fs from 'node:fs'
import * as path from 'node:path'
import Handlebars from "handlebars"

const BASE_DIR = './projects/ngx-xchange-icons/src/assets/icons/'
const TEMPLATES_DIR = './projects/ngx-xchange-icons/src/handlebars/'
const GEN_DIR =  './projects/ngx-xchange-icons/src/lib/'
const PUBLIC_API_DIR =  './projects/ngx-xchange-icons/src/'

function getFileContent(file, dir) {
  let fileInfo = {
    fileName: file,
    filePath: path.join(dir, file)
  }
  const content = fs.readFileSync(fileInfo.filePath,{encoding: 'utf-8'})

  const clearContent = content.replace('fill="#111111" stroke="#111111"', '').replace('fill="none" ')
  return clearContent
}

const getFilesInFolder = (folder, dir) => {
  let files = fs.readdirSync(folder)
  let components = []
  files.forEach(file => {
    components = [... components,  {fileName:file, content: getFileContent(file, dir)}]
  });
  return components
}

function saveFile(dir, name, content){
  fs.writeFile(path.join(dir, name), content, err => {
    if (err) {
      console.error(err);
    }
    // file written successfully
  });
}

function toClassNameFormat(nombre) {
  return nombre
      .split('-')
      .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1))
      .join('');
}


const iconsObject = getFilesInFolder('./projects/ngx-xchange-icons/src/assets/icons/', BASE_DIR)
const templates = getFilesInFolder('./projects/ngx-xchange-icons/src/handlebars/', TEMPLATES_DIR)
//console.log({iconsObject, templates});

iconsObject.forEach(icon => {
  templates.forEach(template => {

    const tm = Handlebars.compile(template.content);
    let fileName = template.fileName.replace("[fileName]", icon.fileName).replace('.hbs', '').replace('.svg', '')
    saveFile(GEN_DIR, fileName , tm({ name: icon.fileName.replace('.svg', ''), svg: icon.content, className: toClassNameFormat(icon.fileName.replace('.svg', '')) }));
  });
});

let publicApiContent = iconsObject.map(i => `export * from './lib/${i.fileName.split('.')[0]}.component';`).join('\n')

saveFile(PUBLIC_API_DIR, 'public-api.ts', publicApiContent)
