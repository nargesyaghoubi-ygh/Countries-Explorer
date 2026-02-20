export default function SelectRegion({ title, children }) {
    return (
        <section className="select-region-card">
            <div className="cardHeader">
                <h2 className="sectionTitle">{title}</h2>
            </div>

            <div className="cardBody">{children}</div>
        </section>
    );
}