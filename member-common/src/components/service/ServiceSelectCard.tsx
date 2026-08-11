type ServiceSelectCardProps = {
    to: string;
    label: string;
    title: string;
};

// Renders a service navigation tile.
function ServiceSelectCard({ to, label, title }: ServiceSelectCardProps) {
    const href = to === "/" || to.endsWith("/") ? to : `${to}/`;

    return (
        <a className="service-tile service-link" href={href}>
            <span>{label}</span>
            <strong>{title}</strong>
        </a>
    );
}

export default ServiceSelectCard;
