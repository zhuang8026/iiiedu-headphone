import React, { Component } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom'

//import li tag
import { Todoli } from './config';
//import css
import '../../../assets/css/AliceSeller/IndexMain.css'


export class IndexMain extends Component {
    render() {
        return (<>
                    <main>
                    <div className="todo-list card">
                        <h2>待辦事項清單</h2>
                        <p>您的待處理事項</p>
                        <ul className="d-flex flex-wrap justify-content-center todo-item">
                            {Todoli.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <a href={item.linkUrl}>{item.name}</a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="marketing card">
                        <h2>我的行銷活動</h2>
                        <p>部落格文章管理</p>
                        <div className="d-flex">
                            <div className="graph"></div>
                            <div className="button">
                                <div className="card">
                                    <div className="d-flex">
                                        <img className="icon-size" src="./asset/img/index/follower.png" />
                                        <p>追蹤人數</p>
                                    </div>
                                    <div className="text-align-center">+45</div>
                                </div>
                                <div className="card">
                                    <div className="d-flex">
                                        <img className="icon-size" src="./asset/img/index/blog-revenue.png" />
                                        <p>收益</p>
                                    </div>
                                    <div className="text-align-center">$16,888</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="performance card">
                        <h2>我的表現</h2>
                        <p>您的賣場表現總覽</p>
                        <div className="toggle d-flex">
                            <div>訂單表現</div>
                            <div>寄送方式</div>
                            <div>顧客滿意度</div>
                            <div>違反上架規範</div>
                        </div>
                        <hr />
                            <table className="text-align-center">
                                <thead>
                                    <tr>
                                        <th>指標</th>
                                        <th>我的賣場</th>
                                        <th>目標</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>訂單未完成率</td>
                                        <td>-</td>
                                        <td>&lt;10%</td>
                                    </tr>
                                    <tr>
                                        <td>賣家取消率</td>
                                        <td>-</td>
                                        <td>&lt;5%</td>
                                    </tr>
                                    <tr>
                                        <td>退貨-退款率</td>
                                        <td>-</td>
                                        <td>&lt;5%</td>
                                    </tr>
                                </tbody>
                            </table>
                    </div>
                    </main>
                    </>
                    )
    }
}

export default IndexMain
