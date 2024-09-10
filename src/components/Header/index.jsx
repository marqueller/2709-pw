import './Header.css'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <header>
            <nav>
                <div>
                    <Link>
                        <span className="text-red">CedupFlix</span>
                    </Link>
                </div>
                <div className="link-nav">
                    <Link to="/">Home</Link>
                    <Link to="/assistir">Assitir</Link>
                    <Link to="/login">Login</Link>
                </div>
            </nav>
        </header>
    )
}