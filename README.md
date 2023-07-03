# fe-todo

### 입력

$로 split  

### 명령어

show `[옵션]`

옵션 : all, todo, doing, done

all은 현재상태 출력

나머지 상태 옵션은 `[status]`리스트 출력

add `[name]` `[tags]`

태그는 배열 파싱

id는 임의로 지정

`[name]` 1개가 추가되었습니다. (id : `[id]`) 출력

현재상태 출력

delete `[id]`

`[name]` `[status]`가 목록에서 삭제됐습니다 출력

현재상태 출력

update `[name]` `[변경할 status]`

`[name]` `[변경할 status]`으로 변경됐습니다 출력

현재상태 출력

끝내기 `exit`

### 예외처리

add

이름이 없거나 태그가 없을 때

delete

없는 id를 삭제했을 때

id를 입력안했을 때

update

없는 id를 변경했을 때

id, 상태를 입력안했을 때