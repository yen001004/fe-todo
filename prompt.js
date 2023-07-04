const displayInitialPrompt = () => {
    console.log("================================================");
    console.log("");
    console.log("                    [ \x1b[35mTO DO \x1b[0m]");
    console.log("");
    console.log(" 입력 가능한 명령어");
    console.log("");
    console.log(
        "  1. \x1b[33mshow\x1b[0m" +
            "$[\x1b[36mall, todo, doing, done 중 택1\x1b[0m]"
    );
    console.log("");
    console.log(
        "  2. \x1b[33madd\x1b[0m" +
            "$[\x1b[36m이름\x1b[0m]$[\x1b[36m'태그1', '태그2', ...\x1b[0m]"
    );
    console.log("");
    console.log("  3. \x1b[33mdelete\x1b[0m" + "$[\x1b[36m삭제할 id\x1b[0m]");
    console.log("");
    console.log(
        "  4. \x1b[33mupdate\x1b[0m" +
            "$[\x1b[36m변경할 id\x1b[0m]$[\x1b[36m변경할 상태\x1b[0m]"
    );
    console.log("");
    console.log("  5. \x1b[33mexit\x1b[0m");
    console.log("");
    console.log("================================================");
    console.log("");
};

module.exports = { displayInitialPrompt };
