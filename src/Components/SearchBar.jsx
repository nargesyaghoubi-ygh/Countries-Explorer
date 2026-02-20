import {Search, X} from "lucide-react"

export default function SearchBar({searchTerm, setSearchTerm}){
    const hasText = searchTerm.trim().length>0;

    return (
        <div className="glass rounded-4 p-3">
          <div className="input-group">
            <span className="input-group-text bg-transparent text-light border-0">
              <Search size={20} />
            </span>
    
            <input
              className="form-control bg-transparent text-light border-0"
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search Countries... (e.g., Afghanistan, Canada)"
              aria-label="Search Countries"
            />
    
            {hasText ? (
              <button
                className="btn btn-sm btn-soft bg-white"
                type="button"
                onClick={() => setSearchTerm("")}
                aria-label="Clear search"
                title="Clear"
              >
                <X size={18} />
              </button>
            ) : null}
          </div>
                
        </div>
      );
}