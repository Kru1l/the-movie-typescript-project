import {useNavigate} from "react-router-dom";

import './ErrorPage.css';

const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div className="wrapper">
                <div className="box">
                    <h1>500</h1>
                    <p>Sorry, it's me, not you.</p>
                    <p>&#58;&#40;</p>
                    <p id={'btn'} onClick={() => navigate(-1)}>Let me try again!</p>
                </div>
            </div>
        </div>
    );
};

export {ErrorPage};