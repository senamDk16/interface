import '../../css/searchBar.css'
import loupImg from "../../images/loupe.png"
export function SearchBar(){
    return (
        <>
            <div className="divSearch">
                <span>
                    <img src={loupImg} alt="" />
                </span>
                <input type="text" placeholder="Search" />
            </div>
        </>
    )
}