class MyHeader extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
    <style> 
    header {
      background-color: rgb(9, 53, 38); 
      display: flex; 
      justify-content: space-between;
      flex-direction: row;
      }
      header #logo{
      background-color: rgb(9, 53, 38); 
      text-align: start;
      }
      .top-menu ul{
      list-style: none;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      }
      .top-menu li a {
      margin: 6px; 
      padding: 6px 6px; 
      cursor: pointer;
      color: orangered;
      background-color: transparent;
      font-size: 20px;
      text-decoration: none;
      }
      .top-menu li a:hover {
      background-color: orangered;
      color:white; 
      font-weight: bold;
      }

        @media(max-width:768px){


            header {
            background-color: azure;    
            display: flex;
            flex-direction: column; 
            }
            header #logo{ 
            text-align: center;
            background-color: rgb(9, 53, 38); 
            }
            .top-menu ul{
            display: flex;
            flex-direction: column;
            margin: 0;
            padding: 0;
            padding-left: 5px;
            padding-right: 5px;
            }
          
            .top-menu li {
            margin: 0;
            padding: 10px;
            cursor: pointer;
            color: black;
            background-color: orange;
            border-radius: 10px;
          
          }
          
          .top-menu li:hover {
            background-color: orangered;
            color:black;
            font-weight: bold; 
          }
          .top-menu li a {
            margin: 0;
            padding: 10px;
            cursor: pointer;
            color: black;
            border-radius: 10px;
          
          }
          .home{
            flex-direction: column;
            align-items: center;
          }
          
          }

    </style>

    <header>
    <div id="logo"> <img src="images/logo.png" height="80px" alt="mylogo"> </div>
    <nav class="top-menu">
        <ul>
             <li><a href="index.html">Home page</a></li>
             <li><a href="delivar.html">Delivery Info</a></li>
             <li><a href="about-us.html">About us</a></li>
             <li><a href="signup-form.html">Sign Up</a></li>
        </ul>
    </nav>
    </header>
        `;

        let activePage = this.getAttribute("top-menu");
        if (activePage) {
            let link = this.querySelector(`a[href="${activePage}"]`);
            link.parentElement.className = "active";
        }

    }
}
customElements.define("my-header", MyHeader);


class MyFooter extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `

    <style>
    .footer{
      background:rgb(187, 30, 30);
      padding-top: 1px;
      padding-bottom: 1px;
      }
      
      .footer .follow{
      padding:10px;
      margin: 0;
      color:#fff;
      font-weight: normal;
      font-size: 2rem;
      text-align: center;
      }
      
      .fbtn{
      background-color: rgb(12, 121, 48);
      border: 1px solid rgb(0, 0, 0);
      border-radius: 3rem;
      color: whitesmoke;
      padding: 17px 35px;
      text-align: center;
      text-decoration: transparent;
      display: inline-block;
      font-size: 18px;
      margin: 0;
      cursor: pointer
      }
      .fbtn:hover{
      color: rgb(187, 30, 30);
      background-color: darkgray;
      transition: 1s;
      }
      
      .footer .share{
      display: flex;
      gap: 10px;
      justify-content: center;
      flex-wrap: wrap;
      }
      
      .footer .credit{
      padding:0;
      color:#fff;
      font-weight: normal;
      font-size: 20px;
      text-align: center;
      }
      
      .footer .credit span{
      color:rgb(0, 0, 0);
      }
    </style>

    <section class="footer">

    <h1 class="follow">Follow us on</h1>
    
    <div class="share">
    <a href="#" class="fbtn">Facebook</a>
    <a href="#" class="fbtn">Instagram</a>
    <a href="#" class="fbtn">Youtube</a>
    <a href="#" class="fbtn">Twitter</a>
    <a href="#" class="fbtn">Wechat</a>
    
    </div>
    
    <h3 class="credit">Created by <span> Group Two </span> | all rights reserved! </h3>
    
    </section>
            `;
    }
}
customElements.define("my-footer", MyFooter);