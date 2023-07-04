const readline = require("readline");
const {
    commandShow,
    commandAdd,
    commandDelete,
    commandUpdate,
} = require("./commands");
const { displayInitialPrompt } = require("./prompt");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

displayInitialPrompt();

rl.setPrompt("\x1b[32m명령하세요 : \x1b[0m");

rl.prompt();
rl.on("line", (line) => {
    const commandArr = line.split("$");

    switch (commandArr[0]) {
        case "show":
            commandShow(commandArr);
            break;
        case "add":
            commandAdd(commandArr);
            break;
        case "delete":
            commandDelete(commandArr);
            break;
        case "update":
            commandUpdate(commandArr);
            break;
        case "exit":
            rl.close();
        default:
            displayInitialPrompt();
            console.log("입력 가능한 명령어 중 하나를 입력해주세요 !");
            break;
    }
    console.log("");
    rl.prompt();
});

rl.on("close", () => {
    process.exit();
});
