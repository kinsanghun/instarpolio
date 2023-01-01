import LazyImage from "components/image";
import { Wrapper } from "./wrapper"
import TMP_URL from "assets/images/no-image.jpg";
export const Post = ({postid}) => {
    return (
        <div className="post">
            <div className="header-box">

            </div>
            <div className="image-box">
                <LazyImage
                    width="100%"
                    height="100%"
                    src={TMP_URL}
                />
            </div>
            <div className="content-box">
            </div>
        </div>
    )
}