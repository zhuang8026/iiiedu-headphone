import React, {Fragment} from 'react';
import { Link, withRouter } from 'react-router-dom'

// scss

const NormalButton = () => {

    return (
        <Fragment>
            <button className="wi_button" type="button" >DISCOVER</button>
        </Fragment>
    )
};
export default withRouter(NormalButton);