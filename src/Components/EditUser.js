import React, { Component } from 'react';

class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:this.props.userObj.id,
      name:this.props.userObj.name,
      tel:this.props.userObj.tel,
      Permission:this.props.userObj.Permission
    }
    // console.log(this.state);
    
  }
  onChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    // console.log(name);
    // console.log(value);
    
    
    this.setState({
      [name]:value
    })

    
  }
  saveButton= ()=>{
    let obj = {};
    obj.id = this.state.id;
    obj.name = this.state.name;
    obj.tel = this.state.tel;
    obj.Permission = this.state.Permission;

    this.props.getUserInfo(obj);
    
    this.props.changeStatus();
  }
    render() {
        return (
          
                <form>
              <div className="col">
            <div className="card-body text-primary">
            <div className="form-group">
              <input  onChange={(event)=>this.onChange(event)} type="text" placeholder="Tên User" name="name" defaultValue={this.props.userObj.name}/>
            </div>
            <div className="form-group">
              <input type="text" onChange={(event)=>this.onChange(event)} placeholder="Điện thoai" name="tel" defaultValue={this.props.userObj.tel} />
            </div>
            <div className="form-group">
              <select className="custom-select" name="Permission"  defaultValue={this.props.userObj.Permission} onChange={(event)=>this.onChange(event)}>
                <option value>Quyen mac dinh</option>
                <option value={1}>Admin</option>
                <option value={2}>Morder</option>
                <option value={3}>Normal</option>
              </select>
            </div>
            <div className="form-group">
              <input type="button" className="btn btn-block btn-primary" onClick={()=> this.saveButton()} value="Luu" />
                
            </div>
          </div>
          </div>
          </form>
           
        );
    }
}

export default EditUser;