import React from 'react'
import UseAddUser from '../../Hooks/Users/UseAddUser'
import UserForm from '../../Components/UserForm'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const AddUser = () => {

const { status, newUser, error, handleChange, handleCreateNewuser} = UseAddUser()

const handleFormSubmit = async (e) => {
    e.preventDefault()
    await handleCreateNewuser()
}

return (
    <>
        <ToastContainer 
            position='top-right'
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
        />

        <section className='flex flex-col items-center py-4 min-h-screen'>

            <h2 className='text-2xl font-bold my-4'> Add new profile </h2>

            <UserForm 
                status={status} 
                user={newUser} 
                error={error} 
                handleFormSubmit={handleFormSubmit} 
                handleChange={handleChange}
            >
            </UserForm>

        </section>
        
    </>
)
}

export default AddUser