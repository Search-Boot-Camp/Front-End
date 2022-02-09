import React, {useEffect} from "react";
import './Select.css';
import {Form, CloseButton} from 'react-bootstrap';
import {useState} from 'react';

function Select() {
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
    const onoff = ["+온/오프라인", "온라인", "오프라인", "온/오프라인 병행"];
    const place = [
        "+장소",
        "서울",
        "경기",
        "대구",
        "부산",
        "울산",
        "광주",
        "대전",
        "경북",
        "경남",
        "전북",
        "전남",
        "강원",
        "충남"
    ];
    const card = ["+국민내일배움카드여부", "X", "필수", "선택"];

    const [Selected, setSelected] = useState([]);
    const handleChangeSelect = (event) => {
        setSelected((current) => [
            ...current, (event.target.value)
        ]);
    }
    useEffect(() => {
        console.log("Selected : ", Selected);
    }, [Selected]);

    const cancle = (value) => {
        setSelected(Selected.filter((Selected) => Selected.value !== value));
    }

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
                        place.map((item) => (
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
                    {Selected.map((item) => (
                        <tag className="option" value={item}>{item} <CloseButton className="cancle" aria-label="Hide" /></tag>
                    ))}
                     <button onClick={reset} className="resetbutton">Option reset</button>
                </div>
            </div>
        </div>
    );
}

export default Select;
