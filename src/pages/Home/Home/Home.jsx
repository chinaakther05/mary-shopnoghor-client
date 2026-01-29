import React from 'react';
import Banner from './bannar/Bannar';
import WhyChooseUs from './WhyChooseUs/WhyChooseUs';
import ImageStrip from './imageStrip/ImageStrip';
import VideoSection from './videoSection/VideoSection';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <ImageStrip></ImageStrip>
           <WhyChooseUs></WhyChooseUs>
           <div className='flex gap-6 overflow-x-auto py-4'>
            <VideoSection videoUrl="https://www.facebook.com/reel/1610796519922067" />
           <VideoSection videoUrl="https://www.facebook.com/reel/1524023695341412" />
           <VideoSection videoUrl="https://www.facebook.com/reel/920763920374476/?s=single_unit" />
           </div>
           


        </div>
    );
};

export default Home;