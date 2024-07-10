import {Link} from 'react-router-dom';

import './index.css'

const Header = () => (
    <div className="header-container">
        <div>
        <h1>movieDB</h1>
        </div>
        <div>
            <input type="search" className="search-container" placeholder="Search..."></input>
            <button type="button" className="search-button">Search</button>
        </div>
        <div>
            <ul className="un-order">
                <li>
                    <Link to="/">Popular</Link>
                </li>
                <li>
                    <Link to="/top-rated">Top Rated</Link>
                </li>
                <li>
                    <Link to="/upcoming">Upcoming</Link>
                </li>
            </ul>
        </div>
    </div>
)

export default Header