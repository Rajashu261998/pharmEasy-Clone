
let navbar=()=>{

    return `
    
    <div id="leftpart">
        <div><a href="index.html"><img src="https://assets.pharmeasy.in/apothecary/images/logo_big.svg?dim=256x0"/></a></div>
        <div><p><i  id="bolt" class="fa-solid fa-bolt-lightning"></i> Express delivery to<br><h4 id="pin">Select Pincode <i class="fa-solid fa-angle-down" onclick="(location.href='../login.html')"></i></h4></p></div>
    </div>
    
    <div id="rightpart">
        <p id="makemeuser"><i class="fa-solid fa-user"></i><a href="login.html" id="useme"> Hello, Log ln</a></p>
        <p><i class="fa-solid fa-burst"></i> <a href="#"> Offers</a> </p>
        <p><i class="fa-solid fa-cart-shopping"></i> <a href="cart.html"> Cart</a></p>
    </div>
        `
    }
    
    
    
    let quicklink=()=>{
        return `
    
        <p><a href="#">Quick Links</a></p>
        <p><a href="#">Categories</p>
        <p><a href="#">Shop by Concerns</a></p>
        <p><a href="#">Deals of the Day</a></p>
        <p><a href="#">Featured Brands</a></p>
        <p><a href="#">Lab Tests by Concern</a></p>   
        `
    }


    let newquicklink=()=>{
        return `
        <p><a href="medicine.html">Medicine</a></p>
        <p><a href="healthcare.html">Healthcare</a></p>
        <p><a href="#">Lab Tests</a></p>
        <p><a href="#">Offers</a></p>
        <p><a href="#">Plus</a></p>
        <p><a href="#">Health Blogs</a></p>  
        `
    }


    
let cartbar=()=>{
    return `
    <header>
        <div id="header1">
          <img src="https://assets.pharmeasy.in/web-assets/dist/fca22bc9.png" alt="logo"
               onclick="(location.href ='index.html')"/>
  
          <div class="select">
            <p id="pinhere">Select Pincode  <i class="fa-solid fa-sort-down"></i></p>
            
            <div>
              <input type="text" placeholder="Search for Medicines / Healthcare Products" class="Search" id="search1234"/>
            </div>

            <a class="search" >
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_5qVsxmva7374MtPACAplyCeH8W7oK2J1_A&usqp=CAU"alt="a" id="searchbtn"></a>
          </div>
        </div>
        <div id="header2">
          <div class="downhead">
            <a href="medicine.html">Order Medicines</a>

            <a href="healthcare.html">Healthcare Products</a>

            <a href="#">Diagnostic Tests</a>

            <a href="#">RTPCR</a>

          </div>

          <div class="righthead" id="rit">
            <img src="https://assets.pharmeasy.in/web-assets/dist/275c07e1.svg" alt=""
              onclick="(location.href ='offer.html')"/>
            <p><a href="offer.html">Offers</a></p>
  
            <img src="https://assets.pharmeasy.in/web-assets/dist/5eb42971.svg" />
            <p id="makemeuser"><a href="login.html" id="useme">Login/Signup</a></p>
            
            <img src="https://assets.pharmeasy.in/web-assets/dist/21b0b5ba.svg" alt=""
              onclick="(location.href='cart.html')"/>

            <p><a href="cart.html" >Cart</a></p>

          </div>
          
        </div>

      </header>

    `
}


    let footer=()=>{
        return `
    
        <div id="innerfooter">
               <div>
                 <h3>Company</h3>
                 <p>About Us</p>
                 <p>Careers</p>
                 <p>Blog</p>
                 <p>Partner with FarmEasy</p>
                 <p>Sell at PharmEasy</p>
                 <h3>Our Services</h3>
                 <p>Order Medicine</p>
                 <p>Healthcare Products</p>
                 <p>Lab Tests</p>
               </div>
               <div>
                <h3>Featured Categories</h3>
                <p>Personal Care</p>
                <p>Health Food and Drinks</p>
                <p>Skin Care</p>
                <p>Home Care</p>
                <p>Ayurvedic Care</p>
                <p>Sexual Wellness</p>
                <p>Fitness & Suppliments</p>
                <p>Mother and Baby Care</p>
                <p>Healthcare Devices</p>
                <p>Surgical and Dressings</p>
                <p>Covid Essentials</p>
                <p>Health Condition </p>
                <p>Diabetic Care</p>
                <p>Elderly Care</p>
                <p>Accessories and Wearables</p>
                <p>Beauty</p>
               </div>
               <div>
                <h3>Need Help</h3>
                <p>Browse All Medicines</p>
                <p>Browse All Molicules</p>
                <p>Browse All Cities & Area</p>
                <p>FAQs</p>
                <h3>Policy Info</h3>
                <p>Editorial Policy</p>
                <p>Privacy Policy</p>
                <p>Vulnerability Disclosure Policy</p>
                <p>Terms and Conditions</p>
                <p>Customer Support Policy</p>
                <p>Return Policy</p>
               </div>
               <div>
                <h3>Follow us on</h3>
                <div id="sociallogo">
                    <a href="https://www.instagram.com/accounts/login/?next=/pharmeasyapp/"><i class="fa-brands fa-instagram fa-2x"></i></a>
                    <a href="https://www.facebook.com/pharmeasy/"><i class="fa-brands fa-facebook fa-2x"></i></a>
                    <a href="https://www.youtube.com/channel/UCDats_DLX-bGZH3-KGu8JhA"><i class="fa-brands fa-youtube fa-2x"></i></a>
                    <a href="https://twitter.com/pharmeasyapp/"><i class="fa-brands fa-twitter fa-2x"></i></a>
                </div>
               </div>
            </div>
            <p id="botpee">Our Payment Partners</p>
            <div id="footerbottom">
                <div>
                    <img src="https://assets.pharmeasy.in/apothecary/images/gpay.png?dim=1440x0" alt="">
                    <img src="https://assets.pharmeasy.in/apothecary/images/paytm.png?dim=1440x0" alt="">
                    <img src="https://assets.pharmeasy.in/apothecary/images/phonepe.png?dim=1440x0" alt="">
                    <img src="https://assets.pharmeasy.in/apothecary/images/amazon.png?dim=1440x0" alt="">
                    <img src="https://assets.pharmeasy.in/apothecary/images/mobikwik.png?dim=1440x0" alt="">
                    <img src="https://assets.pharmeasy.in/apothecary/images/olamoney.png?dim=1440x0" alt="">
                    <img src="https://assets.pharmeasy.in/apothecary/images/maestro.png?dim=1440x0" alt="">
                    <img src="https://assets.pharmeasy.in/apothecary/images/mastercard.png?dim=1440x0" alt="">
                    <img src="https://assets.pharmeasy.in/apothecary/images/visa.png?dim=1440x0" alt="">
                    <img src="https://assets.pharmeasy.in/apothecary/images/rupay.png?dim=1440x0" alt="">
                </div>
                <div>
                    <p>© 2022 PharmEasy. All Rights Reserved</p>
                </div>
            </div>
        `

    }

        let lakhplusnavbar=()=>{
            return `
            <div id="bot1">
              <div>
                <img
                  src="https://assets.pharmeasy.in/web-assets/dist/9ac2da37.svg?dim=0x72&dpr=1.25&q=100"
                />
                <h4>1 Lakh+ Products</h4>
                <p>
                  We maintain strict quality controls on all our partner retailers, so
                  that you always get standard quality products.
                </p>
              </div>
              <div>
                <img
                  src="https://assets.pharmeasy.in/web-assets/dist/2f258fe0.svg?dim=0x72&dpr=1.25&q=100"
                />
                <h4>Secure Payment</h4>
                <p>100% secure and trusted payment protection</p>
              </div>
              <div>
                <img
                  src="https://assets.pharmeasy.in/web-assets/dist/256fe591.svg?dim=0x72&dpr=1.25&q=100"
                />
                <h4>Easy Return</h4>
                <p>
                  We have a new and dynamic return window policy for medicines and
                  healthcare items. Refer FAQs section for more details.
                </p>
              </div>
            </div>
            <hr />
            <div id="mob">
              <div class="mobimg">
                <img
                  src="https://assets.pharmeasy.in/web-assets/dist/34a16ae8.jpg"
                  alt="mobile App"
                />
              </div>
              <div class="app">
                <div id="txt">Download the App for Free</div>
                <div class="logflx">
                  <div class="log">
                    <img
                      src="https://assets.pharmeasy.in/web-assets/dist/3380aedc.png"
                      alt="Google Play"
                    />
                    <p>Google Play</p>
                  </div>
                  <div class="log">
                    <img
                      src="https://assets.pharmeasy.in/web-assets/dist/9bf5c576.png"
                      alt="Apple Store"
                    />
                    <p>Apple Store</p>
                  </div>
                </div>
              </div>
            `
    }

    export {navbar,quicklink,newquicklink,cartbar,lakhplusnavbar,footer}