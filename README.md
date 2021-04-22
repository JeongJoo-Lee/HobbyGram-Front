# HobbyGram(미니프로젝트)

<!-- ![ezgif com-gif-maker (8)](https://user-images.githubusercontent.com/68773118/115060264-a0c68000-9f22-11eb-8c3d-c009883847c3.gif) -->

### 목차

[1. 프로젝트 설명 ](#프로젝트-설명)<br/>
[2. 사용기술 ](#tools)<br/>
[3. 기능정보 ](#-기능정보)<br/>
[4. 진행과정 ](#진행과정)<br/>
[5. 배운 점 ](#-we-learned)<br/>

## 프로젝트 설명

### 기간

2021.04.12 ~ 2021.04.22

### 팀 구성 & Tools

- Front-end
  - 이정주(React)
  - 박민경(React)
- Back-end
  - 박현준(Node.js)
  - 김연재(Node.js)

### Hobbygram이란?

#### 시현영상 [Youtube](https://www.youtube.com/watch?v=SvFizxRfeeU)

```
React와 Node.js가 서로 처음 만나 프로젝트를 만들게 되었습니다.
'CRUD의 기능을 확실하게 담으면서 완벽하게 복습하자'는 취지로 시작하였습니다.

네이버 카페 커뮤니티에서 영감을 받아 사용자가 원하는 취미를 카테고리화하여
그 속에서 공통된 취미를 가진 사람들끼리 소통할 수 있는 커뮤니티 사이트를 만들었습니다.
```

## 🕹 기능정보

### 1.로그인 / 로그아웃

```
JWT 방식을 활용하여 토큰을 쿠키에 저장하는 방향으로 로그인/회원가입 기능을 구현하였습니다.
```

![로그인](https://user-images.githubusercontent.com/61656046/115672995-16997400-a387-11eb-8912-b2e0e3deaecc.gif)

![로그아웃](https://user-images.githubusercontent.com/61656046/115673351-814aaf80-a387-11eb-92c3-e0afdb25f417.gif)

### 2. 회원가입

![회원가입](https://user-images.githubusercontent.com/61656046/115673819-fcac6100-a387-11eb-8ff1-e07317d1183a.gif)

### 3. 게시글(C.R.U.D)

#### 작성

![게시글작성](https://user-images.githubusercontent.com/61656046/115675959-12228a80-a38a-11eb-89be-c974ea379819.gif)

#### 수정

![게시글수정](https://user-images.githubusercontent.com/61656046/115676717-d3d99b00-a38a-11eb-83bc-11a27e1288b0.gif)

#### 삭제

![게시글 삭제](https://user-images.githubusercontent.com/61656046/115677565-91648e00-a38b-11eb-8243-7565a40f8192.gif)

### 4. 댓글(C.D)

#### 작성(로그인 전 / 후)

![댓글작성(로긴전)](https://user-images.githubusercontent.com/61656046/115678640-b1488180-a38c-11eb-803d-b58147ef5965.gif)
![댓글작성(로긴후)](https://user-images.githubusercontent.com/61656046/115679164-3cc21280-a38d-11eb-9358-1da5a4a01d34.gif)

#### 삭제

![댓글삭제](https://user-images.githubusercontent.com/61656046/115679572-af32f280-a38d-11eb-88a5-0976c3b67bb6.gif)

### 5. 좋아요(로그인 전 / 후)

#### 로그인 전

![좋아요(로그인전)](https://user-images.githubusercontent.com/61656046/115681077-23ba6100-a38f-11eb-80e9-7184866dbb3f.gif)

#### 로그인 후

![좋아요(로그인후)](https://user-images.githubusercontent.com/61656046/115681082-25842480-a38f-11eb-99fa-49a6c3872bf5.gif)

### 6. 페이지네이션

![페이지네이션](https://user-images.githubusercontent.com/61656046/115681088-26b55180-a38f-11eb-936e-bf577708b436.gif)

### 7. 카테고리별 게시글 호출

![카테고리별 게시글호출](https://user-images.githubusercontent.com/61656046/115681093-287f1500-a38f-11eb-91c7-f3910c372a4a.gif)

### 8. 반응형 웹

![리사이징(메인)](https://user-images.githubusercontent.com/61656046/115669268-0b444980-a383-11eb-88d5-f8a2934d8458.gif)
![리사이징(댓글,좋아요)](https://user-images.githubusercontent.com/61656046/115669278-0d0e0d00-a383-11eb-9f02-8dd27793c152.gif)

```
@media 를 활용하여 모바일 및 태블릿에서도 화면 일그러짐이 없도록 하였습니다.
```

---

## 진행과정

### 협업환경 구축

![](https://images.velog.io/images/pmk4236/post/e9f7a31d-6ab3-40ea-b128-328e3d0f5676/%E1%84%82%E1%85%A9%E1%84%89%E1%85%A7%E1%86%AB.png)

![](https://images.velog.io/images/pmk4236/post/2ea0a59f-e48b-456c-947f-7196736dce7f/%E1%84%89%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A2%E1%86%A8.png)

![](https://images.velog.io/images/pmk4236/post/7423686d-5fc6-46a5-b55c-133355ba404d/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-04-22%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%203.01.55.png)

- notion을 이용해 변동사항을 실시간으로 적용하여 팀원들의 소통을 원활하게 하였습니다.
- gather, slack을 이용해 팀원 간의 피드백, 요청사항 등 빠르게 처리할 수 있었습니다.
- Sourcetree를 이용하여 깃 merge와 충돌 해결을 원활히 하였고, 반드시 merge 전에 팀원에게 양해를 구하고 진행을 해야하는 룰을 적용하였습니다.

<br>

#### API 설계

![](https://images.velog.io/images/pmk4236/post/c8496019-eaea-49e7-ab18-632c9e4a4601/api.jpeg)

이번 프로젝트는 특히 노션을 적극 활용하여 백엔드와 API 설계를 튼튼하게 하였습니다.
덕분에 조금의 소통을 더하여 큰 무리없이 데이터 통신을 할 수 있었고, 그 덕에 프로젝트 진도율이 좋았습니다.

<!-- ![](https://images.velog.io/images/mygomi/post/ece67f36-fd84-4edd-83f6-dfa807194e08/image.png) -->

<br>

#### View 설계

<!-- View를 분석할 때는 눈에 보이는 디자인을 기준으로 <span style="color:#FF7948">컴포넌트를 어떻게 세분화 시킬 지</span> 고민하며 분석했습니다.
프로젝트를 진행하며 **데이터를 효율적으로 관리할 수 있도록 데이터의 흐름도 고려하여 컴포넌트를 설계해야 함을 깨달았습니다.** -->

## 🔎 We learned

#### 이정주

1. axios를 이용해 백엔드 측과 통신을 주고받으며 내가 보낸 요청이 서버측으로 어떤 모양새로 전송이 되는지 화면을 공유하며 insomnia를 통해 직접 눈으로 볼 수 있었고 API 설계를 더 꼼꼼히 작성하면 이후의 일이 더 수월해 질 수 있다는 것을 몸소 체감하게 되었습니다.

2. 이번 프로젝트에서 **GUI(소스트리)**를 처음 사용하였습니다. branch, merge, pull-request 등의 기능을 같은 프론트엔드 팀원과의 협업에서 모두 사용해보았고 덕분에 git을 활용한 협업에 대해 이해도가 많이 상승하게 된 기간이었습니다.

3. JWT 방식의 로그인/회원가입 기능구현을 처음 해보았습니다. 토큰을 활용한 인증 및 axios 통신에서 토큰을 헤더에 담는 방식 등에 대해 많이 알게 되었습니다. 저희는 토큰을 쿠키에 담아서 활용하였습니다.

4. 이미지가 포함된 정보를 주고받을때 formdata를 사용해야 한다는 것을 배웠고 formdata를 이용해 서버와 요청을 주고받는 방식에 대한 이해도가 향상되었습니다.

#### 박민경

2.

<!-- 1. 실제 사이트에서 어떤 식으로 뷰를 구현하는 지 (개발자 도구에서 확인가능한 html, css에 한함)
2. 간단해보이는 기능들도 얼마나 많은 경우의 수를 고려하고 고민하여 로직을 짜야하는 지
3. 프론트와 백이 각각 어떤 역할을 수행해야 하는 지
4. 다른 팀원이 각자 역할에 집중할 수 있는 환경을 조성하기 위해 내가 할 수 있는 것들, 해야 하는 것들 -->
