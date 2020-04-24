import React, { Component } from 'react';
import Header from './Components/Header';
import TableData from './Components/TableData';
import AddUser from './Components/AddUser';
import Search from './Components/Search';
import data from './Components/data.json';
import { v4 as uuidv4 } from 'uuid';
class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      status :false,
      data2:data,
      searchText:"",
      changeStatus:false,
      userObj:{}
    };

  }
  componentWillMount(){
    if(!localStorage.getItem("userData")){
      localStorage.setItem("userData",JSON.stringify(data))
    }else{
      var temp = JSON.parse(localStorage.getItem("userData"));
      this.setState({data2:temp}); 
    }
  }
  changeDisplay = () => {
    this.setState({ 
      status:!this.state.status
    });
  }
  dataInput = (item) => {
    
    this.setState({
      searchText:item
    })
    
  }
  add =(item)=>{
      var data = {} 
      data.id = uuidv4();
      data.name= item.name;
      data.tel = item.tel;
      data.Permission = item.Permission;

      var items = this.state.data2
       items.push(data)
       this.setState({data2:items});
      localStorage.setItem('userData',JSON.stringify(items))


       
   }
   editUser = (item) => {
    //  console.log(item);
     
    this.setState({
      userObj: item
    })

    
   }

   changeEdituser = () =>{
    this.setState({ 
        changeStatus:!this.state.changeStatus
      })
}
  getUserinfo = (item) => {
    this.state.data2.map((value, key) =>{
      if(value.id === item.id){
        value.name = item.name;
        value.tel = item.tel;
        value.Permission= item.Permission;
      }
    })
    localStorage.setItem('userData',JSON.stringify(this.state.data2))


    
  }
  deleteUser = (userId)=>{
    var dataFilter = this.state.data2.filter(item => item.id !== userId);

    
    this.setState({data2:dataFilter});
    localStorage.setItem('userData',JSON.stringify(dataFilter))
    
  }
  render() {
    var ketqua = [];
    var item = this.state.searchText

    this.state.data2.forEach(element => {
        if(element.name.toUpperCase().indexOf(item.toUpperCase()) !== -1 )
          ketqua.push(element)
    });

    
    return (
      <div>
        <Header />
        <div className="searchForm">
            <div className="container">
               <Search 
               getUserinfo ={(info)=>this.getUserinfo(info)}
               changeStatus ={()=> this.changeEdituser()}
               onAdd={this.add}
               valueInput={ this.dataInput}
               onData={()=>this.changeDisplay()} 
               displayForm={this.state.status}
               isChange ={this.state.changeStatus}
               userObj={this.state.userObj}
               />
               <div className="row">
                 
                  <TableData
                  deleteUser={(userId)=>this.deleteUser(userId)}
                   dataUser={ketqua} 
                   editUser={(item)=>this.editUser(item)}
                   changeStatus ={()=> this.changeEdituser()}

                   />
                  <AddUser displayForm={this.state.status}   onAdd={this.add}/>
               </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;