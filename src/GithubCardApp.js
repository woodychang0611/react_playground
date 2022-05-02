import './GithubCardApp.css';
import Game from './Game';
import React from 'react';
import { render } from '@testing-library/react';

   
class InputForm extends React.Component {
    state ={
        userName:''
    }

    handleSubmit = async (event)=>{
        event.preventDefault()
        const response = await fetch(`https://api.github.com/users/${this.state.userName}`);
        if (response.ok){
            this.props.onSubmit(await response.json())
        }else{
            alert('Incorrect user name')
        }
        this.setState({userName:''})
    }

    render() {
        return (
            <form action=''  onSubmit={this.handleSubmit} className='GithubCardList'>
                <input type='text'  value={this.state.userName}
                onChange={event=>this.setState({userName:event.target.value})}
                placeholder='Github username'>                    
                </input>
                <button>Add User</button>
            </form>
        )
    }
}


class CardList extends React.Component {
    render() {
        return (
            <div className='GithubCardList'>
                {this.props.profiles.map((d)=><Card key={d.id} {...d}/>)}
            </div>
        )
    }
}


class Card extends React.Component {
    render() {
        const profile = this.props
        return (
            <div className="GithubCard">
                <div>{profile.name}</div>
                <img src={profile.avatar_url}></img>
            </div>
        )
    }
}

class GithubCardApp extends React.Component {
    constructor(props){
        super(props)
        this.state={
            profiles:[],
        }
    }

    addProfile= (profile)=>{
        this.setState(oldSState => (
            {profiles:[...oldSState.profiles,profile]})
        )
    }

    render() {
        return (
            <div className="GithubCardApp">
                <InputForm  onSubmit={this.addProfile} />
                <div className='header'>
                    {this.props.title}
                </div>
                <CardList profiles={this.state.profiles} />
            </div>
        );
    }
}

export default GithubCardApp;