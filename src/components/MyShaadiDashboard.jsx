import React from 'react'
import styles from './MyShaadiDashboard.module.css'

export default function MyShaadiDashboard({ myProfile, profiles, exploreShortlisted }) {
  return (
    <div className={styles.main}>
      <div className={styles.msWelcomeBanner}>
        <div className={styles.msWelcomeText}>
          <h1>Welcome, {myProfile.name.split(' ')[0]}!</h1>
          <p>Your profile is looking great today. See what's happening.</p>
        </div>
      </div>

      <div className={styles.msDashboardGrid}>
        <div className={styles.msStatCard}>
          <div className={styles.msStatIcon}>⭐</div>
          <div className={styles.msStatInfo}>
            <h3>Premium Matches</h3>
            <span>{profiles.filter(p => p.premium).length} New</span>
          </div>
        </div>
        <div className={styles.msStatCard}>
          <div className={styles.msStatIcon}>👀</div>
          <div className={styles.msStatInfo}>
            <h3>Recent Visitors</h3>
            <span>12 This Week</span>
          </div>
        </div>
        <div className={styles.msStatCard}>
          <div className={styles.msStatIcon}>💌</div>
          <div className={styles.msStatInfo}>
            <h3>New Interests</h3>
            <span>{profiles.filter(p => p.type.includes('Interest')).length} Pending</span>
          </div>
        </div>
        <div className={styles.msStatCard}>
          <div className={styles.msStatIcon}>❤️</div>
          <div className={styles.msStatInfo}>
            <h3>Shortlists</h3>
            <span>{Object.values(exploreShortlisted).filter(Boolean).length} Profiles</span>
          </div>
        </div>
      </div>

      <div className={styles.msProfileProgressCard}>
        <div className={styles.msProgressHeader}>
          <h3>Profile Completeness</h3>
          <span>80%</span>
        </div>
        <div className={styles.msProgressBarBg}>
          <div className={styles.msProgressBarFill} style={{ width: '80%' }}></div>
        </div>
        <p>Complete your profile to get up to 3x more matches!</p>
        <button className={styles.msCompleteBtn}>Complete Profile</button>
      </div>

      <div className={styles.msRecentActivity}>
        <h3>Recent Activity</h3>
        <ul className={styles.msActivityList}>
          <li>
            <div className={styles.msActivityAvatar}>👩</div>
            <div className={styles.msActivityDetails}>
              <p><strong>Priya S</strong> accepted your interest.</p>
              <span>2 hours ago</span>
            </div>
            <button className={styles.msViewBtn}>View</button>
          </li>
          <li>
            <div className={styles.msActivityAvatar}>👀</div>
            <div className={styles.msActivityDetails}>
              <p><strong>Anjali M</strong> visited your profile.</p>
              <span>5 hours ago</span>
            </div>
            <button className={styles.msViewBtn}>View</button>
          </li>
          <li>
            <div className={styles.msActivityAvatar}>🎁</div>
            <div className={styles.msActivityDetails}>
              <p><strong>5 New Matches</strong> added to your Daily Recommendations.</p>
              <span>Today</span>
            </div>
            <button className={styles.msViewBtn}>Explore</button>
          </li>
        </ul>
      </div>

      <div className={styles.msUpgradeBanner}>
        <div className={styles.msUpgradeContent}>
          <h3>Upgrade to Premium</h3>
          <p>Connect directly, view hidden photos, and get 5x more responses.</p>
        </div>
        <button className={styles.msUpgradeBtn}>View Plans</button>
      </div>
    </div>
  )
}
