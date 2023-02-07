import {API_URL} from "../../config/config.js";

class DataForm extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
    }


    // Cuando
    connectedCallback() {
        
        this.render();
    }

    attributeChangedCallback(name, oldValue, newValue){

    }

	
    async render() {

        this.shadow.innerHTML = 
        `
        <style>
        * {
            box-sizing:border-box;
        }
        .row {
            display: flex;
            flex-grow: 1;
        }
        .col-12 {
            flex: 0 0 auto;
            width: 100%;
        }
        .barra-opciones {
            display:flex;
            justify-content:space-between;
            flex-grow:1;
        }
        .tabs-wrapper {
            display:flex;
        }
        .data-tabs-content {
            display:flex;
            flex: 1 0 auto;
            width: 100%;
        }
        .item {
            padding: 1rem;
            text-decoration: none;
            text-align: center;
            background-color: #ddd;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
            color: white;
            transition: all 0.3s ease-in-out;
            cursor: pointer;
            -webkit-user-select: none;
               -moz-user-select: none;
                -ms-user-select: none;
                    user-select: none;
          }
          .item.active {
            padding-top: calc(1rem + 3px);
            padding-bottom: calc(1rem + 3px);
            top: -3px;
            position: relative;
            border: 1px solid rgba(0, 0, 0, 0.3);
            border-bottom: none;
            background-color: white;
            color: #454545;
            box-shadow: 0 -2px 3px rgba(0, 0, 0, 0.2);
            z-index: 3;
          }
          .item:not(.active):hover {
            background-color: #ccc;
            transition: all 0.3s ease-in-out;
          }
          .item-content {
            padding: 1rem;
            border: 1px solid rgba(0, 0, 0, 0.3);
            position: relative;
            top: -4px;
            box-shadow: 0 -2px 3px rgba(0, 0, 0, 0.2);
            display: none;
            background-color: white;
          }
          .item-content:first-child {
            border-top-left-radius: 0px;
          }
          .features-wrapper {
            background-color: red;
          }
          .active {
            display: block;
          }
          .footer {
            border: 1px solid rgba(0, 0, 0, 0.3);
            border-top: none;
            display: flex;
            flex-direction: row-reverse;
            position: relative;
            top: -4px;
          }
          button {
            border: none;
            padding: 1rem;
            transition: all 0.3s ease-in-out;
          }
          button.save {
            background-color: #7dca2b;
            color: white;
          }
          button.save:hover {
            box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);
          }
          button.save:active {
            box-shadow: inset 0 0 30px rgb(0, 0, 0);
          }
          button.reset:hover {
            box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);
          }
          button.reset:active {
            box-shadow: inset 0 0 30px rgb(0, 0, 0);
          }
        .forms input, .forms textarea {
            width: 100%;
            margin-bottom: 1rem;
            border: 1px solid #63a022;
            background-color: rgba(125, 202, 43, 0.2);
            padding: 0.5rem 1rem;
            border-radius: 5px;
            transition: all 0.6s ease-in-out;
          }
          .forms input:focus, .forms textarea:focus {
            outline: 0px;
            box-shadow: 0 0 10px #7dca2b;
            background-color: #ffffff;
          }
          .forms input.invalid, .forms textarea.invalid {
            border: 1px solid #cc0000;
            background-color: rgba(255, 255, 255, 0.2);
            box-shadow: 0 0 10px rgba(255, 0, 0, 0.5);
          }
          .forms input[type=radio], .forms input[type=checkbox] {
            width: auto;
          }
          .forms textarea {
            height: 15rem;
          }
          .forms svg {
            fill: #7dca2b;
            vertical-align: middle;
            margin-right: 1rem;
            width: 2.5rem;
          }
          .forms p {
            font-size: 1.2rem;
          }
          .forms .on-off {
            display: inline-block;
            width: 50px;
            height: 20px;
            background-color: #fff;
            border-radius: 30px;
            cursor: pointer;
            padding: 0;
            margin-right: 1rem;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
          }
          .forms #toggle {
            display: none;
          }
          .forms .slider {
            display: block;
            font-size: 10px;
            position: relative;
            color: white;
          }
          .forms .slider::after {
            content: "OFF";
            width: 25px;
            height: 25px;
            background-color: #900707;
            border: 2px solid #fff;
            border-radius: 50%;
            box-shadow: 0 0 3px rgba(0, 0, 0, 0.3), 0 0 10px rgba(0, 0, 0, 0.5);
            position: absolute;
            top: -5px;
            left: 0;
            display: grid;
            place-content: center;
            line-height: 0;
            transition: background-color 0.25s, transform 0.25s ease-in;
          }
          .forms #toggle:checked + .slider::after {
            content: "ON";
            background-color: #05ae3e;
            transform: translateX(25px);
          }
          .forms .error-message {
            font-size: 0.6rem;
            color: #ff0000;
            position: absolute;
            bottom: 7px;
            display: none;
            text-align: right;
            right: 14px;
          }
          .forms .error {
            color: #ff0000;
          }

        </style>
        <div class="content-item-list row product-features-tabs">
			<div>
                <form action="http://127.0.0.1:8080/api/admin/users" class="forms admin-form">
                    <div class="barra-opciones" >
                        <div class="tabs-wrapper">
                            
                        </div>
                        
                        <div class="options">
                                <label class="on-off" for="toggle">
                                    <input id="toggle" type="checkbox">
                                    <span class="slider"></span>
                                </label>
                            </div>
                        </div>
                        <div class="data-tabs-content">
                        
                        </div>
                    </div>
                </form>
            </div>
        </div>

        `;

        let form = this.shadow.querySelector(".tabs-wrapper");
        let formStructure =  await this.setFormStructure();

        Object.keys(formStructure.tabs).forEach(key =>{
            
            let itemContents = this.shadow.querySelector(".data-tabs-content");
            
            let item = document.createElement("div");
            item.classList.add("item","tabs");
            item.setAttribute("data-content", key);
            item.textContent = `${formStructure.tabs[key].label}`;
            form.append(item);

            // Creando contenedor del contenido de un tab
            let tabContent = document.createElement("div");
            tabContent.classList.add("item-content");
            itemContents.append(tabContent);

            //Creando un tabContent 
            Object.values(formStructure.tabsContent[key].rows).forEach(row => {

                // Creando una fila
                let inputsGroup = document.createElement("div");
                inputsGroup.classList.add("row");
                tabContent.append(inputsGroup);
                
                Object.keys(row.formElements).forEach(item => {
                    
                    let formElement = row.formElements[item];
                    
                    switch (formElement.element) {

                        case "input":

                            if (formElement.type == "checkbox"){

                                if(formElement.options.length > 1) {

                                    let fieldset = document.createElement("fieldset");
                                    let legend = document.createElement("legend");
                                    fieldset.append(legend)

                                    legend.textContent = formElement.label;
                                    fieldset.setAttribute("id", item);
                                    inputsGroup.append(fieldset);

                                    formElement.options.forEach( option => {

                                        let input = document.createElement("input");
                                        let label = document.createElement("label");

                                        label.setAttribute("for", item);
                                        label.append(input);
                                        label.textContent = option.label;
                                
                                        input.setAttribute("id", option.label);
                                        input.setAttribute("name", option.value);
                                        input.setAttribute("type", formElement.type);

                                        fieldset.append(input);
                                        fieldset.append(label);
                                        inputsGroup.append(fieldset);
                                    });
                                }
                                
                    
                            } else if (formElement.type == "radio") {

                            } else {
                                // let label = document.createElement("label");
                                // label.setAttribute("for", item);
                                // label.textContent = formElement.label;
    
                                // let input = document.createElement("input");
                                // input.setAttribute("id",item);
                                // input.setAttribute("name",item);
                                // input.setAttribute("type",formElement.type);
                                // inputsGroup.append(label);
                                // inputsGroup.append(input);

                            };


                            // if (formElement.options) {
                            //     Object.values(formElement.options).forEach(option => {
                            //         console.log(option.label);
                            //     })
                            // }
                            break;
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        case "select":
                            let select = document.createElement("select");
                            // inputsGroup.append(select);
                            break;
                        case "textarea":
                            let textarea = document.createElement("textarea");
                            // inputsGroup.append(select);
                            break;
                        default:
                            console.log("Hoy no es lunes, martes ni miércoles");
                    }













                });

            });


        });

        this.shadow.querySelector('.tabs').classList.add("active");
        this.shadow.querySelector('.item-content').classList.add("active");

        // Object.keys(formStructure.tabsContent).forEach(key =>{
        //     
        //     let itemContent = document.createElement("div");
        //     itemContent.classList.add("item-content","cont-tabs");
        //     itemContent.setAttribute("data-content", key);
        //     let inputsWrapper = document.createElement("div");
        //     inputsWrapper.classList.add("inputsWrapper");
            

        //     itemContent.append(inputsWrapper);

        //     itemContents.append(itemContent);
        // });

        this.renderTabs();

    }


    renderTabs = () => {

        let items = this.shadow.querySelectorAll(".tabs");
        let itemContents = this.shadow.querySelectorAll(".cont-tabs");
    
        items.forEach(item => {

            item.addEventListener("click", () => {

                let itemActivo = item.dataset.content;
                console.log(itemActivo);

                items.forEach(item => {
                    item.classList.remove('active');
                });

                item.classList.add('active');

                itemContents.forEach(itemContent => {
                    if (itemContent.dataset.content == itemActivo) {
                        itemContent.classList.add("active");
                    } else {
                        itemContent.classList.remove("active");
                    };
                });
            });
        });
    }
    
    setFormStructure = async () => {
       
        let url = this.getAttribute('url');

        switch (url) {

            case '/api/admin/users':

                return {

                    tabs:{
                        main: {
                            label: 'Principal',
                        },
                        secundario: {
                            label: 'secundario',
                        }
                    },

                    tabsContent: {
                       
                        main: {
                            rows:{
                                row1: {
                                    formElements:{
                                        id:{
                                            element: 'input',
                                            type: 'hidden',
                                        },
                                        name: {
                                            label: 'Nombre',
                                            element: 'input',
                                            maxLength: '10',
                                            type: 'text',
                                            placeholder: '',
                                            required: true,
                                            validate: 'only-letters'
                                        },
                                        email: {
                                            label: 'Email',
                                            element: 'input',
                                            type: 'email',
                                            placeholder: '',
                                            required: true,
                                            validate: 'email'
                                        }
                                    }
                                },
                                row2: {
                                    formElements:{
                                        password: {
                                            label: 'Contraseña',
                                            element: 'input',
                                            type: 'password',
                                            placeholder: '',
                                            required: true
                                        },
                                        repeatPassword: {
                                            label: 'Repita la contraseña',
                                            element: 'input',
                                            type: 'password',
                                            placeholder: '',
                                            required: true
                                        }
                                    }
                                },
                                row3: {
                                    formElements:{
                                        permissions: {
                                            label: 'Permisos',
                                            element: 'input',
                                            type: 'checkbox',
                                            required: true,
                                            options: [
                                                {
                                                    label: 'Crear',
                                                    value: 'create',
                                                    checked: true
                                                },
                                                {
                                                    label: 'Leer',
                                                    value: 'read'
                                                },
                                                {
                                                    label: 'Actualizar',
                                                    value: 'update'
                                                },
                                                {
                                                    label: 'Eliminar',
                                                    value: 'delete'
                                                }
                                            ]
                                        },
                                        sex: {
                                            label: 'Sexo',
                                            element: 'input',
                                            type: 'radio',
                                            required: true,
                                            options: [
                                                {
                                                    label: 'Masculino',
                                                    value: "M",
                                                    checked: true
                                                },
                                                {
                                                    label: 'Femenino',
                                                    value: "F"
                                                }
                                            ],
                                        }
                                    }
                                },
                                row4: {
                                    formElements:{
                                        color: {
                                            label: 'Color',
                                            element: 'input',
                                            type: 'color',
                                            placeholder: ''
                                        },
                                        role: {
                                            label: 'Rol',
                                            element: 'select',
                                            required: true,
                                            options: [
                                                {
                                                    label: 'Administrador',
                                                    value: 'admin'
                                                },
                                                {
                                                    label: 'Usuario',
                                                    value: 'user'
                                                }
                                            ]
                                        }
                                    }
                                },
                                row5: {
                                    formElements:{
                                        edad: {
                                            label: 'Edad',
                                            element: 'input',
                                            type: 'number',
                                            placeholder: '',
                                            required: true
                                        },
                                        telefono: {
                                            label: 'Teléfono',
                                            element: 'input',
                                            type: 'tel',
                                            placeholder: '',
                                            required: true
                                        },
                                        url: {
                                            label: 'URL',
                                            element: 'input',
                                            type: 'url',
                                            placeholder: '',
                                            required: true
                                        }
                                    }
                                },
                                row6: {
                                    formElements:{
                                        creationDate: {
                                            label: 'Fecha de creación',
                                            element: 'input',
                                            type: 'date',
                                            placeholder: '',
                                            required: true,
                                            validate: 'date'
                                        },
                                        creationTime: {
                                            label: 'Hora de creación',
                                            element: 'input',
                                            type: 'time',
                                            placeholder: '',
                                            required: true
                                        }
                                    }
                                },
                                row7: {
                                    formElements:{
                                        reservationWeek: {
                                            label: 'Semana de reserva',
                                            element: 'input',
                                            type: 'week',
                                            placeholder: '',
                                            required: true
                                        },
                                        reservationMonth: {
                                            label: 'Mes de reserva',
                                            element: 'input',
                                            type: 'month',
                                            placeholder: '',
                                            required: true
                                        },
                                        reservationDateTime: {
                                            label: 'Fecha y hora',
                                            element: 'input',
                                            type: 'datetime-local',
                                            placeholder: '',
                                            required: true
                                        }
                                    }
                                },
                                row8: {
                                    formElements:{
                                        capital: {
                                            label: 'Capital',
                                            element: 'input',
                                            type: 'range',
                                            min: 0,
                                            max: 100,
                                            step: 1,
                                            value: 50,
                                            placeholder: ''
                                        },
                                    }
                                   
                                },
                                row9: {
                                    formElements:{
                                        pdf: {
                                            label: 'Pdf',
                                            element: 'input',
                                            type: 'file',
                                            placeholder: '',
                                            required: true
                                        },
                                        search: {
                                            label: 'Buscar',
                                            element: 'input',
                                            type: 'search',
                                            placeholder: '',
                                            required: true
                                        }
                                    }
                                },
                                row10: {
                                    formElements:{
                                        description: {
                                            label: 'Descripción',
                                            element: 'textarea',
                                            maxLength: 100,
                                            placeholder: '',
                                            required: true
                                        }
                                    }
                                }
                            }
                        },
                        secundario: {
                            rows:{
                                row1: {
                                    formElements:{
                                        idSecund:{
                                            element: 'input',
                                            type: 'hidden',
                                        },
                                        nameSecund: {
                                            label: 'Nombre',
                                            element: 'input',
                                            maxLength: '10',
                                            type: 'text',
                                            placeholder: '',
                                            required: true,
                                            validate: 'only-letters'
                                        },
                                        emailSecund: {
                                            label: 'Email',
                                            element: 'input',
                                            type: 'email',
                                            placeholder: '',
                                            required: true,
                                            validate: 'email'
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        };
}



customElements.define('data-form', DataForm);