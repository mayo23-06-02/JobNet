import React, { useState } from 'react'
import Logo from '../../Reusable/Logo/Logo'
import Input from '../../Reusable/Input/Input'
import Checkbox from '../../Reusable/Chekbox/Checkbox'
import Button from '../../Button/Button'
import { BsApple, BsGoogle } from "react-icons/bs";
import Link from 'next/link'

export default function RegisterServiceProviders() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [location, setLocation] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [verifyPassword, setVerifyPassword] = useState('');
    const [nextSection, setNextSection] = useState(true)
    const [loader, setLoader] = useState(false);


    function toggleNextSection(params) {
        if (nextSection) {
            setNextSection(false)
        } else setNextSection(true)
    }


    const genderOptions = [
        { value: '', label: 'Select Gender' },
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
        { value: 'other', label: 'Other' },
    ];

    function handleSubmitThirdForm(e) {
        e.preventDefault();
        if (password === verifyPassword) {
            let res = fetch("/api/auth", {
                method: "POST",
                body: JSON.stringify({
                    "name": firstName,
                    "surname": lastName,
                    "email": email,
                    "username": username,
                    "password": password,

                }),
            }).then(async (response) => {
                const result = await response.json();
                router.push('../../login')
            });
        } else {
            alert("Passwords don't match")
        }
    }
    return (
        <div className=' items-center h-screen w-full'>
            <div className='space-y-8'>
                <div className='flex-col space-y-4 w-full items-center justify-center flex'>
                    <Logo />
                    <div className=' flex  pl-8  space-x-4 bg-gray-200 rounded-xl items-center border '>
                        <p className='font-bold'>Are you a Service Provider?</p>
                        <button className=' scale-110 bg-black text-sm text-white py-2 px-4 rounded-xl  font-bold'>
                            Register Here
                        </button>
                    </div>
                </div>
                <div className='space-y-8 flex items-center flex-col border border-black/10 shadow rounded-2xl py-8 px-6'>
                    <div className='w-full flex-col items-center justify-center flex space-y-2'>
                        <p className='font-bold text-2xl'>Register</p>
                        <p className='text-gray-600'>Please enter your details to register</p>
                    </div>
                    <div className='flex flex-col space-y-8 w-full'>
                        <div className='flex flex-col space-y-6 w-full'>
                            {nextSection ?
                                <div className='space-y-2'>
                                    <Input label={"First Name"} value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                                    <Input label={"Last Name"} value={lastName} onChange={(e) => setLastName(e.target.value)} />
                                    <Input label={"Physical Address"} />
                                    <Select
                                        label="Gender"
                                        options={genderOptions}
                                        value={gender}
                                        onChange={handleGenderChange}
                                    />
                                </div>
                                :
                                <div className='space-y-2' >
                                    <Input label={"Email Address"} value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                                    <Input label={"Phone Number"} value={lastName} onChange={(e) => setLastName(e.target.value)} />
                                    <Input label={"Password"} value={password} onChange={(e) => setPassword(e.target.value)} />
                                    <Input label={"Confirm Password"} value={verifyPassword} onChange={(e) => setVerifyPassword(e.target.value)} />
                                </div>
                            }
                        </div>
                        <div className='w-full space-y-8'>
                            <Button label={` ${nextSection ? "Continue" : "Register"}`} onClick={toggleNextSection} />
                        </div>
                    </div>
                    <div>
                        <Link href={'../../login'}>
                            <p className='text-gray-400'>Already have an account? <span className='font-bold hover:underline text-black cursor-pointer'>Login</span></p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
