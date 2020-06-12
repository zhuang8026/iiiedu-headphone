import React, {Fragment} from 'react';
import { Link, withRouter } from 'react-router-dom'

// scss

const LInkButton = () => {

    return (
        <Fragment>
            <Link to="/" className="wi_button" type="button" >DISCOVER</Link>
        </Fragment>
    )
};
export default withRouter(LInkButton);