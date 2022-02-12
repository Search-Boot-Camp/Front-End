import React, {useEffect} from "react";
import './Select.css';
import {Form, CloseButton, ListGroup} from 'react-bootstrap';
import {useState} from 'react';

function Select() {
    const program = [
        "Back-end (백엔드)",
        "Bootcamp Prep (부트캠프 프렙)",
        "Data analysis (데이터 분석, 빅데이터)",
        "Software Development (소프트웨어 개발)",
        "Algorithm(알고리즘 )",
        "Cloud(클라우드) ",
        "Portfolio(포트폴리오) ",
        "Full Stack(풀스택) ",
        "Front-end프론트엔드",
        "AI(인공지능) ",
        "Android ",
        "iOS ",
        "Web ",
        "3D Graphics ",
        "이론",
        "Intelligent Robots(지능로봇) ",
        "IOT(사물인터넷) ",
        "Block Chain(블록체인)",
        "Virtual Reality(가상현실) ",
        "DevOps ",
        "Embedded(임베디드)",
        "Security(보안)",
        "3D printing",
        "PM(프로덕트매니지먼트)",
        "기타"
    ];
    const skill = [
        "Java",
        "Jupiter",
        "Django",
        "HTML",
        "CSS",
        "Javascript",
        "Ruby",
        "JQuery",
        "React",
        "Docker",
        "Android",
        "Azure",
        "R",
        "JSP",
        "Ajax",
        "Spring Boot",
        "Json",
        "Arduino",
        "C++",
        "Linux",
        "C",
        "C#",
        "Unix",
        "DB",
        "Git",
        "SQL",
        "GitHub",
        "React Native",
        "Kotlin",
        "XML",
        "Swift",
        "Unitiy",
        "KoNLpy",
        "PyTorch",
        "LinuxCLI",
        "Elasticsearch",
        "Spark",
        "Hadoop",
        "Tensorflow",
        "JDBC",
        "JPA",
        "AWS",
        "Vanilla JS",
        "Fire base",
        "Vue",
        "Oracle",
        "Node.JS",
        "Mybatis",
        "Mongo DB",
        "Vue.JS",
        "Keras",
        "Gcp",
        "HTTP",
        "DOM",
        "Flask",
        "Typescript",
        "MySQL",
        "PHP",
        "Kubernes",
        "Klaytn",
        "Excel",
        "ROKIT Brick",
        "Nest",
        "AI",
        "PM",
        "Block Chain",
        "Dogma",
        "Sketch"
    ];
    const recruit = ["모집중", "모집 마감", "모집 예정"];
    const onoff = ["온라인", "오프라인", "온/오프라인 병행"];
    const card = ["X", "필수", "선택"];

    const [Selected, setSelected] = useState([]);
    
    const selectedCheck = (id) => {
        if (Selected.find((Selected) => Selected === id))
        {
            return 0;
        }
        else
            return 1;
    };
    
    const handleChangeSelect = (event) => {

        if(selectedCheck(event.target.value) === 1)
        {
            setSelected((current) => [
                ...current,
                (event.target.value)
            ]);
        }
    }
    useEffect(() => {
        console.log("Selected : ", Selected);
    }, [Selected]);

    const reset = () => {
        setSelected([]);
    }

    const cancle = (id) => {
        setSelected(Selected.filter((Selected) => Selected !== id));
    };

    return (
        <div>
            <div className="container" id="select-container">
                <div className="select-box">
                    <Form.Select size="sm" className="select-option"
                        aria-label="Default select example"
                        onChange={handleChangeSelect}>
                            <option value="" disabled selected>+해당 프로그램의 분야</option>
                            {
                                program.map((item) => (
                                    <option id={item} value={item} key={item}>
                                        {item}
                                    </option>
                                ))
                            }
                    </Form.Select>
                    <Form.Select size="sm" className="select-option"
                        aria-label="Default select example"
                        onChange={handleChangeSelect}>
                            <option value="" disabled selected>+기술 스택</option>
                        {
                            skill.map((item) => (
                                <option id={item} value={item} key={item}>
                                    {item}
                                </option>
                            ))
                        }
                    </Form.Select>
                    <Form.Select size="sm" className="select-option"
                        aria-label="Default select example"
                        onChange={handleChangeSelect}>
                            <option value="" disabled selected>+모집 여부</option>
                        {
                            recruit.map((item) => (
                                <option id={item} value={item} key={item}>
                                    {item}
                                </option>
                            ))
                        }
                    </Form.Select>
                    <Form.Select size="sm" className="select-option"
                        aria-label="Default select example"
                        onChange={handleChangeSelect}>
                            <option value="" disabled selected>+온/오프라인</option>
                        {
                            onoff.map((item) => (
                                <option id={item} value={item} key={item}>
                                    {item}
                                </option>
                            ))
                        }
                    </Form.Select>
                    <Form.Select size="sm" className="select-option"
                        aria-label="Default select example"
                        onChange={handleChangeSelect}>
                            <option value="" disabled selected>+국민내일배움카드 여부</option>
                            
                        {
                            card.map((item) => (
                                <option id={item} value={item} key={item}>
                                    {item}
                                </option>
                            ))
                        }
                    </Form.Select>
                </div>

                <div className="optionbox">
                <div>
                    {
                        Selected.map((selectTags) => (
                            <tag className="option" id={selectTags} value={selectTags}>{selectTags}
                                <CloseButton onClick={() => cancle(selectTags)} className="cancle" aria-label="Hide"/></tag>
                        ))
                    }
                    <button onClick={reset} className="resetbutton">옵션 초기화</button>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Select;