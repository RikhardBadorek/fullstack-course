// import fs from 'fs';
import fs from 'fs/promises';

// readFile() - callback
// fs.readFile('./test.txt', 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// readFileSync() - Synchronous version
// const data = fs.readFileSync('./test.txt', 'utf8');
// console.log(data);

// readFile() - Promise .then()
// fs.readFile('./test.txt', 'utf8')
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// readFile() - async await
const readFile = async () => {
    try {
        const data = await fs.readFile('./test.txt', 'utf8');
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

const writeFile = async () => {
    try {
        await fs.writeFile('./test.txt', 'Hello im writing to this file');
        console.log("file written to")
    } catch (error) {
        console.log(error)
    }
}

const appendFile = async () => {
    try {
        await fs.appendFile('./test.txt', '\n This appended text');
        console.log("file appended to")
    } catch (error) {
        console.log(error)
    }
}

writeFile()
appendFile()
readFile()
