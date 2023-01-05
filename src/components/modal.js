import { Post } from "./post"
import {IoIosArrowBack} from 'react-icons/io';

export const MyPageModal = ({project, close}) => {
    return (
        <div className="mypage-modal">
            <header>
                <h3>게시글</h3>
                <div className="close-btn"><IoIosArrowBack onClick={()=>{close(prev => false)}}/></div>
            </header>
            <Post post={project}/>
        </div>
    )
}