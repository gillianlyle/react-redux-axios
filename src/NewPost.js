import React, { Component } from 'react';

class NewPost extends Component {

    state = {
        title: '',
        body:''
    }

    handleInputChange = e => {
        this.setState({
        [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.title.trim() && this.state.body.trim()) {
        console.log(this.state);
        this.handleReset();
        }
    };

    handleReset = () => {
        this.setState({
        title: '',
        body: ''
        });
    };

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="title"
                        name="title"
                        onChange={this.handleInputChange}
                        value={this.state.title}
                    />
                    <br /><br />
                    <textarea
                        cols="19"
                        rows="8"
                        placeholder="body"
                        name="body"
                        onChange={this.handleInputChange}
                        value={this.state.body}>
                    >
                    </textarea>
                    <br /><br />
                    <button type="submit">Add Post</button>
                    <button type="button" onClick={this.handleReset}>Reset</button>
                </form>
            </>
        )
    }
}

export default NewPost