const readline = require("readline");
const { show } = require("./utils");
const todos = require('./todos.js');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.setPrompt("명령하세요 : ");

rl.prompt();
rl.on("line", (line) => {
    const commandArr = line.split('$')
    // console.log(commandArr);
    if (commandArr[0] === "show")
    {
        // show 함수
        show(commandArr);
    }
    else if (commandArr[0] === "add")
    {
        // add 함수
    }
    else if (commandArr[0] === "delete")
    {
        // delete 함수
    }
    else if (commandArr[0] === "update")
    {
        // update 함수
    }
    else if (commandArr[0] === "exit")
        rl.close();
    rl.prompt();
});
 
rl.on('close', () => {
        process.exit();
})