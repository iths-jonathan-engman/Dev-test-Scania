import './Header.scss';

const Header = () => {
  return (
    <header className='header'>

      <div className='header-top'>
        <span className='header-title'>Fleet Portal</span>
          <span className="header-icon"></span>
      </div>

      <div className='header-greeting'>
        <span>Driver evaulation</span>
      </div>

    </header>
  )
}

export default Header;