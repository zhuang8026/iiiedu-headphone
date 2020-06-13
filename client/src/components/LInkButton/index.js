import React, {Fragment} from 'react';
import { Link, withRouter } from 'react-router-dom'

// scss
import './linkbutton.scss';

const LInkButton = (props) => {
    const {linkUrl} = props;
    return (
        <Fragment>
            <Link to={linkUrl} className="wi_button btn btn-navy btn-fill-vert-o" type="button" >DISCOVER</Link>
        </Fragment>
    )
};
export default withRouter(LInkButton);