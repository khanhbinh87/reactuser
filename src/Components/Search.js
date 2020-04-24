import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valueInput : "",
            userObj :{}
        }
    }
    displayNut = () =>{
        if(this.props.displayForm){
            return (
                <div className="btn btn-block btn-success" onClick={()=>this.props.onData()}>Dong lai</div>

            )
        }else{
            return (
                <div className="btn btn-block btn-primary" onClick={()=>this.props.onData()}>Them moi</div>

            )
        }
    }
    getValue = (event) =>{
        this.setState({
            valueInput:event.target.value
        })
        this.props.valueInput(this.state.valueInput)
    }
    valueInput = ()=>{
        this.props.valueInput(this.state.valueInput)
    }
    getUserInfo = (info) =>{
        this.setState({
            userObj: info
        });
        this.props.getUserinfo(info)
        
    }
    
    isChange = () =>{
        if(this.props.isChange){
            return <EditUser changeStatus={()=> this.props.changeStatus()} userObj={this.props.userObj}
            getUserInfo={(info)=> this.getUserInfo(info)}
            />
        }

        
    }
    render() {

        
        return (
            <div>
                 <div className="form-group">
                     
                  {this.isChange()}
                     
                    <div className="btn-group">
                        <input type="text" onChange={(event)=> this.getValue(event)} className="form-control"  required="required" placeholder="Nhập tên" />
                        <div className="btn btn-info" onClick={()=> this.valueInput()}>Tìm</div>
                    </div>
                    
                </div>
                <div className="form-group">
                    <div className="btn-group2">
                        {this.displayNut()}

                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Search;