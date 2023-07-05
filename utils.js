const todos = require("./todos.js");

let gId = 1;
const errorText = "\x1b[31m오류 :\x1b[0m ";

const countStatus = (statusOption) => {
    return todos.filter((data) => data.status === statusOption).length;
};

const printNowStatus = () => {
    const statusList = ["todo", "doing", "done"];
    const statusCounts = statusList.map(
        (status) => `${status} : ${countStatus(status)}개`
    );
    console.log(`현재상태 : ${statusCounts.join(", ")}`);
};

const printStatusList = (status) => {
    const filteredTodos = todos.filter((data) => data.status === status);
    const todoStringList = filteredTodos.map(
        (data) => `'${data.name}, ${data.id}번'`
    );
    console.log(
        `${status}리스트 : 총${filteredTodos.length}건 : ${todoStringList.join(
            ", "
        )}`
    );
};

const getId = () => {
    let newId = gId;
    while (todos.some((data) => data.id === newId)) {
        newId++;
    }
    gId = newId + 1;
    return newId;
};

const checkSameStatus = (prevStatus, changeStatus) => {
    if (prevStatus === changeStatus) {
        console.log(`${errorText} 변경할 상태가 이전 상태와 동일합니다 !`);
        return true;
    } else return false;
};

module.exports = {
    countStatus,
    printNowStatus,
    printStatusList,
    getId,
    checkSameStatus,
};
