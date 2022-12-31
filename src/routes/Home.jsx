import { useContext } from 'react'
import { AppContext } from '../context/DataProvider'
import Formulario from '../components/Formulario'
import BaseLayout from '../layout/BaseLayout'
import Task from '../components/Task'


const Home = () => {
  const { data } = useContext(AppContext);

  return (
    <BaseLayout>

      <Formulario />

      {data.map(item => (
        <Task key={item.id} item={item} />
      ))}

    </BaseLayout>
  )
}

export default Home