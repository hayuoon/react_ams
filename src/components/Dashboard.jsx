import React, { useState, useEffect } from 'react'

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalNews: 0,
    activeUsers: 0,
    todayViews: 0,
    pendingApprovals: 0
  })

  const [recentNews, setRecentNews] = useState([])

  useEffect(() => {
    // 실제 데이터는 API에서 가져올 수 있습니다
    setStats({
      totalNews: 1250,
      activeUsers: 89,
      todayViews: 15420,
      pendingApprovals: 5
    })

    setRecentNews([
      { id: 1, title: '최신 비즈니스 뉴스 1', date: '2024-01-15', status: 'published' },
      { id: 2, title: '최신 비즈니스 뉴스 2', date: '2024-01-14', status: 'pending' },
      { id: 3, title: '최신 비즈니스 뉴스 3', date: '2024-01-13', status: 'published' }
    ])
  }, [])

  return (
    <div className="react-dashboard" style={styles.dashboard}>
      <h2 style={styles.title}>대시보드</h2>
      
      {/* 통계 카드 */}
      <div className="stats-grid" style={styles.statsGrid}>
        <div className="stat-card" style={styles.statCard}>
          <h3>총 뉴스</h3>
          <p style={styles.statNumber}>{stats.totalNews.toLocaleString()}</p>
        </div>
        <div className="stat-card" style={styles.statCard}>
          <h3>활성 사용자</h3>
          <p style={styles.statNumber}>{stats.activeUsers}</p>
        </div>
        <div className="stat-card" style={styles.statCard}>
          <h3>오늘 조회수</h3>
          <p style={styles.statNumber}>{stats.todayViews.toLocaleString()}</p>
        </div>
        <div className="stat-card" style={styles.statCard}>
          <h3>승인 대기</h3>
          <p style={styles.statNumber}>{stats.pendingApprovals}</p>
        </div>
      </div>

      {/* 최근 뉴스 */}
      <div className="recent-news" style={styles.recentNews}>
        <h3>최근 뉴스</h3>
        <div className="news-list" style={styles.newsList}>
          {recentNews.map(news => (
            <div key={news.id} className="news-item" style={styles.newsItem}>
              <div className="news-info">
                <h4 style={styles.newsTitle}>{news.title}</h4>
                <p style={styles.newsDate}>{news.date}</p>
              </div>
              <span 
                className={`status ${news.status}`} 
                style={{
                  ...styles.status,
                  ...(news.status === 'published' ? styles.statusPublished : styles.statusPending)
                }}
              >
                {news.status === 'published' ? '발행됨' : '대기중'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const styles = {
  dashboard: {
    padding: '2rem',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    margin: '1rem 0'
  },
  title: {
    color: '#2c3e50',
    marginBottom: '2rem'
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1rem',
    marginBottom: '2rem'
  },
  statCard: {
    backgroundColor: 'white',
    padding: '1.5rem',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    textAlign: 'center'
  },
  statNumber: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#3498db',
    margin: '0.5rem 0'
  },
  recentNews: {
    backgroundColor: 'white',
    padding: '1.5rem',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  },
  newsList: {
    marginTop: '1rem'
  },
  newsItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 0',
    borderBottom: '1px solid #eee'
  },
  newsTitle: {
    margin: '0 0 0.5rem 0',
    color: '#2c3e50'
  },
  newsDate: {
    margin: 0,
    color: '#7f8c8d',
    fontSize: '0.9rem'
  },
  status: {
    padding: '0.25rem 0.75rem',
    borderRadius: '20px',
    fontSize: '0.8rem',
    fontWeight: 'bold'
  },
  statusPublished: {
    backgroundColor: '#d4edda',
    color: '#155724'
  },
  statusPending: {
    backgroundColor: '#fff3cd',
    color: '#856404'
  }
}

export default Dashboard 