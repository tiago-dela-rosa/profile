var config = {}


if(window.location.hostname === 'localhost'){

	config.backendUrl = 'http://localhost:3333';

}else{

	config.backendUrl = 'http://bolodepadoca.com:3333';

}

export default  config;