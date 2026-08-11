import { useUserLogout } from "../../hooks/useUserLogout";
import { useUserMe } from "../../hooks/useUserMe";

function isActivePath(pathname: string, href: string) {
    return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

// Renders member navigation and account actions.
function UserNavbar() {
    const { me, loading } = useUserMe();
    const logout = useUserLogout();
    const displayName = me?.name ?? me?.loginId ?? me?.email ?? "Member";
    const pathname = window.location.pathname;

    return (
        <header className="topbar">
            <div>
                <span className="eyebrow">Member Console</span>
                <h1>Choose service</h1>
                <nav className="user-nav" aria-label="member navigation">
                    <a href="/" className={isActivePath(pathname, "/") ? "active" : undefined}>Home</a>
                    <a href="/chat" className={isActivePath(pathname, "/chat") ? "active" : undefined}>Chat</a>
                    <a
                        href="/community/"
                        className={isActivePath(pathname, "/community") ? "active" : undefined}
                    >
                        Community
                    </a>
                    <a
                        href="/stock/"
                        className={isActivePath(pathname, "/stock") ? "active" : undefined}
                    >
                        Stock
                    </a>
                </nav>
            </div>

            <div className="account-area">
                <div className="account-summary">
                    <strong>{displayName}</strong>
                    <span>{me?.email ?? me?.loginId ?? "-"}</span>
                </div>
                <button type="button" onClick={logout} disabled={loading}>
                    Sign out
                </button>
            </div>
        </header>
    );
}

export default UserNavbar;
