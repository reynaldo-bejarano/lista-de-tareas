import { useContext, useState } from 'react'
import { AppContext } from '../context/DataProvider'
import { AiOutlineCheckCircle } from 'react-icons/ai';



const Task = ({ item }) => {

    const { data, setData, setLocalStorage } = useContext(AppContext);
    const [onUpdate, setOnUpdate] = useState(false);
    const [textEdit, setTextEdit] = useState(item.task);

    const handleUpdate = (id) => {
        const temp = [...data];
        const item = temp.find(item => item.id === id);
        item.task = textEdit;
        setData(temp);
        setLocalStorage(temp);
        setOnUpdate(!onUpdate);
    }

    const handleDelete = (id) => {
        const temp = data.filter(item => item.id !== id);
        setLocalStorage(temp);
        setData(temp);
    }
    const handleChecked = (id) => {
        const temp = [...data];
        const item = temp.find(item => item.id === id);
        item.completed = !item.completed;
        setData(temp);
        setLocalStorage(temp);
    }


    return (
        <div
            className={item.completed
                ? 'bg-gray-500 px-10 py-5 rounded-md md:w-[900px] flex flex-wrap gap-5 justify-between items-center mb-2'
                : 'bg-slate-900 px-10 py-5 rounded-md md:w-[900px] flex flex-wrap gap-5 justify-between items-center mb-2'
            }
        >
            <div className='flex items-center gap-2'>
                {onUpdate
                    ?
                    (
                        <div className='flex items-center gap-2'>
                            <input
                                type="text"
                                className="input input-bordered input-info lg:w-[800px]"
                                value={textEdit}
                                onChange={(e) => setTextEdit(e.target.value)}
                                required
                            />
                            <button
                                onClick={() => handleUpdate(item.id)}
                            >
                                <AiOutlineCheckCircle className='text-4xl text-green-500' />
                            </button>
                        </div>
                    )
                    :
                    (
                        <>
                            <input
                                type="checkbox"
                                checked={item.completed}
                                onChange={() => handleChecked(item.id)}
                                className="checkbox checkbox-warning"
                            />
                            <p className={item.completed ? 'capitalize line-through' : "capitalize "}>{item.task}</p>
                        </>
                    )
                }

            </div>

            {onUpdate || item.completed ?
                null
                :
                <div className='flex items-center gap-5'>
                    <button className='btn bg-blue-800 hover:bg-blue-600 text-white ' onClick={() => setOnUpdate(!onUpdate)}>Actualizar</button>
                    <button className='btn bg-red-800 hover:bg-red-600' onClick={() => handleDelete(item.id)}>Eliminar</button>
                </div>
            }

        </div >
    )
}

export default Task