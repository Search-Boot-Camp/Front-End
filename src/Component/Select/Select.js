import React, {useEffect} from "react";
import './Select.css';
import {Form, CloseButton} from 'react-bootstrap';
import {useState} from 'react';

function Select() {
    const program = [
        "+프로그램 유형",
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
        "+기술 스택",
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
    const recruit = ["+모집여부", "모집중", "모집 마감", "모집 예정"];
    const onoff = ["+온/오프라인", "온라인", "오프라인", "온/오프라인 병행"];
    const card = ["+국민내일배움카드여부", "X", "필수", "선택"];

    const [Selected, setSelected] = useState([]);
    const handleChangeSelect = (event) => {
        setSelected((current) => [
            ...current,
            (event.target.value)
        ]);
    }
    useEffect(() => {
        console.log("Selected : ", Selected);
    }, [Selected]);

    const reset = () => {
        setSelected([]);
    }

    return (
        <div>
            <div className="selectbox">
                <Form.Select
                    className="selectoption"
                    aria-label="Default select example"
                    onChange={handleChangeSelect}>
                    {
                        program.map((item) => (
                            <option value={item} key={item}>
                                {item}
                            </option>
                        ))
                    }
                </Form.Select>
                <Form.Select
                    className="selectoption"
                    aria-label="Default select example"
                    onChange={handleChangeSelect}>
                    {
                        skill.map((item) => (
                            <option value={item} key={item}>
                                {item}
                            </option>
                        ))
                    }
                </Form.Select>
                <Form.Select
                    className="selectoption"
                    aria-label="Default select example"
                    onChange={handleChangeSelect}>
                    {
                        recruit.map((item) => (
                            <option value={item} key={item}>
                                {item}
                            </option>
                        ))
                    }
                </Form.Select>
                <Form.Select
                    className="selectoption"
                    aria-label="Default select example"
                    onChange={handleChangeSelect}>
                    {
                        onoff.map((item) => (
                            <option value={item} key={item}>
                                {item}
                            </option>
                        ))
                    }
                </Form.Select>
                <Form.Select
                    className="selectoption"
                    aria-label="Default select example"
                    onChange={handleChangeSelect}>
                    {
                        card.map((item) => (
                            <option value={item} key={item}>
                                {item}
                            </option>
                        ))
                    }
                </Form.Select>
            </div>

            <div className="optionbox">
                <div>
                    {
                        Selected.map((item) => (
                            <tag className="option" value={item}>{item}
                                <CloseButton className="cancle" aria-label="Hide"/></tag>
                        ))
                    }
                    <button onClick={reset} className="resetbutton">Option reset</button>
                </div>
            </div>
        </div>
    );
}

export default Select;