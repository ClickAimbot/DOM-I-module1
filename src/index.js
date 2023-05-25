const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')

const queryNav = document.querySelector("nav");
const queryCTA = document.querySelector(".cta");
const queryMainContent = document.querySelector(".main-content");
const contact = document.querySelector(".contact");
const queryFooter = document.querySelector("footer");
const queryImages = document.querySelector("images");

const logoImg = document.querySelector("#logo-img");
const ctaImg = document.querySelector('#cta-img');
const middleImg = document.querySelector("#middle-img");
const links = document.querySelectorAll("nav a");

const feature = queryMainContent.querySelector("div:nth-of-type(1) h4");
const featureContent = queryMainContent.querySelector("div:nth-of-type(1) p");
const about = queryMainContent.querySelector("div:nth-of-type(2) h4");
const aboutContent = queryMainContent.querySelector("div:nth-of-type(2) p");
const services = queryMainContent.querySelector("div:nth-of-type(3) h4");
const servicesContent = queryMainContent.querySelector("div:nth-of-type(3) p");
const product = queryMainContent.querySelector("div:nth-of-type(4) h4");
const productContent = queryMainContent.querySelector("div:nth-of-type(4) p");
const vision = queryMainContent.querySelector("div:nth-of-type(5) h4")
const visionContent = queryMainContent.querySelector("div:nth-of-type(5) p")


logoImg.setAttribute("src", "http://localhost:9000/img/logo.png");
ctaImg.setAttribute("src", "http://localhost:9000/img/cta.png");
middleImg.setAttribute("src", "http://localhost:9000/img/accent.png");

queryNav.style.fontStyle = "Italic"
links[0].textContent = "Services";
links[1].textContent = "Product";
links[2].textContent = "Vision";
links[3].textContent = "Features";
links[4].textContent = "About";
links[5].textContent = "Contact";

feature.textContent = "Features";
featureContent.textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
about.textContent = "About"
aboutContent.textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
services.textContent = "Services"
servicesContent.textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
product.textContent = "Product"
productContent.textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
vision.textContent = "Vision"
visionContent.textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

contact.textContent = "Contact"
contact.style.fontStyle = "bold"
const contactAddress = document.createElement("p");
document.querySelector(".contact").appendChild(contactAddress);
contactAddress.textContent = "123 Way 456 Street Somewhere, USA"
const contactPhone = document.createElement("p");
document.querySelector(".contact").appendChild(contactPhone);
contactPhone.textContent = "1 (888) 888-8888"
const contactEmail = document.createElement("p");
document.querySelector(".contact").appendChild(contactEmail);
contactEmail.textContent = "sales@greatidea.io"

const ctaHeader = queryCTA.querySelector("h1")
const ctaButton = queryCTA.querySelector("button")
ctaHeader.textContent = "DOM Is Awesome"
ctaButton.textContent = "Get Started"

queryFooter.textContent = "Copyright Great Idea! 2021"
queryFooter.style.fontStyle = "bold"
