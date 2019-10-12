import React, {Component} from 'react';
import './App.css';

class Profile extends Component{
    render(){
       // console.log('props from profile.jsx', this.props)
        let artist = {name:'', followers: {href: '', total: ''}}

        if (this.props.artist !== null) {
            artist =this.props.artist;
            console.log(artist)
        }
;      return(
          <div>
              <div>
                  {artist.name}
              </div>
               {artist.genres}

              <div> 
              </div>

        
          </div>


      )
      
     

    }


    


}
export default Profile;