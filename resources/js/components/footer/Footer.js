import React from "react";

export default function Footer({fecha}) {
    
    return(

        <footer className="pt-4 my-md-5 pt-md-5 border-top">
    <div className="row">
      <div className="col-12 col-md">
        <small className="d-block mb-3 text-muted">&copy; {fecha}</small>
      </div>
      <div className="col-6 col-md">
        <h5>Resources</h5>
        <ul className="list-unstyled text-small">
          <li><a className="link-secondary" href="index.html">Resource</a></li>
          <li><a className="link-secondary" href="index.html">Resource name</a></li>
          <li><a className="link-secondary" href="index.html">Another resource</a></li>
          <li><a className="link-secondary" href="index.html">Final resource</a></li>
        </ul>
      </div>
      <div className="col-6 col-md">
        <h5>About</h5>
        <ul className="list-unstyled text-small">
          <li><a className="link-secondary" href="#">Team</a></li>
          <li><a className="link-secondary" href="#">Locations</a></li>
          <li><a className="link-secondary" href="#">Privacy</a></li>
          <li><a className="link-secondary" href="#">Terms</a></li>
        </ul>
      </div>
    </div>
  </footer>
    )
}

