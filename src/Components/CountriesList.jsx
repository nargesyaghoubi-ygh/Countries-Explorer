import CountriesCard from "./CountriesCard";

export default function CountriesList({ countries, loading, error, onRetry }) {
  if (loading) return <p className="result">Loading Countries...</p> ;
  if (error) {
    return(
        <div className="result">
            <p className="text-light mb-3" >Error : {error}</p>
            <button className="btn btn-soft bg-danger" onClick={onRetry}>Retry</button>
        </div>
    )
  }
  if (!countries || countries?.length === 0) return <p className="result">No results found</p>;

  return (
    <div className="row g-3 g-md-4">
      {countries.map((country) => (
        <div className="col-12 col-sm-6 col-lg-3" key={country.cca3}>
          <CountriesCard country={country}/>
        </div>
      ))}
    </div>
  );
}
