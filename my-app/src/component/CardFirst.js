import logo from '../logo.svg';
import React, { Component } from "react";

var likeCount = 0;
var hateCount = 0;

class CardFirst extends Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: 0,
            hates: 0
        };
        this.increaseLikes = this.increaseLikes.bind(this);
        this.increaseHates = this.increaseHates.bind(this);
        this.resetLikesHates = this.resetLikesHates.bind(this);
    }

        increaseLikes(){
            likeCount++;
            this.setState({
                likes: likeCount
            })
            
        }

        increaseHates(){
            hateCount++;
            this.setState({
                hates: hateCount
            })
            
        }

        resetLikesHates(){
            this.setState({
                likes: 0,
                hates: 0
            })
        }

        render() {
            return (
                <div className="card text-start" >
                    <img src={logo} className="App-logo" alt="logo" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="mx-5 btn btn-success" onClick={this.increaseLikes}>Like {this.state.likes}</a>
                        <a href="#" className="mx-5 btn btn-danger" onClick={this.increaseHates}>Hate {this.state.hates}</a>
                        <a href="#" className="mx-5 btn btn-info" onClick={this.resetLikesHates}>Reset</a>
                    </div>
                </div>
            );
        }
    }
        export default CardFirst;

