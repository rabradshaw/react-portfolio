import React from "react";
import "./Main.css";

export default function Main(props) {
  return (
    <div className="main mt-0">

<section className="col-md-12 container"> 
  <h3 >{props.skills}</h3>

 <p className="fs-1 "><div className="grid gap-3">
   <i className="bi bi-filetype-js p-2 g-col-6"></i>
  <i className="bi bi-filetype-html p-2 g-col-6"></i>
  <i className="bi bi-filetype-css p-2 g-col-6"></i>
  <i className="bi bi-filetype-jsx p-2 g-col-6"></i>
  <i className="bi bi-filetype-php p-2 g-col-6"></i>
  <i className="bi bi-filetype-sql p-2 g-col-6"></i>
  </div>
  </p>
<hr></hr>
</section>
<div className="container album py-5 bg-light projects">
<h3>{props.projects}</h3>
<div className="row row-cols-sm-2 row-cols-md-3 g-3">
                <div className="col">
                  <div className="card shadow-sm ">
                    <img src={require ('./images/gallery1.jpg')} alt="logo" />        
                    <div className="card-body">
                      <p className="card-text">{props.text1}</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <a href="https://wcet.waketech.edu/rabradshaw/WEB140/viciouscyclesfinal/index.html" rel="noreferrer" target="_blank" className="btn btn-outline-secondary" role="button">View</a>
                        </div>                        
                      </div>
                    </div>
                  </div>
                </div>

<div className="col">
                  <div className="card shadow-sm">
                  <img src={require ('./images/gallery2.jpg')} alt="class assignment of a portfolio site" />         
                    <div className="card-body">
                      <p className="card-text">{props.text2} </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <a href="https://wcet.waketech.edu/rabradshaw/WEB210/portfolio/index.html" rel="noreferrer" target="_blank" class="btn btn-outline-secondary" role="button">View</a>
                        </div>                        
                      </div>
                    </div>
                  </div>
                </div>


                <div className="col">
                  <div className="card shadow-sm">
                  <img src={require ('./images/gallery3.jpg')} alt="website of abc real estate svg"/>        
                    <div className="card-body">
                      <p className="card-text">{props.text3}</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <a href="https://web.archive.org/web/20140517040542/http://abcrealestatesvg.com/" rel="noreferrer" target="_blank" class="btn btn-outline-secondary" role="button">View</a>
                        </div>                        
                      </div>
                    </div>
                  </div>
                </div>

</div>

</div>

<hr className="my-5 col-md-12 container"/>
<h1 className="fs-3">{props.experience}</h1>
<div className="container py-4">
    
  
    <div className="row no-gutters">
        <div className="col-sm"> </div>
        
        <div className="col-sm-1 text-center flex-column d-none d-sm-flex">
            <div className="row h-50">
                <div className="col">&nbsp;</div>
                <div className="col">&nbsp;</div>
            </div>
            <h5 className="m-2">
                <span className="badge rounded-pill bg-info border">&nbsp;</span>
            </h5>
            <div className="row h-50">
                <div className="col border-end">&nbsp;</div>
                <div className="col">&nbsp;</div>
            </div>
        </div>
      
        <div className="col-sm py-2">
            <div className="card">
                <div className="card-body">
                    
                    <h4 className="card-title text-info">{props.year1}</h4>
                    <p className="card-text text-info">{props.card1}</p>
                </div>
            </div>
        </div>
    </div>

    <div className="row no-gutters">
        <div className="col-sm py-2">
            <div className="card border-success shadow">
                <div className="card-body">
                    
                    <h4 className="card-title text-success">{props.year2}</h4>
                    <p className="card-text text-success">{props.card2}</p>
                    <button className="btn btn-sm btn-outline-secondary" type="button" data-bs-target="#t22_details" data-bs-toggle="collapse">Show Details ▼</button>
                    <div className="collapse border" id="t22_details">
                        <div className="p-2 text-monospace">
                            <div><p className="text-success">{props.drop1}</p></div>
                            <div><p className="text-success">{props.drop2}</p></div>
                            <div><p className="text-success">{props.drop3}</p></div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-sm-1 text-center flex-column d-none d-sm-flex">
            <div className="row h-50">
                <div className="col border-end">&nbsp;</div>
                <div className="col">&nbsp;</div>
            </div>
            <h5 className="m-2">
                <span className="badge rounded-pill bg-success">&nbsp;</span>
            </h5>
            <div className="row h-50">
                <div className="col border-end">&nbsp;</div>
                <div className="col">&nbsp;</div>
            </div>
        </div>
        <div className="col-sm">  </div>
    </div>
 
    <div className="row no-gutters">
        <div className="col-sm">  </div>
        <div className="col-sm-1 text-center flex-column d-none d-sm-flex">
            <div className="row h-50">
                <div className="col border-end">&nbsp;</div>
                <div className="col">&nbsp;</div>
            </div>
            <h5 class="m-2">
                <span className="badge rounded-pill bg-warning border">&nbsp;</span>
            </h5>
            <div className="row h-50">
                <div className="col border-end">&nbsp;</div>
                <div className="col">&nbsp;</div>
            </div>
        </div>
        <div className="col-sm py-2">
            <div className="card">
                <div className="card-body">
                   
                    <h4 className="card-title text-warning">{props.year3}</h4>
                    <p className="text-warning">{props.card3}</p>
                </div>
            </div>
        </div>
    </div>
  
    <div className="row no-gutters">
        <div className="col-sm py-2">
            <div className="card">
                <div className="card-body">
                    
                    <h4 className="card-title text-dark">{props.year4}</h4>
                    <p className="text-dark">{props.card4}</p>
                </div>
            </div>
        </div>
        <div className="col-sm-1 text-center flex-column d-none d-sm-flex">
            <div className="row h-50">
                <div className="col border-end">&nbsp;</div>
                <div className="col">&nbsp;</div>
            </div>
            <h5 className="m-2">
                <span className="badge rounded-pill bg-light border">&nbsp;</span>
            </h5>
            <div className="row h-50">
                <div className="col">&nbsp;</div>
                <div className="col">&nbsp;</div>
            </div>
        </div>
        <div className="col-sm">  </div>
    </div>
    
</div>
</div>
  
  );
}