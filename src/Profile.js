import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import DashboardNav from './DashboardNav'
import SideBar from './SideBar'
import { useDispatch, useSelector } from 'react-redux'
import { kidsDetailsAction } from './Action'
import Loader from './Loader'
import IsEmpty from './IsEmpty'

const Profile = () => {
    const ids = useParams();

    const dispatch= useDispatch()
    const kidsDetails = useSelector(state => state.kidsDetails)
    const {loading,error,kid} = kidsDetails

    const userLogin = useSelector(state=> state.userLogin)
    const {userInfo} = userLogin

    const [kiddo, setKiddo] = useState([]);

    const [talents, setTalents] = useState([]);

    
    useEffect(()=>{
        if(ids.id){
            dispatch(kidsDetailsAction(ids.id))
        }else if(userInfo){
            dispatch(kidsDetailsAction(userInfo.id))
        }
    },[ids,userInfo])
    useEffect(()=>{
        if (kid && !IsEmpty(kid) && kid.social_media){
            const kidos = `${kid.social_media}`.split("[***]")
            let emptyObj =[]
            kidos.map(x => {
                const m = x.split("[**]")
                const objs = {}
                objs[m[1]]=m[0]
                emptyObj.unshift(objs)
            })
            setKiddo(emptyObj)
            const talento = `${kid.talents}`.split("[***]")
            setTalents(talento)
        }
        
    },[kid])
    const convertVideo = x=>{
        let m = x.split(".com/watch?v=")
        if (m.length > 1){
            return m[1]
        }else{
            m = x.split(".com/shorts/")
            if (m.length > 1){
                return m[1]
            }else{
                return false
            }
        }
    }
    return (
        <div>
            <div>
                <SideBar />
            </div>
            <div className='pt_1'></div>
            <div className='mainContent shadow'>
                <DashboardNav />
                <div className='mainContentDashboardsubs'>
                    {loading && <Loader />}
                    {kid && !IsEmpty(kid) ?
                        <>
                            <div className="mainContentDashboardsubsContainer">
                                <div className='profileImageContainer'>
                                    <img src={`${process.env.REACT_APP_BASE_URL}${kid.profile_photo}`} alt={kid.name} />
                                </div>
                                <div className="profileInfoContainer">
                                    <div className="font_38 bold8 border-bottom pb_3">
                                        {kid.name}
                                    </div>
                                    <div className="pt_3">
                                        <span className="bold8 font_20">
                                            Appearance:
                                        </span>
                                        <div className='pt_1'>
                                            {kid.gender} <span className="bold8">* eyes</span> {kid.eye_color} <span className="bold8"> * hair</span> {kid.hair_color} <span className="bold8">* height</span> {kid.height}' <span className="bold8">* weight</span> {kid.weight} lbs <span className="bold8">* dress size</span> {kid.dress_size} 
                                        </div>
                                    </div>
                                    <div className='pt_2'>
                                        <span className="bold8 font_20 pr_1">Age:</span>
                                        {kid.age}
                                    </div>
                                    <div className="pt_2">
                                        <span className="bold8 font_20 pr_1">
                                            Ethnicity: 
                                        </span>
                                        {kid.ethnicity}
                                    </div>
                                    {kid.social_media &&
                                        <div className="pt_2">
                                            <span className="bold8 font_20 pr_1">
                                                Social Media: 
                                            </span>
                                            <div className='pt_2 socialMdea'>
                                                {kiddo.map(x=>{
                                                    if (x["fb"]){
                                                        return(
                                                            <a href={x["fb"]} key={x["fb"]}>
                                                                <img src="https://img.icons8.com/color/35/null/facebook-new.png"/>
                                                            </a>
                                                        )
                                                    }else if(x["instagram"]){
                                                        return(
                                                            <a href={x["instagram"]} key={x["fb"]}>
                                                                <img src="https://img.icons8.com/ios/35/null/instagram-new--v1.png"/>
                                                            </a>
                                                        )
                                                    }else if(x["website"]){
                                                        return(
                                                            <a href={x["website"]} key={x["fb"]}>
                                                                <img src="https://img.icons8.com/color/35/null/domain--v1.png"/>
                                                            </a>
                                                        )
                                                    }else if(x["linkedin"]){
                                                        return(
                                                            <a href={x["linkedin"]} key={x["fb"]}>
                                                                <img src="https://img.icons8.com/fluency/35/null/linkedin.png"/>
                                                            </a>
                                                        )
                                                    }else if(x["youtube"]){
                                                        return(
                                                            <a href={x["youtube"]} key={x["fb"]}>
                                                                <img src="https://img.icons8.com/ios-filled/35/FF0000/youtube-squared.png"/>
                                                            </a>
                                                        )
                                                    }else if(x["imdb"]){
                                                        return(
                                                            <a href={x["imdb"]} key={x["fb"]}>
                                                                <img src="https://img.icons8.com/color/35/null/imdb.png"/>
                                                            </a>
                                                        )
                                                    }
                                                })}
                                                
                                                
                                                
                                                
                                            </div>
                                        </div>
                                    }
                                </div>
                                <div className="padProfilexds">
                                    {talents && 
                                        <>
                                            <div>
                                                <span className="bold8 font_20">
                                                    Talents:
                                                </span>
                                            </div>
                                            <div className='pt_1 profileSkills'>
                                                {talents.map(x=>(
                                                    <div className='bold6 m-2' key={x}>
                                                        {x}
                                                    </div>
                                                ))}
                                            </div>
                                        </>
                                    }
                                    {(userInfo && kid) && (userInfo.id === kid.user.id ) && 
                                        <div className='pt_2'>
                                            <Link to={"/profile-edit"} className="blue bold6">
                                                Edit my profile
                                            </Link>
                                        </div>
                                    }
                                </div>
                            </div>
                            {kid.other_images && 
                                <div className="mt_9 pt_6 border-top">
                                    <div className="bold8 font_24">
                                        Photos
                                    </div>
                                    <div className="pt_3">
                                        <div className="profilePhotosContainer">
                                            {kid.other_images.map(x=>(
                                                <img key={x.id} className='h-100' src={`${process.env.REACT_APP_BASE_URL}${x.image}`} alt={kid.name} />
                                            ))}
                                            
                                        </div>
                                    </div>
                                </div>
                            }
                            <div className="mt_6 border-top"></div>
                            {kid &&  kid.video &&
                                <div className="pt_5">
                                    <div className="bold8 font_24">
                                        Video
                                    </div>
                                    <div className="profileVideoContainer">
                                        {kid.video.map(x=>{
                                            if (convertVideo(x.video)){
                                                return (
                                                    <div>
                                                        <iframe width="560" height="315" src={`https://www.youtube.com/embed/${convertVideo(x.video)}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                                    </div>
                                                )
                                            }
                                            
                                        })}
                                    </div>
                                </div>
                            }
                            
                        </>
                    :
                        <div className="mainContentDashboardsubsContainer">
                            {!loading && 
                                <span className="text-muted bold7">
                                    Not available
                                </span>
                            }
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Profile