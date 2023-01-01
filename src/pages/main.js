import { Post } from "components/post";
import { SubWrapper } from "components/subWrapper";
import { Wrapper } from "components/wrapper"


const Main = () => {
    return (
        <div className="main">
            <Wrapper>
                <Post />
            </Wrapper>
            <SubWrapper/>
        </div>
    )
}

export default Main;