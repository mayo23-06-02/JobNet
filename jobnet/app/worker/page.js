import MainHeader from '@/components/Header/MainHeader'
import WorkerMain from '@/components/Worker/WorkerMain'
import React from 'react'

function Worker() {
    return (
        <div>
            <MainHeader />
            <main className="">
                <div className="max-w-[1280px] mx-auto md:px-12 lg:px-0 ">
                    <div>
                        <WorkerMain />
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Worker