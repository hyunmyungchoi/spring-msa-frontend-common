import { useAdminLogout } from '../../hooks/useAdminLogout'
import { useAdminMe } from '../../hooks/useAdminMe'

function isActivePath(pathname: string, href: string) {
  return href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`)
}

// Renders admin navigation and account actions.
function AdminNavbar() {
  const { me, loading } = useAdminMe()
  const logout = useAdminLogout()
  const displayName = me?.name ?? me?.loginId ?? me?.email ?? 'Admin'
  const pathname = window.location.pathname

  return (
    <>
      <header className="admin-topbar">
        <div>
          <span className="admin-pill">Admin Console</span>
          <h1>관리자 대시보드</h1>
        </div>

        <div className="admin-account">
          <div className="admin-account-summary">
            <strong>{displayName}</strong>
            <span>{me?.email ?? me?.loginId ?? '-'}</span>
          </div>
          <button type="button" onClick={logout} disabled={loading}>
            로그아웃
          </button>
        </div>
      </header>

      <nav className="admin-nav" aria-label="admin navigation">
        <a href="/" className={isActivePath(pathname, '/') ? 'active' : undefined}>홈</a>
        <a
          href="/manage/users/"
          className={isActivePath(pathname, '/manage/users') ? 'active' : undefined}
        >
          유저 관리
        </a>
        <a
          href="/manage/logs/"
          className={isActivePath(pathname, '/manage/logs') ? 'active' : undefined}
        >
          로그 관리
        </a>
      </nav>
    </>
  )
}

export default AdminNavbar
