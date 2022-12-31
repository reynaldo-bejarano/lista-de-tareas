import { useContext } from 'react'
import { AppContext } from '../context/DataProvider';
import { nanoid } from 'nanoid'


const Formulario = () => {

    const { data, setData, setLocalStorage } = useContext(AppContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const datos = { task: e.target.task.value, completed: false, id: nanoid() }
        const temp = [...data, datos]
        setData(temp)
        setLocalStorage(temp);
    }


    return (
        <>
            <div className='border-slate-700 border-2 px-10 md:w-[900px] py-5 bg-slate-800 rounded-md mb-5'>
                <form onSubmit={handleSubmit}>
                    <div className="form-control w-full mb-5 ">
                        <label className="label">
                            <span className="label-text">¿Cual es la tarea?</span>
                        </label>
                        <input type="text" name='task' className="input input-bordered input-info w-full" required />
                    </div>

                    <button type='submit' className='btn w-full  bg-teal-700 text-white hover:bg-white hover:text-slate-800'>Agregar</button>
                </form>
            </div>
        </>

    )
}

export default Formulario