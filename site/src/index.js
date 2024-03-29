import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { GlobalProvider } from './hooks/useGlobalContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


/*
  npm i @reduxjs/toolkit react-redux
  redux-saga vs redux-toolkit

  redux-saga 
  - 비동기 데이터의 호출 및 리듀서, 상태변경 관련 함수를 saga에서 generator함수를 통해 변경요청
  - 컴포넌트 외부에서 독립적으로 비동기데이터를 전역관리하기 위한 라이브러리

  redux-thunk
  - action객체 안쪽에 아예 비동기데이터 호출 함수 및 상태변화 관리 함수를 같이 등록

  redux-toolkit
  - redux-thunk기반의 통합 라이브러리
  - 기존 action객체의 생성을 slice라는 파일형태로 컴포넌트 외부에서 '아주' 간단하게 설정가능
*/