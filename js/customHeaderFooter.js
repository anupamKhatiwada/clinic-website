class Header extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
        <nav>
        <a href="/" class="nav-button">HOME</a>
        <a href="/index.html#services" class="nav-button">SERVICES</a>
        <a href="/html/tipsAndAdvice.html" class="nav-button">TIPS & ADVICE</a>
        <a href="/html/aboutUs.html" class="nav-button">ABOUT US</a>
        <a href="/index.html#contact" class="nav-button">CONTACT</a>
        <div id="dots" onclick="myFunction(this)"><img style="width:30px;" src="/images/dots.svg"></div>
      </nav>



      <div id="hazy-background" onclick="contentRemoval(this)"></div> 

      <div id="dropdown-select" class="dropdown-select">
        <a href="/" class="dd-select">HOME</a>
        <a href="/index.html#services" class="dd-select">SERVICES</a>
        <a href="/html/tipsAndAdvice.html" class="dd-select">TIPS & ADVICE</a>
        <a href="/html/aboutUs.html" class="dd-select">ABOUT US</a>
        <a href="/index.html#contact" class="dd-select">CONTACT</a>
      </div>


      <div class="logo-container">
        <img src="/images/logo.png" class="dental-logo" alt="GMDC" />
      </div>



      <div class="phone-address-container">
    <div class="address-phone">
      ADDRESS
      <p>
        <img src="/images/location.svg" class="address-phone-logo" />CLINIC
        LOCATION
      </p>
    </div>

    <div class="address-phone">
      CALL US
      <p>
        <img src="/images/phone.svg" class="address-phone-logo" /><a href="tel:+919436333040">9436333040</a>
      </p>
    </div>
  </div>

        `
  }
}

class Footer extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
        <div class="footer-container">
    <div class="footer-mini-container">
      <p class="footer-p">OUR INFORMATION</p>
      <a href="/clinic-website/" class="footer-button">HOME</a>
      <a href="/clinic-website/index.html#services" class="footer-button">SERVICES</a>
      <a href="/clinic-website/html/tipsAndAdvice.html" class="footer-button">TIPS & ADVICE</a>
      <a href="/clinic-website/html/aboutUs.html" class="footer-button">ABOUT US</a>
      <a href="/clinic-website/index.html#contact" class="footer-button">CONTACT</a>
    </div>
    <div class="footer-mini-container">
      <p class="footer-p">SERVICES</p>
      <a href="javascript.void(0);" class="footer-button">HOME</a>
      <a href="javascript.void(0);" class="footer-button">SERVICES</a>
      <a href="javascript.void(0);" class="footer-button">TIPS & ADVICE</a>
      <a href="javascript.void(0);" class="footer-button">ABOUT US</a>
      <a href="javascript.void(0);" class="footer-button">CONTACT</a>
    </div>
    <div class="footer-mini-container">
      <p class="footer-p">CONTACT US</p>
      <label class="footer-contact"><img src="/images/pin.ico" class="contact-image"> #25A,Puberun Path, Baghorbari
        Tinali, Guwahati-791037</label>
      <label class="footer-contact"><img src="/images/mobile-phone.ico" class="contact-image"><a class="contact-link"
          href="tel:+919436333040">9436333040</a></label>
      <label class="footer-contact"><img src="/images/globe.ico" class="contact-image"><a href="/index.html"
          class="contact-link">
          guwahatimultispecialitydentalclinic.com</a></label>
    </div>

  </div>
  <div class="bottom-footer">
    <div class="footer-social-media">
      <a href="javascript.void(0);"><i class="fa fa-facebook-square" aria-hidden="true"></i></a>
      <a href="javascript.void(0);"><i class="fa fa-twitter" aria-hidden="true"></i></i></a>
      <a href="javascript.void(0);"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
    </div>
    <div class="footer-end">
      <div><span id="hour"></span>:<span id="min"></span>:<span id="sec"></span>:<span id="mer"></span></div>
      <div><span id="day"></span>:<span id="date"></span>:<span id="month"></span>:<span id="year"></span></div>
      <div>Made With: <img src="/images/javascript.svg" style="vertical-align: middle;"></div>
    </div>
  </div>
        `
  }
}

customElements.define('main-header', Header);
customElements.define('main-footer', Footer);





