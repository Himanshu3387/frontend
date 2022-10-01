import { Link} from 'react-router-dom'
// import {FaSearch} from 'react-icons/fa'
// import {FaShoppingCart} from "react-icons/fa";

// import {useState} from 'react'

const Navbar = () => {
  // const [dropdown, setDropdown] = useState(false);

  return (
    <div className="shadow-sm bg-body border border-0 overflow-hidden sticky-top rounded-3">
    <nav style={{backgroundColor: '#7431F8'}} 
    className='navbar navbar-expand-lg navbar-dark '>
       <div className='container-fluid'>
        <Link className='navbar-brand' to='/'>
       <h2>E-Learning System</h2> 
        </Link>

        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
           
              <li className='nav-item'>
                <Link
                  className='nav-link active'
                  aria-current='page'
                  to='/showAllCourses'>
                  Available Courses
                </Link>
              </li>


              <li className='nav-item'>
                <Link
                  className='nav-link active'
                  aria-current='page'
                  to='/upcomingCourses'>
                  Upcoming Courses
                </Link>
              </li>
              {/* <li className='nav-item'>
                <Link
                  className='nav-link active'
                  aria-current='page'
                  to='/addNewUser'>
                  ADD NEW USER
                </Link>
              </li> */}
            
              <li className='nav-item'>
                <Link
                  className='nav-link active'
                  aria-current='page'
                  to='/about-us'>
                  About Us
                </Link>
              </li>

              <li className='nav-item'>
                <Link
                  className='nav-link active'
                  aria-current='page'
                  to='/contact-us'>
                  Contact Us
                </Link>
              </li>

              <li className='nav-item'>
                <Link
                  className='nav-link active'
                  aria-current='page'
                  to='/admin'>
                  Admin
                </Link>
              </li>
                        
          </ul>

          <ul className='navbar-nav navbar-right'>
          <li className='nav-item'>
                <Link
                  className='nav-link active'
                  aria-current='page'
                  to='/signup'>
                  Sign Up
                </Link>
              </li>  
              <li className='nav-item'>
                <Link
                  className='nav-link active'
                  aria-current='page'
                  to='/signin'>
                  Sign In
                </Link>
              </li>    
          <li className='nav-item' >
                <Link
                  className='nav-link active'
                  aria-current='page'
                  to='/'>
                  Sign Out
                </Link>
              </li>
        
          </ul>
        </div>
      </div>
    </nav>
    </div>
  )
}


export default Navbar
