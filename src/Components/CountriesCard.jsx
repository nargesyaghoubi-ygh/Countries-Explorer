export default function CountriesCard({ country }) {
  const flag =
    country?.flags?.png;
  return (
    <article className="glass rounded-4 h-100 p-3 border border-secondary text-light">
      <div className="flag-wrap">
        <img className="flag mb-3" src={flag} alt={country?.name?.common || "Flag"} loading="lazy" />
      </div>

      <div className="p-3 p-md-4 text-light">
        <h3 className="h5 mb-1">{country?.name?.common || "unknown Country"}</h3>
        <div className="muted small mb-3 text-light">
            Region: {country?.region || "-"}
        </div>
        <div className="small text-light">
            Population:{" "}
            {country?.population
            ? country.population.toLocaleString()
            : "—"}
      </div>
      </div>
    </article>
  );
}
