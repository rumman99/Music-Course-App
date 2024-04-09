"use client";

import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";

const musicContent = [
{
    title: 'Discover Your Sound with Us: A Personal Journey in Music Mastery',
    description:
    'Embark on a musical journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.',
},
{
    title: 'Discover Your Sound with Us: A Personal Journey in Music Mastery',
    description:
    'Embark on a musical journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.',
},
{
    title: 'Discover Your Sound with Us: A Personal Journey in Music Mastery',
    description:
    'Embark on a musical journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.',
},
];

function WhyChooseUs() {
    return (
    <div>
        <StickyScroll content={musicContent} />
    </div>
    )
}

export default WhyChooseUs