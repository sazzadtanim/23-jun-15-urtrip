import CompanyInfo from './sidebar/CompanyInfo'
import UserSection from './sidebar/UserSection'
import SubMenu from './sidebar/SubMenu'
import Menu from './sidebar/Menu'
import { sidebarItems } from 'offlineData/sidebarList'

function Sidebar(): JSX.Element {
  return (
    <aside className='sidebar left-0 top-0 z-10 hidden h-full w-14 select-none flex-col  border-none p-4 text-white drop-shadow-xl transition-all duration-300 hover:w-64 md:fixed  md:flex md:w-64'>
      <div className='h-full overflow-y-auto rounded-2xl bg-base-200 px-3 py-4 shadow-xl'>
        <CompanyInfo />
        <UserSection />
        <ul className='space-y-4 font-medium'>
          {sidebarItems.map((menu, index) =>
            menu.submenu ? (
              <SubMenu
                key={index}
                title={menu.title}
                url={menu.url}
                Icon={menu?.Icon}
                submenu={menu.submenu}
              />
            ) : (
              <Menu
                Icon={menu?.Icon}
                key={index}
                title={menu.title}
                url={menu.url}
              />
            )
          )}
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar
