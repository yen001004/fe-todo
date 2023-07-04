const todos = require("./todos.js");
const {
    countStatus,
    printStatusList,
    getId,
    printNowStatus,
} = require("./utils.js");

const commandShow = (commandArr) => {
    if (commandArr.length === 1)
        console.log("[ all, todo, doing, done ] 중 하나의 옵션을 입력하세요 !");
    else if (commandArr.length > 2) console.log("하나의 옵션을 입력하세요 !");
    else {
        switch (commandArr[1]) {
            case "all":
                printNowStatus();
                break;
            case "todo":
            case "doing":
            case "done":
                printStatusList(commandArr[1]);
            default:
                break;
        }
    }
};

const commandAdd = (commandArr) => {
    if (commandArr.length === 1)
        console.log("추가할 todo의 이름과 태그를 입력하세요 !");
    else if (commandArr.length === 2)
        console.log("추가할 todo의 태그를 입력하세요 !");
    else {
        const newId = getId();
        todos.push({
            name: commandArr[1],
            tags: JSON.parse(commandArr[2]), // 예외처리
            status: "todo",
            id: newId,
        });
        console.log(commandArr[1] + " 1개가 추가됐습니다.(id : " + newId + ")");
        printNowStatus();
    }
};

const commandDelete = (commandArr) => {
    if (commandArr.length === 1) console.log("삭제할 id 번호를 입력해주세요 !");
    else if (commandArr.length > 2)
        console.log("하나의 id 번호를 입력하세요 !");
    else {
        const index = todos.findIndex(
            (data) => data.id === Number(commandArr[1])
        );
        if (index !== -1) {
            const deleteObj = todos[index];
            todos.splice(index, 1);
            console.log(`${deleteObj.name} todo가 목록에서 삭제됐습니다`);
            printNowStatus();
        } else {
            console.log(`id ${commandArr[1]}는 존재하지 않는 id 입니다`);
        }
    }
};

const commandUpdate = (commandArr) => {
    if (commandArr.length === 1)
        console.log("변경할 todo의 id와 상태를 입력하세요 !");
    else if (commandArr.length === 2)
        console.log("변경할 todo의 상태를 입력하세요 !");
    else {
        const todoObj = todos.find((data) => data.id === Number(commandArr[1]));
        if (todoObj) {
            todoObj.status = commandArr[2];
            console.log(
                `${todoObj.name} ${commandArr[2]}으로 상태가 변경됐습니다`
            );
            printNowStatus();
        } else {
            console.log(`id ${commandArr[1]}는 존재하지 않는 id 입니다`);
        }
    }
};

module.exports = {
    commandShow,
    commandAdd,
    commandDelete,
    commandUpdate,
};
