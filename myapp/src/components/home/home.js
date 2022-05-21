import "./home.css"
import { Layout, Menu, Card } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined
} from '@ant-design/icons';
import { useEffect, useState } from 'react';
import getItem from "./getItems";
import { Data } from "./data";
// import { ShowContent } from "./showContent";
import { MenuItems } from "./menuItems";


const { Header, Sider, Content } = Layout;
const { Item, SubMenu } = Menu;
export default function Home() {

    const [collapsed, setCollapsed] = useState(false);
    const [menuItem, setMenuItem] = useState(null)
    const [key, setKey] = useState('null')

    const toggle = () => {
        setCollapsed(!collapsed)
    }
    // useEffect(() => {
    //     menuItem.map((item) => {
    //         console.log(item.submenus)
    //     })
    // }, [])
    const username = localStorage.getItem('username')
    const password = localStorage.getItem('password')

    if (!username || !password)
        return null

    const handleClick = (item) => {
        ShowContent(item);
    }
    const ShowContent = (item) => {
        if (item.submenus)
            return (
                <div className="submenus-container">
                    {(item.submenus).map((item) =>
                    (<div key={item.key}>
                        <figure>
                            {item.icon}
                        </figure>
                        <h4>{item.name}</h4>
                    </div>)
                    )
                    }
                </div>
            )
        else
            console.log("this item has not submenus")
    }

    // const items = [
    //     getItem('Option 1', '1', <VideoCameraOutlined />),
    //     getItem('Option 2', '2', <UploadOutlined />),
    //     getItem('User', 'sub1', <UserOutlined />, [
    //         getItem('Tom', '3'),
    //         getItem('Bill', '4'),
    //         getItem('Alex', '5'),
    //     ]),
    //     getItem('Team', 'sub2', <UploadOutlined />, [
    //         getItem('Team 1', '6'), getItem('Team 2', '8')]),
    //     getItem('Files', '9', <UserOutlined />),
    // ];

    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div
                    className="logo"
                />
                {/* <Menu mode="inline">
                    <Menu.Item>item 1</Menu.Item>
                    <Menu.Item>item 2</Menu.Item>
                    <div onClick={(e) => setMenuName()}>
                        <Menu.SubMenu title="sub menu" >
                            <Menu.Item>item 3</Menu.Item>
                        </Menu.SubMenu>
                    </div>
                </Menu> */}
                <Menu
                    mode="inline"
                    theme="dark"
                    style={{ height: '100%', borderRight: 0 }}

                >
                    {
                        MenuItems.map(item => {
                            return (
                                !item.submenus ?
                                    (<Menu.Item
                                        key={item.key}
                                        onClick={() => handleClick(item)}
                                    >
                                        {item.icon}
                                        <span>{item.name}</span>
                                    </Menu.Item>)
                                    :
                                    (
                                        <Menu.SubMenu
                                            onTitleClick={() => handleClick(item)}
                                            title={item.name}
                                            key={item.key}
                                            icon={item.icon}
                                        >
                                            {item.submenus.map((item) => {
                                                return (
                                                    <Menu.Item
                                                        key={item.key}
                                                    >
                                                        {item.icon}
                                                        <span>{item.name}</span>
                                                    </Menu.Item>
                                                )
                                            })}
                                        </Menu.SubMenu>

                                    )
                            )
                        })
                    }
                    {/* <Menu.Item key="1">
                        <UserOutlined />
                        <span>item 1</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <VideoCameraOutlined />
                        <span>item 2</span>
                    </Menu.Item>
                    <div key="3" style={{ backgroundColor: "#1890ff" }} className="subMenu-container" onClick={(e) => setMenuName()}>

                        <Menu.SubMenu icon={<UploadOutlined />} title="sub menu" >
                            <Menu.Item key="submenu1" onClick={(e) => console.log(e.domEvent.target.textContent)}>
                                <UserOutlined />
                                <span>item 3</span>
                            </Menu.Item>
                            <Menu.Item key="submenu2">
                                <MenuFoldOutlined />
                                <span>item 4</span>
                            </Menu.Item>
                            <Menu.Item key="submenu3">
                                <UserOutlined />
                                <span>item 5</span>
                            </Menu.Item>
                        </Menu.SubMenu>
                    </div> */}
                </Menu>
            </Sider>
            <Layout>
                <Header className="site-layout-background" style={{ padding: 0 }}>
                    {collapsed ?
                        <MenuUnfoldOutlined className='trigger'
                            onClick={toggle} /> :
                        < MenuFoldOutlined className='trigger'
                            onClick={toggle} />
                    }
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    <ShowContent />
                </Content>
            </Layout>
        </Layout>
        // <Layout hasSider className={style.publicLayout}>
        //     <Sider collapsed={collapsed} breakpoint='md' onBreakpoint={onBreakPoint}>
        //         <div
        //             className={style.logo}
        //             style={{ padding: collapsed ? '15px 25px 14px' : '18px 40px' }}
        //         >
        //             <Link href='/'>
        //                 <a>
        //                     <img
        //                         className='animate__animated animate__fadeInDown'
        //                         src={`/images/logo/${collapsed ? 'white-b-small.png' : 'bourseon-en.svg'
        //                             }`}
        //                         alt='Bourseon'
        //                     />
        //                 </a>
        //             </Link>
        //         </div>
        //         <Menu
        //             theme='dark'
        //             mode={menuMode}
        //             defaultSelectedKeys={[activeKey]}
        //             selectedKeys={[activeKey]}
        //             defaultOpenKeys={['content']}
        //         >
        //             {menuItems(permissions).map((item) =>
        //                 item?.submenus ? (
        //                     item?.submenus.filter((i) => !i.disabled).length ? (
        //                         <SubMenu key={item.key} title={item.name} icon={item.icon}>
        //                             {item.submenus
        //                                 .filter((i) => !i.disabled)
        //                                 .map((submenu) => (
        //                                     <Item
        //                                         disabled={submenu.disabled}
        //                                         key={submenu.path}
        //                                         icon={submenu.icon}
        //                                     >
        //                                         <Link href={submenu.path}>
        //                                             <a>{submenu.name}</a>
        //                                         </Link>
        //                                     </Item>
        //                                 ))}
        //                         </SubMenu>
        //                     ) : null
        //                 ) : (
        //                     !item.disabled && (
        //                         <Item disabled={item.disabled} key={item.path} icon={item.icon}>
        //                             <Link href={item.path}>
        //                                 <a>{item.name}</a>
        //                             </Link>
        //                         </Item>
        //                     )
        //                 )
        //             )}
        //         </Menu>
        //     </Sider>
        // </Layout>
    )
}