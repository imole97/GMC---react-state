import React, { Component } from 'react'
import UserImage from '../profile.jpg'

export class Profile extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            person: {
            fullName: 'Imoleayo Adebanjo',
            bio: 'I love food and JavaScript',
            imgSrc: <img width = '400' height = '400'src = {UserImage} alt = ''/>,
            profession: 'JavaScript FullStack Developer'
           }
        }
    }
    
    render() {
        return (
            <div>
                <div>
                    {this.state.person.imgSrc}
                </div>
                <div>
                <h3>Full Name: {this.state.person.fullName}</h3>
                </div>
                <div>
                <h3>Bio: {this.state.person.bio}</h3>
                </div>
                <div>
                <h3>Profession: {this.state.person.profession}</h3>
                </div>
            </div>
        )
    }
}

export default Profile
