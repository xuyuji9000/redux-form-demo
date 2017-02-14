import React, { Component } from "react";
import ContactForm from "./ContactForm";

class ContactPage extends Component
{
    handleSubmit = (values) => {
        console.log(values);
    }

    render() {
        return (
            <ContactForm onSubmit={this.handleSubmit}></ContactForm>
        );
    }
}

export default ContactPage;
