import './Error.css';
import { Link } from 'react-router-dom';

const Error = () => {

    return (
        <div className='flex-container'>
            <div className='content-container'>
                <div id='errortext'>
                    404
                </div>
                <div id='errorbody'>
                    찾을 수 없는 페이지 입니다.
                    <br/>
                    주소가 잘못 되었거나, 더 이상 제공하지 않는 페이지 입니다 !
                </div>
                <div id='gohome'>
                    <Link to="/" id='go'>GO HOME</Link>
                </div>
            </div>
        </div>
    )
}

export default Error;
