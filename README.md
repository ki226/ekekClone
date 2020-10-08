## 스칸디나비아 특유의 디자인과 저렴한 가격, DIY 제품 판매로 발전한 스웨덴의 가구 제조 기업 이케아 웹사이트 클론 프로젝트

### 프로젝트 기간

2020년 7월 6일 ~ 7월 17일(2주) 프론트앤드 3명, 백앤드 3명

### Github 주소

프론트앤드 : https://github.com/wecode-bootcamp-korea/9-ekek-frontend  
백앤드 : https://github.com/wecode-bootcamp-korea/9-ekek-backend

### 사용된 기술 스택 (프론트)

- HTML
- SCSS / styled-components
- React(Class component, Hooks)
- 사용한 React library
  (React icon)

### 구현페이지

- **로그인, 회원가입 페이지**  
  -유효성 검사를 통해 input스타일 변화 적용(blue, red, gray)  
  -휴대폰 문자 인증 기능 구현(45초 타이머 설정)  
  -카카오 로그인 구현

- **메인페이지**  
  -Nav바, 사이드바, Footer(api 호출해 이달의 제품, 이달의 주요정보 render)  
  -홈퍼니싱 아이디어(인테리어 사진, 사진내의 상품 정보, 상품의 위치 정보 받아 그 위치에 버튼 생성, 버튼 mouseover 이벤트 적용해 제품 정보 표시)

- **상품리스트 페이지**  
  -상품 사진 mouseover 이벤트 적용, 가격별, 사이즈별 필터 적용(componentDidUpdate사용, switch문 사용)

- **상품 상세 페이지**  
  -url parameter를 사용해 리스트페이지의 사진, 홈퍼니싱 아이디어 버튼 클릭시 상세페이지로 이동  
  -구매하기 버튼 클릭 후 나타나는 로딩버튼 구현 -제품 설명, 사이즈 모달창 구현  
  -api호출해 재고있는 매장 정보 받아 화면에 표시

- **검색기능**  
  -검색 input창 클릭시 나타나는 검색모달창 구현  
  -api호출해 검색한 리스트 받아 render

- **장바구니 페이지**  
  -api호출해 유저의 장바구니 정보 받아와 render  
  -GET, POST, DELETE 이용해 추가, 수량 변경, 삭제기능 구현 -로딩 페이지 구현
