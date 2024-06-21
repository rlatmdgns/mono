# Stead

## 😄 파일 구조

```
stead-app
├─ .env.development
├─ .prettierrc
├─ .storybook
├─ .yarnrc.yml
├─ README.md
├─ next.config.js
├─ node_modules
├─ package.json
├─ public
│  ├─ assets
│  │  ├─ fonts
│  │  ├─ icons
│  │  └─ images
│  │
├─ src
│  ├─ app
│  │
│  ├─ components
│  │  └─ Badge
│  │     ├─ Badge.stories.tsx
│  │     ├─ Badge.tsx
│  │     ├─ index.tsx
│  │     └─ styles.css.ts
│  │
│  ├─ constants // 상수 관련
│  ├─ core // 로직에 특화된 모듈
│  ├─ interface // 공통 인터페이스
│  ├─ lib // 공통으로 사용하는 함수
│  │
│  ├─ middleware.ts
│  ├─ modules
│  │  └─ Sidebar
│  │
│  │
│  ├─ services // API 모듈
│  ├─ styles
│  └─ utils // 도메인에 관련되지 않은 유틸 모듈
├─ tsconfig.json
└─ yarn.lock
```
