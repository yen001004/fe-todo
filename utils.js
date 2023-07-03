const todos = require('./todos.js');

const countStatus = (statusOption) => {
    return todos.filter((data) => data.status === statusOption).length
}

const show = (commandArr) => {
    if (commandArr.length === 1)
        console.log("[ all, todo, doing, done ] 중 하나의 옵션을 입력하세요 !");
    else if (commandArr.length > 2)
        console.log("하나의 옵션을 입력하세요 !");
    else {
        if (commandArr[1] === "all")
        {
            console.log("현재상태 : todo : " + countStatus("todo") + "개, " + "doing : " + countStatus("doing") + "개, " + "done : " + countStatus("done") + "개")
        }
    }
}

module.exports = {
    show
};