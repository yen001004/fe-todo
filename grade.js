const readline = require("readline");
const {
    commandShow,
    commandAdd,
    commandDelete,
    commandUpdate,
} = require("./commands");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

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
            break;
    }
    rl.prompt();
});

rl.on("close", () => {
    process.exit();
});
