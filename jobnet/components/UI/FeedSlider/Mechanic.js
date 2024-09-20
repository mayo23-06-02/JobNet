import React, { useEffect, useState } from 'react';
import Card from './Card';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import P01 from '../../../assets/Images/1.jpg'
import P02 from '../../../assets/Images/2.jpg'
import P03 from '../../../assets/Images/3.jpg'
import P04 from '../../../assets/Images/4.jpg'
import P05 from '../../../assets/Images/5.jpg'
import P06 from '../../../assets/Images/6.jpg'


export default function Mechanic() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('/api/auth')
            .then((res) => res.json())
            .then((data) => {
                // Filter users by jobTitle "Cleaner"
                const cleaners = data.filter(user => user.jobTitle === "Mechanic");

                // Remove duplicate users based on email
                 // Remove duplicate users based on email
                 const uniqueCleaners = Array.from(new Set(cleaners.map(user => user.email)))
                 .map(email => {
                     return cleaners.find(user => user.email === email);
                 });

             setUsers(uniqueCleaners);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    const pictures = [P01, P02, P03, P04, P05, P06];

    function randomPicture() {
        const randomIndex = Math.floor(Math.random() * pictures.length);
        return pictures[randomIndex];
    }

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1280 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 1280, min: 600 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 600, min: 480 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 480, min: 0 },
            items: 2
        }
    };
    return (
        <div className='px-4 lg:px-0 space-y-4'>
        <p className='font-bold text-lg lg:text-2xl py-4 '>
            Automotive Mechanics
        </p>
            <Carousel
                responsive={responsive}
                swipeable={true}
                infinite={true}
            >
                {users.map((user, index) => (
                    <Card
                        key={index}
                        name={user.name}
                        surname={user.surname}
                        rating={user.rating}
                        email={user.email}
                        experience={user.yearsOfExperience} // Corrected typo
                        rateCharge={user.rateChargePerHour}
                        profilePicture={randomPicture()}
                        bio={user.shortBio}

                    />
                ))}
            </Carousel>
        </div>
    );
}
