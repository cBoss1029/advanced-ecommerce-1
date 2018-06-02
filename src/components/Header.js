import React from 'react';

function Header(props) {
    return (
        <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container">
          
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">Start Bootstrap</a>
            </div>
          
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Services</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                    <li >
                        <a href="#">Items In Cart ({props.items})</a>
                    </li>
                </ul>
                <ul className="nav navbar-right top-nav">
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="glyphicon glyphicon-shopping-cart" style={{fontSize: 20,color: '#fafafa'}}></i> ({this.props.itemsInCart})<b className="caret"></b></a>
                            <ul className="dropdown-menu list-group" style={{width: 300}}>
                                {/* {getCart}
                                {checkOutBttn} */}
                            </ul>
                        </li>
                    </ul>
            </div>
            
         
        </div>
      
    </nav>
                
    )
}

export default Header;