import React from "react";
import image1 from "../images/lifequote1.png"
import image2 from "../images/lifequote2.png"
export default function Home(){
    const newstyle = {
            padding: '4rem 2rem',
            marginTop: '2rem',
            backgroundColor: 'grey',
            borderRadius: '.3rem' 
    }
    return(
            <>
<div className="jumbotron jumbotron-fluid " style={newstyle}>
    <div className="container">
        <h1 className="display-3">Online Shopping</h1>
        <p className="lead">one stop solution for all daily needs</p>
        <hr className="my-2" />
    </div>
</div>

<div className="container" style={{marginTop:"30px"}}>
    <div className="row">
    <div class="card" style= {{width:"23rem"}}>
      <img src={image1} class="card-img-top" alt="life quote" />
      <div class="card-body">
        <h5 class="card-title">Life Quote</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
    <div class="card"  style= {{width:"23rem"}}>
      <img src={image2} class="card-img-top" alt="life quote" />
      <div class="card-body">
        <h5 class="card-title">Life Quote</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
    <div class="card"  style= {{width:"23rem"}}>
      <img src={image1} class="card-img-top" alt="life quote" />
      <div class="card-body">
        <h5 class="card-title">Life Quote</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
    </div>
</div>
<footer className="text-center text-white" style={{backgroundColor: "#f1f1f1"}}>

    <div className="container pt-4">

      <section className="mb-4">
  
        <a
          className="btn btn-link btn-floating btn-lg text-dark m-1"
          href="#!"
          role="button"
          data-mdb-ripple-color="dark"
          ><i className="fab fa-facebook-f"></i
        ></a>
  
  
        <a
          className="btn btn-link btn-floating btn-lg text-dark m-1"
          href="#!"
          role="button"
          data-mdb-ripple-color="dark"
          ><i className="fab fa-twitter"></i
        ></a>
  

        <a
          className="btn btn-link btn-floating btn-lg text-dark m-1"
          href="#!"
          role="button"
          data-mdb-ripple-color="dark"
          ><i className="fab fa-google"></i
        ></a>
  
   
        <a
          className="btn btn-link btn-floating btn-lg text-dark m-1"
          href="#!"
          role="button"
          data-mdb-ripple-color="dark"
          ><i className="fab fa-instagram"></i
        ></a>
  

        <a
          className="btn btn-link btn-floating btn-lg text-dark m-1"
          href="#!"
          role="button"
          data-mdb-ripple-color="dark"
          ><i className="fab fa-linkedin"></i
        ></a>
 
        <a
          className="btn btn-link btn-floating btn-lg text-dark m-1"
          href="#!"
          role="button"
          data-mdb-ripple-color="dark"
          ><i className="fab fa-github"></i
        ></a>
      </section>

    </div>

    <div className="text-center text-dark p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
      © 2023 Copyright:
      <a className="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
    </div>

  </footer>
  </>
  )
}