## 자바스크립트 첫번째 과제 (2024/06/08)

### 문제
---
#### 1. 문제 설명
**문제:** 객체에서 특정 키의 값을 안전하게 가져오는 함수를 작성하세요.

#### 2. 문제 설명
**문제:** 배열에서 특정 인덱스의 값을 안전하게 가져오는 함수를 작성하세요.
---
### 해결방법
처음에 삼항연산자를 사용해서 throw new Error("...") 대신 new Error("...")로 에러 객체를 생성했는데, 그러면 에러처리를 하기 어렵다는 걸 알았다...
전반적인 코드를 if문으로 바꿔서 적절한 조건문을 작성했다.

첫번째 문제에서 사용한 메서드는 hasOwnProperty로 객체에 고유한 키가 있는지 체크한다.
처음엔 그냥 대괄호 접근법을 사용해서 obj[key] ? ... : ... 이런식으로 코드를 작성했는데, 이렇게 하면 프로토타입 체인까지 확인해서 hasOwnProperty를 사용하는 것이 조금 더 빠르다고 한다. 그래서 hasOwnProperty 메서드로 변경했다. 그리고 키가 존재하면 obj[key]를 리턴해서 해당 키의 값을 리턴했고, 아니면 throw new Error("Error!")로 에러를 던지게 했다.

두번째 문제는 전달받은 arr이 배열인지 확인하기 위해 isArray 메서드를 사용하였다.
그리고 전달받은 index 또한 유효한 범위여야 하기 때문에 index값은 0보다 작으면 안되고, arr의 길이를 넘지 않아야 한다.
그래서 해당 조건으로 경계조건을 작성한 후, arr가 배열이면서 index 값이 음수를 갖지 않고 arr.length보다 작으면 arr[index]를 반환해서 입력받은 인덱스에 해당하는 요소를 반환하게 했다. 해당 조건을 만족하지 않으면 마찬가지로 throw new Error()로 에러를 던졌다.
