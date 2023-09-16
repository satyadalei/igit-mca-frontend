import React from 'react'

const AdminLayOut = ({ children }) => {
    return (
        <section className='page_section' >
            <div>
                <h1>Hello I am Admin Nav</h1>
                {children}
            </div>
        </section>
    )
}

export default AdminLayOut