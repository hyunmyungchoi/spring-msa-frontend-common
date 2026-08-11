type AdminManageSelectCardProps = {
  to: string
  label: string
  title: string
}

// Renders an admin management navigation tile.
function AdminManageSelectCard({ to, label, title }: AdminManageSelectCardProps) {
  const href = to === '/' || to.endsWith('/') ? to : `${to}/`

  return (
    <a className="admin-service-tile admin-service-link" href={href}>
      <span>{label}</span>
      <strong>{title}</strong>
    </a>
  )
}

export default AdminManageSelectCard
