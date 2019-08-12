import React, { useState } from 'react';
import { connect } from 'react-redux';
import uuidv1 from 'uuid';
import { addArticle } from '../actions/index';

function mapDispatchToProps(dispatch) {
    return {
        addArticle: article => dispatch(addArticle(article))
    };
}

const ConnectedForm = (props) => {
    const [title, setTitle] = useState('');

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const id = uuidv1();
        props.addArticle({ title, id });
        setTitle("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="title" >Title</label>
                <input
                    type="text"
                    className="form-control"
                    id="title"
                    value={title}
                    onChange={handleChange}
                />
            </div>
            <button type="submit" className="btn btn-success btn-lg" >
                Save
            </button>
        </form>
    );
};

const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form;