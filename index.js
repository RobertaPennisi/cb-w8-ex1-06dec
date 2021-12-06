const fs = require('fs').promises;
const arguments = process.argv.slice(2)

console.log(arguments)

async function readFile(file) {
   const data = await fs.readFile(file)
   console.log(data.toString())
}



async function writeFile(file, content, flag) {
    await fs.writeFile(file, content, flag)
}

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p>Ciao Edgemony</p>
</body>
</html>
`

const list = `${arguments[0]} ${arguments[1]} \n`

writeFile('./list.txt', list, { flag: 'a+' })

console.log(readFile('list.txt'))