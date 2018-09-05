import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { API_URL_1 } from '../supports/api-url/apiurl';
import { connect } from 'react-redux';
import { DropdownButton, MenuItem } from 'react-bootstrap';

class Avengers extends Component {
    state = { seatListA: [], seatListB: [], bookList: [], scheduleState: 0}

    componentWillMount() {
        this.getSeatList();
    }

    getSeatListA = () => {
        axios.get(API_URL_1 + '/seatsA')
        .then((response) => {
            console.log(response);
            this.setState({ seatListA: response.data, scheduleState: 0})
        })
        .catch((err) => {
            alert("Error");
            console.log(err);
        })
    }

    getSeatListB = () => {
        axios.get(API_URL_1 + '/seatsB')
        .then((response) => {
            console.log(response);
            this.setState({ seatListB: response.data, scheduleState: 0})
        })
        .catch((err) => {
            alert("Error");
            console.log(err);
        })
    }

    getSeatList = () => {
        this.getSeatListA();
        this.getSeatListB();
    }
    
    renderSchedule = () => {
        this.setState({ scheduleState: 1})
    }

    renderSeatListA = () => {
        const list = this.state.seatListA.map((item) => {
            return this.renderCheckStatus(item) 
        }); 
        return list;
    }

    renderSeatListB = () => {
        const list = this.state.seatListB.map((item) => {
            return this.renderCheckStatus(item) 
        }); 
        return list;
    }

    renderCheckStatus = (item) => {
        if(item.status === "available"){
            return(
                <input ref={item.id} type="checkbox" value="available" onClick={() => this.onCheckBoxClick(item.id)} />
            );
        }
        else {
            return (
                <input ref={item.id} type="checkbox" value="booked" onClick={() => this.onCheckBoxClick(item.id)} checked={true} disabled/>
            );
        }
    }  
    
    onCheckBoxClick = (item) => {
        for(let index in this.state.bookList){
            if(this.state.bookList[index] == item) {
                this.state.bookList.splice(item, 1); 
                return this.setState({ })
            }
        } 

        if ( this.state.bookList.length == 0){
            this.setState({bookList: this.state.bookList.concat([item])})
        }

        else {
            this.setState({bookList: this.state.bookList.concat([item])})
        } 
    }

    updateBookUser = () => {
        axios.put(API_URL_1 + "/users/" + this.props.userLogin.id, { 
            id: this.props.userLogin.id,
            username: this.props.userLogin.username,
            email: this.props.userLogin.email,
            password: this.props.userLogin.password,
            bookingStatus: this.state.kursiBooked
        })
    } 

    renderBookingSeat = () => {
        if(this.state.scheduleState == 1){
        return (
            <div style={{paddingTop: "50px"}} className="container">
                <div className="row">
                    <div className="box">
                        <div className="box-header">
                            <div id="left" >
                                <img src="https://i.annihil.us/u/prod/marvel/movies/infinitywar/images/share.jpg" width="200px" align="left" id="margin-bottom" />
                                <div id="margin-left"> 
                                    <h1>Avengers Infinity War</h1>
                                    <i>Thrilling Ending</i>
                                    <br/>
                                    <a href="https://www.imdb.com/title/tt4154756/"> <input type="button" className="btn btn-default" value="IMDB"/> </a>
                                    <DropdownButton title="Schedule" className="dropdown-default">
                                        <MenuItem eventKey="1" onClick={() => this.renderSchedule()} >Morning</MenuItem>
                                        <MenuItem eventKey="2" onClick={() => this.renderSchedule()}>Evening</MenuItem>
                                    </DropdownButton> <br/><br/>
                                    <h3 className="layarmorning"> Layar </h3> <br/><br/>
                                        {this.renderSeatListA()}<br/>
                                        <div style={{marginLeft: "1px"}}>{this.renderSeatListB()}</div>
                                    <h3>Total Harga : Rp 0.</h3> <br/>
                                    <input type="button" className="btn btn-success" value="Checkout" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
        }
        return(
            <div style={{paddingTop: "50px"}} className="container">
            <div className="row">
                <div className="box">
                    <div className="box-header">
                        <div id="left" >
                            <img src="https://i.annihil.us/u/prod/marvel/movies/infinitywar/images/share.jpg" width="200px" align="left" id="margin-bottom" />
                            <div id="margin-left"> 
                                <h1>Avengers Infinity War</h1>
                                <i>Thrilling Ending</i>
                                <br/>
                                <a href="https://www.imdb.com/title/tt4154756/"> <input type="button" className="btn btn-default" value="IMDB"/> </a>
                                <DropdownButton title="Schedule" className="dropdown-default">
                                    <MenuItem eventKey="1" onClick={() => this.renderSchedule()} >Morning</MenuItem>
                                    <MenuItem eventKey="2" onClick={() => this.renderSchedule()}>Evening</MenuItem>
                                </DropdownButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }

    render() {
        if(this.props.auth.username !== ""){
            return (
                this.renderBookingSeat()
            );
        }
        return <Redirect to="/login" />;
    }
}

const mapStatetoProps = (state) => {
    return { auth: state.auth };
}

export default connect(mapStatetoProps)(Avengers);