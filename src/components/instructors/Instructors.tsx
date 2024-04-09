'use client'

import React from 'react';
import { WavyBackground } from '../ui/wavy-background';
import { AnimatedTooltip } from '../ui/animated-tooltip';

const people= [
    {
        id: 1,
        name: 'Ridhan Alam',
        designation: 'Bassist',
        image: 'https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/357788232_1278661793018367_859390790938787630_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=fMTnA0tiTs4Ab59FzFl&_nc_ht=scontent.fdac14-1.fna&oh=00_AfBtlTVjFOXpahvHwwD4qZ_zeD3Pklyut8AixGaP-use1Q&oe=661B9994'
    },
    {
        id: 2,
        name: 'Tasnim Alam',
        designation: 'Guitarist',
        image: 'https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/315289946_1134834774067737_3265100496728757360_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=9PKS6H9VbRoAb4NPWxP&_nc_ht=scontent.fdac14-1.fna&oh=00_AfAfUgveXjR7XVpcoeaHGVIpgZPL0TDMc5f0L4oDQTw1qw&oe=661BB171'
    },
    {
        id: 3,
        name: 'Drummer',
        designation: 'Guitarist',
        image: 'https://scontent.fdac14-1.fna.fbcdn.net/v/t1.6435-9/74617611_389728181911737_2255272724240793600_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=9rPRBhWJbC8Ab76H3wh&_nc_ht=scontent.fdac14-1.fna&oh=00_AfD5mdN-ct8-8q5B_-L9N80ynEcCZ6p9yXNOkoV-dmUCag&oe=663D3222'
    }
]

const Instructors = () => {
    return (
        <div className='relative h-[40rem] overflow-hidden flex items-center justify-center'> 
            <WavyBackground className='w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full'>
                <h2 className='text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8'>Meet Our Instructors</h2>
                <p className='text-base md:text-lg text-white text-center mb-4'>Discover the talented professionals who will guide your musical journey.</p>
                <div className='flex flex-row justify-center items-center mb-10 w-full'>
                    <AnimatedTooltip items={people}/>
                </div>
            </WavyBackground>  
        </div>
    );
};

export default Instructors;