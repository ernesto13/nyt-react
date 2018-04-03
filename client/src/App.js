import React, { Component } from 'react';
import Input from "./components/Input";
import FormBtn from "./components/Form";
// import Panel from "./components/Panel";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import API from "./utils/API";
import './App.css';

class App extends Component {

    state = {
        articles: [],
        q: "",
        start_year: "",
        end_year: "",
    };


    loadArticles = () => {
        API.getArticles(this.state.articles)
            .then(res => {
                this.setState({ articles: res.data.docs, topic: "", start_year: "", end_year: "" })
                console.log(res.data.docs);
            })
            .catch(err => console.log(err));
    };




    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };
    handleInputSearch = event => {
        API.getArticles({
            q: this.state.q,
            start_year: this.state.start_year,
            end_year: this.state.end_year
        }).then((res) => {
            this.setState({
                articles: res.data
            });
        })
    }
    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.articles) {
            this.loadArticles();
        }
        
        API.getArticles(this.state.articles)
            .then(res => this.setState({ articles: res.data }))
            .catch(err => console.log(err));
    };


    render() {
        return (

            <
            div className = "App" >
            <
            Nav / >
            <
            header className = "App-header" >

            <
            h1 className = "App-title" > New York Times Article Scrubber < /h1>  < /
            header > <
            Jumbotron >

            <
            h4 > Title < /h4>     <
            Input value = { this.state.q }
            onChange = { this.handleInputChange }
            name = "q"
            placeholder = "Enter Title" /
            >

            <
            h4 > Start Year < /h4>   <
            Input value = { this.state.start_year }
            onChange = { this.handleInputChange }
            name = "start_year"
            placeholder = "Enter Year" /
            >
            <
            h4 > End Year < /h4>     <
            Input value = { this.state.end_year }
            onChange = { this.handleInputChange }
            name = "end_year"
            placeholder = "Enter end year" /
            >

            <
            FormBtn onClick = { this.handleFormSubmit }


            / >

            <
            /Jumbotron> 

            <
            Jumbotron >


            <
            h3 > Results < /h3>   <
            div > < /div> < /
            Jumbotron >

            <
            /div>
        );
    }
}

export default App;