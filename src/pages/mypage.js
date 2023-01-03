import LazyImage from "components/image";
import { Wrapper } from "components/wrapper"
import PROFILE from "assets/images/profile.jpeg";
import Skill from 'assets/json/skill';
import Project from 'assets/json/project';

const MyPage = () => {
    const skills = Skill.skill.map(s => <div key={s.id} className="skill">{s.name}</div>);
    const projects = Project.project.map(pj =>  <div className="project"><LazyImage src={pj.images[0]} width="100%" height="100%"/></div>);
    return (
        <div className="mypage">
            <Wrapper>
                <div className="flex">
                    <div className="profile">
                        <LazyImage 
                            width="100px"
                            height="100px"
                            src={PROFILE}
                        />
                    </div>
                    <div className="info">
                        <h2>KIMSANGHUN</h2>
                        <h3>1997.05.29</h3>
                        <h3>Front-end Engineer</h3>
                    </div>
                </div>
            </Wrapper>
            <Wrapper>
                <h3>SKILL</h3>
                <div className="skills">{skills}</div>
            </Wrapper>
            <Wrapper>
                <div className="projects">
                    {projects}
                </div>
            </Wrapper>
        </div>
    )
}

export default MyPage;