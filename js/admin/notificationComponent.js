class Notification extends HTMLElement {
	constructor() {
		super();
		this.shadow = this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() { return ['text', 'type'];}

	connectedCallback() {

		document.addEventListener('message', (event) => {
			this.setAttribute('text', event.detail.text);
			this.setAttribute('type', event.detail.type);
		});

		this.render();
	};
	
	
	attributeChangedCallback(name, oldValue, newValue) {
		
		let notificationWrapper = this.shadow.querySelector('#notification-wrapper');
		let notification = this.shadow.querySelector('#notification');
		notificationWrapper.classList.add('active');

		setTimeout(() => {
			notification.classList.add('active');
		}, 500);

		setTimeout(() => {
			notificationWrapper.classList.remove("active");
			notification.classList.remove("active");
			this.removeAttribute('type');
		}, 5000);
	
		if (this.name === 'text') {
			this.shadow.querySelector('#notification-message').innerHTML = newValue;
		} else if (this.name === 'type') {
			let notification = this.shadow.querySelector('#notification');
			notification.classList.remove(oldValue);
			notification.classList.add(newValue);
		}
	}


	render(){
		this.shadow.innerHTML = `
		<style>
		.notification-wrapper {
			position: absolute;
			justify-content: center;
			align-items: center;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			display: none;
		  }
		  .notification-wrapper.active {
			display: flex;
		  }
		  
		  .notification {
			width: 360px;
			padding: 2rem;
			text-align: center;
			display: flex;
			position: relative;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			font-weight: 200;
			margin: auto;
			box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
			transform: translateY(-600%);
			transition: opacity 2s ease-in-out, transform 0.8s ease-in-out;
			opacity: 0;
			z-index: 1000;
		  }
		  .notification p {
			font-size: 1.5rem;
			color: #ffffff;
			margin: 0;
		  }
		  .notification img {
			width: 20%;
			display: block;
			filter: invert(100%);
			margin-bottom: 0.5rem;
		  }
		  .notification.active {
			background-color: #7dca2b;
			transform: translateY(0);
			opacity: 1;
		  }
		  .notification.error {
			background-color: #ff0000;
			transform: translateY(0);
			opacity: 1;
		  }
		</style>
		<div id="notification-wrapper" class="notification-wrapper">
			<div id="notification" class="notification">
				<img src="img/sobre.png" alt="">
				<p id="notification-message"></p>
			</div>
		</div>
	  `;
	};

  }
  

  customElements.define('notificacion-componente', Notification);