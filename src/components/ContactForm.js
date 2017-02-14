import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class ContactForm extends Component 
{
    render() 
    {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <Field name="firstName" component="input" type="text"></Field>
                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <Field name="lastName" component="input" type="text"></Field>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <Field name="email" component="input" type="text"></Field>
                </div>
                <button type="submit">Submit</button>
            </form>
        );
    }
}

ContactForm = reduxForm({
    form: "contact"
})(ContactForm);

export default ContactForm;
