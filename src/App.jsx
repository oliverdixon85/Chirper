import React, { Component } from 'react';
import Jumbotron from './Jumbotron';
import ChirpTimeline from './ChirpTimeline';

let data = []

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chirp: '',
            chirps: [],
        };
    }

    componentDidMount() {
        this.setState({ chirps: data });
    }

    submitChirp(e) {
        e.preventDefault();

        let chirps = this.state.chirps;
        let chirp = {
            chirp: this.state.chirp
        };
        

        chirps.unshift(chirp);

        this.setState({ 
            chirp: '',
            chirps
         });
    }



    render() {
        return (
            <div className="container fluid">
                <div className="row">
                    <div className="col md-12">
                        <Jumbotron />
                    </div>
                </div>
                <div className="row">
                    <div className="col md-12">
                        <form className="border border-dark p-3">
                            {/* <div className="form-group">
                                <label for="formGroupExampleInput">Username</label>
                                <input type="text" className="form-control"  placeholder="Username" />
                            </div> */}
                            <div className="form-group">
                                <label for="formGroupExampleInput2">Your Chirp</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Penny for your thoughts"
                                    value={this.state.chirp}
                                    onChange={e => this.setState({ chirp: e.target.value })}
                                />
                            </div>
                            <button onClick={e => this.submitChirp(e)}
                                type='submit' class='btn btn-fluid'>Chirp!</button>
                        </form>
                    </div>
                </div>

                <ChirpTimeline chirps={this.state.chirps} />

            </div>
        );
    }
}

export default App;