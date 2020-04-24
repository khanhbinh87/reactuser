import React, { Component } from 'react';

class TableDataRow extends Component {
    permission = () =>{
        if(this.props.permission ===1 ){
            return "Admin"
        }else if(this.props.permission === 2){
            return "Moderator"
        }else {
            return "Normal"
        }
    }
    editFun = ()=>{
        this.props.editUser();
        this.props.isChange();
    }
    deleteUser=(userId)=>{
        this.props.deleteUser(userId)
    }
    render() {
        return (
           
                        <tr>
                            <td >{this.props.stt+1}</td>
                            <td>{this.props.name}</td>
                            <td>{this.props.tel}</td>
                            <td>{this.permission()}</td>
                            <td>
                                <div className="btn-group">
                                <div className="btn btn-warning sua" onClick={()=>this.editFun()}><i className="fa fa-edit" />Sửa</div>
                                <div className="btn btn-info xoa" onClick={(userId)=>this.deleteUser(this.props.id)}><i className="fa fa-delete"></i>Xoá</div>
                                </div>
                            </td>
                        </tr>
             
        );
    }
}

export default TableDataRow;