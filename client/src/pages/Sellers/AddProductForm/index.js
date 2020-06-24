import React from 'react'
import { withRouter, BrowserRouter as Router } from 'react-router-dom'

class AddProductForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            itemName:'',
            // itemImg:null,
            // colorid:null ,
            // itemsbrand:'',
            // itemstype:'',
            // itemPrice:null,
            // itemQty:null,
            // itemsales:null,
            // itemstoreNumber:null,
            // itemscontent:'',
            // itemsweight:'',
            // itemsdrive:'',
            // itemsfrequency:'',
            // itemsSensitivity:'',
            // itemsconnect:'',
            // itemsmains:'',
            // itemsEndurance:'',
            // itemswatertight:'',
            // itemsfeature:''
        }
        // this.handleSubmit = this.handleSubmit.bind(this);
    }


    // handleitemName(e){
    //     this.setState({itemName:e.target.value})
    // }

    async handleSubmit(e){
        // alert("testing");!
        e.preventDefault();
        const {itemName} = this.state
        try{
            let result = await fetch('https://localhost:3009/sellers/add-product',{
                method:'post',
                mode:'no-cors',
                headers:{
                    'Accept':'application/json',
                    'Content-type':'application/json',
                },
                body:JSON.stringify({
                    itemName:itemName
                })
            })
            console.log('result'+result)
        }catch(err){
            console.log(err)
        }
}
    render(){
        const {itemName} = this.state
        return(
            <>
            <htmlForm >
                             <div className="seller-productname">
                                 <label>新增商品</label>
                                 <input type="text" className="seller-addinput" placeholder="例：藍牙耳機" value={itemName} onChange={this.handleitemName}/>
                             </div>
                             <input type="text" className="seller-productclassname" placeholder="分類名稱" />
                             <div>
                                <img className="seller-addproductimg" src="./asset/img/index/seller-center-png/blog-revenue.png"
                                    alt="" />
                            </div>
                            <div>
                                <label>商品描述</label>
                                <textarea className="seller-addinput" placeholder="例：大明星愛用款" ></textarea>
                            </div>
                            <div>
                                <label>商品規格</label>
                                <div className="d-flex">
                                    <div>
                                        <label for="seller-productsize">規格/尺寸</label>
                                        <input className="addinput" id="seller-productsize" placeholder="例：大明星愛用款" />     
                                    </div>
                                    <div>
                                        <label for="seller-productcolor">顏色</label>
                                        <input className="addinput" id="seller-productcolor" />     
                                    </div>
                                    <div>
                                        <label for="seller-productreserve">商品庫存</label>
                                        <input className="addinput" id="seller-productreserve" />     
                                    </div>
                                    <div>
                                        <label for="seller-productsoldprice">售價</label>
                                        <input className="addinput" id="seller-productsoldprice" />     
                                    </div>
                                </div>
                            </div>
                        <button type="submit" className="seller-add" onClick={()=>this.handleSubmit}>新增</button>
                        </htmlForm>
            </>
        )
    }
}
export default withRouter(AddProductForm);