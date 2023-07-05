const todos = require("./todos.js");
const { printStatusList, getId, printNowStatus } = require("./utils.js");

const errorText = "\x1b[31m오류 :\x1b[0m ";

const commandShow = (commandArr) => {
    if (commandArr.length === 1)
        console.log(
            errorText +
                "[ all, todo, doing, done ] 중 하나의 옵션을 입력하세요 !"
        );
    else if (commandArr.length > 2)
        console.log(errorText + "하나의 옵션을 입력하세요 !");
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
                console.log(
                    errorText +
                        "[ all, todo, doing, done ] 중 하나의 옵션을 입력하세요 !"
                );
                break;
        }
    }
};

const commandAdd = (commandArr) => {
    if (commandArr.length === 1)
        console.log(errorText + "추가할 todo의 이름과 태그를 입력하세요 !");
    else if (commandArr.length === 2)
        console.log(errorText + "추가할 todo의 태그를 입력하세요 !");
    else {
        try {
            const newId = getId();
            const tagsArr = JSON.parse(commandArr[2].replaceAll("'", '"'));
            todos.push({
                name: commandArr[1],
                tags: Array.isArray(tagsArr) ? tagsArr : [],
                status: "todo",
                id: newId,
            });
            console.log(
                commandArr[1] + " 1개가 추가됐습니다.(id : " + newId + ")"
            );
            printNowStatus();
        } catch (error) {
            console.log(
                errorText +
                    `["태그1", "태그2"]와 같은 형태로 태그를 입력해주세요 !`
            );
        }
    }
};

const commandDelete = (commandArr) => {
    if (commandArr.length === 1)
        console.log(errorText + "삭제할 id 번호를 입력해주세요 !");
    else if (commandArr.length > 2)
        console.log(errorText + "하나의 id 번호를 입력하세요 !");
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
            console.log(
                errorText + `id ${commandArr[1]}는 존재하지 않는 id 입니다`
            );
        }
    }
};

const commandUpdate = (commandArr) => {
    if (commandArr.length === 1)
        console.log(errorText + "변경할 todo의 id와 상태를 입력하세요 !");
    else if (commandArr.length === 2)
        console.log(errorText + "변경할 todo의 상태를 입력하세요 !");
    else {
        const todoObj = todos.find((data) => data.id === Number(commandArr[1]));
        if (todoObj) {
            todoObj.status = commandArr[2];
            console.log(
                `${todoObj.name} ${commandArr[2]}으로 상태가 변경됐습니다`
            );
            printNowStatus();
        } else {
            console.log(
                errorText + `id ${commandArr[1]}는 존재하지 않는 id 입니다`
            );
        }
    }
};

module.exports = {
    commandShow,
    commandAdd,
    commandDelete,
    commandUpdate,
};
