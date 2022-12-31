import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'


const BaseLayout = ({ children }) => {
    return (
        <>
            <div className="bg-base-100 drawer drawer-mobile">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col bg-slate-200">
                    <Navbar />
                    <div className="md:flex md:justify-center">
                        <main className="p-6 pt-10 max-w-[900px] ">
                            {children}
                        </main>
                    </div>
                </div>
                <Sidebar />
            </div>
        </>
    )
}

export default BaseLayout