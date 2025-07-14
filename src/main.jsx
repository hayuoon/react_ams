import React from 'react'
import { createRoot } from 'react-dom/client'
import NavigationBar from './components/NavigationBar.jsx'
import Dashboard from './components/Dashboard.jsx'
import GradedArticleList from './components/GradedArticleList.jsx'

// Vite 개발 서버용: root에 기본 화면 렌더링
const rootNode = document.getElementById('root')
if (rootNode) {
  const root = createRoot(rootNode)
  root.render(
    <div>
      <NavigationBar />
      <Dashboard />
      <GradedArticleList />
      <div style={{marginTop: 40, textAlign: 'center'}}>
        <h2>React AMS Vite 개발 서버 화면</h2>
        <p>이 화면은 Vite 개발 서버에서만 보입니다.</p>
      </div>
    </div>
  )
}

// 네비게이션 바 렌더링
const navNode = document.getElementById('react-navigation')
if (navNode) {
  const navRoot = createRoot(navNode)
  navRoot.render(<NavigationBar />)
}

// 대시보드 렌더링
const dashboardNode = document.getElementById('react-dashboard')
if (dashboardNode) {
  const dashboardRoot = createRoot(dashboardNode)
  dashboardRoot.render(<Dashboard />)
}

// 메인 앱 렌더링 (기본)
const appNode = document.getElementById('react-app')
if (appNode) {
  const appRoot = createRoot(appNode)
  appRoot.render(
    <div className="react-app">
      <h1>React AMS 통합 성공!</h1>
      <p>기존 CodeIgniter 페이지에 React가 성공적으로 통합되었습니다.</p>
    </div>
  )
} 