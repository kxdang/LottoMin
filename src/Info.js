
import React, { Component } from 'react'
import './Info.css'
export default class Info extends Component {


    render() {
        return (
            <div className="Info">
                <p className="Info-question">What is LottoMin?</p>
                <p className="Info-anwser">What if Ontario's popular lottery game company had something called LottoMin? An opposite of LottoMax, what would it be like? I made a virtual simulation game for playing this lottery game!</p>
                <ul className="Info-list">
                    <li className="Info-item">A single ticket would cost $70 million dollars</li>
                    <li className="Info-item">You win something with no monetary value but I haven't thought about this yet!</li>
                    <li className="Info-item">Maybe the earnings from LottoMin goes to changing communities or charities</li>
                </ul >

                <p className="Info-question">Why start with $160.4 billion dollars?</p>
                <p className="Info-answer">Jeff Bezo's net worth in 2020 is $116.4 billion USD dollars. When converted to CAD, it would be $160.4 billion dollars. I wanted to see many times I can play with this amount and surprisingly found that it takes a long time to deplete while playing LottoMin</p>
            </div >
        )
    }
}
