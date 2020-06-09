import React from 'react';
import profile from './ProfileData.module.css';
import Preloader from "../../Preloader/Preloader";
import userPhoto from "../../../Assets/Images/user-man.png";
import ProfileStatus from "../ProfileStatus/ProfileStatus";
// import Profile from "../Profile";

const ProfileData = (props) => {
    const welcome = "Hello! I am a new user of this social network.";

    if(!props.profile.profile) {
        return <Preloader />
    }
        return <>
            <div className={profile.profile}>
            <img src={props.profile.profile.photos.small != null ? props.profile.profile.photos.small : userPhoto} alt=""/>
            <div className={profile.data}>
                <h1>{props.profile.profile.fullName}</h1>
                <p>VK: {props.profile.profile.contacts.vk != null ? props.profile.profile.contacts.vk : "null"}</p>
                <p>Job: {props.profile.profile.lookingForAJobDescription != null ? props.profile.profile.lookingForAJobDescription : "null"}</p>
                <p>GitHub: {props.profile.profile.contacts.github != null ? props.profile.profile.contacts.github : "null"}</p>
                <p>Web Site: {props.profile.profile.contacts.website != null ? props.profile.profile.contacts.website : "null"}</p>
            </div>
        </div>
            <ProfileStatus profile={props.profile} status={props.status} updateStatus={props.updateStatus} welcome={welcome}/>
        </>
}

export default ProfileData;
