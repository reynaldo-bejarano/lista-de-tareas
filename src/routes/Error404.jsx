import React from 'react'
import BaseLayout from '../layout/BaseLayout'

const Error404 = () => {
    return (
        <BaseLayout>
            <div className='text-center'>
                <h1 className='text-slate-900 text-3xl'>Error 404</h1>
                <h2 className='text-slate-900'>Page not found</h2>
            </div>
        </BaseLayout>
    )
}

export default Error404