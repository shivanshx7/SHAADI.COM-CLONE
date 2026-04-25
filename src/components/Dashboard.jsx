import { useState, useMemo } from 'react'
import styles from './Dashboard.module.css'
import MyShaadiDashboard from './MyShaadiDashboard'

// ─── Mock Data ────────────────────────────────────────────────────────────────
const femaleProfiles = [
  {
    id: 1, name: 'Priya S', username: 'priya_sharma_1990',
    type: 'Interest Reminder', premium: true,
    age: 28, height: "5' 4\"", religion: 'Hindu', caste: 'Sharma',
    profession: 'Software Engineer', location: 'Mumbai, India', time: '2 hrs ago',
    message: 'Hi, I wish to remind you that I had expressed interest in your profile last week. I hope we can connect soon.',
    color: '#e8a87c',
  },
  {
    id: 2, name: 'Anjali M', username: 'anjali_mehta_1992',
    type: 'Interest', premium: false,
    age: 26, height: "5' 3\"", religion: 'Hindu', caste: 'Mehta',
    profession: 'Doctor', location: 'Delhi, India', time: '4 hrs ago',
    message: null, color: '#c2a4d4',
  },
  {
    id: 3, name: 'Deepika R', username: 'deepika_rao_88',
    type: 'Interest with Email', premium: true,
    age: 30, height: "5' 5\"", religion: 'Hindu', caste: 'Rao',
    profession: 'Architect', location: 'Bangalore, India', time: '9 hrs ago',
    message: 'Hi, I have liked your profile and believe it to be a good match. If you like my profile too, kindly accept.',
    color: '#7ec8e3',
  },
  {
    id: 4, name: 'Kavita P', username: 'kavita_patel_93',
    type: 'Interest Reminder', premium: false,
    age: 25, height: "5' 2\"", religion: 'Hindu', caste: 'Patel',
    profession: 'Teacher', location: 'Ahmedabad, India', time: '19 hrs ago',
    message: null, color: '#b5d8a8',
  },
  {
    id: 5, name: 'Shreya K', username: 'shreya_kulkarni_91',
    type: 'Interest', premium: true,
    age: 27, height: "5' 4\"", religion: 'Hindu', caste: 'Kulkarni',
    profession: 'CA', location: 'Pune, India', time: '1 day ago',
    message: null, color: '#f4a7b9',
  },
  {
    id: 6, name: 'Nisha G', username: 'nisha_gupta_95',
    type: 'Interest with Email', premium: true,
    age: 24, height: "5' 3\"", religion: 'Hindu', caste: 'Gupta',
    profession: 'Fashion Designer', location: 'Jaipur, India', time: '2 days ago',
    message: 'I came across your profile and felt it could be a wonderful match. Would love to connect!',
    color: '#ffd6a5',
  },
  {
    id: 7, name: 'Ritu S', username: 'ritu_singh_89',
    type: 'Interest', premium: false,
    age: 29, height: "5' 5\"", religion: 'Hindu', caste: 'Singh',
    profession: 'Banker', location: 'Chandigarh, India', time: '3 days ago',
    message: null, color: '#caffbf',
  },
  {
    id: 8, name: 'Pooja V', username: 'pooja_verma_94',
    type: 'Interest Reminder', premium: true,
    age: 25, height: "5' 2\"", religion: 'Hindu', caste: 'Verma',
    profession: 'Lawyer', location: 'Lucknow, India', time: '4 days ago',
    message: 'Kindly review my profile and let me know if you are interested.',
    color: '#a0c4ff',
  },
]

const maleProfiles = [
  {
    id: 101, name: 'Rahul S', username: 'rahul_sharma_91',
    type: 'Interest Reminder', premium: true,
    age: 30, height: "5' 10\"", religion: 'Hindu', caste: 'Sharma',
    profession: 'IIT Engineer', location: 'Mumbai, India', time: '1 hr ago',
    message: 'Hi, I expressed interest in your profile last week. Would love to connect soon.',
    color: '#7ec8e3',
  },
  {
    id: 102, name: 'Arjun M', username: 'arjun_mehta_93',
    type: 'Interest', premium: false,
    age: 28, height: "5' 11\"", religion: 'Hindu', caste: 'Mehta',
    profession: 'IAS Officer', location: 'Delhi, India', time: '3 hrs ago',
    message: null, color: '#b5d8a8',
  },
  {
    id: 103, name: 'Vikram R', username: 'vikram_rao_88',
    type: 'Interest with Email', premium: true,
    age: 32, height: "6' 0\"", religion: 'Hindu', caste: 'Rao',
    profession: 'Doctor', location: 'Bangalore, India', time: '7 hrs ago',
    message: 'I believe our profiles are a great match. Kindly go through my profile and accept.',
    color: '#e8a87c',
  },
  {
    id: 104, name: 'Karan P', username: 'karan_patel_94',
    type: 'Interest Reminder', premium: false,
    age: 26, height: "5' 9\"", religion: 'Hindu', caste: 'Patel',
    profession: 'Business Analyst', location: 'Ahmedabad, India', time: '1 day ago',
    message: null, color: '#ffd6a5',
  },
  {
    id: 105, name: 'Amit K', username: 'amit_kulkarni_90',
    type: 'Interest', premium: true,
    age: 31, height: "5' 11\"", religion: 'Hindu', caste: 'Kulkarni',
    profession: 'Software Architect', location: 'Pune, India', time: '2 days ago',
    message: null, color: '#c2a4d4',
  },
  {
    id: 106, name: 'Rohan G', username: 'rohan_gupta_92',
    type: 'Interest with Email', premium: true,
    age: 29, height: "5' 10\"", religion: 'Hindu', caste: 'Gupta',
    profession: 'Chartered Accountant', location: 'Jaipur, India', time: '3 days ago',
    message: 'Your profile looks wonderful! Looking forward to connecting with you.',
    color: '#caffbf',
  },
  {
    id: 107, name: 'Dev S', username: 'dev_singh_87',
    type: 'Interest', premium: false,
    age: 34, height: "6' 1\"", religion: 'Hindu', caste: 'Singh',
    profession: 'Army Officer', location: 'Pune, India', time: '3 days ago',
    message: null, color: '#a0c4ff',
  },
  {
    id: 108, name: 'Nikhil V', username: 'nikhil_verma_96',
    type: 'Interest Reminder', premium: true,
    age: 25, height: "5' 9\"", religion: 'Hindu', caste: 'Verma',
    profession: 'Data Scientist', location: 'Hyderabad, India', time: '5 days ago',
    message: 'Hope you find my profile suitable. Please do accept!',
    color: '#f4a7b9',
  },
]

// Inbox mock messages
const inboxMessages = [
  {
    id: 1, from: 'Priya S', username: 'priya_sharma_1990', time: '10:30 AM',
    preview: 'Hi there! I just sent you an interest. Would love to know more about you...',
    unread: true, color: '#e8a87c',
  },
  {
    id: 2, from: 'Anjali M', username: 'anjali_mehta_1992', time: 'Yesterday',
    preview: 'Thank you for accepting my interest! When can we talk?',
    unread: true, color: '#c2a4d4',
  },
  {
    id: 3, from: 'Deepika R', username: 'deepika_rao_88', time: 'Mon',
    preview: 'Hello! I read your profile and really liked it. Let me know if you are interested.',
    unread: false, color: '#7ec8e3',
  },
  {
    id: 4, from: 'Kavita P', username: 'kavita_patel_93', time: 'Sun',
    preview: "Hope you're doing well! Just wanted to follow up on my interest.",
    unread: false, color: '#b5d8a8',
  },
  {
    id: 5, from: 'Shreya K', username: 'shreya_kulkarni_91', time: 'Sat',
    preview: 'Hi! I noticed we have a lot in common. Would love to connect!',
    unread: false, color: '#f4a7b9',
  },
]

// Explore mock profiles
const exploreProfiles = [
  { id: 201, name: 'Isha T', age: 26, profession: 'UX Designer', location: 'Mumbai', compat: '94%', color: '#ff9a8b' },
  { id: 202, name: 'Meera K', age: 28, profession: 'Surgeon', location: 'Delhi', compat: '91%', color: '#a18cd1' },
  { id: 203, name: 'Tanvi S', age: 25, profession: 'Journalist', location: 'Bangalore', compat: '88%', color: '#ffecd2' },
  { id: 204, name: 'Aditi N', age: 29, profession: 'Biochemist', location: 'Hyderabad', compat: '85%', color: '#84fab0' },
  { id: 205, name: 'Nandini P', age: 27, profession: 'Startup Founder', location: 'Pune', compat: '83%', color: '#fccb90' },
  { id: 206, name: 'Lakshmi R', age: 30, profession: 'Pilot', location: 'Chennai', compat: '79%', color: '#a1c4fd' },
]

const maleExploreProfiles = [
  { id: 301, name: 'Aakash B', age: 29, profession: 'AI Engineer', location: 'Mumbai', compat: '96%', color: '#7ec8e3' },
  { id: 302, name: 'Sameer J', age: 31, profession: 'Neurosurgeon', location: 'Delhi', compat: '92%', color: '#c2a4d4' },
  { id: 303, name: 'Yash D', age: 27, profession: 'Entrepreneur', location: 'Bangalore', compat: '89%', color: '#caffbf' },
  { id: 304, name: 'Kabir M', age: 33, profession: 'IFS Officer', location: 'Jaipur', compat: '86%', color: '#ffd6a5' },
  { id: 305, name: 'Parth A', age: 26, profession: 'Architect', location: 'Pune', compat: '82%', color: '#a0c4ff' },
  { id: 306, name: 'Vihaan S', age: 28, profession: 'Film Director', location: 'Mumbai', compat: '78%', color: '#f4a7b9' },
]

const initials = (name) => name.split(' ').map(n => n[0]).join('').toUpperCase()

export default function Dashboard({ onNavigate }) {
  const [activeNavItem, setActiveNavItem] = useState('My Shaadi')
  const [activeSection, setActiveSection] = useState('Interests & Requests')
  const [filter, setFilter] = useState('All Pending')
  const [accepted, setAccepted] = useState({})
  const [declined, setDeclined] = useState({})
  const [hoveredProfile, setHoveredProfile] = useState(null)
  const [activeTab, setActiveTab] = useState('interests')
  const [gender, setGender] = useState('female')     // 'female' | 'male'
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedInbox, setSelectedInbox] = useState(inboxMessages[0])
  const [exploreShortlisted, setExploreShortlisted] = useState({})
  
  // Search component state
  const [globalSearchInput, setGlobalSearchInput] = useState('')
  const [selectedSearchProfile, setSelectedSearchProfile] = useState(null)

  const navItems = ['My Shaadi', 'Search', 'Matches', 'Inbox', 'Explore']
  const profiles = gender === 'female' ? femaleProfiles : maleProfiles
  const currentExplore = gender === 'female' ? exploreProfiles : maleExploreProfiles

  const sidebarSections = [
    { label: 'Emails', count: 1 },
    { label: 'Interests & Requests', count: profiles.length, active: true },
    { label: 'Filtered Out', sub: true },
    { label: 'Accepted Members', count: Object.values(accepted).filter(Boolean).length },
    { label: 'Sent' },
    { label: 'Archived' },
    { label: 'Notifications & Feeds' },
  ]

  const quickLinks = [
    'Shortlists & more', 'My Matches', 'Reverse Matches',
    '2-way Matches', 'Add Saved Searches', 'My Help',
  ]

  // Search filtered profiles
  const filteredProfiles = useMemo(() => {
    let list = profiles
    if (filter === 'New Interests') list = list.filter(p => p.type === 'Interest')
    if (filter === 'Reminders') list = list.filter(p => p.type === 'Interest Reminder')
    if (filter === 'Interest with Email') list = list.filter(p => p.type === 'Interest with Email')
    if (!searchQuery.trim()) return list
    const q = searchQuery.toLowerCase()
    return list.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.profession.toLowerCase().includes(q) ||
      p.location.toLowerCase().includes(q) ||
      p.caste.toLowerCase().includes(q) ||
      p.username.toLowerCase().includes(q)
    )
  }, [profiles, filter, searchQuery])

  const renderInterests = () => (
    <div className={styles.main}>
      <div className={styles.mainHeader}>
        <h1 className={styles.pageTitle}>Interests &amp; Requests</h1>
      </div>

      {/* Search Bar */}
      <div className={styles.searchBar}>
        <span className={styles.searchIcon}>🔍</span>
        <input
          className={styles.searchInput}
          placeholder="Search by name, profession, location, caste..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        {searchQuery && (
          <button className={styles.clearSearch} onClick={() => setSearchQuery('')}>✕</button>
        )}
      </div>

      {/* Toolbar */}
      <div className={styles.toolbar}>
        <div className={styles.toolbarLeft}>
          <input type="checkbox" className={styles.selectAll} />
          <button className={styles.toolbarIconBtn} title="Delete">🗑</button>
          <span className={styles.resultCount}>{filteredProfiles.length} profiles found</span>
        </div>
        <div className={styles.toolbarRight}>
          <span className={styles.showLabel}>Show</span>
          <select
            className={styles.filterSelect}
            value={filter}
            onChange={e => setFilter(e.target.value)}
          >
            <option>All Pending</option>
            <option>New Interests</option>
            <option>Reminders</option>
            <option>Interest with Email</option>
          </select>
        </div>
      </div>

      {/* Profile Cards */}
      <div className={styles.cardList}>
        {filteredProfiles.length === 0 ? (
          <div className={styles.noResults}>
            <span>😔</span>
            <p>No profiles match your search. Try a different keyword.</p>
          </div>
        ) : filteredProfiles.map((p) => (
          <div
            key={p.id}
            className={`${styles.card} ${accepted[p.id] ? styles.cardAccepted : ''} ${declined[p.id] ? styles.cardDeclined : ''}`}
          >
            <input type="checkbox" className={styles.cardCheck} />

            {/* Avatar */}
            <div
              className={styles.avatarWrap}
              style={{ background: p.color }}
              onMouseEnter={() => setHoveredProfile(p.id)}
              onMouseLeave={() => setHoveredProfile(null)}
            >
              <span className={styles.avatarInitials}>{initials(p.name)}</span>
              <div className={styles.avatarOverlay}>View Profile</div>
              {hoveredProfile === p.id && (
                <div className={styles.tooltip}>
                  <div className={styles.tooltipRow}><span>Age / Height</span><span>: {p.age}, {p.height}</span></div>
                  <div className={styles.tooltipRow}><span>Religion / Caste</span><span>: {p.religion}, {p.caste}</span></div>
                  <div className={styles.tooltipRow}><span>Profession</span><span>: {p.profession}</span></div>
                  <div className={styles.tooltipRow}><span>Location</span><span>: {p.location}</span></div>
                  <div className={styles.tooltipLinks}>
                    <a href="#">View History ▶</a>
                    <a href="#">View full profile ▶</a>
                  </div>
                </div>
              )}
            </div>

            {/* Card Body */}
            <div className={styles.cardBody}>
              <div className={styles.cardTop}>
                <span className={styles.cardType}>{p.type} from </span>
                <a href="#" className={styles.cardName}>{p.username}</a>
                {p.premium && <span className={styles.premiumBadge}>PREMIUM+</span>}
              </div>
              {p.message && (
                <p className={styles.cardMessage}>
                  {p.message} <a href="#" className={styles.seeMore}>See more...</a>
                </p>
              )}
              {!declined[p.id] && !accepted[p.id] && (
                <div className={styles.cardActions}>
                  <button
                    className={styles.acceptBtn}
                    onClick={() => setAccepted(a => ({ ...a, [p.id]: true }))}
                  >Accept</button>
                  <button
                    className={styles.declineBtn}
                    onClick={() => setDeclined(d => ({ ...d, [p.id]: true }))}
                  >Decline ▾</button>
                </div>
              )}
              {accepted[p.id] && <div className={styles.statusTag}>✅ Accepted</div>}
              {declined[p.id] && <div className={`${styles.statusTag} ${styles.declinedTag}`}>❌ Declined</div>}
            </div>
            <div className={styles.cardTime}>{p.time}</div>
          </div>
        ))}
      </div>
    </div>
  )

  const renderInbox = () => (
    <div className={styles.inboxLayout}>
      {/* Left: Message list */}
      <div className={styles.inboxList}>
        <div className={styles.inboxListHeader}>
          <span>Messages</span>
          <span className={styles.inboxCount}>{inboxMessages.filter(m => m.unread).length} new</span>
        </div>
        {inboxMessages.map(msg => (
          <div
            key={msg.id}
            className={`${styles.inboxItem} ${selectedInbox?.id === msg.id ? styles.inboxItemActive : ''}`}
            onClick={() => setSelectedInbox(msg)}
          >
            <div className={styles.inboxAvatar} style={{ background: msg.color }}>
              {initials(msg.from)}
            </div>
            <div className={styles.inboxItemBody}>
              <div className={styles.inboxItemTop}>
                <span className={`${styles.inboxFrom} ${msg.unread ? styles.inboxUnread : ''}`}>{msg.from}</span>
                <span className={styles.inboxTime}>{msg.time}</span>
              </div>
              <span className={styles.inboxPreview}>{msg.preview}</span>
            </div>
            {msg.unread && <span className={styles.unreadDot} />}
          </div>
        ))}
      </div>

      {/* Right: Chat window */}
      {selectedInbox ? (
        <div className={styles.chatWindow}>
          <div className={styles.chatHeader}>
            <div className={styles.chatAvatar} style={{ background: selectedInbox.color }}>
              {initials(selectedInbox.from)}
            </div>
            <div>
              <div className={styles.chatName}>{selectedInbox.from}</div>
              <div className={styles.chatUsername}>@{selectedInbox.username}</div>
            </div>
            <button className={styles.viewProfileBtn}>View Profile ▶</button>
          </div>

          <div className={styles.chatMessages}>
            <div className={styles.chatBubbleWrap}>
              <div className={styles.chatBubble + ' ' + styles.chatBubbleLeft}>
                {selectedInbox.preview}
              </div>
              <span className={styles.chatBubbleTime}>{selectedInbox.time}</span>
            </div>
            <div className={styles.chatBubbleWrap + ' ' + styles.chatBubbleWrapRight}>
              <div className={styles.chatBubble + ' ' + styles.chatBubbleRight}>
                Thank you for reaching out! I'll review your profile and get back to you soon. 😊
              </div>
              <span className={styles.chatBubbleTime}>Just now</span>
            </div>
          </div>

          <div className={styles.chatInputRow}>
            <input className={styles.chatInput} placeholder="Type a message..." />
            <button className={styles.chatSendBtn}>Send ➤</button>
          </div>
        </div>
      ) : (
        <div className={styles.chatEmpty}>
          <span>💬</span>
          <p>Select a conversation to start chatting</p>
        </div>
      )}
    </div>
  )

  const renderExplore = () => (
    <div className={styles.main}>
      <div className={styles.mainHeader}>
        <h1 className={styles.pageTitle}>Explore Profiles</h1>
        <p className={styles.exploreSubtitle}>Curated matches based on your preferences &amp; compatibility</p>
      </div>
      <div className={styles.exploreGrid}>
        {currentExplore.map(p => (
          <div key={p.id} className={styles.exploreCard}>
            <div className={styles.exploreAvatar} style={{ background: p.color }}>
              {initials(p.name)}
            </div>
            <div className={styles.exploreCompat}>
              <span className={styles.compatBadge}>{p.compat} Match</span>
            </div>
            <div className={styles.exploreName}>{p.name}, {p.age}</div>
            <div className={styles.exploreDetails}>{p.profession}</div>
            <div className={styles.exploreDetails}>📍 {p.location}</div>
            <div className={styles.exploreActions}>
              <button
                className={`${styles.shortlistBtn} ${exploreShortlisted[p.id] ? styles.shortlistBtnActive : ''}`}
                onClick={() => setExploreShortlisted(s => ({ ...s, [p.id]: !s[p.id] }))}
              >
                {exploreShortlisted[p.id] ? '❤️ Shortlisted' : '🤍 Shortlist'}
              </button>
              <button className={styles.connectBtn}>Connect</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const renderSearchPage = () => {
    const allMockData = [...femaleProfiles, ...maleProfiles, ...exploreProfiles, ...maleExploreProfiles]
    let results = []
    
    if (globalSearchInput.trim()) {
      const q = globalSearchInput.toLowerCase()
      results = allMockData.filter(p => 
        (p.name && p.name.toLowerCase().includes(q)) ||
        (p.profession && p.profession.toLowerCase().includes(q)) ||
        (p.location && p.location.toLowerCase().includes(q)) ||
        (p.caste && p.caste.toLowerCase().includes(q)) ||
        (p.username && p.username.toLowerCase().includes(q)) ||
        (p.id && String(p.id).includes(q))
      )
    }

    return (
      <div className={styles.main}>
        {selectedSearchProfile ? (
          <div className={styles.searchDetailView}>
            <div className={styles.detailBackBar}>
              <button className={styles.backBtn} onClick={() => setSelectedSearchProfile(null)}>
                ← Back to Search Results
              </button>
            </div>
            
            <div className={styles.detailCard}>
               <div className={styles.detailAvatar} style={{ background: selectedSearchProfile.color || '#e8a87c' }}>
                 {initials(selectedSearchProfile.name)}
               </div>
               
               <div className={styles.detailInfo}>
                 <h2 className={styles.detailName}>{selectedSearchProfile.name} <span className={styles.detailId}>({selectedSearchProfile.id})</span></h2>
                 <p className={styles.detailSubtitle}>
                   {selectedSearchProfile.age} Yrs • {selectedSearchProfile.height || 'N/A'} • {selectedSearchProfile.religion || 'Hindu'}, {selectedSearchProfile.caste || 'Any'}
                 </p>
                 
                 <div className={styles.detailGrid}>
                   <div className={styles.detailGridItem}>
                     <span className={styles.detailGridLabel}>Profession</span>
                     <span className={styles.detailGridValue}>{selectedSearchProfile.profession}</span>
                   </div>
                   <div className={styles.detailGridItem}>
                     <span className={styles.detailGridLabel}>Location</span>
                     <span className={styles.detailGridValue}>{selectedSearchProfile.location}</span>
                   </div>
                   {selectedSearchProfile.compat && (
                     <div className={styles.detailGridItem}>
                       <span className={styles.detailGridLabel}>Compatibility</span>
                       <span className={styles.detailGridValue}>{selectedSearchProfile.compat}</span>
                     </div>
                   )}
                 </div>
                 
                 <div className={styles.detailBio}>
                    Here is a summary of {selectedSearchProfile.name}'s profile. This person is looking for a meaningful connection with common values and interests. Take the next step to communicate if you find this profile suitable.
                 </div>
                 
                 <div className={styles.detailActions}>
                   <button className={styles.connectBtnLarge}>Connect Now</button>
                   <button className={styles.shortlistBtnLarge}>Shortlist Profile</button>
                 </div>
               </div>
            </div>
          </div>
        ) : (
          <div className={styles.searchContainer}>
            <div className={styles.mainHeader}>
              <h1 className={styles.pageTitle}>Search Profiles</h1>
              <p className={styles.exploreSubtitle}>Find members by name, profession, location, or ID</p>
            </div>
            <div className={styles.globalSearchWrap}>
              <span className={styles.searchIcon}>🔍</span>
              <input
                className={styles.globalSearchInputBox}
                placeholder="Start typing to search the database..."
                value={globalSearchInput}
                onChange={e => setGlobalSearchInput(e.target.value)}
              />
              {globalSearchInput && (
                <button className={styles.clearGlobalSearch} onClick={() => setGlobalSearchInput('')}>✕</button>
              )}
            </div>
            
            <div className={styles.searchResultsWrap}>
              {globalSearchInput.trim() === '' ? (
                <div className={styles.searchEmptyState}>
                  <span className={styles.searchEmptyIcon}>🌍</span>
                  <p>Discover matches from thousands of verified profiles.</p>
                </div>
              ) : results.length === 0 ? (
                <div className={styles.searchEmptyState}>
                  <span className={styles.searchEmptyIcon}>😔</span>
                  <p>No profiles found matching "{globalSearchInput}"</p>
                </div>
              ) : (
                <div className={styles.searchResultGrid}>
                  {results.map(p => (
                    <div 
                      key={p.id} 
                      className={styles.searchResultItem}
                      onClick={() => setSelectedSearchProfile(p)}
                    >
                      <div className={styles.resultAvatar} style={{ background: p.color || '#aaa' }}>
                        {initials(p.name)}
                      </div>
                      <div className={styles.resultDetails}>
                        <div className={styles.resultName}>{p.name}</div>
                        <div className={styles.resultSub}>{p.profession}</div>
                        <div className={styles.resultSubAlt}>{p.location}</div>
                      </div>
                      <button className={styles.viewProfileBtnMini}>View Details</button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    )
  }

  const renderMain = () => {
    if (activeNavItem === 'My Shaadi') {
      return (
        <MyShaadiDashboard
          myProfile={myProfile}
          profiles={profiles}
          exploreShortlisted={exploreShortlisted}
        />
      )
    }
    if (activeNavItem === 'Inbox') return renderInbox()
    if (activeNavItem === 'Explore') return renderExplore()
    if (activeNavItem === 'Search') return renderSearchPage()
    return renderInterests()
  }

  const myProfile = gender === 'female'
    ? { name: 'My Profile', id: 'SH27707129', age: 28, height: "5'6\"", religion: 'Hindu', caste: 'Sharma', marital: 'Never Married', location: 'Mumbai', postedBy: 'Self', motherTongue: 'Hindi', diet: 'Non-Veg', drink: 'Occasionally', smoke: 'No', dob: '15-Mar-1996', complexion: 'Fair', sunSign: 'Pisces', values: 'Traditional' }
    : { name: 'My Profile', id: 'SH27707130', age: 30, height: "5'10\"", religion: 'Hindu', caste: 'Sharma', marital: 'Never Married', location: 'Mumbai', postedBy: 'Self', motherTongue: 'Hindi', diet: 'Non-Veg', drink: 'Occasionally', smoke: 'No', dob: '10-Jan-1994', complexion: 'Wheatish', sunSign: 'Capricorn', values: 'Modern Traditional' }

  return (
    <div className={styles.page}>
      {/* ── Top Orange Nav ── */}
      <header className={styles.topNav}>
        <div className={styles.topNavInner}>
          <div className={styles.logoArea} onClick={() => onNavigate('home')}>
            <span className={styles.logoText}>shaadi</span>
            <span className={styles.logoDot}>.com</span>
            <span className={styles.logoTM}>®</span>
          </div>
          <nav className={styles.navLinks}>
            {navItems.map(item => (
              <button
                key={item}
                className={`${styles.navBtn} ${activeNavItem === item ? styles.navBtnActive : ''}`}
                onClick={() => setActiveNavItem(item)}
              >
                {item}
                {item === 'Matches' && <span className={styles.matchBadge}>{profiles.length * 128}</span>}
                {['My Shaadi', 'Search', 'Inbox', 'Explore'].includes(item) && (
                  <span className={styles.chevron}>▾</span>
                )}
              </button>
            ))}
          </nav>
          <div className={styles.topRight}>
            <span className={styles.callInfo}>📞 Call 18605003456</span>
            <button className={styles.helpBtn}>24/7 Help ▾</button>
            {/* Gender Dropdown */}
            <div className={styles.genderDropdown}>
              <select
                className={styles.genderSelect}
                value={gender}
                onChange={e => setGender(e.target.value)}
              >
                <option value="female">👩 Female Profile</option>
                <option value="male">👨 Male Profile</option>
              </select>
            </div>
            <div className={styles.userBadge}>
              {gender === 'female' ? 'BP_Female' : 'BP_Male'} ▾
            </div>
          </div>
        </div>
      </header>

      {/* ── Sub Nav Bar ── */}
      <div className={styles.certBar}>
        ✅ Only site to be ISO 9001:2008 &amp; VeriSign Certified &nbsp;|&nbsp;
        {gender === 'female' ? '👩 Browsing as: Female' : '👨 Browsing as: Male'}
      </div>

      {/* ── Body ── */}
      <div className={styles.body}>
        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <button className={styles.sendEmailBtn}>✉ SEND EMAIL</button>

          <ul className={styles.sideList}>
            {sidebarSections.map((s, i) => (
              <li
                key={i}
                className={`${styles.sideItem} ${s.active || s.label === activeSection ? styles.sideItemActive : ''} ${s.sub ? styles.sideItemSub : ''}`}
                onClick={() => { setActiveSection(s.label); setActiveNavItem('Interests') }}
              >
                {s.sub && <span className={styles.subArrow}>└</span>}
                <span className={styles.sideLabel}>{s.label}</span>
                {s.count !== undefined && <span className={styles.sideCount}>({s.count})</span>}
              </li>
            ))}
          </ul>

          {/* My Shaadi box */}
          <div className={styles.sideBox}>
            <div className={styles.sideBoxTitle}>My Shaadi</div>
            <ul className={styles.sideBoxList}>
              <li>- My Contact Details</li>
              <li className={styles.sideBoxHighlight}>Suhan Ranjan Tripathy</li>
              <li>- My Photos</li>
              <li>- My Partner Preferences</li>
              <li className={styles.sideBoxMore}>- More <span>+</span></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className={styles.sideBox}>
            <div className={styles.sideBoxTitle}>Quick Links</div>
            <ul className={styles.sideBoxList}>
              {quickLinks.map(l => <li key={l}>- {l}</li>)}
            </ul>
          </div>

          {/* Profile ID Search */}
          <div className={styles.profileSearch}>
            <div className={styles.profileSearchTitle}>Profile ID Search</div>
            <div className={styles.profileSearchRow}>
              <input className={styles.profileInput} placeholder="Enter Profile ID" />
              <button className={styles.goBtn}>Go</button>
            </div>
          </div>

          {/* Useful Links */}
          <div className={styles.usefulLinks}>
            <div className={styles.usefulLinksTitle}>Useful Links</div>
            <a href="#" className={styles.usefulLink}>👥 Refer a Friend</a>
            <a href="#" className={styles.usefulLink}>❓ Need Help?</a>
            <a href="#" className={styles.usefulLink}>🔒 Security Tips</a>
            <a href="#" className={styles.usefulLink}>🚫 Report Misuse</a>
          </div>
        </aside>

        {/* Main Content */}
        {renderMain()}

        {/* Right Profile Panel */}
        <aside className={styles.profilePanel}>
          <div className={styles.activityBar}>
            Activity Factor <strong>100%</strong> <span className={styles.qMark}>?</span>
          </div>

          <div className={styles.profileCard}>
            <div className={styles.profilePhotoBox}>
              <div className={styles.profilePhotoPlaceholder}>
                <span>{gender === 'female' ? '👩' : '👨'}</span>
                <p>Photo Coming Soon</p>
              </div>
            </div>

            <div className={styles.profileInfo}>
              <div className={styles.profileName}>{myProfile.name} <span>({myProfile.id})</span></div>
              <table className={styles.profileTable}>
                <tbody>
                  <tr>
                    <td>Age / Height</td><td>: {myProfile.age} / {myProfile.height}</td>
                    <td>Religion / Caste</td><td>: {myProfile.religion}, {myProfile.caste}</td>
                  </tr>
                  <tr>
                    <td>Marital Status</td><td>: {myProfile.marital}</td>
                    <td>Location</td><td>: {myProfile.location}</td>
                  </tr>
                  <tr>
                    <td>Posted by</td><td>: {myProfile.postedBy}</td>
                    <td>Mother Tongue</td><td>: {myProfile.motherTongue}</td>
                  </tr>
                </tbody>
              </table>

              <div className={styles.manageBox}>
                <div className={styles.manageTitle}>Manage your profile</div>
                <div className={styles.manageGrid}>
                  <a href="#">• Edit Personal Profile</a>
                  <a href="#">• View Profile Stats</a>
                  <a href="#">• Set Contact Filters</a>
                  <a href="#">• Edit Partner Profile</a>
                  <a href="#">• Manage Photos</a>
                  <a href="#">• Hide / Delete Profile</a>
                  <a href="#">• Edit Contact Details</a>
                  <a href="#">• Hobbies &amp; Interests</a>
                </div>
                <a href="#" className={styles.previewLink}>Preview your profile ▶</a>
              </div>
            </div>
          </div>

          {/* About / Partner Preference Tabs */}
          <div className={styles.profileTabs}>
            <button
              className={`${styles.profileTab} ${activeTab === 'about' ? styles.profileTabActive : ''}`}
              onClick={() => setActiveTab('about')}
            >About Myself</button>
            <button
              className={`${styles.profileTab} ${activeTab === 'partner' ? styles.profileTabActive : ''}`}
              onClick={() => setActiveTab('partner')}
            >Partner Preference ↓</button>
          </div>

          <div className={styles.profileSection}>
            <div className={styles.sectionHeading}>
              Personality, Family Details, Career, Partner Expectations etc.
              <a href="#" className={styles.editLink}>Edit ▶</a>
            </div>
            <p className={styles.sectionText}>
              {gender === 'female'
                ? 'Looking for a life partner who is kind, family-oriented and ambitious. I value tradition while embracing modern values. I enjoy travelling, cooking and spending quality time with loved ones.'
                : 'Looking for a life partner who is caring, educated and family-oriented. I believe in balancing tradition with modern thinking. I enjoy sports, travel and quality time with family.'}
            </p>
          </div>

          <div className={styles.profileSection}>
            <div className={styles.sectionHeading}>
              Basics &amp; Lifestyle
              <a href="#" className={styles.editLink}>Edit ▶</a>
            </div>
            <div className={styles.basicsGrid}>
              <div><span className={styles.bLabel}>Age</span><span>: {myProfile.age}</span></div>
              <div><span className={styles.bLabel}>Diet</span><span>: {myProfile.diet}</span></div>
              <div><span className={styles.bLabel}>Date of Birth</span><span>: {myProfile.dob}</span></div>
              <div><span className={styles.bLabel}>Drink</span><span>: {myProfile.drink}</span></div>
              <div><span className={styles.bLabel}>Marital Status</span><span>: {myProfile.marital}</span></div>
              <div><span className={styles.bLabel}>Smoke</span><span>: {myProfile.smoke}</span></div>
              <div><span className={styles.bLabel}>Height</span><span>: {myProfile.height}</span></div>
              <div><span className={styles.bLabel}>Personal Values</span><span>: {myProfile.values}</span></div>
              <div><span className={styles.bLabel}>Complexion</span><span>: {myProfile.complexion}</span></div>
              <div><span className={styles.bLabel}>Sun Sign</span><span>: {myProfile.sunSign}</span></div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
