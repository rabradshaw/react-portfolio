import React from "react";
import "./Header.css";


export default function Header(props) {
  return (
    <div className="header col-md-12 " >
    
      <nav className="navbar navbar-expand-lg   fixed-top" id="mainNav">
            <div className="container px-4">
            <img src={require('./images/logo.png')} alt="rodney designs logo"/>
            
                <h1 className="fs-3"><i className="bi bi-brush text-light"></i>{props.name}</h1>  
          </div>
      </nav>

      <div className="py-5 bg-light mt-5">
        <div className="container ">
            <div className="row row-cols-md-2">
            <div className="row-cols-1 mt-5  py-4 ">
                <h2>{props.title}</h2>
                <p>{props.subtitle} </p>
                <div ><img src={require('./images/wordpress.png')} className="img-fluid images_header" alt="wordpress"/><img src={require('./images/joomla.png')} className="img-fluid images_header" alt="joomla"/><img src={require('./images/nodejs.png')} className="img-fluid images_header" alt="nodejs"/></div>
            </div>
            <div className="row-cols-1  py-4">
            <img src={require('./images/portfolio.png')} className="img-fluid" alt="a guy in white shirt with a grey jacket over it"/>
            </div>
            </div>
        </div>
    </div> 



            
      




    </div>

  );
}
