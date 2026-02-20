import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./Components/SearchBar";
import CountriesList from "./Components/CountriesList";
import SelectRegion from "./Components/SelectRegion";

const API = `https://restcountries.com/v3.1/all`;
function App() {
    const [searchTerm, setSearchTerm] = useState("");
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [region, setRegion] = useState("all");
    const [retry, setRetry] = useState(0);

    const trimmedText = searchTerm.trim();
    function handleRetry(){
        setRetry(prev => prev + 1)
    }
 
    useEffect(() => {
       
        const controller = new AbortController();
        async function fetchCountries() {
            try {
                setLoading(true);
                setError(null);

                let url = API;
                console.log("url:", url);
                console.log("countries:", countries);

                if (trimmedText.length >= 2) {
                    url = `https://restcountries.com/v3.1/name/${encodeURIComponent(trimmedText)}`;
                } else if (region !== "all") {
                    url = `https://restcountries.com/v3.1/region/${region}`;
                }

                const res = await fetch(url, { signal: controller.signal });
                if (!res.ok) throw new Error("Network response was not ok");
                const data = await res.json();

                if (!Array.isArray(data) && data.length) {
        
                    setCountries(data);
                } else {
                    setCountries([]);
                }

                setCountries(data || []);
            } catch (err) {
                if (err.name !== "AbortError") {
                    setError("Failed to fetch countries");
                    setCountries([]);
                }
            } finally {
                setLoading(false);
            }
        }

        fetchCountries();
        return () => controller.abort();
    }, [searchTerm, region, retry]);


    return (
        <div className="py-4 py-sm-5">
            <div className="container">
            <h1 className="text-light text-center">Countries Explorer</h1>
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

                <SelectRegion title='Filter by Region...'>
                    <select className="input" value={region} onChange={(e) => setRegion(e.target.value)}>
                        <option value="all">All</option>
                        <option value="Africa">Africa</option>
                        <option value="Americas">Americas</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="Oceania">Oceania</option>

                    </select>
                </SelectRegion>
                

            </div>
            <CountriesList countries={countries} loading={loading} error={error} onRetry={handleRetry}></CountriesList>
            
        </div>

    )

}

export default App;
