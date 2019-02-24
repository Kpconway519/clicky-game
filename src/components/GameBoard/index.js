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

    defaultState = myChars

    componentDidUpdate() {
        this.winCheck()
    }

    handleClick = (key, clicked) => {
        const resetChars = this.defaultState
        let newCharArr = [...this.state.characters]        
        if (clicked === false) {


            // newCharArr[key].clicked = true
            newCharArr.map(function(char) {
                if (char.key === key) {
                    char.clicked = true
                }
            })
            //if newCharArr.key = key


            this.shuffleArray(newCharArr)

            this.setState({
            score: this.state.score + 1,
            characters: newCharArr
        })
 
        }else{
            alert('You Lose!')
            let resetArr = this.state.characters.map(function(char) {
                if (char) {
                   return {
                       clicked: false,
                       img: char.img,
                       key: char.key
                        }
                }
            })
            this.setState({
                characters: resetArr,
                score: 0,
                topScore: (this.state.score > this.state.topScore) ? this.state.score : this.state.topScore
            })
        }
  
        // console.log(this.winCheck)
    }

    winCheck = () => {
        if (this.state.score === 12) {
            alert('You Win!')
            let resetArr = this.state.characters.map(function(char) {
                if (char) {
                   return {
                       clicked: false,
                       img: char.img,
                       key: char.key
                        }
                }
            })
            console.log(resetArr)
            setInterval(() => {

                this.setState({
                    characters: resetArr,
                    score: 0,
                    topScore: resetArr.length
                })
            }, 1000)
        }
    }

    shuffleArray = (array) => {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }

        return this.setState({
            characters: array 
        })
    }


    render() {
        return(
            <div>
                <h3>Score: {this.state.score}</h3>
                <h3>Top Score: {this.state.topScore}</h3>
                <div style={{
                    className: 'container'
                }}>

                {this.state.characters.map((char) => {
                    return(<CharacterCard  
                        info={char.key}
                        clicked={char.clicked}
                        img={char.img}
                        handleClick={this.handleClick} />
                        )
                    })}
                    </div>
            </div>
    )
}
}



export default GameBoard



