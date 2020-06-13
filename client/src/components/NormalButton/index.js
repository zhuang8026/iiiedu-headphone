import React, {Fragment} from 'react';
import { Link, withRouter } from 'react-router-dom'

// scss
import './linkbutton.scss';

const NormalButton = (props) => {
    const {btnName} = props;
    return (
        <Fragment>
            <button className="wi_button" type="button" >{ btnName }</button>
        </Fragment>
    )
};
export default withRouter(NormalButton);