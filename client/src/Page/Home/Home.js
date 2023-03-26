import './Home.css'
import { Link } from 'react-router-dom'
import Logo from '../../assest/mediplus.png'

function Home() {
  return (
    <div className='home'>
        <div className='navbar'>
            <div className='nav'>
                <div className='logo'>
                    <img src={Logo} alt='Logo'/>
                </div>

                <div className='nav_links'>
                    <Link to='/login' className='link'>
                        Login
                    </Link>
                    <Link to='/signup' className='link'>
                        Signup
                    </Link>
                </div>
            </div>
        </div>

        <div className='home_container'>
            <img src={Logo} alt='logo'/>
            <div className='cards'>
                <div className='card'>
                    <h4>Save</h4>
                    <p>
                    Unexpected healthcare expenses may come up, but you don't have to stash away enough 
                    savings to cover a lengthy hospital stay. Instead, you can signup for a savings
                    account with mediplus and save for the unexpected medical bills.
                    </p>
                </div>

                <div className='card'>
                    <h4>Grow</h4>
                    <p>
                    Unexpected healthcare expenses may come up, but you don't have to stash away enough 
                    savings to cover a lengthy hospital stay. Instead, you can signup for a savings
                    account with mediplus and save for the unexpected medical bills.
                    </p>
                </div>

                <div className='card'>
                    <h4>Protect</h4>
                    <p>
                    Unexpected healthcare expenses may come up, but you don't have to stash away enough 
                    savings to cover a lengthy hospital stay. Instead, you can signup for a savings
                    account with mediplus and save for the unexpected medical bills.
                    </p>
                </div>

            </div>
        </div>

        <div className='footer'>
            <ul>
                <li>Contact</li>
                <li>About</li>
                <li>Article</li>
            </ul>

            <p>&copy; Mediplus 2023 <span>Build by Success Hub 09059309831</span></p>
        </div>
    </div>
  )
}

export default Home