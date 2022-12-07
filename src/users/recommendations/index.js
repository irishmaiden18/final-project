import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
import "./index.css";

const Recommendations = () => {

 return (
<div className="list-group">
  <table>
  <tbody>
        <tr className="list-group-item">
          <td>
               <h6>
                   Artist 1
                </h6>
          </td>

          <td>
          </td>
          <td>
          </td>
          <td>
                  <Link to="#" >
                    <button className="btn btn-primary btn-sm">View</button>
                  </Link>
           </td>
        </tr>
        <tr className="list-group-item">
          <td>
                     <h6>
                         Artist 2
                       </h6>
          </td>
          <td>
           </td>
           <td>
           </td>
          <td>
              <Link to="#">
                <button className="btn btn-primary btn-sm">View</button>
              </Link>
          </td>
          </tr>

          <tr className="list-group-item">
          <td>
                     <h6>
                         Artist 3
                       </h6>
          </td>
          <td>
          </td>
          <td>
          </td>
          <td>
              <Link to="#">
                <button className="btn btn-primary btn-sm">View</button>
              </Link>
          </td>
        </tr>
        <tr className="list-group-item">
          <td>
                     <h6>
                         Artist 4
                       </h6>
          </td>
          <td>
          </td>
          <td>
          </td>
          <td>
              <Link to="#">
                <button className="btn btn-primary btn-sm">View</button>
             </Link>
           </td>
       </tr>
       </tbody>
 </table>
</div>
);
};
export default Recommendations;