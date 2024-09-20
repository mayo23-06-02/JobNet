"use client";
import MainHeader from "@/components/Header/MainHeader";
import HomeMain from "@/components/UI/Home/Categories/HomeMain";
import SearchBar from "@/components/UI/SearchBar/SearchBar";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BiSearch, BiSolidStar, BiStar } from "react-icons/bi";
import SP from '../../assets/Images/SP.png'
import SP_SM from '../../assets/Images/SP-SM.png'
import Image from "next/image";
import { getCookie } from "cookies-next";

export default function Search() {
    const router = useRouter();

    const [workers, setWorkers] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredWorkers, setFilteredWorkers] = useState([]);

    useEffect(() => {
        fetch('/api/auth')
            .then((res) => res.json())
            .then((data) => {
                // Remove duplicate users based on email
                const uniqueWorkers = Array.from(new Set(data.map(user => user.email)))
                    .map(email => {
                        return data.find(user => user.email === email);
                    });

                setWorkers(uniqueWorkers);
                setFilteredWorkers(uniqueWorkers);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    useEffect(() => {
        // Filter workers based on search query
        const results = workers.filter(worker =>
            Object.values(worker).some(value =>
                value.toString().toLowerCase().includes(searchQuery.toLowerCase())
            )
        );
        setFilteredWorkers(results);
    }, [searchQuery, workers]);

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    function getRandomNumber() {
        // Generate a random number between 1 and 5
        let randomNum = Math.random() * (5 - 1) + 1;
        // Round the number to 2 decimal places
        return randomNum.toFixed(2);
    }
    function getGoldStars(rating) {
        // Full star component
        const fullStar = <BiSolidStar className="text-green-500" />;
        // Half star component
        const halfStar = <BiSolidStar className="text-green-500 opacity-50" />;

        // Calculate the number of full stars
        const fullStars = Math.floor(rating);
        // Check if there's a half star
        const hasHalfStar = rating % 1 !== 0;

        // Create the star array
        let stars = [];
        for (let i = 0; i < fullStars; i++) {
            stars.push(fullStar);
        }
        if (hasHalfStar) {
            stars.push(halfStar);
        }

        return stars;
    }

    useEffect(() => {
      const query = getCookie('query')
      if (query) {
        setSearchQuery(query)
      }
    }, [])
    



    return (
        <div>
            <MainHeader />
            <main className=" space-y-4 ">
                <div className="max-w-[1280px] space-y-4  mx-auto md:px-12 lg:px-0 ">
                    <div>
                        <div className='py-6 relative flex items-center justify-center'>

                            <Image src={SP} width={1250} height={300} className='hidden lg:inline' />
                            <Image src={SP_SM} width={800} height={300} className='lg:hidden' />

                            <span className='absolute space-y-2 lg:space-y-6 w-full px-6 flex-col flex items-center'>
                                <p className='font-bold text-xl lg:text-4xl'>Search for local resources</p>
                                <div className='flex w-full items-center justify-center lg:max-w-2xl relative'>
                                    <input
                                        type="text"
                                        value={searchQuery}
                                        onChange={handleSearch}
                                        placeholder='Search here'
                                        className=' w-full   border border-black/10 placeholder:text-black  lg:rounded-xl rounded-full h-10 text-sm lg:h-14 py-2 px-4' />
                                    <div className='absolute right-4'>
                                        <BiSearch />
                                    </div>
                                </div>

                            </span>
                        </div>
                    </div>
                    <div className="grid px-6 font-bold text-gray-500 text-sm grid-cols-6 gap-5 py-4 " >
                        <p>Full Name</p>
                        <p>Phone Number</p>
                        <p>Location</p>
                        <p>Price</p>
                        <p>Rating</p>
                        <p>Service Type</p>

                    </div>
                    <div className="px-6">
                        {filteredWorkers.map(worker => (
                            <div className="grid grid-cols-6 gap-5 py-4 border-b" key={worker.email}>
                                <div className="flex font-bold text-gray-800 items-center space-x-3">
                                    <p>{worker.name}</p>
                                    <p>{worker.surname}</p>
                                </div>
                                <p>{worker.phoneNumber}</p>
                                <p className="text-gray-500">{worker.location}</p>
                                <div className="flex text-gray-800">
                                <p className="font-bold ">E{worker.rateChargePerHour}</p>
                                <p className="text-gray-500">/hr</p>
                                </div>
                                <div className="flex items-center space-x-2">
                                    {getGoldStars(getRandomNumber())}
                                </div>
                                <p className="text-blue-600 hover:underline">{worker.jobTitle}</p>
                                {/* Add other worker details as needed */}
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}
