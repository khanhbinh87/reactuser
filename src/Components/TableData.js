import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableData extends Component {
   
        dasdsa = () => this.props.dataUser.map((value, key) =>(
            <TableDataRow 
            key={key} 
            stt={key}
            name={value.name}
             id={value.id} 
             tel={value.tel}
             permission={value.Permission}
             
             editUser ={(user) =>this.props.editUser(value)}
             
             isChange ={this.props.changeStatus}
             deleteUser={this.props.deleteUser}
             />
        ))
        
    render() {


      
        
        return (
            
            <div className="col">
            <table className="table table-bordered table-hover">
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Tên</th>
                    <th>Điện thoại</th>
                    <th>Quyền</th>
                    <th>Thao tác</th>
                </tr>
               
            </thead>
            <tbody>
            
                {this.dasdsa()}
               
            </tbody>
            </table>
          </div>
        );
    }
}

export default TableData;