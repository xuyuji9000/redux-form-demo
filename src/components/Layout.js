import React from "react";

import { connect } from "react-redux";

import { fetchUser } from "../actions/userActions";
import { fetchTweets } from "../actions/tweetsActions";
import ContactPage from "./ContactPage";

@connect((store) => {
    return {
    };
})
export default class Layout extends React.Component {
    render() {
        return (
            <div>
                <ContactPage></ContactPage>
            </div>
        );
    }
}
