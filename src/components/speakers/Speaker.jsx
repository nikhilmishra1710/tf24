import React from 'react'
import Card from '../speakerCards/Card'
import CardComponent from '../speakerCards/Card2'
import Card3 from '../speakerCards/Card3'
import './Speaker.css'

const Speaker = () => {
    return (
        <div className='speakers-container'>
            <div className='speaker-title'>Speakers</div>
            <div className='speakers'>
                <Card3 img={"/eventcards/crispr.png"} number={'1'} tags={'HR'} name={'Elon musk'} boxType1={'A'} boxType2={'B'}/>
                <Card3 img={"/eventcards/crispr.png"} number={'1'} tags={'HR'} />
                <Card3 img={"/eventcards/crispr.png"} number={'1'} tags={'HR'} />
                <Card3 img={"/eventcards/crispr.png"} number={'1'} tags={'HR'} />
                <Card3 img={"/eventcards/crispr.png"} number={'1'} tags={'HR'} />
                <Card3 img={"/eventcards/crispr.png"} number={'1'} tags={'HR'} />
            </div>
        </div>
    )
}

export default Speaker