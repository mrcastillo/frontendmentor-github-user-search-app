import glass from "../images/icon-search.svg";

function Search() {
  return (
    <div className={"app-search-container"}>
        
        <div className={"app-search"}>
            <div className={"app-search-glass"}>
                <img src={glass} />
            </div>

            <div className={"app-search-text"}>
                <form action={""}>
                    <input placeholder={"Search Github username..."} type={"text"} id={"search"} name={"n-search"}></input>
                </form>
            </div>

            <div className={"app-search-button"}>
                <button type={"button"}>Search</button>
            </div>
        </div>
    </div>
  );
}

export default Search;
