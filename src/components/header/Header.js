import './Header.scss';

const Header = () => {
  return (
    <header className='header-container'>

      <div className='header-top'>
        <div>icon</div>
        <div>icon</div>
      </div>

      <div className='header-greet'>
        <div className='heading-wrapper'>
          <h1 style={{margin: 0}}>Welcome to</h1>
          <h1 style={{margin: 0}}>Scania Digital Design System</h1>
        </div>
      </div>

    </header>
  )
}

export default Header;