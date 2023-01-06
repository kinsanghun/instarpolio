import { Post } from "./post"
import {IoIosArrowBack} from 'react-icons/io';
import { useBodyScrollLock } from "pages/mypage";

export const MyPageModal = ({project, close}) => {

    const { openScroll } = useBodyScrollLock();
    const handleClose = () => {
        openScroll();
        close(prev => false);
      };
    return (
        <div className="mypage-modal">
            <header>
                <div className="content">
                    <h3>게시글</h3>
                    <div className="close-btn"><IoIosArrowBack onClick={()=>{handleClose()}}/></div>
                </div>
            </header>
            <Post post={project}/>
        </div>
    )
}