import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="text-center">Project quản lý thành viên bằng ReactJS </h1>
                <p className="lead text-center">với dữ liệu Json</p>
                <hr className="my-2" />
                
            </div>
         </div>
        );
    }
}

export default Header;