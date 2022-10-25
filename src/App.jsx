
import './App.css'
import { RiHome3Fill, RiStore2Fill,RiLayoutGridFill,RiTeamFill,RiBroadcastFill,RiDownload2Line, RiSettings5Line, RiCheckboxBlankCircleFill, RiMenu2Line, RiCloseFill, RiNotification3Fill, RiSearchLine, RiArrowRightSLine, RiArrowRightCircleLine, RiArrowLeftCircleLine } from 'react-icons/ri'
import { useState } from 'react';

function App() {

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () =>{
    setShowMenu(!showMenu)
  }


  return (
    <div className="bg-[#141414] min-h-screen">
      {/* Sidebar */}
      <sidebar className={`flex flex-col justify-between border-r border-gray-800 fixed top-0 w-80 h-full p-8 bg-[#141414] transition-all lg:left-0 ${showMenu ? "left-0" : "-left-full"} z-50`}>
        <div>
          <h1 className='text-gray-300 uppercase font-bold text-2xl tracking-[5px] mb-10'>regame</h1>
          <ul>
          <li>
            <a href='#' className='text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-3 px-4 rounded-xl transition-colors'><RiHome3Fill/> Home </a>
          </li>
          <li>
            <a href='#' className='text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-3 px-4 rounded-xl transition-colors'><RiStore2Fill/> Store </a>
          </li>
          <li>
            <a href='#' className='text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-3 px-4 rounded-xl transition-colors'><RiLayoutGridFill/> Library </a>
          </li>
          <li>
            <a href='#' className='text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-3 px-4 rounded-xl transition-colors'><RiTeamFill/> Friends </a>
          </li>
          <li>
            <a href='#' className='text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-3 px-4 rounded-xl transition-colors'><RiBroadcastFill/> Live </a>
          </li>
        </ul>
        </div>
        <div>
          <ul>
            <li>
              <a href='#' className='text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-3 px-4 rounded-xl transition-colors'><RiDownload2Line/> Downloads </a>
            </li>
            <li>
              <a href='#' className='text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-3 px-4 rounded-xl transition-colors '><RiSettings5Line/> Settings </a>
            </li>
            <li>
              <a href='#' className='text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-3 px-4 rounded-xl transition-colors relative'>
              <img src='https://img.freepik.com/vector-gratis/ilustracion-icono-vector-dibujos-animados-nino-jugador-enojado-concepto-icono-tecnologia-personas-aislado-vector-premium-estilo-dibujos-animados-plana_138676-3984.jpg?w=740&t=st=1666658164~exp=1666658764~hmac=5ab9db0abded6c6d293364bb222b640bd03321e41b67387b7aa2d1e9246329a1' className='w-6 h-6 rounded-full object-cover'/>
              <RiCheckboxBlankCircleFill className='absolute text-green-600  bottom-3 left-8 text-[8px]'/>
              Mati Dev
              </a>
            </li>
          </ul>
        </div>
        <button className='lg:hidden bg-blue-600 text-white fixed bottom-4 right-4 p-2 text-lg rounded-full z-50' onClick={toggleMenu}>{showMenu ? <RiCloseFill/> : <RiMenu2Line/> }  </button>
      </sidebar>
      {/* Header */}
      <header className='fixed lg:pl-[340px] w-full flex flex-col md:flex-row items-center justify-between p-8 gap-4 bg-[#141414] z-40'>
        <nav className='flex items-center gap-4 order-1 lg:order-none'>
          <a href='#' className='bg-blue-600 text-white py-2 px-4 rounded-full'>Discover</a>
          <a href='#' className='text-gray-500 py-2 px-4 rounded-full'>Browse</a>
          <a href='#' className='text-gray-500 py-2 px-4 rounded-full'>WishList</a>
        </nav>
        <ul className='flex items-center gap-5'>
          <li>
            <a href='#' className='text-gray-500 text-lg'>
              <RiNotification3Fill/>
            </a>
          </li>
          <li>
            <form className='relative '>
              <RiSearchLine className='text-gray-500 absolute top-3 left-2'/>
              <input type='text' placeholder='Search' className='bg-[#232323] outline-none text-gray-300 rounded-full py-2 pl-8 pr-4 w-full'/>
            </form>
          </li>
        </ul>
      </header>
      {/* Main */}
      <main className='lg:pl-[340px] p-8 pt-36'>
        <div className='grid grid-cols-1 md:grid-cols-6 gap-2'>
        {/* Game Portada */}
          <div className='md:col-span-5 relative'>
            <img src='https://cdn2.unrealengine.com/13br-evergreens-blue-newsheader-1920x1080-864336340.jpg' className='w-full h-[500px] object-cover lg:rounded-tl-xl lg:rounded-bl-xl'/>
            <h1 className='absolute text-3xl top-4 left-4 left- text-white font-bold'>Fornite</h1>
            <div className='absolute left-0 bottom-0 p-8 max-w-xl'>
              <p className='text-gray-200'>Update</p>
              <h2 className='text-4xl text-white font-extrabold mb-4'>The hunt is on in Fornite Chapter 2 - Season 5 : Zero Point.</h2>
              <button className='bg-blue-600 text-white py-4 px-6 rounded-xl flex items-center gap-2 text-lg group'>Play for free <RiArrowRightSLine className='group-hover:translate-x-1 transition-all'/></button>
            </div>
          </div>
         {/* Games List */}
          <div className='col-span-1 w-full h-[500px] bg-[#232323] lg:rounded-tr-xl lg:rounded-br-xl'>
            <ul className='p-4 flex flex-col gap-4'>
              <li>
                <a href='#' className='flex items-center gap-4 text-white text-lg'>
                  <img src='https://static-cdn.jtvnw.net/ttv-boxart/33214-272x380.jpg' className='w-20 h-full object-cover'/>
                  
                  <span className='md:hidden lg:block'>Fornite</span>
                </a>
              </li>
              <li>
                <a href='#' className='flex items-center gap-4 text-white text-lg'>
                  <img src='https://static-cdn.jtvnw.net/ttv-boxart/30921-272x380.jpg' className='w-20 h-full object-cover'/>
                  <span className='md:hidden lg:block'>Rocket League</span>
                </a>
              </li>
              <li>
                <a href='#' className='flex items-center gap-4 text-white text-lg'>
                  <img src='https://m.media-amazon.com/images/I/81mciIlvdTL._AC_SL1500_.jpg' className='w-20 h-full object-cover'/>
                  <span className='md:hidden lg:block'>Fifa 22</span>
                </a>
              </li>
              <li>
                <a href='#' className='flex items-center gap-4 text-white text-lg'>
                  <img src='https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_LeagueofLegends_RiotGames_S2_1200x1600-7fd64f0f7b674900bdd172967865d545' className='w-20 h-full object-cover'/>
                  <span className='md:hidden lg:block'>League of Legends</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Games Store */}
        <div className='mt-10 mb-6 flex items-center justify-between'>
          <div>
            <h5 className='text-gray-300 text-2xl'>Games on Sale</h5>
          </div>
          <div className='text-gray-400 text-3xl flex items-center gap-4'>
            <RiArrowLeftCircleLine  className='cursor-pointer'/>
            <RiArrowRightCircleLine className='cursor-pointer text-white'/>
          </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-5'>
            <div className='p-4'>
              <img src='https://m.media-amazon.com/images/M/MV5BMmVjMzkyYWMtNDNhNi00ZWI3LTgxNGUtODRkMWYxNjZmNDI5XkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_.jpg' className='w-full h-80 object-cover rounded-xl mb-3'/>
              <h3 className='text-gray-300 text-lg'>God of War</h3>
              <p className='text-gray-500 mb-3'>Action Games</p>
              <span className='text-white'>$8.15</span>
            </div>
            <div className='p-4'>
              <img src='https://www.mauricomputacion.com.ar/images/productos/17361.webp' className='w-full h-80 object-cover rounded-xl mb-3'/>
              <h3 className='text-gray-300 text-lg'>BIOSHOCK: THE COLLEC...</h3>
              <p className='text-gray-500 mb-3'>Action, RPG</p>
              <div className='flex gap-2 items-center '>
                <span className='bg-green-300 rounded-lg p-1 text-green-900'>-80%</span>
                <span className='text-gray-500 line-through'>$50</span>
                <span className='text-white'>$8.67</span>
              </div>
            </div>
            <div className='p-4'>
              <img src='https://image.api.playstation.com/cdn/UP0006/CUSA10483_00/7F2aA7ckAa0YROMt50NhDcwSaR31SE9a.png' className='w-full h-80 object-cover rounded-xl mb-3'/>
              <h3 className='text-gray-300 text-lg'>Unravel Two</h3>
              <p className='text-gray-500 mb-3'>Adventure Games</p>
              <span className='text-white'>$20.20</span>
            </div>
            <div className='p-4'>
              <img src='https://images.nintendolife.com/66ed3b2a5f5e2/tick-tock-a-tale-for-two-cover.cover_large.jpg' className='w-full h-80 object-cover rounded-xl mb-3'/>
              <h3 className='text-gray-300 text-lg'>Tick Tock: A Tale for Two</h3>
              <p className='text-gray-500 mb-3'>Indie Games</p>
              <div className='flex gap-2 items-center '>
                <span className='bg-green-300 rounded-lg p-1 text-green-900'>-60%</span>
                <span className='text-gray-500 line-through'>$3.47</span>
                <span className='text-white'>$1.39</span>
              </div>
            </div>
            <div className='p-4'>
              <img src='https://image.api.playstation.com/vulcan/ap/rnd/202007/3011/XX85ZND1RuA13iphoE1Qb7ex.png' className='w-full h-80 object-cover rounded-xl mb-3'/>
              <h3 className='text-gray-300 text-lg'>HITMAN 3</h3>
              <p className='text-gray-500 mb-3'>Action Games</p>
              <span className='text-white'>$23.99</span>
            </div>
        </div>
      </main>
    </div>
  )
}

export default App
