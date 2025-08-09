'use client';

const UserRegistrationPage = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const data = { name: form.displayName.value, email: form.email.value, pass: form.password.value };
        console.log(data)
    };


    return (
        <div className='bg-gray-300'>
            <div className='container-width px-3 md:px-6 py-16'>
                <form onSubmit={handleSubmit} className='max-w-xl mx-auto text-center p-16 bg-white rounded-lg shadow-lg'>
                    <h1 className='mb-8 font-rajdhani font-extrabold text-4xl primary border-b border-primary pb-3'>Register User</h1>
                    <div className='space-y-4'>
                        <div className='font-poppins'>
                            <label className='block font-semibold text-lg text-start my-1.5 ps-0.5'>Name <span className='text-red-600 font-medium'>*</span></label>
                            <input className='border border-gray-500 outline-0 px-6 py-2 rounded w-full' type="text" name="displayName" />
                        </div>
                        <div className='font-poppins'>
                            <label className='block font-semibold text-lg text-start my-1.5 ps-0.5'>Email <span className='text-red-600 font-medium'>*</span></label>
                            <input className='border border-gray-500 outline-0 px-6 py-2 rounded w-full' type="email" name="email" />
                        </div>
                        <div className='font-poppins'>
                            <label className='block font-semibold text-lg text-start my-1.5 ps-0.5'>Password <span className='text-red-600 font-medium'>*</span></label>
                            <input className='border border-gray-500 outline-0 px-6 py-2 rounded w-full' type="password" name="password" />
                        </div>
                        <button className="font-semibold text-xl px-6 py-2.5 rounded-md text-white bg-primary w-full cursor-pointer" type="submit">Register</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserRegistrationPage;