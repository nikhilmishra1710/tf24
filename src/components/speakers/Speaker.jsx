import React from 'react'
import Card from '../speakerCards/Card'
import CardComponent from '../speakerCards/Card2'
import Card3 from '../speakerCards/Card3'
import './Speaker.css'

const Speaker = () => {
    return (
        <div className='speakers-container' id='speakers'>
            <div className='speaker-title bstyle-bold uppercase'>Speakers</div>
            <div className='speakers'>
                {/* <Card3 img={"speakercards/Kanwar_Singh.jpeg"}  name={'CFO & Vice President of Finance at Oracle India Pvt. Ltd'} number={'Mr. Kanwar Singh'} boxType1={'A'} boxType2={'B'}/> */}
                <Card3 img={"speakercards/Sanjay_Arora.png"}  name={'Founder & CEO at Shells Advertising '} number={' Dr. Sanjay Arora'}/>
                <Card3 img={"speakercards/Gajendra_purohit.jpeg"}  name={'Founder and CEO of Mathscare'} number={'Dr. Gajendra Purohit'}/>
                <Card3 img={"speakercards/Roshni_Chhabra.png"}  name={' Senior Success Manager at Sprinklr'} number={'Ms. Roshni Chhabra'} />
                {/* <Card3 img={"speakercards/Salin_Agrawal.jpeg"}  name={'CA, Finance Strategy maker at CRED'} number={' Mr. Salin Agarwal'}/> */}
                <Card3 img={"speakercards/Keerti_Purswani.jpg"}  name={' Founder of Educosys'} number={' Ms. Keerti Purswani'}/>
                <Card3 img={"speakercards/Abhishek_Mungoli.jpg"}  name={' Data Scientist at InMobi, an AdTech firm'} number={' Mr. Abhishek Mungoli '}/>
            </div>
        </div>
    )
}

export default Speaker