import React, { Component } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

const Backend = "http://localhost:2112/";

export default class Album extends Component {
    constructor (props) {
        super(props);
        this.state = { photos: [] };
    }

    render() {
        return (
            <div>
            </div>
        );
    }
}