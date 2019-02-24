import React, { Component } from "react";
import "./style.css";
import CharacterCard from "../CharacterCard/index"
import myChars from '../../assets/characters'





class GameBoard extends Component {
    state = {
        characters: myChars,
        score: 0,
        topScore: 0
        }

    defaultState = Object.freeze(myChars)

    componentDidUpdate() {
        this.winCheck()
    }

    handleClick = (key, clicked) => {
        const resetChars = this.defaultState
        let newCharArr = [...this.state.characters]        
        if (clicked === false) {
            newCharArr[key].clicked = true
            this.setState({
            score: this.state.score + 1,
            characters: newCharArr
        })
 
        }else{
            alert('You Lose!')
            this.setState({
                characters: this.defaultState,
                score: 0,
                topScore: (this.state.score > this.state.topScore) ? this.state.score : this.state.topScore
            })
        }
  
        console.log(this.winCheck)
    }

    winCheck = () => {
        const resetChars = this.defaultState
        if (this.state.score === this.state.characters.length) {
            alert('You Win!')
            console.log(resetChars)
            this.setState({
                characters: this.defaultState,
                score: 0,
                topScore: this.state.characters.length 
            })
        }
    }

    render() {
        return(
            <div>
                <h3>Score: {this.state.score}</h3>
                <h3>Top Score: {this.state.topScore}</h3>
                <CharacterCard characters={this.state.characters} key={this.state.characters.key} handleClick={this.handleClick} />
            </div>
    )
}
}



export default GameBoard



