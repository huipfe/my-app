import React from 'react'
import PropTypes from 'prop-types';
import './Profiles.css';


const Profile = ({ user }) => {
    const { firstname, lastname, location, age, picture, interests } = user;

    return (
        <div className="profile">
            <div className="picture"> 
                <img src={picture} alt={`${firstname} ${lastname}`} />
            </div>
            <div className="info">
                <h1 class="Name">{`${firstname} ${lastname}`}</h1>
                <h2>{`${age} ans`}</h2>
                <h3 class="Location">{`${location.city}, ${location.country}`}</h3>
                <ul >
                    {interests.map((interest) => (
                        <li key={interest}
                            className="Interest"
                        >
                            
                            {interest}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

Profile.propTypes = {
    user: PropTypes.shape({
        firstname: PropTypes.string.isRequired,
        lastname: PropTypes.string.isRequired,
        location: PropTypes.shape({
            country: PropTypes.string.isRequired,
            city: PropTypes.string.isRequired
        }).isRequired,
        age: PropTypes.number.isRequired,
        picture: PropTypes.string.isRequired,
        interests: PropTypes.arrayOf(PropTypes.string).isRequired
    }).isRequired
};

export default Profile;

// Correction

// import React from 'react';
// import PropTypes from 'prop-types';
// import './Profiles.css';

// const UserProfile = ({ firstname, lastname, location, age, picture, interests }) => {
//     return (
//         <div className="User">
//             <img
//                 className="User__Picture"
//                 src={picture}
//                 alt="user"
//             />
//             <div className="User__Information">
//                 <h2 className="User__Name">{firstname} {lastname} ({age})</h2>
//                 <span className="User__Location">{location.city} ({location.country})</span>
//                 {interests.map((interest) => (
//                     <span
//                         key={interest}
//                         className="User__Interest"
//                     >
//                         {interest}
//                     </span>
//                 ))}
//             </div>
//         </div>
//     );
// };

// UserProfile.propTypes = {
//     firstname: PropTypes.string,
//     lastname: PropTypes.string,
//     location: PropTypes.exact({
//         country: PropTypes.string,
//         city: PropTypes.string
//     }),
//     age: PropTypes.number,
//     picture: PropTypes.string,
//     interests: PropTypes.arrayOf(PropTypes.string)
// };

// export default UserProfile;