# IntroduceYunsik

## 🔴프로젝트 설명
**나를 소개하기 위한 소개 페이지.**

- 개인 소개 : SNS형태의 포스팅 컨셉, 인생관, 강점, 취미
- 블로그 페이지 안내
- 사용할 수 있는 기술 소개 : HTML, CSS, SCSS, JavaScript, Git/Github
- 개인 제작한 페이지 보기

## 🔴빌드 및 실행방법
작동 페이지: https://postop09.github.io/IntroduceYunsik/index.html

## 🔴개발 환경
- 개인 제작
- HTML
- CSS/SCSS
- JavaScript
- Git
- 로고 제작: 김대원
- [기획: MindMap](https://www.mindmeister.com/folders)
- [이미지 압축: Optimizilla](https://imagecompressor.com/ko/)

## 🔴제작 과정
- [Mindmap](https://www.mindmeister.com/)을 이용해서 기획

![image](https://user-images.githubusercontent.com/93017923/147997813-84760456-ca79-447d-9f7b-6eac85922a35.png)

- 아이디어 탐색 및 구상
- 박스 레이아웃 제작
- class name 설정
- HTML/CSS 작성
- 기능 Mindmap 작성
- JavaScript 작성
- 반응형 제작

## 🔴문제점 및 궁금했던 점/개선방안 및 배운점

### 😈문제점
- 최초 `<article>`로 카드 형태를 만들어서 카드를 클릭하면 이벤트가 발생해야 하는데, tab키로 각 카드에 접근할 수 없는 문제가 발생함. 구획 내부에 버튼을 추가 했으나, 카드 전체에 적용된 애니메이션으로 클릭이 힘든 문제가 발생함.
- JS querySelector는 일치하는 '최상위 요소/클래스'만 가져오기 때문에, 여러개의 같은 콘텐츠에서 적용이 되지 않는 문제가 발생함.
- 소개 페이지(SNS)에서 새로운 댓글이 추가되지 않고 기존 댓글의 내용을 수정시키는 문제가 발생함.

### 😈궁금했던 점
- JS 작성에 있어서 변수를 많이 사용하게되는 것이 괜찮은 방법일까.

### 😈개선방안 및 배운점
- `<article>`을 `<button>`으로 변경하여, 하나의 카드가 버튼으로 이루어 지게끔 수정함. 포커스 이동 및 클릭이 잘 이루어짐.
- 첫 번째, `querySelector`에서 `querySelectorAll`을 이용, 일치하는 모든 값을 배열의 형태로 가져오게 되고 `forEach`를 활용하여 배열을 순회하며 적용시키도록 수정함.
- `createElement`와 `setAttribute`를 이용해 요소를 생성해내고, `appendChild`로 새로운 요소가 추가될 수 있도록 수정함.
- `user-select: none;`속성은 콘텐츠가 선택되지 않도록 설정한다.

## 🔴느낀점
- 반응형 작성 및 더 효과적인 마크업을 위해서는 폰트사이즈 및 클래스를 통합시키는 좋은 방법을 생각해야 겠다.
- querySelector로 불러오는 횟수를 줄이는 것에 주의하자.(최적화 및 랜더 속도)

## 🔴추가 목표
- 반응형 구현 후 '스킬셋 드래그'가 작동지 않는 부분 수정 필요
- 반응형을 고려한 '이미지 슬라이드'의 JS 코드 수정 필요
- 글작성 기능을 고려한 마크업/JS 작성(데이터의 주고 받음)
