import React, { Component } from 'react';

export default class ItemList extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            items: [
                {id: 1, label: "List Item 1"},
                {id: 2, label: "List Item 2"},
                {id: 3, label: "List Item 3"},
                {id: 4, label: "List Item 4"},
                {id: 5, label: "List Item 5"},
            ],
            hasErrored: false,
            isLoading: false
        }
    }

    render() {
        if(this.state.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        } else if(this.state.isLoading) {
            return <p>Loading…</p>;
        } else {
            return (
                <ul>
                    {
                        this.state.items.map((item) => (
                            <li key={item.id}>
                                {item.label}
                            </li>
                        ))
                    }
                </ul>
            );
        }
    }
}
