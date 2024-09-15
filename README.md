# Learning Test-Driven Development

## The Money Problem
- ~~**5 USD x 2 = 10 USD**~~
- ~~**10 EUR x 2 = 20 EUR**~~
- ~~**4002 KRW / 4 = 1000.5 KRW**~~
- ~~**5 USD + 10 USD = 15 USD**~~
- ~~**프로덕션 코드에서 테스트 코드 분리 (관심사 분리)**~~
- **테스트 개선하기**
  - ~~**두 개의 곱셈 테스트 중 하나를 삭제**~~
  - 각 데스트의 의도를 반영하는 이름의 테스트 메소드로 구성되는 클래스로 테스트를 조직화
  - 앞으로 작성할 테스트를 포함해 모든 테스트 메소드가 자동으로 실행
  - 테스트가 성공적으로 실행되면 간결한 출력을 생성(테스트가 실패했을 때 얻는 장황한 메시지는 유지한 채)
  - 먼저 실행되는 테스트가 AssertionError으로 실패하더라도 뒤따른 모든 테스트를 실행
- 1 EUR = 1.2 USD
- 1 USD = 1100 KRW
- 5 USD + 10 EUR = 17 USD
- 1 USD + 1100 KRW = 2200 KRW