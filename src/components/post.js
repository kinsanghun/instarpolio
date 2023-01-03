import LazyImage from "components/image";
import { Wrapper } from "./wrapper";
import TMP_URL from "assets/images/no-image.jpg";
import PROFILE from "assets/images/profile.jpeg";
export const Post = ({post}) => {
    const name = "KIMSANGHUN";
    const images = post.images.map((image, index) => <LazyImage width="100%" height="100%" src={image}/>)

    return (
        <div className="post">
            <div className="header-box">
                <div className="profile"><LazyImage width="30px" height="30px" src={PROFILE}/></div>
                <h2 className="profile-name">{name}</h2>
            </div>
            <div className="image-box">
                <div className="images">{images}</div>
            </div>
            <div className="content-box">
                <h3>{post.name}</h3>
                <div className="skills">{post.skill.map(skill => <div className="skill">{skill}</div>)}</div>
                <div className="description">
                    {post.description}
                </div>
            </div>
        </div>
    )
}