import React, { Component} from 'react';
import './App.css';
import Profile from './Profile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SpotifyWebApi from 'spotify-web-api-js';

import {FormGroup, FormControl, InputGroup} from 'react-bootstrap';
import logo from "./logo.svg";


const spotifyApi = new SpotifyWebApi();
let artistdata = 'holder'

// Get the hash of the url
const hash = window.location.hash
  .substring(1)
  .split("&")
  .reduce(function(initial, item) {
    if (item) {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
    }
    return initial;
  }, {});
window.location.hash = "";



class App extends Component{

  
    constructor(props){
        super(props);
        this.state = {
          artists: {},
            query:'',
        value:'',

       };
        let _token = hash.access_token;
        console.log(_token)
        if (_token) {
            spotifyApi.setAccessToken(_token);
          }
          this.state = {
            loggedIn: _token ? true : false,
            artists: this

          }
          this.search =this.search.bind(this);
        
          

    }


search(){
  
    
spotifyApi.searchArtists(this.state.query)
    // search artists 
.then(data => {
 // console.log('Search artists', data) ;
  artistdata = data.artists.items[0];
  this.setState({artists: artistdata}); //update state with artist object

  
  //console.log('', artistdata) ;

}, function(err) {
  console.error(err);
});



 console.log(this.state)
 
 
}
    render(){
      
      
        return(
           
               
       <div className ="App">
             <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <div><a href='http://localhost:8888'> Login to Spotify </a>
                  </div>
                  </header>
             <div>
        <div className ="App-title">Music Master</div>
             <FormGroup>
                <InputGroup>
                <FormControl
                 type ="text"
                 placeholder="search for an artist.."
               // value={this.state.value}
                onChange= {event => {this.setState({query: event.target.value,
                    value: event.target.value})}}
                 onKeyPress = {event =>{
                     if (event.key === 'Enter'){
                         
                         this.search()
                     }
                 } }
                 />
                  <InputGroup.Append onClick ={() => 
                    this.search()}>
                  <InputGroup.Text id="basic-addon2"> <FontAwesomeIcon icon="search" /></InputGroup.Text>

                  </InputGroup.Append>

                </InputGroup>
                 
             </FormGroup>
             <Profile
             artist={this.state.artists}

             />
         
             <div className ="Profile">
                 <div>Artist Picture</div>
                 <div>Artist Name</div>

             </div>
             <div className="Gallery">
                 Gallery
             </div>

             
            </div> 
            </div>
              );
              }
          
          
         

    
    
}

export default App;
