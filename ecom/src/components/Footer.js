import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <div className="main-footer">
        <div className="container-footer">
            <div className="row">
                {/* Column 1 */}
                <div className="col">
                    <h4 className="title-h4-footer">DOUBL DRIBBL Inc</h4>
                    <ul className="list-unstyled">
                        <li className="list-item">Contact</li>
                        <li className="list-item">342-420-6068</li>
                        <li className="list-item">Austin, Texas</li>
                        <li className="list-item">123 Bunker Lane</li>
                    </ul>
                </div>
                {/* Column 2 */}
                <div className="col">
                    <h4 className="title-h4-footer">Social Media</h4>
                    <ul className="list-unstyled">
                    <li className="list-item">Facebook</li>
                    <li className="list-item">Twitter</li>
                    <li className="list-item">YouTube</li>
                    </ul>
                </div>
                {/* Column 3 */}
                <div className="col">
                    <h4 className="title-h4-footer">Support</h4>
                    <ul className="list-unstyled">
                    <li className="list-item">Contact Us</li>
                    <li className="list-item">User Guide</li>
                    <li className="list-item">Help</li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className="row">
                <p className="col-sm">
                    &copy;{new Date().getFullYear()} DOUBL DRIBBL INC | All Rights Reserved | Terms of Service | Privacy
                </p>
            </div>
        </div>
    </div>
  )
}
