const SITE = {
  title: 'Roya',
  name: 'Roya Mohammadsadegh',
  bio: 'PhD Candidate',
  location: 'UMass',
  email: 'rmohammadsad@umass.edu',
  scholar: 'https://scholar.google.com/citations?user=g7wf0wwAAAAJ&hl=en',
  orcid: 'https://orcid.org/0009-0000-8605-9684',
  linkedin: 'https://www.linkedin.com/in/roya-sadegh'
}

const nav = [
  ['Publications', '/publications/'],
  ['Talks', '/talks/'],
  ['Teaching', '/teaching/'],
  ['CV', '/cv/']
]

function icon(kind) {
  const icons = { location:'⌖', email:'✉', scholar:'🎓', orcid:'◉', linkedin:'in' }
  return `<span class="icon" aria-hidden="true">${icons[kind] || '•'}</span>`
}

function currentPath() {
  const p = window.location.pathname
  return p.endsWith('/') ? p : `${p}/`
}

function renderHeader() {
  const target = document.querySelector('[data-site-header]')
  if (!target) return
  const path = currentPath()
  target.innerHTML = `
    <div class="masthead">
      <div class="masthead__inner-wrap">
        <nav class="site-nav" aria-label="Primary navigation">
          <a class="site-title" href="/">${SITE.title}</a>
          <button class="nav-toggle" type="button" aria-label="Toggle navigation" aria-expanded="false">☰</button>
          <ul class="nav-links">
            ${nav.map(([label, href]) => `<li><a class="${path.startsWith(href) ? 'active' : ''}" href="${href}">${label}</a></li>`).join('')}
            <li><button class="theme-toggle" type="button" aria-label="Toggle color theme" title="Toggle theme">☀</button></li>
          </ul>
        </nav>
      </div>
    </div>`
}

function renderSidebar() {
  const target = document.querySelector('[data-site-sidebar]')
  if (!target) return
  target.innerHTML = `
    <aside class="sidebar" aria-label="Author profile">
      <div class="author__avatar"><img src="/images/Roya_profile_2026.jpg" alt="${SITE.name}" fetchpriority="high"></div>
      <div class="author__content">
        <h3 class="author__name">${SITE.name}</h3>
        <p class="author__bio">${SITE.bio}</p>
      </div>
      <button class="follow-button" type="button" aria-expanded="false">Follow</button>
      <ul class="author__urls">
        <li>${icon('location')}${SITE.location}</li>
        <li><a href="mailto:${SITE.email}">${icon('email')}Email</a></li>
        <li><a href="${SITE.scholar}" target="_blank" rel="noopener noreferrer">${icon('scholar')}Google Scholar</a></li>
        <li><a href="${SITE.orcid}" target="_blank" rel="noopener noreferrer">${icon('orcid')}ORCID</a></li>
        <li><a href="${SITE.linkedin}" target="_blank" rel="noopener noreferrer">${icon('linkedin')}LinkedIn</a></li>
      </ul>
    </aside>`
}

function renderFooter() {
  const target = document.querySelector('[data-site-footer]')
  if (!target) return
  const year = new Date().getFullYear()
  const today = new Date().toISOString().slice(0,10)
  target.innerHTML = `
    <div class="page__footer"><footer>
      <div class="page__footer-copyright">&copy; ${year} ${SITE.name}, Powered by <a href="https://vite.dev/">Vite</a>.<br>Site last updated ${today}</div>
    </footer></div>`
}

function initNav() {
  const toggle = document.querySelector('.nav-toggle')
  const links = document.querySelector('.nav-links')
  if (toggle && links) toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open')
    toggle.setAttribute('aria-expanded', String(open))
  })
}

function initFollow() {
  const button = document.querySelector('.follow-button')
  const urls = document.querySelector('.author__urls')
  if (button && urls) button.addEventListener('click', () => {
    const open = urls.classList.toggle('open')
    button.setAttribute('aria-expanded', String(open))
  })
}

function setTheme(theme) {
  if (theme === 'dark') document.documentElement.dataset.theme = 'dark'
  else delete document.documentElement.dataset.theme
  localStorage.setItem('theme', theme)
  const button = document.querySelector('.theme-toggle')
  if (button) button.textContent = theme === 'dark' ? '☾' : '☀'
}

function initTheme() {
  const saved = localStorage.getItem('theme')
  setTheme(saved === 'dark' ? 'dark' : 'light')
  document.querySelector('.theme-toggle')?.addEventListener('click', () => {
    setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark')
  })
}

function initCvTabs() {
  const wrapper = document.querySelector('[data-cv-tabs]')
  if (!wrapper) return
  const tabs = wrapper.querySelectorAll('[data-cv-tab]')
  const panels = wrapper.querySelectorAll('[data-cv-panel]')
  tabs.forEach(tab => tab.addEventListener('click', () => {
    const target = tab.getAttribute('data-cv-tab')
    tabs.forEach(item => {
      const active = item === tab
      item.classList.toggle('is-active', active)
      item.setAttribute('aria-selected', active ? 'true' : 'false')
    })
    panels.forEach(panel => {
      const active = panel.id === target
      panel.classList.toggle('is-active', active)
      panel.hidden = !active
    })
  }))
}

renderHeader()
renderSidebar()
renderFooter()
initNav()
initFollow()
initTheme()
initCvTabs()
