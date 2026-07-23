# Vue-Prac

Vue 3와 TypeScript 기반의 프론트엔드 SPA 학습 프로젝트  
팜맵 드론 데이터 서비스 화면설계서를 참고한 관리자 화면 구조 연습  
백엔드와 실제 인증 없이 화면 구성, 라우팅, 반응형 UI에 집중한 환경

## 현재 구현 범위

- ID와 비밀번호를 입력하는 모의 로그인 화면
- 로그인 후 대시보드 이동
- 헤더, 레프트 메뉴, 콘텐츠로 구성된 공통 레이아웃
- Vue Router 중첩 라우트를 이용한 콘텐츠 교체
- 1024px 미만의 햄버거 메뉴와 모바일 사이드바
- CSS 변수 기반 디자인 토큰
- SCSS 기반 `toClamp()` 반응형 크기 계산 함수

## 기술 구성

| 구분       | 기술                      |
| ---------- | ------------------------- |
| 프레임워크 | Vue 3                     |
| 언어       | TypeScript                |
| 빌드 도구  | Vite                      |
| 라우팅     | Vue Router                |
| 상태 관리  | Pinia                     |
| 스타일     | CSS, Scoped CSS, SCSS     |
| 폰트       | Pretendard Variable       |
| 코드 품질  | ESLint, Prettier, vue-tsc |

Pinia는 애플리케이션에 등록된 상태이며 실제 Store는 아직 미구현 상태

## 실행 환경

- Node.js 24.16.0
- npm 10 이상
- `.nvmrc`를 이용한 Node.js 버전 고정

## 설치 및 로컬 실행

```sh
nvm use
npm install
npm run dev
```

기본 접속 주소

```text
http://localhost:5173
```

## 주요 명령어

| 명령어               | 용도                       |
| -------------------- | -------------------------- |
| `npm run dev`        | 개발 서버 실행             |
| `npm run build`      | 타입 검사 및 프로덕션 빌드 |
| `npm run preview`    | 프로덕션 빌드 결과 확인    |
| `npm run type-check` | Vue와 TypeScript 타입 검사 |
| `npm run lint`       | ESLint 검사 및 자동 수정   |
| `npm run format`     | Prettier 코드 정리         |

## 라우트

| 경로             | 화면                |
| ---------------- | ------------------- |
| `/`              | `/login` 리다이렉트 |
| `/login`         | 모의 로그인         |
| `/dashboard`     | 대시보드            |
| `/dashboard/map` | 지도 테스트         |

로그인 버튼 선택 시 별도 인증 없이 `/dashboard`로 이동하는 구조

## 폴더 구조

```text
src/
├── components/
│   └── layout/
│       ├── AppHeader.vue
│       └── AppSidebar.vue
├── layouts/
│   └── AppLayout.vue
├── pages/
│   ├── LoginPage.vue
│   ├── DashboardPage.vue
│   └── MapPage.vue
├── router/
│   └── index.ts
├── styles/
│   ├── tools/
│   │   └── _fluid.scss
│   ├── index.scss
│   ├── tokens.css
│   ├── reset.css
│   └── base.css
├── App.vue
└── main.ts
```

| 경로                       | 역할                                            |
| -------------------------- | ----------------------------------------------- |
| `components/`              | 여러 화면에서 재사용하는 UI 컴포넌트            |
| `layouts/`                 | 헤더와 사이드바를 포함한 공통 화면 틀           |
| `pages/`                   | 라우트 단위 화면 컴포넌트                       |
| `router/`                  | URL과 화면 연결 설정                            |
| `styles/tokens.css`        | 색상, 글자 크기, 간격, 반경 디자인 토큰         |
| `styles/tools/_fluid.scss` | 최소·최대 크기를 `clamp()`로 변환하는 SCSS 함수 |

## 화면 구조

```text
App.vue
└── RouterView
    ├── LoginPage
    └── AppLayout
        ├── AppHeader
        ├── AppSidebar
        └── RouterView
            ├── DashboardPage
            └── MapPage
```

로그인 화면과 관리자 공통 레이아웃을 서로 분리한 구성  
관리자 화면 내부의 `RouterView`만 라우팅에 따라 변경되는 구조

## Vue 적용 방식

- `.vue` 파일 하나에서 `<script>`, `<template>`, `<style>` 관리
- `<script setup lang="ts">` 기반 Composition API
- `ref()`를 이용한 반응형 상태 관리
- Props와 Emits를 이용한 부모·자식 컴포넌트 통신
- `<style scoped>`를 이용한 컴포넌트별 스타일 범위 제한
- Vue Router 중첩 라우트 기반 레이아웃 유지
- 동적 import 기반 페이지 단위 지연 로딩

## 스타일 관리

전역 스타일 진입점인 `src/styles/index.scss`에서 토큰, Reset, 기본 스타일 로드  
공통 색상과 간격은 `tokens.css`의 CSS 변수로 관리  
화면 전용 스타일은 각 Vue 파일의 `<style scoped>`에서 관리

SCSS 반응형 계산 함수 사용 예시

```scss
@use '@/styles/tools/fluid' as fluid;

.page-title {
  font-size: fluid.toClamp(20px, 32px);
}
```

기본 계산 범위는 360px부터 1440px까지의 viewport  
현재 화면 코드에는 아직 미적용 상태

## VS Code 권장 환경

- Vue - Official
- ESLint
- Prettier
- EditorConfig

프로젝트의 `.vscode/settings.json`을 이용한 저장 시 Prettier 포맷 적용  
ESLint 자동 수정은 VS Code의 명시적 저장 액션 기준
