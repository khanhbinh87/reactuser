import React, { Component } from 'react';

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:"",
      name:"",
      tel:"",
      Permission:""
    }
  }
  
   isChange= (event) => {
      var name = event.target.name;
      var value = event.target.value;
      this.setState({
        [name] :value
      });
      var item ={}
      item.id = this.state.id;
      item.name = this.state.name;
      item.tel = this.state.tel;
      item.Permission = this.state.Permission;
      
      
      
      
   }

  
   
    checkDisplay = () => {
        if(this.props.displayForm){
            return ( 
              <form>
              <div className="col">
            <div className="card-body text-primary">
            <div className="form-group">
              <input type="text" placeholder="Tên User" name="name" onChange={(event) => {this.isChange(event)}}/>
            </div>
            <div className="form-group">
              <input type="text" placeholder="Điện thoai" name="tel" onChange={(event) => {this.isChange(event)}}/>
            </div>
            <div className="form-group">
              <select className="custom-select" name="Permission"  onChange={(event) => {this.isChange(event)}}>
                <option value>Quyen mac dinh</option>
                <option value={1}>Admin</option>
                <option value={2}>Morder</option>
                <option value={3}>Normal</option>
              </select>
            </div>
            <div className="form-group">
              <input type="reset" className="btn btn-block btn-primary" onClick={(item)=>this.props.onAdd(this.state)} value="Them moi" />
                
            </div>
          </div>
          </div>
          </form>)
        }
    }
    render() {
        
        return (
           
            <div>
                {this.checkDisplay( )}
            </div>
            
           
             
               
          
        
          

        );
    }
}

export default AddUser;