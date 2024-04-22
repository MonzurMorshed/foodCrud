import Sidebar from './Sidebar'

const Layout = (props) => {
  return (
    <div className='flex items-center gap-4'>
        <Sidebar/>
        {props.children}
    </div>
  )
}

export default Layout