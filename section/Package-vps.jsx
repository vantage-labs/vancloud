import React, { useState } from "react";

const Package2 = () => {
  //switch
  const [isChecked, setIsChecked] = useState(false);
  const handleToggle = () => {
  setIsChecked((prevState) => !prevState);
  };
  const switchClassName = isChecked ? 'switch checked' : 'switch';
  const otherElementClassName = isChecked ? 'other-element active' : 'other-element';

  return (
    <div className="container">
      {/* Switch Toggle Section */}
      <div className="row">
        <div className="col text-center">
          <div className="switch-set">
            <div>Monthly Plan</div>
            <div>
              <input
                id="sw-1"
                className={switchClassName}
                type="checkbox"
                checked={isChecked}
                onChange={handleToggle}
              />
            </div>
            <div>Yearly Plan</div>
            <div className="spacer-20"></div>
          </div>
        </div>
      </div>

      <div className="col-md-12">
            <table className="table table-pricing text-center">
              <thead>
                <tr>
                  <th scope="col">Package</th>
                  <th scope="col">CPU</th>
                  <th scope="col">Ram</th>
                  <th scope="col">Disk</th>
                  <th scope="col">Bandwith</th>
                  <th scope="col">Price</th>
                  <th scope="col">Setup Fee</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody className={`${otherElementClassName}`}>
                <tr>
                  <th><span className="lbl">Package name</span>vntagelabs 16</th>
                  <td><span className="lbl">CPU</span>2 Core</td>
                  <td><span className="lbl">Ram</span>8 GB</td>
                  <td><span className="lbl">Disk</span>1 TB</td>
                  <td><span className="lbl">Bandwith</span>10 TB</td>
                  <td><span className="lbl">Price</span><span className="opt-1">$59 monthly</span><span className="opt-2">$590 yearly</span></td>
                  <td><span className="lbl">Setup Fee</span>$20</td>
                  <td>
                    <a href="#" className="btn-line opt-1">Order Now</a>
                    <a href="#" className="btn-line opt-2">Order Now</a>
                  </td>
                </tr>
                
                <tr>
                  <th><span className="lbl">Package name</span>vntagelabs 32</th>
                  <td><span className="lbl">CPU</span>4 Core</td>
                  <td><span className="lbl">RAM</span>8 GB</td>
                  <td><span className="lbl">Disk</span>2 TB</td>
                  <td><span className="lbl">Bandwith</span>20 TB</td>
                  <td><span className="lbl">Price</span><span className="opt-1">$79 monthly</span><span className="opt-2">$790 yearly</span></td>
                  <td><span className="lbl">Setup Fee</span>$20</td>
                  <td>
                    <a href="#" className="btn-line opt-1">Order Now</a>
                    <a href="#" className="btn-line opt-2">Order Now</a>
                  </td>
                </tr>
                
                <tr>
                  <th><span className="lbl">Package name</span>vntagelabs 64</th>
                  <td><span className="lbl">CPU</span>4 Core</td>
                  <td><span className="lbl">RAM</span>16 GB</td>
                  <td><span className="lbl">Disk</span>4 TB</td>
                  <td><span className="lbl">Bandwith</span>30 TB</td>
                  <td><span className="lbl">Price</span><span className="opt-1">$99 monthly</span><span className="opt-2">$990 yearly</span></td>
                  <td><span className="lbl">Setup Fee</span>$15</td>
                  <td>
                    <a href="#" className="btn-line opt-1">Order Now</a>
                    <a href="#" className="btn-line opt-2">Order Now</a>
                  </td>
                </tr>
                
                <tr>
                  <th><span className="lbl">Package name</span>vntagelabs 128</th>
                  <td><span className="lbl">CPU</span>6 Core</td>
                  <td><span className="lbl">RAM</span>16 GB</td>
                  <td><span className="lbl">Disk</span>6 TB</td>
                  <td><span className="lbl">Bandwith</span>40 TB</td>
                  <td><span className="lbl">Price</span><span className="opt-1">$119 monthly</span><span className="opt-2">$1190 yearly</span></td>
                  <td><span className="lbl">Setup Fee</span>$15</td>
                  <td>
                    <a href="#" className="btn-line opt-1">Order Now</a>
                    <a href="#" className="btn-line opt-2">Order Now</a>
                  </td>
                </tr>
                
                <tr>
                  <th><span className="lbl">Package name</span>vntagelabs 256</th>
                  <td><span className="lbl">CPU</span>6 Core</td>
                  <td><span className="lbl">RAM</span>32 GB</td>
                  <td><span className="lbl">Disk</span>8 TB</td>
                  <td><span className="lbl">Bandwith</span>60 TB</td>
                  <td><span className="lbl">Price</span><span className="opt-1">$139 monthly</span><span className="opt-2">$1390 yearly</span></td>
                  <td><span className="lbl">Setup Fee</span>FREE</td>
                  <td>
                    <a href="#" className="btn-line opt-1">Order Now</a>
                    <a href="#" className="btn-line opt-2">Order Now</a>
                  </td>
                </tr>
                
                <tr>
                  <th><span className="lbl">Package name</span>vntagelabs 512</th>
                  <td><span className="lbl">CPU</span>8 Core</td>
                  <td><span className="lbl">RAM</span>32 GB</td>
                  <td><span className="lbl">Disk</span>8 TB</td>
                  <td><span className="lbl">Bandwith</span>80 TB</td>
                  <td><span className="lbl">Price</span><span className="opt-1">$159 monthly</span><span className="opt-2">$1590 yearly</span></td>
                  <td><span className="lbl">Setup Fee</span>FREE</td>
                  <td>
                    <a href="#" className="btn-line opt-1">Order Now</a>
                    <a href="#" className="btn-line opt-2">Order Now</a>
                  </td>
                </tr>
                
                <tr>
                  <th><span className="lbl">Package name</span>vntagelabs 1024</th>
                  <td><span className="lbl">CPU</span>8 Core</td>
                  <td><span className="lbl">RAM</span>64 GB</td>
                  <td><span className="lbl">Disk</span>10 TB</td>
                  <td><span className="lbl">Bandwith</span>100 TB</td>
                  <td><span className="lbl">Price</span><span className="opt-1">$69 monthly</span><span className="opt-2">$1690 yearly</span></td>
                  <td><span className="lbl">Setup Fee</span>FREE</td>
                  <td>
                    <a href="#" className="btn-line opt-1">Order Now</a>
                    <a href="#" className="btn-line opt-2">Order Now</a>
                  </td>
                </tr>
              </tbody>
            </table>
        </div>

      </div>
  );
};

export default Package2;
