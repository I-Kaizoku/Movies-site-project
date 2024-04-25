import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div id="footer" style={{flexWrap:"wrap",gap:"10vw",flexShrink:"0"}}>
        <div id="subscribe" style={{gap:"5px",flexBasis:"400px"}}>
            <h2 style={{color:"rgb(201, 60, 0)"}}>Browse Your Favourite Movie</h2>
            <div style={{margin:"0px",padding:"0px"}}>
                <label style={{color:"white",opacity:"80%"}}>Thank You For  Visiting</label>
                <label>Discover new Movies, review movies and web series, and subscribe monthly for experiencing best movies.</label>
            </div>
            <button style={{width:"150px",paddingBlock:"5px",paddingInline:"10px",background:"none",color:"rgb(201, 60, 0)",borderColor:"rgb(201, 60, 0)",borderRadius:"10px",borderWidth:"2px",borderStyle:"solid"}}>Subscribe</button>
        </div>
        <div id="links" style={{flexGrow:"5",flexWrap:"wrap"}}>
            <div id="part" style={{gap:"5px"}}>
                <label href="#">Products</label>
                <label href="#">Features</label>
                <label href="#">Security</label>
                <label href="#">Team</label>
                <label href="#">Enterprise</label>
                <label href="#">Customer stories</label>
                <label href="#">The ReadME Project</label>
                <label href="#">Pricing</label>
                <label href="#">Resources</label>
                <label href="#">Roadmap</label>
            </div>
            <div id="part" style={{gap:"5px"}}>
                <label href="#">Platform</label>
                <label href="#">Developer Website</label>
                <label href="#">Partners</label>
                <label href="#">Electron</label>
            </div>
            <div id="part" style={{gap:"5px"}}>
                <label href="#">Support</label>
                <label href="#">Docs</label>
                <label href="#">Community Form</label>
                <label href="#">Professtional Services</label>
                <label href="#">Premium Support</label>
                <label href="#">Skills</label>
                <label href="#">Status</label>

            </div>
            <div id="part" style={{gap:"5px"}}>
                <label href="#">Company</label>
                <label href="#">About</label>
                <label href="#">Blog</label>
                <label href="#">Careers</label>
                <label href="#">Press</label>
                <label href="#">Inclusion</label>
                <label href="#">Social Impact</label>
                <label href="#">Shop</label>
            </div>
        </div>
    </div>
  )
}

export default Footer
