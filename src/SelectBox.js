import logo from './logo.png';
import './SelectBox.css';
import {Form, Accordion} from 'react-bootstrap';
import {useEffect, useState} from 'react';

function SelectBox() {

    // const [option, setOption] = useState([]); const Plus = (event) => {
    // event.preventDefault();     setOption((currentArray) => [         option,
    // ...currentArray     ]); };
    const skill = ["+기술 스택", "java", "python", "c++", "c"];
    const onoff = ["+온/오프라인", "온라인", "오프라인", "온/오프라인 병행"];
    const place = ["+장소", "서울", "부산", "대구", "구미"];
    const card = ["+국민내일배움카드여부", "x", "필수", "선택"];

    const [Selected, setSelected] = useState("");
    const handleChangeSelect = (event) => {
        //selected 값 변경
        setSelected(event.target.value);
    }

    useEffect(() => {
        console.log("Selected : ", Selected);
    }, [Selected]);

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

            {/* 옵션 */}
            <div className='option'>
                {/* 옵션 버튼 */}
                <Button variant="primary" size="sm">
                    Small button
                </Button>{' '}
            </div>
        </div>
    );
}

export default SelectBox;
