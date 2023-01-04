import LazyImage from "components/image";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import PROFILE from "assets/images/profile.jpeg";
import { useState } from "react";
export const Post = ({post}) => {
    const [slide, setSlide] = useState(0);
    const name = "KIMSANGHUN";
    const images = post.images.map((image, index) => <LazyImage key={index} width="100%" height="100%" src={image}/>)
    
    const slideStyle = {transform :`translateX(-${100 * slide}%)`, transition : "0.5s"}

    const slideLeftHandler = () => {
        if(slide > 0) {
            setSlide(prev => prev - 1);
        }
    }
    const slideRightHandler = () => {
        if(slide < images.length - 1) {
            setSlide(prev => prev + 1);
        }
    }
    return (
        <div className="post">
            <div className="header-box">
                <div className="profile"><LazyImage width="30px" height="30px" src={PROFILE}/></div>
                <h2 className="profile-name">{name}</h2>
            </div>
            <div className="image-box">
                {slide > 0 ? <div className="arrow left" onClick={()=>{slideLeftHandler()}}><IoIosArrowBack/></div>: <></>}
                <div className="images" style={slideStyle}>{images}</div>
                {slide < images.length-1 ? <div className="arrow right" onClick={()=>{slideRightHandler()}}><IoIosArrowForward/></div>: <></>}
            </div>
            <div className="content-box">
                <h3>{post.name}</h3>
                <div className="skills">{post.skill.map((skill, index) => <div key={index} className="skill">{skill}</div>)}</div>
                <pre className="description">{post.description}</pre>
            </div>
        </div>
    )
}