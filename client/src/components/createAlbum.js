import React, { Component } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

const Backend = "http://localhost:2112/";

export default class CreateAlbum extends Component {
    constructor (props) {
        super(props);

        this.onImageChange = this.onImageChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = { photos: [] };
    }

    onImageChange(e) {
        var numPhotos = e.target.files.length;
        var i = 0;
        var _photos = [];
        while (i < numPhotos) {
            _photos.push(e.target.files[i]);
            i++;
        };
        this.setState({
            photos: _photos,
        });
    }

    onSubmit(_e) {
        const config = {
            headers: { 'content-type': 'multipart/form-data' }
        }
        var url = Backend + 'photo/upload';

        var data = new FormData();
        var numPhotos = this.state.photos.length;
        var i = 0;

        while (i < numPhotos) {
            let file = this.state.photos[i];
            data.append('images[' + i + ']', file, file.name);
            i++;
        }

        console.log(data);

        axios
            .post(url, data, config)
            .then((res) => console.log(res))
            .catch(function (err) { console.log(err) });

        this.setState({
            photos: []
        });

        this.props.history.push("/");
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={this.onImageChange}
                />
                <input type="submit" value="Upload" className="btn btn-primary" />
            </form>
        );
    }
}