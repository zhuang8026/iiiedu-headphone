// 函式元件
import React from 'react';
import { withRouter} from "react-router-dom";
import './ProductCrumb.scss';

function ProductCrumb() {
    return (
        <div className="Productaside">
            <span className="yycrumb">
                <a href="../">首頁</a>
                <a href="./YyProduct">/ 商品列表</a>
            </span>
        </div>
    )

}
export default withRouter(ProductCrumb);