
# 🎉 Gulp + Handlebars + Sass + jQuery Project

웹페이지를 Gulp로 자동 빌드하고, Handlebars 템플릿과 Sass로 스타일을 관리하는 프로젝트입니다.  
`BrowserSync`를 통해 라이브리로드를 지원하며, jQuery도 함께 사용됩니다.

---

## 🛠️ 주요 기술 스택

- **Gulp**: 작업 자동화 및 빌드
- **Handlebars**: 템플릿 시스템 (partials: header, footer 등)
- **Sass (SCSS)**: 스타일링
- **BrowserSync**: 로컬 서버 및 라이브리로드
- **jQuery**: DOM 조작 및 인터랙션

---

## 📁 프로젝트 구조

```
project/
├── src/
│   ├── partials/        # Handlebars partials (header.hbs, footer.hbs)
│   ├── pages/           # 메인 페이지 (index.hbs)
│   └── styles/
│       ├── scss/        # Sass (SCSS) 파일
│       │   ├── _mixins.scss
│       │   └── main.scss
│       └── ...          # (기타 스타일 파일)
├── dist/                # 빌드 결과물 (index.html, main.css, jquery.min.js)
├── gulpfile.js          # Gulp 빌드 스크립트
├── package.json
└── README.md
```

---

## 🚀 사용 방법

### 1️⃣ 패키지 설치
```bash
npm install
```

### 2️⃣ 개발 서버 실행
```bash
gulp
```
- 서버: [http://localhost:3000](http://localhost:3000)  
- 파일 수정 시 자동으로 빌드 및 브라우저 새로고침

---

## 📝 주요 빌드 과정

✅ **Handlebars**:  
- `partials/header.hbs` 및 `partials/footer.hbs`를 `pages/index.hbs`에 포함시켜 최종 HTML 생성

✅ **Sass**:  
- `src/styles/scss/main.scss`를 `dist/main.css`로 빌드  
- `_mixins.scss`에 `flex-center` Mixin을 정의해 반복적인 `display: flex` 스타일 재사용

✅ **jQuery**:  
- `node_modules/jquery/dist/jquery.min.js`를 `dist/`로 복사  
- 최종 HTML에 포함되어 버튼 클릭 등 이벤트 처리

✅ **BrowserSync**:  
- 포트 `3000`으로 로컬 서버 실행  
- 파일 변경 시 자동 새로고침

---

## 💡 기타 정보

- **partials의 버튼 요소** 등은 최종 HTML로 병합되어, jQuery 이벤트 핸들러는 `index.hbs`에 작성하면 됩니다.
- Sass에서 `@import` 대신 `@use`를 사용해, 최신 방식으로 Mixin을 불러옵니다.

---

## ✏️ 작성자

**Mario**

---

## 📌 참고

- [Sass 공식 문서](https://sass-lang.com/documentation/at-rules/use)
- [Handlebars 공식 문서](https://handlebarsjs.com/)
- [Gulp 공식 문서](https://gulpjs.com/)
- [BrowserSync 공식 문서](https://browsersync.io/)

---

즐거운 개발 되세요! 🚀✨
