import {API_URL} from "../../config/config.js";

class LoginForm extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
    }


    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(name, oldValue, newValue){
        this.render();
    }

	
    async render() {

        this.shadow.innerHTML = 
        `
        <style>
        *{
            box-sizing: border-box;
        }
        .error-message {
            font-size: 0.6rem;
            color: #ff0000;
            position: absolute;
            bottom: 7px;
            display: none;
            text-align: right;
            right: 14px;
        }
        .d-block {
            display: block !important;
        }
        .btn {
            font-size: 1rem;
            padding: 1rem 2rem;
            border: none;
            border-radius: 5px;
            transition: all 0.3s ease-in-out;
            cursor: pointer;
            background-color: #454545;
          }
          
          .btn-sm {
            font-size: 90%;
            padding: 0.7rem 1.5rem;
          }
          
          .btn-lg {
            font-size: 1.5rem;
          }
          
          .btn-principal {
            border: 3px solid #ffffff;
            background-color: #7dca2b;
            color: #ffffff;
            margin-top: 3rem;
          }
          .btn-principal:hover {
            background-color: #63a022;
          }
          .btn-principal:focus {
            background-color: #497619;
          }
          
        .login {
            width: 100vw;
            height: 100vh;
            position: fixed;
            background-color: #b2e982;
            display:grid;
            place-content:center;
        }
        .login .formulario {
            background-color: white;
            width: 90vw;
            padding: 2rem;
            text-align: center;
            border-radius: 5px;
            box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1), 0 5px 15px rgba(0, 0, 0, 0.5);
        }
        @media (min-width: 992px) {
        .login .formulario {
            width: 30vw;
        }
        }
        .login .formulario .logo-img {
            width: 70%;
            margin: auto;
        }
        .login .formulario .svg-img {
            width: 100%;
        }
        .login .formulario h1 {
            font-size: 1.5rem;
        }
        .login .formulario input {
            border-radius: 5px;
            border: none;
            background-color: rgba(0, 0, 0, 0.15);
            padding: 1rem;
            width: 100%;
        }
        .login .formulario .checkbox {
            margin-top: 2rem;
            margin-bottom: 2rem;
        }
        .login .formulario label {
            margin-top: 1rem;
            margin-bottom: 0.3rem;
            font-size: 0.9rem;
        }
        .login .formulario input[type=checkbox] {
            width: auto;
        }
        </style>
        <div class="login">
        <form id="login-form" class="formulario login-form">
            <div class="col logo-img p-1">								
                <svg class="svg-img" version="1.1"
                id="svg2" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:ns1="http://sozi.baierouge.fr" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:svg="http://www.w3.org/2000/svg"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1360.2 678.9"
                style="enable-background:new 0 0 1360.2 678.9;" xml:space="preserve">
                <style type="text/css">
                .st0{fill:#7FCC2B;}
                .st1{fill:#7FB820;}
                .st2{fill:#818181;}
                </style>
                <g>
                <g id="g3451">
                <path id="path3343" class="st0" d="M654.5,86.8c-37.2,35.2-68.6,77.1-97.6,120c-46.6,69-86.1,143.1-126.7,216.2
                    c-16.1,28.9-30.6,58.8-47.2,87.5c-6.7,11.5-12.8,23.4-20.9,33.9c26.4-66.1,42.2-137,50-208.3c2.8-25.3,3.9-50.8,2.3-76.2
                    c44.9-18.9,87.2-55.6,100.6-106.6c4-15.3,5.6-38.4-9.1-47.8c-13.9-8.9-16,9.5-7.2,17.6c4.7,25.3-9.9,49.3-23.8,68.2
                    c-16.2,22.1-38.7,37.9-62.3,49.6c-4.3-50.3-18.2-104.5-56.2-137.3c-21.9-18.9-51-24.9-78.6-24.1c-25.9-27.1-62.4-49.3-99.6-40
                    c-32.7,8.2-51.5,39-55.6,72.9c-1.7,13.6-0.6,31.5,1.3,44.2c-40.2,43.4-68.3,106.7-60.7,168.8c3.9,31.8,19.1,67.4,49.7,77.8
                    c38,12.8,78.4-6.9,107.1-33.5c12.1-11.2,30.7-33.6,25-45.1c-5.9-11.6-21.2,17-31.6,25.8c-24.7,20.9-57.1,36.8-86.8,24.3
                    c-26.5-11.1-35-46.6-34.2-75c1.3-42.9,17.3-84.1,41.7-117.6c20.1,49.6,67.6,77.9,114.6,90.4c29.2,7.8,59.5,10.2,89.4,6.9
                    c6.3,62.8,4.3,126.5-8.1,188.4c-11.5,57.5-31.3,113.9-63.3,162.5c-8.6,13,13.8,12.3,20.8,1.1c40.9-65.3,59.9-140.9,69-217.9
                    c5.4-45.5,6.1-91.6,1.9-137.1c19.6-5.6,23.2-11.6,22.5,7.6c-2.6,64.2-7.7,128.1-20,190.6c-6.4,32.7-16.6,66.2-29,96.9
                    c4.6,20.6,28.2-0.5,35.6-10.1c16.3-21.3,31.5-43.5,46.1-66.3c22.9-35.7,42.7-73.7,64.8-110.1c43.4-71.6,87.4-142.9,136.3-210.3
                    c23.4-30.2,49.7-67.8,84.3-81.9c30.7-12.5,61.6-9.4,89.9-0.2c50,16.4,91.5,54.2,123.1,97.8c21.1,29.2,46.4,54.4,71.8,79.2
                    c-11.1-6.5-21.1-15.4-31.4-23.3c-28.9-22.1-52.3-51-77.4-77.6c-25.4-26.9-57-46.9-91-57.9c-28.1-9.1-58.5-3.7-85.9,6.1
                    c-8.6,3.1-17.9,5.3-25.4,10.9c-10.8,31.4,9.1,66,25.5,87.4c6.7,8.7,13.2,18.1,21.8,24.6c10.4-8.3,19.6-18.3,30.3-26.1
                    c-3.2,21.5-14.9,46.3-0.8,53.7c17.6,10.9,34.5,23.8,53.7,31.1c4.3-15.1,6.9-30.7,11.6-45.6c6.4,18.7,11.1,38,17.2,56.7
                    c24.3,8,55.7,14.7,84.8,14.9c4.5-3-7.2-34.8-8.1-50.3c11.5,16.7,22.9,33.7,34.4,50.5c32.9-0.8,110.4-13.2,139.6-25.6
                    c-69.8-40.5-78.8-85-124.1-146c-49.5-66.6-96.8-114-168.5-121C737.6,27.1,687.6,57.4,654.5,86.8L654.5,86.8z M256.6,80.9
                    c-42,6.1-80.9,28.1-112.9,57.5c-5.8-27.4,0.4-60.3,23-76.7C199.6,41.8,237.3,57.9,256.6,80.9z M265.8,99.7
                    c13.2-0.2,20,15.6,26.8,27.1c24.3,40.8,36.4,88.6,43.3,136.1c-52.8,5.8-110-5.6-151.6-42.7c-16.7-14.9-28.5-35.5-35.1-57.6
                    C167.6,137.3,224.6,100.3,265.8,99.7L265.8,99.7z M302,109.4c44.2,19,57.6,51.2,69.1,90.3c4.2,14.4,13.8,49.4,2.1,55
                    c-18,8.6-19.5,8.6-21.3-8.5C346.9,197.1,329.3,149.6,302,109.4L302,109.4z"/>
                <path id="path3247" class="st1" d="M340.5,303.4C335.5,307.7,335.5,307.7,340.5,303.4z"/>
                <path id="path3439" class="st0" d="M582,417.5c3.2,2.2,4.8,5.7,4.8,10.7c0,4.8-1.2,8.7-3.7,11.8c-2.4,3.1-5.7,5.7-9.7,7.7
                    c-8.2,4.3-16.8,6.4-25.7,6.4c-8.9,0-16-1-21.3-2.9c-5.2-1.9-9.5-4.7-13-8.3c-6.8-6.8-10.2-16.5-10.2-29c0-19.5,5.3-35.2,15.9-47.1
                    c11.3-12.8,26.9-19.2,46.6-19.2c12.2,0,21.4,2.6,27.4,7.7c4.5,3.9,6.8,9,6.8,15.3c0,22.7-19.6,34.1-58.8,34.1
                    c-0.5,3.4-0.8,6.5-0.8,9.3c0,5.9,1.3,10.1,3.9,12.4c2.7,2.2,6.5,3.3,11.4,3.3c4.9,0,9.9-1.1,15.1-3.3
                    C576.1,424.1,579.8,421.1,582,417.5 M542.6,396.4c9.1,0,16.4-2.8,21.6-8.5c5.3-5.4,7.9-12.5,7.9-21.1c0-3-0.6-5.2-1.7-6.8
                    c-1-1.7-2.6-2.5-4.8-2.5c-2.2,0-4.3,0.5-6.2,1.4c-1.8,0.8-3.7,2.6-5.6,5.4C549,370.7,545.3,381.4,542.6,396.4"/>
                <path id="path3441" class="st0" d="M620.2,369.3c4.4-6.2,9.9-11.4,16.4-15.5c6.7-4.1,14.1-6.2,22.2-6.2c8.1,0,14.1,1.3,18,3.9
                    l37.9-3.9L701.5,422c-4.5,25.3-11.5,42.9-21.1,52.9c-9.1,9.4-22.6,14.1-40.4,14.1c-13.5,0-24.2-2.1-31.9-6.4
                    c-7.7-4.3-11.6-9.9-11.6-17c0-5.3,2-9.5,6-12.6c4-3,9.1-4.5,15.3-4.5c5.4,0,10.2,1.2,14.3,3.7c2.4,1.3,4.3,2.8,5.4,4.6
                    c-3,2.6-4.4,6-4.4,10.3c0,5.6,2.6,8.3,7.7,8.3c8.6,0,15.4-10.2,20.3-30.6c1.4-5.6,2.7-11.1,3.9-16.7c-5.8,7.1-15.3,10.7-28.4,10.7
                    c-9.1,0-16.4-2.2-21.6-6.6c-5.3-4.4-7.9-11.7-7.9-22.1c0-6.5,1.1-13.3,3.3-20.5C612.5,382.3,615.8,375.5,620.2,369.3 M645.3,410.7
                    c0,8.8,2.3,13.2,6.8,13.2c3.1,0,6.1-1.7,9.1-5c2.3-2.7,3.9-6.1,4.8-10.1l9.9-49.8c-0.6-0.1-1.3-0.3-1.9-0.6
                    c-1.3-0.5-2.8-0.8-4.4-0.8c-7.9,0-14.1,6.5-18.7,19.4C647.1,387.1,645.3,398.3,645.3,410.7"/>
                <path id="path3443" class="st0" d="M730.7,444.4c-3-3.4-5.2-7.7-6.6-13c-1.3-5.3-1.9-12.3-1.9-20.9c0-8.6,1.5-16.9,4.4-24.8
                    c3-7.9,7.2-14.7,12.6-20.3c11.1-11.9,25.8-17.8,44.1-17.8c6.6,0,12.2,1.1,17,3.3l33.1-3.3L819,423.1c-0.4,1.5-0.6,3.7-0.6,6.6
                    c0,2.8,0.8,5.2,2.5,7c1.8,1.8,4,2.8,6.6,3.1c-1.3,4.4-4.3,7.9-9.1,10.5c-4.6,2.6-9.6,3.9-14.9,3.9c-5.3,0-9.7-1-13.3-3.1
                    c-3.5-1.9-5.7-4.6-6.8-7.9c-2.1,3.2-5.3,5.9-9.7,7.9c-4.4,2.1-9.5,3.1-15.5,3.1c-5.8,0-11.1-0.8-15.9-2.3
                    C737.7,450.2,733.7,447.8,730.7,444.4 M771.4,365.8c-1.4,2.3-2.8,5.5-4.1,9.5c-1.3,3.9-3,11.1-5.2,21.7
                    c-2.1,10.5-3.1,19.4-3.1,26.9c0,7.5,0.6,12.3,1.7,14.5c1.2,2.2,2.8,3.3,4.8,3.3c4.1,0,7.7-1.9,10.6-5.8c3.1-4,5.2-9.5,6.4-16.5
                    l10.2-56.7c-2.7-2.3-5.7-3.5-8.9-3.5c-3.1,0-5.6,0.5-7.5,1.5C774.7,361.8,773,363.5,771.4,365.8"/>
                <path id="path3445" class="st0" d="M925.7,454.1c-15.6,0-23.4-6.1-23.4-18.2c0.1-3.4,0.7-7.9,1.7-13.6l3.5-17.8
                    c3.5-16.8,5.2-27,5.2-30.8c0-7.5-2.2-11.2-6.6-11.2c-7.3,0-13,9.6-16.8,28.9l-11.4,58.9l-38.9,3.9l20.1-102.8l31.7-3.7l-3.1,19
                    c6.1-12.7,18.4-19,36.9-19c9,0,15.4,1.9,19.1,5.8c3.9,3.7,5.8,9.9,5.8,18.4c0,8-2.1,21.4-6.2,40.1c-1.9,8.4-2.9,14.2-2.9,17.4
                    c0,3.1,0.8,5.6,2.5,7.4c1.8,1.8,4,2.8,6.6,3.1c-1.3,4.4-4.2,7.9-8.7,10.5C936.6,452.8,931.5,454.1,925.7,454.1"/>
                </g>
                <g>
                <path class="st2" d="M569.2,615.7l-30.6-48.1h-13.9v48.1h-10.1V503h35.8c3.8,0,7.4,0.7,10.8,2.2c3.4,1.4,6.3,3.4,8.8,5.9
                    s4.5,5.5,5.9,8.8c1.4,3.4,2.2,7,2.2,10.8v9.1c0,3.8-0.7,7.4-2.2,10.8c-1.4,3.4-3.4,6.3-5.9,8.8s-5.5,4.5-8.8,5.9
                    c-3.4,1.4-6.9,2.2-10.8,2.2l30.6,48.1H569.2z M567.9,530.7c0-2.5-0.5-4.9-1.4-7s-2.2-4.1-3.9-5.7c-1.6-1.7-3.5-2.9-5.7-3.9
                    c-2.2-0.9-4.5-1.4-7-1.4h-25.2v45.3h25.2c2.5,0,4.9-0.5,7-1.4c2.2-0.9,4.1-2.2,5.7-3.9c1.6-1.7,2.9-3.6,3.9-5.7
                    c0.9-2.2,1.4-4.5,1.4-7V530.7z"/>
                <path class="st2" d="M600.3,615.7V503h63.4v9.7h-53.3v41.9h43.2v9.7h-43.2V606h53.3v9.7H600.3z"/>
                <path class="st2" d="M744.9,589.6c0,3.8-0.8,7.4-2.3,10.8c-1.5,3.4-3.6,6.3-6.2,8.8c-2.6,2.5-5.6,4.5-9,5.9
                    c-3.4,1.4-7.1,2.2-10.9,2.2h-8.1c-3.8,0-7.5-0.7-10.9-2.2c-3.4-1.4-6.4-3.4-9-5.9c-2.6-2.5-4.7-5.4-6.2-8.8
                    c-1.5-3.4-2.3-6.9-2.3-10.8v-4.5l10.1-1.7v6.1c0,2.5,0.5,4.9,1.5,7c1,2.2,2.4,4.1,4.1,5.7c1.7,1.7,3.7,2.9,6,3.9
                    c2.3,0.9,4.7,1.4,7.2,1.4h7.1c2.5,0,4.9-0.5,7.2-1.4c2.3-0.9,4.2-2.2,6-3.9c1.7-1.7,3.1-3.6,4.1-5.7c1-2.2,1.5-4.5,1.5-7v-3.4
                    c0-3.9-0.8-7.1-2.3-9.7c-1.5-2.6-3.5-4.8-6.1-6.6c-2.5-1.8-5.4-3.3-8.5-4.6s-6.4-2.5-9.8-3.8c-3.4-1.3-6.6-2.6-9.8-4.2
                    c-3.2-1.5-6-3.4-8.5-5.7c-2.5-2.3-4.5-5.1-6.1-8.4c-1.5-3.3-2.3-7.4-2.3-12.2v-2.1c0-3.8,0.7-7.4,2.2-10.8
                    c1.4-3.4,3.4-6.3,5.9-8.8s5.5-4.5,8.8-5.9c3.4-1.4,7-2.2,10.8-2.2h7.2c3.8,0,7.4,0.7,10.8,2.2c3.4,1.4,6.3,3.4,8.8,5.9
                    s4.5,5.5,5.9,8.8c1.4,3.4,2.2,6.9,2.2,10.8v2.9l-10.1,1.7v-4.6c0-2.5-0.5-4.9-1.4-7c-0.9-2.2-2.2-4.1-3.9-5.7
                    c-1.6-1.6-3.5-2.9-5.7-3.9c-2.2-0.9-4.5-1.4-7-1.4h-6.3c-2.5,0-4.9,0.5-7,1.4s-4.1,2.2-5.7,3.9c-1.7,1.6-2.9,3.5-3.9,5.7
                    c-0.9,2.2-1.4,4.5-1.4,7v2.1c0,3.6,0.8,6.7,2.3,9.1c1.5,2.5,3.5,4.6,6.1,6.3s5.4,3.3,8.5,4.6s6.4,2.6,9.8,3.9
                    c3.4,1.3,6.6,2.8,9.8,4.4c3.2,1.6,6,3.6,8.5,5.9c2.5,2.3,4.5,5.2,6.1,8.5c1.5,3.4,2.3,7.4,2.3,12.3V589.6z"/>
                <path class="st2" d="M794,512.6v103.1h-10.1V512.6H757V503h63.9v9.7H794z"/>
                <path class="st2" d="M874.5,589.5h-35.7l-7.4,26.3h-10.5l33-112.7h5.3l33.2,112.7H882L874.5,589.5z M841.6,579.8h30.3l-14.9-52
                    l-0.3-4.2l-0.3,4.2L841.6,579.8z"/>
                <path class="st2" d="M966.5,600.4c-1.4,3.4-3.4,6.3-5.9,8.8s-5.5,4.5-8.8,5.9c-3.4,1.4-6.9,2.2-10.8,2.2h-8
                    c-3.8,0-7.4-0.7-10.8-2.2c-3.4-1.4-6.3-3.4-8.8-5.9s-4.5-5.4-5.9-8.8c-1.4-3.4-2.2-6.9-2.2-10.8V503h10.1v86.6
                    c0,2.5,0.5,4.9,1.4,7s2.2,4.1,3.9,5.7c1.7,1.7,3.6,2.9,5.7,3.9s4.5,1.4,7,1.4h7.1c2.5,0,4.9-0.5,7-1.4c2.2-0.9,4.1-2.2,5.7-3.9
                    c1.6-1.7,2.9-3.6,3.9-5.7s1.4-4.5,1.4-7V503h10.1v86.6C968.7,593.4,968,597,966.5,600.4z"/>
                <path class="st2" d="M1045.9,615.7l-30.6-48.1h-13.9v48.1h-10.1V503h35.8c3.8,0,7.4,0.7,10.8,2.2c3.4,1.4,6.3,3.4,8.8,5.9
                    s4.5,5.5,5.9,8.8c1.4,3.4,2.2,7,2.2,10.8v9.1c0,3.8-0.7,7.4-2.2,10.8c-1.4,3.4-3.4,6.3-5.9,8.8s-5.5,4.5-8.8,5.9
                    c-3.4,1.4-6.9,2.2-10.8,2.2l30.6,48.1H1045.9z M1044.5,530.7c0-2.5-0.5-4.9-1.4-7s-2.2-4.1-3.9-5.7c-1.6-1.7-3.5-2.9-5.7-3.9
                    c-2.2-0.9-4.5-1.4-7-1.4h-25.2v45.3h25.2c2.5,0,4.9-0.5,7-1.4c2.2-0.9,4.1-2.2,5.7-3.9c1.6-1.7,2.9-3.6,3.9-5.7
                    c0.9-2.2,1.4-4.5,1.4-7V530.7z"/>
                <path class="st2" d="M1119.2,589.5h-35.7l-7.4,26.3h-10.5l33-112.7h5.3l33.2,112.7h-10.5L1119.2,589.5z M1086.3,579.8h30.3
                    l-14.9-52l-0.3-4.2l-0.3,4.2L1086.3,579.8z"/>
                <path class="st2" d="M1209.7,615.7l-47-82.1l-0.9-4.9v86.9h-10.1V503h5.3l47,82.2l1,4.8V503h10.1v112.7H1209.7z"/>
                <path class="st2" d="M1268.2,512.6v103.1h-10.1V512.6h-26.9V503h63.9v9.7H1268.2z"/>
                </g>
                </g>
                </svg>
            </div>
            <h1 class="mb-4">Please sign in</h1>
        
            <div>
                <label class="d-block" for="email">Email address</label>
                <input id="email" type="email" class="form-control" name ="email" placeholder="name@example.com" data-validate="emails">
                <p class="error-message">Formato incorrecto</p>
            </div>
            <div>
                <label class="d-block" for="password">Password</label>
                <input id="password" type="password" class="form-control" id="password" placeholder="Password" name ="password">
            </div>
        
            <!-- <div class="checkbox">
                <label>
                <input type="checkbox" value="remember-me"> Remember me
                </label>    º
            </div> -->
            <button id="submitLoginForm" class="w-100 btn btn-lg btn-principal btn-sm">Sign in</button>
            </form>
        </main>
        <div id="notification-wrapper" class="notification-wrapper">
            <div id="notification" class="notification">
                <img src="img/sobre.svg" alt="">
                <p id="notification-message"></p>
            </div>
        </div>

        `;

        let submitForm = this.shadow.querySelector('#submitLoginForm');

        if (submitForm) {
                
            submitForm.addEventListener('click', event => {
        
                event.preventDefault();

                let form = this.shadow.querySelector('#login-form');
                let formData = new FormData(form);
                let formDataJson = Object.fromEntries(formData.entries());

                fetch('http://127.0.0.1:8080/api/auth/users/signin', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formDataJson)
                }).then(response => {
                    return response.json();
                }).then(data => {
                    if(data.accessToken){
                        sessionStorage.setItem('accessToken', data.accessToken);
                        window.location.href = `admin-panel.html`;
                    }else{
                        console.log("uy que mal")
                    }        
                }).catch(error => {
                    console.log(error);
                });
            });

        }
        
    }

}

customElements.define('login-form-component', LoginForm);



