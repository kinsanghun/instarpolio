import LazyImage from "components/image";
import { Wrapper } from "components/wrapper"
import PROFILE from "assets/images/profile.jpeg";
import Skill from 'assets/json/skill';
import Project from 'assets/json/project';
import { useState } from "react";
import { MyPageModal } from "components/modal";

import { useCallback } from 'react';

export function useBodyScrollLock() {
  const lockScroll = useCallback(() => {
    document.body.style.overflow = 'hidden';
  }, []);

  const openScroll = useCallback(() => {
    document.body.style.removeProperty('overflow');
  }, []);

  return { lockScroll, openScroll };
}

const MyPage = () => {
    const [modalView, setModalView] = useState(false);
    const [modalData, setModalData] = useState({});
    const skills = Skill.skill.map(s => <div key={s.id} className="skill">{s.name}</div>);
    const { lockScroll } = useBodyScrollLock();
  

    const modalHandler = (data) => {
        lockScroll();
        setModalData(data);
        setModalView(prev => true);
    }

    const projects = Project.project.map(pj =>  
        <div className="project" key={pj.id} onClick={()=>{modalHandler(pj)}}>
            <LazyImage src={pj.images[0]} width="100%" height="100%"/>
        </div>
    );

    return (
        <div className="mypage">
            {modalView ? <MyPageModal project={modalData} close={setModalView}/> : <></>}
            <Wrapper>
                <div className="flex" style={{marginTop:"30px"}}>
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
                        <h3 style={{color:"#9f9fff", fontWeight :"400"}}>schmid_t@kakao.com</h3>
                    </div>
                </div>
            </Wrapper>
            <Wrapper>
                <h3>SKILL</h3>
                <div className="skills">{skills}</div>
            </Wrapper>
            <Wrapper>
                <h3>REFERENCE</h3>
                <div className="reference">
                    <div className="item">
                        <h5>A Study on Vulnerabilities of Linux Password and Countermeasures</h5>
                        <div className="description">(S. Kim and T. Cho, "A Study on Vulnerabilities of Linux Password and Countermeasures," CUTE 2019. paper No.9, 2019.)</div>
                        <div className="doi">DOI: 10.1007/978-981-15-9343-7_9</div>
                    </div>
                    <div className="item">
                        <h5>Shadow 파일 조작을 통한 리눅스 Sudoer의 위장공격에 대한 연구</h5>
                        <div className="description">(A Study on Impersonation Attack of Linux Sudoers Through Shadow File Manipulation)</div>
                        <div className="doi">DOI : 10.3745/KTCCS.2020.9.7.149</div>
                    </div>
                </div>
            </Wrapper>
            <Wrapper>
                <h3 style={{marginBottom:"1rem"}}>PROJECTS</h3>
                <div className="projects">
                    {projects}
                </div>
            </Wrapper>
        </div>
    )
}

export default MyPage;