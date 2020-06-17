// 函式元件
import React, { Fragment } from 'react';

// scss
// import './_menu.scss'

function NotFoundPage404(props) {
    return (
        <Fragment>
            <svg viewBox="0 0 600 300" className="style404">

                <symbol id="s-text">
                    <text textAnchor="middle" x="50%" y="50%" dy=".35em">
                        404
                    </text>
                </symbol>
                <use xlinkHref="#s-text" className="text"></use>
                <use xlinkHref="#s-text" className="text"></use>
                <use xlinkHref="#s-text" className="text"></use>
                <use xlinkHref="#s-text" className="text"></use>
                <use xlinkHref="#s-text" className="text"></use>

            </svg>
        </Fragment>
    )

}
export default NotFoundPage404;