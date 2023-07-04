const todos = require("./todos.js");

let gId = 1;

const countStatus = (statusOption) => {
    return todos.filter((data) => data.status === statusOption).length;
};

const printNowStatus = () => {
    console.log(
        "현재상태 : " +
            "todo : " +
            countStatus("todo") +
            "개, " +
            "doing : " +
            countStatus("doing") +
            "개, " +
            "done : " +
            countStatus("done") +
            "개"
    ); // reduce로 수정
};

const printStatusList = (status) => {
    const filteredTodos = todos.filter((data) => data.status === status);
    const todoStringList = filteredTodos.map(
        (data) => `'${data.name}, ${data.id}번'`
    );
    console.log(
        status +
            "리스트 : 총" +
            filteredTodos.length +
            "건 : " +
            todoStringList.join(", ")
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

module.exports = {
    countStatus,
    printNowStatus,
    printStatusList,
    getId,
};
