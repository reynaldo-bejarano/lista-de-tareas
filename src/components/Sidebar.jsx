import React from 'react'
import { RiHome2Line } from 'react-icons/ri';
import { MdOutlineTaskAlt } from 'react-icons/md';
import { SlUser } from 'react-icons/sl';
import { NavLink } from 'react-router-dom';






const Sidebar = () => {
    return (
        <div className="drawer-side bg-slate-900 text-white">
            <label
                htmlFor="my-drawer"
                className="drawer-overlay bg-slate-900 text-white"
            />
            <div className="menu p-4 overflow-y-auto w-[19rem] bg-slate-900 text-white ">
                <div className="w-fit">
                    <a href="/">
                        <div className="avatar transition ease-in-out w-1/2 hover:scale-[102%] block m-auto mt-3 mb-6">
                            <div>
                                <img
                                    className="mask mask-circle"
                                    src="https://images.pexels.com/photos/10832933/pexels-photo-10832933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="profile image"
                                />
                            </div>
                        </div>
                    </a>
                </div>
                <div className='text-center'>
                    <h2 className='mb-5'>Está aplicación te permite agregar tareas para hacer durante tu día.</h2>
                    <p>Podrás completar tareas, actualizarlas o eliminarlas.</p>
                </div>
            </div>
        </div>

    )
}

export default Sidebar