"use client";
import MainHeader from "@/components/Header/MainHeader";
import HomeMain from "@/components/UI/Home/Categories/HomeMain";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
    const router = useRouter();
 
    const cleanerData = [
        {
            "name": "Thulani",
            "surname": "Mkhize",
            "job_title": "Mechanic",
            "job_category": "Automotive Services",
            "date_of_birth": "1986-05-15",
            "years_of_experience": 10,
            "short_bio": "Thulani is a skilled mechanic with over ten years of experience in automotive repair and maintenance. He specializes in diagnosing and fixing engine issues, ensuring that vehicles run smoothly and efficiently. Thulani is known for his attention to detail and dedication to customer satisfaction.",
            "services_offered": [
                {
                    "service_name": "Engine Diagnostics",
                    "description": "Comprehensive diagnostics to identify engine problems."
                },
                {
                    "service_name": "Brake Repair",
                    "description": "Expert brake repair services to ensure safety on the road."
                },
                {
                    "service_name": "Oil Changes",
                    "description": "Quick and efficient oil change services to keep your engine healthy."
                }
            ],
            "client_reviews": [
                {
                    "review": "Thulani fixed my car quickly and efficiently. Highly recommend!",
                    "rating": 5
                },
                {
                    "review": "Very professional and knowledgeable mechanic.",
                    "rating": 4
                }
            ],
            "phone_number": "+268 7601 2345",
            "email": "thulani.mkhize.mechanic@example.com",
            "rate_charge_per_hour": 150,
            "location": "Mbabane",
            "gender": "Male",
            "password": "ThulaniMechanic123!",
            "profile_picture": "https://example.com/images/thulani_mechanic.jpg"
        },
        {
            "name": "Zanele",
            "surname": "Dlamini",
            "job_title": "Mechanic",
            "job_category": "Automotive Services",
            "date_of_birth": "1990-07-20",
            "years_of_experience": 5,
            "short_bio": "Zanele is a dedicated mechanic with five years of experience in automotive services. She specializes in tire changes and alignments, ensuring that vehicles are safe and road-ready. Zanele is committed to providing honest and effective service.",
            "services_offered": [
                {
                    "service_name": "Tire Rotation",
                    "description": "Tire rotation services to extend tire life and improve performance."
                },
                {
                    "service_name": "Alignment Services",
                    "description": "Professional wheel alignment to enhance vehicle handling."
                },
                {
                    "service_name": "Battery Replacement",
                    "description": "Quick and efficient battery replacement service."
                }
            ],
            "client_reviews": [
                {
                    "review": "Zanele was fantastic! She got my car back on the road quickly.",
                    "rating": 5
                },
                {
                    "review": "Very skilled and friendly. Will hire again!",
                    "rating": 4
                }
            ],
            "phone_number": "+268 7802 3456",
            "email": "zanele.dlamini.mechanic@example.com",
            "rate_charge_per_hour": 140,
            "location": "Manzini",
            "gender": "Female",
            "password": "ZaneleMechanic456!",
            "profile_picture": "https://example.com/images/zanele_mechanic.jpg"
        },
        {
            "name": "Sibusiso",
            "surname": "Mthethwa",
            "job_title": "Mechanic",
            "job_category": "Automotive Services",
            "date_of_birth": "1988-12-10",
            "years_of_experience": 8,
            "short_bio": "Sibusiso is an experienced mechanic with eight years in the automotive repair industry. He has a strong background in both domestic and foreign vehicle repairs, specializing in electrical systems and diagnostics.",
            "services_offered": [
                {
                    "service_name": "Electrical Diagnostics",
                    "description": "Diagnosis and repair of electrical issues in vehicles."
                },
                {
                    "service_name": "Transmission Repair",
                    "description": "Expert repair services for automatic and manual transmissions."
                },
                {
                    "service_name": "Routine Maintenance",
                    "description": "Comprehensive routine maintenance services for all vehicle types."
                }
            ],
            "client_reviews": [
                {
                    "review": "Sibusiso fixed my transmission quickly and affordably.",
                    "rating": 5
                },
                {
                    "review": "Very reliable mechanic; highly recommend his services.",
                    "rating": 4
                }
            ],
            "phone_number": "+268 7903 4567",
            "email": "sibusiso.mthethwa.mechanic@example.com",
            "rate_charge_per_hour": 155,
            "location": "Lobamba",
            "gender": "Male",
            "password": "SibusisoMechanic789!",
            "profile_picture": "https://example.com/images/sibusiso_mechanic.jpg"
        },
        {
            "name": "Nomsa",
            "surname": "Khumalo",
            "job_title": "Mechanic",
            "job_category": "Automotive Services",
            "date_of_birth": "1993-04-05",
            "years_of_experience": 4,
            "short_bio": "Nomsa is a passionate mechanic with four years of experience in automotive repair. She is known for her expertise in engine repairs and her commitment to customer service, ensuring that every client leaves satisfied.",
            "services_offered": [
                {
                    "service_name": "Engine Repair",
                    "description": "Comprehensive engine repair and tuning services."
                },
                {
                    "service_name": "Fluid Changes",
                    "description": "Oil, coolant, and transmission fluid changes."
                },
                {
                    "service_name": "Safety Inspections",
                    "description": "Thorough vehicle safety inspections to ensure roadworthiness."
                }
            ],
            "client_reviews": [
                {
                    "review": "Nomsa is very knowledgeable and fixed my car in no time!",
                    "rating": 5
                },
                {
                    "review": "Great service and very friendly. Highly recommend!",
                    "rating": 4
                }
            ],
            "phone_number": "+268 8004 5678",
            "email": "nomsa.khumalo.mechanic@example.com",
            "rate_charge_per_hour": 145,
            "location": "Nhlangano",
            "gender": "Female",
            "password": "NomsaMechanic202!",
            "profile_picture": "https://example.com/images/nomsa_mechanic.jpg"
        },
        {
            "name": "Bongani",
            "surname": "Tsabedze",
            "job_title": "Mechanic",
            "job_category": "Automotive Services",
            "date_of_birth": "1995-08-14",
            "years_of_experience": 3,
            "short_bio": "Bongani is an enthusiastic mechanic with three years of experience in automotive services. He specializes in quick repairs and maintenance, ensuring vehicles are safe and running smoothly.",
            "services_offered": [
                {
                    "service_name": "Quick Repairs",
                    "description": "Fast turnaround on minor repairs and maintenance."
                },
                {
                    "service_name": "Tire Services",
                    "description": "Tire installations and repairs for all vehicle types."
                },
                {
                    "service_name": "Inspection Services",
                    "description": "Pre-purchase inspections to ensure vehicle reliability."
                }
            ],
            "client_reviews": [
                {
                    "review": "Bongani provided excellent service for my car maintenance.",
                    "rating": 5
                },
                {
                    "review": "Very efficient and friendly mechanic. Will hire again!",
                    "rating": 4
                }
            ],
            "phone_number": "+268 8905 6789",
            "email": "bongani.tsabedze.mechanic@example.com",
            "rate_charge_per_hour": 135,
            "location": "Siteki",
            "gender": "Male",
            "password": "BonganiMechanic303!",
            "profile_picture": "https://example.com/images/bongani_mechanic.jpg"
        }
    ]

    // useEffect(() => {
    //     const submitData = async () => {
    //         for (let i = 0; i < cleanerData.length; i++) {
    //             try {
    //                 const res = await fetch("/api/auth", {
    //                     method: "POST",
    //                     headers: {
    //                         "Content-Type": "application/json"
    //                     },
    //                     body: JSON.stringify({
    //                         name: cleanerData[i].name,
    //                         surname: cleanerData[i].surname,
    //                         jobTitle: cleanerData[i].job_title,
    //                         jobCategory: cleanerData[i].job_category,
    //                         dateOfBirth: cleanerData[i].date_of_birth,
    //                         yearsOfExperience: cleanerData[i].years_of_experience,
    //                         shortBio: cleanerData[i].short_bio,
    //                         servicesOffered: cleanerData[i].services_offered,
    //                         clientReviews: cleanerData[i].client_reviews, // Initially empty
    //                         phoneNumber: cleanerData[i].phone_number,
    //                         email: cleanerData[i].email,
    //                         rateChargePerHour: cleanerData[i].rate_charge_per_hour,
    //                         location: cleanerData[i].location,
    //                         gender: cleanerData[i].gender,
    //                         password: cleanerData[i].password,
    //                         profilePicture: cleanerData[i].profile_picture
    //                     })
    //                 });

    //                 if (res.ok) {
    //                     await res.json();
                        
    //                 } else {
    //                     const errorData = await res.json();
    //                     alert(errorData.message || "An error occurred during registration.");
    //                 }
    //             } catch (error) {
    //                 console.error("Error:", error);
    //                 alert("An error occurred. Please try again.");
    //             }
    //         }
    //     };

       
    //         submitData();
        
    // }, []);


    return (
        <div>
            <MainHeader />
            <main className="">
                <div className="max-w-[1280px] mx-auto md:px-12 lg:px-0 ">
                    <div>
                        <HomeMain />
                    </div>
                </div>
            </main>
        </div>

    );
}
