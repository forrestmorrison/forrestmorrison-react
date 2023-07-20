import Logo from "../assets/4rest-logo-color.png"

const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-slate-200'>
        <div>
          <img src={Logo} alt='logo' style={{ height: '50px' }}/>
        </div>
    </div>
  )
}

export default Navbar