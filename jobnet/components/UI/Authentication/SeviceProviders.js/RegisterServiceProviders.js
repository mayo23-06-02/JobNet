import React, { useState } from 'react'
import Logo from '../../Reusable/Logo/Logo'
import Input from '../../Reusable/Input/Input'
import Checkbox from '../../Reusable/Chekbox/Checkbox'
import Button from '../../Button/Button'
import { BsApple, BsGoogle } from "react-icons/bs";
import Link from 'next/link'
import Select from '../../Reusable/SelectInput/SelectInput'
import GenderSelection from '../../Reusable/RadioBox/GenderSelection'
import RadioButton from '../../Reusable/RadioBox/RadioBox'
import { useRouter } from 'next/navigation'

export default function RegisterServiceProviders() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [location, setLocation] = useState('');
    const [password, setPassword] = useState('');
    const [dob, setDob] = useState("")
    const [bio, setBio] = useState("")
    const [serviceA, setServiceA] = useState("")
    const [serviceB, setServiceB] = useState("")
    const [serviceC, setServiceC] = useState("")
    const [avgPrice, setAvgPrice] = useState("")
    const [verifyPassword, setVerifyPassword] = useState('');
    const [passwordError, setPasswordError] = useState('Passwords do not match');
    const [nextSection, setNextSection] = useState(true)
    const [loader, setLoader] = useState(false);
    const router = useRouter();

    function toggleNextSection(params) {
        if (nextSection) {
            setNextSection(false)
        } else {
            setNextSection(true)
        }
    }

    const genderOptions = [
        { value: '', label: 'Select Gender' },
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
        { value: 'other', label: 'Other' },
    ];

    function handleSubmit() {
        if (password === verifyPassword) {
            let res = fetch("/api/auth-service", {
                method: "POST",
                body: JSON.stringify({
                    "name": firstName,
                    "surname": lastName,
                    "email": email,
                    "password": password,
                    "location": location,
                    "gender": gender,
                    "phoneNumber": phoneNumber,
                    "dob": dob,
                    "bio": bio,
                    "serviceA": serviceA,
                    "serviceB": serviceB,
                    "serviceC": serviceC,
                    "avgPrice": avgPrice

                }),
            }).then(async (response) => {
                const result = await response.json();
                router.push('../../home')
            });
        } else {
            alert("Passwords don't match")
        }
    }
    return (
        <div className=' items-center lg:h-screen w-full'>
            <div className='space-y-8'>

                <div className='space-y-8 flex items-center flex-col lg:border border-black/10 lg:shadow lg:rounded-2xl rounded-3xl py-8 px-6'>
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
                                    <Input label={"Email Address"} type={'email'} value={email} onChange={(e) => setEmail(e.target.value)} />
                                    <Input label={"Phone Number"} type='number' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                                    <Input label={"Physical Address"} value={location} onChange={(e) => setLocation(e.target.value)} />
                                    <div className='space-y-2'>
                                        <label className="text-gray-400 px-2 text-sm lg:text-base">Gender</label>
                                        <div className='flex space-x-4 items-center px-4'>
                                            <RadioButton
                                                label="Male"
                                                name="gender"
                                                value="male"
                                                checked={gender === 'male'}
                                                onChange={(e) => setGender(e.target.value)}
                                            />
                                            <RadioButton
                                                label="Female"
                                                name="gender"
                                                value="female"
                                                checked={gender === 'female'}
                                                onChange={(e) => setGender(e.target.value)}
                                            />
                                            <RadioButton
                                                label="Other"
                                                name="gender"
                                                value="other"
                                                checked={gender === 'other'}
                                                onChange={(e) => setGender(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <Input label={"Date of Birth"} type={'date'} value={dob} onChange={(e) => setDob(e.target.value)} />

                                </div>
                                :
                                <div className='space-y-2' >
                                    <div className='space-y-2'>
                                        <label className="text-gray-400 px-2 text-sm lg:text-base">Short Bio</label>
                                        <textarea label={"Short Bio"} className='border border-black/10 h-24 placeholder:text-black  lg:rounded-xl rounded-2xl w-full text-sm lg: py-2 px-4' type={'text'} value={bio} onChange={(e) => setBio(e.target.value)} />
                                    </div>
                                    <Input label={"Service A"} value={serviceA} onChange={(e) => setServiceA(e.target.value)} />
                                    <Input label={"Service B"} value={serviceB} onChange={(e) => setServiceB(e.target.value)} />
                                    <Input label={"Service C"} value={serviceC} onChange={(e) => setServiceC(e.target.value)} />
                                    <Input label={"Average Pricing"} type='number' value={avgPrice} onChange={(e) => setAvgPrice(e.target.value)} />
                                    <Input label={"Password"} type={'password'} value={password} onChange={(e) => setPassword(e.target.value)} />
                                    <Input label={"Confirm Password"} type={'password'} value={verifyPassword} onChange={(e) => setVerifyPassword(e.target.value)} />
                                </div>
                            }
                        </div>
                        <div className='w-full space-y-8'>
                            {nextSection ? <Button label={` ${nextSection ? "Continue" : "Register"}`} onClick={toggleNextSection} />
                                : <Button showLoader={true} label={'Register'} onClick={handleSubmit} />}
                        </div>
                    </div>
                    <div className='text-sm lg:text-base'>
                     
                    </div>
                </div>
            </div>
        </div>
    )
}
