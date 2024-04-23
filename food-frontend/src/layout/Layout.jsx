import Sidebar from './Sidebar'

const Layout = (props) => {
  return (
    <>
      <div className='w-full h-auto border-b-2 border-stone'>
        <div className="p-4 flex items-center bg-[#F1F2F7] w-[272px]">
          <div className="grid mr-4">
            <span className="bg-[#5A67BA] rounded-3xl w-[25px] text-white font-600 text-center">G</span>
          </div>
          <span className="block font-sans text-xl text-[#5A67BA] text-900 text-[11px] leading-[11px] font-bold">Food CRUD
          </span>
        </div>
        <div className='w-3/4 h-full'></div>
      </div>
      <div className='w-full flex items-center gap-4'>
          <Sidebar/>
          <div className='w-full min-h-screen'>{props.children}</div>
      </div>
    </>
  )
}

export default Layout