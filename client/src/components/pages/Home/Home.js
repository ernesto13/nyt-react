// import React, {Component} from "react";
// import DeleteBtn from "../../components/DeleteBtn";
// import Jumbotron from "../../components/Jumbotron";
// import API from "../../utils/API";
// import {Link} from "react-router-dom";
// import {Col, Row, Container} from "../../components/Grid";
// import {List, ListItem} from "../../components/List";
// import {Input, FormBtn} from "../../components/Form";

/*class Home extends Component {
    state = {
        articles: [],
        title: "",
        start_year: "",
        end_year: ""
    };

    componentDidMount() {
        this.loadBooks();
    }

    loadBooks = () => {
        API
            .getBooks()
            .then(res => this.setState({books: res.data, title: "", author: "", synopsis: ""}))
            .catch(err => console.log(err));
    };

    deleteBook = id => {
        API
            .deleteBook(id)
            .then(res => this.loadBooks())
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.title && this.state.author) {
            API
                .saveBook({title: this.state.title, author: this.state.author, synopsis: this.state.synopsis})
                .then(res => this.loadBooks())
                .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-6">
                        <Jumbotron>
                            <h1>New York Times Article Search</h1>
                        </Jumbotron>
                        <form>
                            <Input
                                value={this.state.title}
                                onChange={this.handleInputChange}
                                name="title"
                                placeholder="Title (required)"/>
                            <Input
                                value={this.state.author}
                                onChange={this.handleInputChange}
                                name="author"
                                placeholder="Author (required)"/>
                            <TextArea
                                value={this.state.synopsis}
                                onChange={this.handleInputChange}
                                name="synopsis"
                                placeholder="Synopsis (Optional)"/>
                            <FormBtn
                                disabled={!(this.state.author && this.state.title)}
                                onClick={this.handleFormSubmit}>
                                Submit Book
                            </FormBtn>
                        </form>
                    </Col>
                    <Col size="md-6 sm-12">
                        <Jumbotron>
                            <h1>Books On My List</h1>
                        </Jumbotron>
                        {this.state.books.length
                            ? (
                                <List>
                                    {this
                                        .state
                                        .books
                                        .map(book => (
                                            <ListItem key={book._id}>
                                                <Link to={"/books/" + book._id}>
                                                    <strong>
                                                        {book.title}
                                                        by {book.author}
                                                    </strong>
                                                </Link>
                                                <DeleteBtn onClick={() => this.deleteBook(book._id)}/>
                                            </ListItem>
                                        ))}
                                </List>
                            )
                            : (
                                <h3>No Results to Display</h3>
                            )}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Home;*/


import React, { Component } from 'react';
import Panel from '../../Components/Panel';
import API from '../../utils/API';

class Home extends Component {
    state = {
        articles: [],
        q: "",
        start_year: "",
        end_year: "",
    };

    handleChange = (event) => {
        console.log(event.target.value);
        var name = event.target.name
        var value = event.target.value
        this.setState({
            [name]: value
        });
    }
    handleSearch = () => {
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

    render() {
        return ( <
            div className = "container-fluid" >
            <
            Panel title = "Search" >
            <
            div className = "input-group" >
            <
            h4 className = "text-center" > Topic < /h4> <
            input className = "input form-control"
            value = { this.state.q }
            name = "q"
            onChange = { this.handleChange }
            /> <
            /div> <
            div className = "input-group" >
            <
            h4 className = "text-center" > Start Year < /h4> <
            input className = "input form-control"
            value = { this.state.start_year }
            name = "start_year"
            onChange = { this.handleChange }
            /> <
            /div> <
            div className = "input-group" >
            <
            h4 className = "text-center" > End Year < /h4> <
            input className = "input form-control"
            value = { this.state.end_year }
            name = "end_year"
            onChange = { this.handleChange }
            /> <
            /div> <
            div className = "input-group" >
            <
            button className = "btn btn-primary "
            onClick = { this.handleSearch } >
            Search < /button> <
            /div> <
            /Panel> <
            Panel title = { "Results" } >
            <
            div > inside results < /div> <
            /Panel> <
            /div>
        );
    }
}

export default Home;