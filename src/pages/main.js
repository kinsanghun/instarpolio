import { Post } from "components/post";
import { Wrapper } from "components/wrapper";
import Project from 'assets/json/project';

const Main = () => {
    const projects = Project.project.map(pj =>  <Post post={pj}/>);
    return (
        <div className="main">
            <Wrapper>
                {projects}
            </Wrapper>
            {/* <SubWrapper/> */}
        </div>
    )
}

export default Main;