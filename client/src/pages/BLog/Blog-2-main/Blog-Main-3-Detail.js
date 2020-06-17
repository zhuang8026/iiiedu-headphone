// 函式元件
import React ,{ Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect,Link, NavLink, withRouter} from "react-router-dom"



// components


// scss
// import './_menu.scss'

function BlogMainDetail(props) {
    return (
       <>
       
       <div class="articles">
                            <div class="article-first">
                                <h2>文章標題</h2>
                                <h5>06/01,2020 建立</h5>
                                <figure>
                                    <img class="cover" src={DetailSample1} alt="" />
                                </figure>
                                <p>文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容
                        </p>
                            </div>
                            <div class="article-second">
                                <figure>
                                    <img class="cover" src={DetailSample1} alt="" />
                                </figure>
                                <figure>
                                    <img class="cover" src={DetailSample2} alt="" />
                                </figure>
                                <p>文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容
                        </p>
                                <h6>最後修改 06/01,2020</h6>
                            </div>

                        </div>
                        <div class="you-may-like">
                            <h2>你可能也喜歡</h2>
                            <div class="line"></div>
                            <div class="you-may-like-cards d-flex">
                                <div class="art-card">
                                    <figure>
                                        <img src="" alt="" />
                                    </figure>
                                    <div class="art-txt">
                                        <h5>文章內容文章內容</h5>
                                    </div>
                                </div>
                                <div class="art-card">
                                    <figure>
                                        <img src="" alt="" />
                                    </figure>
                                    <div class="art-txt">
                                        <h5>文章內容文章內容</h5>
                                    </div>
                                </div>
                                <div class="art-card">
                                    <figure>
                                        <img src="" alt="" />
                                    </figure>
                                    <div class="art-txt">
                                        <h5>文章內容文章內容</h5>
                                    </div>
                                </div>
                                <div class="art-card">
                                    <figure>
                                        <img src="" alt="" />
                                    </figure>
                                    <div class="art-txt">
                                        <h5>文章內容文章內容</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="comments">
                            <h2>3篇 評論</h2>
                            <div class="comment-one-list" style={{ background: '#F3F4ED' }}>

                                <div class="comment-one">
                                    <div class="comment-one-in d-flex">
                                        <div class="user-post-icon">
                                            <figure class="user-post-fig">

                                            </figure>
                                            <button class="list-reply d-flex">
                                                <figure class="user-list-reply-fig">
                                                    <img src={CaretDown} alt="" />
                                                </figure>
                                                <h5>回覆</h5>
                                            </button>
                                        </div>
                                        <div class="user-post-content">
                                            <h2 class="user-post-name">發文者暱稱</h2>
                                            <h5 class="user-post-date">發文日期</h5>
                                            <p>
                                                發文內容發文內容發文內容發文內容
                                                發文內容發文內容發文內容發文內容
                                                發文內容發文內容發文內容發文內容
                                                發文內容發文內容發文內容發文內容
                                                發文內容發文內容發文內容發文內容
                                                發文內容發文內容發文內容發文內容
                                                發文內容發文內容發文內容發文內容
                                                發文內容發文內容發文內容發文內容
                                                發文內容發文內容發文內容發文內容
                                                發文內容發文內容發文內容發文內容
                                    </p>

                                            <button class="post-reply">回覆</button>
                                        </div>
                                    </div>

                                </div>
                                <div class="comment-reply">
                                    <div class="comment-reply-in d-flex">
                                        <div class="user-reply-icon">
                                            <figure class="user-reply-fig">

                                            </figure>
                                        </div>
                                        <div class="user-reply-content">
                                            <h2 class="user-reply-name">回覆者暱稱</h2>
                                            <h5 class="user-reply-date">回覆日期</h5>
                                            <p>
                                                回覆內容回覆內容回覆內容回覆內容
                                                回覆內容回覆內容回覆內容回覆內容
                                                回覆內容回覆內容回覆內容回覆內容
                                                回覆內容回覆內容回覆內容回覆內容
                                                回覆內容回覆內容回覆內容回覆內容
                                                回覆內容回覆內容回覆內容回覆內容
                                                回覆內容回覆內容回覆內容回覆內容
                                                回覆內容回覆內容回覆內容回覆內容
                                                回覆內容回覆內容回覆內容回覆內容
                                                回覆內容回覆內容回覆內容回覆內容
                                    </p>
                                            <button class="reply-reply">回覆</button>
                                        </div>
                                    </div>
                                </div>


                            </div>
                            <div class="comment-one-list">

                                <div class="comment-one">
                                    <div class="comment-one-in d-flex">
                                        <div class="user-post-icon">
                                            <figure class="user-post-fig">

                                            </figure>
                                            <button class="list-reply d-flex">
                                                <figure class="user-list-reply-fig">
                                                    <img src={CaretDown} alt="" />
                                                </figure>
                                                <h5>回覆</h5>
                                            </button>
                                        </div>
                                        <div class="user-post-content">
                                            <h2 class="user-post-name">發文者暱稱</h2>
                                            <h5 class="user-post-date">發文日期</h5>
                                            <p>
                                                發文內容發文內容發文內容發文內容
                                                發文內容發文內容發文內容發文內容
                                                發文內容發文內容發文內容發文內容
                                                發文內容發文內容發文內容發文內容
                                                發文內容發文內容發文內容發文內容
                                                發文內容發文內容發文內容發文內容
                                                發文內容發文內容發文內容發文內容
                                                發文內容發文內容發文內容發文內容
                                                發文內容發文內容發文內容發文內容
                                                發文內容發文內容發文內容發文內容
                                    </p>

                                            <button class="post-reply">回覆</button>
                                        </div>
                                    </div>

                                </div>
                                <div class="comment-reply">
                                    <div class="comment-reply-in d-flex">
                                        <div class="user-reply-icon">
                                            <figure class="user-reply-fig">

                                            </figure>
                                        </div>
                                        <div class="user-reply-content">
                                            <h2 class="user-reply-name">回覆者暱稱</h2>
                                            <h5 class="user-reply-date">回覆日期</h5>
                                            <p>
                                                回覆內容回覆內容回覆內容回覆內容
                                                回覆內容回覆內容回覆內容回覆內容
                                                回覆內容回覆內容回覆內容回覆內容
                                                回覆內容回覆內容回覆內容回覆內容
                                                回覆內容回覆內容回覆內容回覆內容
                                                回覆內容回覆內容回覆內容回覆內容
                                                回覆內容回覆內容回覆內容回覆內容
                                                回覆內容回覆內容回覆內容回覆內容
                                                回覆內容回覆內容回覆內容回覆內容
                                                回覆內容回覆內容回覆內容回覆內容
                                    </p>
                                            <button class="reply-reply">回覆</button>
                                        </div>
                                    </div>
                                </div>


                            </div>
                            <div class="comment-one-list" style={{ background: '#F3F4ED' }}>

                                <div class="comment-one">
                                    <div class="comment-one-in d-flex">
                                        <div class="user-post-icon">
                                            <figure class="user-post-fig">

                                            </figure>
                                            <button class="list-reply d-flex">
                                                <figure class="user-list-reply-fig">
                                                    <img src={CaretDown} alt="" />
                                                </figure>
                                                <h5>回覆</h5>
                                            </button>
                                        </div>
                                        <div class="user-post-content">
                                            <h2 class="user-post-name">發文者暱稱</h2>
                                            <h5 class="user-post-date">發文日期</h5>
                                            <p>
                                                發文內容發文內容發文內容發文內容
                                                發文內容發文內容發文內容發文內容
                                                發文內容發文內容發文內容發文內容
                                                發文內容發文內容發文內容發文內容
                                                發文內容發文內容發文內容發文內容
                                                發文內容發文內容發文內容發文內容
                                                發文內容發文內容發文內容發文內容
                                                發文內容發文內容發文內容發文內容
                                                發文內容發文內容發文內容發文內容
                                                發文內容發文內容發文內容發文內容
                                    </p>

                                            <button class="post-reply">回覆</button>
                                        </div>
                                    </div>

                                </div>
                                <div class="comment-reply">
                                    <div class="comment-reply-in d-flex">
                                        <div class="user-reply-icon">
                                            <figure class="user-reply-fig">

                                            </figure>
                                        </div>
                                        <div class="user-reply-content">
                                            <h2 class="user-reply-name">回覆者暱稱</h2>
                                            <h5 class="user-reply-date">回覆日期</h5>
                                            <p>
                                                回覆內容回覆內容回覆內容回覆內容
                                                回覆內容回覆內容回覆內容回覆內容
                                                回覆內容回覆內容回覆內容回覆內容
                                                回覆內容回覆內容回覆內容回覆內容
                                                回覆內容回覆內容回覆內容回覆內容
                                                回覆內容回覆內容回覆內容回覆內容
                                                回覆內容回覆內容回覆內容回覆內容
                                                回覆內容回覆內容回覆內容回覆內容
                                                回覆內容回覆內容回覆內容回覆內容
                                                回覆內容回覆內容回覆內容回覆內容
                                    </p>
                                            <button class="reply-reply">回覆</button>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div class="spacing"></div>
                        <div class="add-comment">
                            <div class="add-comment-title d-flex">
                                <h2>發表評論，從</h2>
                                <figure>
                                    <img src="" alt="" />
                                </figure>
                                <h5>乖乖</h5>
                            </div>
                            <div class="add-comment-textarea">
                                <textarea name="" id=""></textarea>
                            </div>

                            <div class="add-comment-btns d-flex justify-content-between">
                                <button>發表評論</button>
                                <button>登出</button>
                            </div>
                        </div>

       </>
    )

}
export default BlogDetail(BlogMainEdit);