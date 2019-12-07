import React, {useState} from 'react';
import { FaCode, FaReact, FaUserTie, FaRegStar, FaAngleLeft, FaAngleRight, FaTimes, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import './Stars.css';
import './Meteors.css';
import './Profile.css';

import logoTindev from '../assets/profile/logos/tindev.jpg';
import noteTindev from '../assets/notetindev.png';
import crmApp from '../assets/crmapp.png';
import crm from '../assets/crm.png';
import theYear from '../assets/theyear.png';
import jusbrasil from '../assets/jusbrasil.gif';
import ofertasmorumbi from '../assets/ofertasmorumbi.png';
import wyndham from '../assets/wyndham.png';
import boloPadoca from '../assets/profile/bolopadoca.png';

export default class Profile extends React.Component{

	constructor(props) {
   	super(props);
   	this.state = { 
   		timeLine: 1, 
   		nav: 1, 
   		currentSection: 'section1',
   		project: {
   			status: false
   		}
   	};
	}

	navigationTo(sectionValue){

		let value = window.innerHeight;
		value = value * (sectionValue - 1);

		window.scrollTo({ top: value, behavior: 'smooth' });
	}

	timeLineNext(){
		this.setState((prevState, props) => ({
			timeLine : prevState.timeLine + 1
		}))
	}

	timeLinePrev(){
		this.setState((prevState, props) => ({
			timeLine : prevState.timeLine - 1
		}))
	}

	addActiveClassNav(section){
		this.setState({currentSection: section});
	}

	openProject(selectedProject){
		this.setState((prevState) => ({
			project : {
				status :  true,
				image: selectedProject.image,
				title: selectedProject.title,
				slug: selectedProject.slug,
				url: selectedProject.url,
				description: selectedProject.description,
				tags: selectedProject.tags
			}
		}))
	}

	closeProject(selectedProject){
		this.setState((prevState) => ({
			project : {
				status :  false
			}
		}))
	}

	render(){
		return (
			<div id="myFullpage">
				
				<nav id="navigation">
					<ul>
						<li 
							className={this.state.currentSection === 'section1' ? 'current' : ''} 
							onClick={() => {
								this.addActiveClassNav('section1')
								this.navigationTo(1)
							}}>	
						</li>
						<li
							className={this.state.currentSection === 'section2' ? 'current' : ''} 
							onClick={() => {
								this.addActiveClassNav('section2')
								this.navigationTo(2)
							}}>	
						</li>
						<li
							className={this.state.currentSection === 'section3' ? 'current' : ''} 
							onClick={() => {
								this.addActiveClassNav('section3')
								this.navigationTo(3)
							}}>	
						</li>
						<li
							className={this.state.currentSection === 'section4' ? 'current' : ''} 
							onClick={() => {
								this.addActiveClassNav('section4')
								this.navigationTo(4)
							}}>	
						</li>
					</ul>
				</nav>

				<section id="about">

					<div id='stars'></div>
					<div id='stars2'></div>
					<div id='stars3'></div>

					<h1>Tiago Dela Rosa Lopes</h1>
					<h2>Desenvoldedor Web</h2>
					<div className="description">
						<p>Esse portfólio representa apenas um pedacinho de 7 anos de milhares linhas de códigos, café e muita dedicação. Gosto obviamente de programar mas gosto ainda mais de trabalhar com pessoas com que sei que vou aprender, ajudar e me divertir.</p>
						<button 
							onClick={() => {
								this.addActiveClassNav('section4')
								this.navigationTo(4)
							}}>
							Ver projetos
						</button>
						<ul>
							<a target="_blank" href="https://github.com/tiago-dela-rosa">
								<li><FaGithub /></li>
							</a>
							<a target="_blank" href="https://www.linkedin.com/in/tiago-dela-rosa-lopes-12aba6133/">
								<li><FaLinkedin /></li>
							</a>
							<a href="https://api.whatsapp.com/send?l=pt_BR&phone=5511948387573">
								<li><FaWhatsapp /></li>
							</a>
						</ul>
					</div>
				</section>

				<section id="skills">
					<div className="grid">
					  <div className="item backend">
					  		<h3><FaCode value={{ className: 'react-icons' }} /> Backend</h3>
					  		<table>
					  			<tbody>
					  				<tr>
					  					<td name="lang">PHP</td>
					  					<td name="ranking">
					  						<FaRegStar/>
					  						<FaRegStar/>
					  						<FaRegStar/>
					  						<FaRegStar className="disabled"/>
					  						<FaRegStar className="disabled"/>
					  					</td>
					  				</tr>
					  				<tr>
					  					<td name="lang">SQL</td>
					  					<td name="ranking">
					  						<FaRegStar/>
					  						<FaRegStar/>
					  						<FaRegStar/>
					  						<FaRegStar className="disabled"/>
					  						<FaRegStar className="disabled"/>
					  					</td>
					  				</tr>
					  				<tr>
					  					<td name="lang">NodeJS</td>
					  					<td name="ranking">
					  						<FaRegStar/>
					  						<FaRegStar/>
					  						<FaRegStar className="disabled"/>
					  						<FaRegStar className="disabled"/>
					  						<FaRegStar className="disabled"/>
					  					</td>
					  				</tr>	
					  				<tr>
					  					<td name="lang">Python</td>
					  					<td name="ranking">
					  						<FaRegStar/>
					  						<FaRegStar/>
					  						<FaRegStar className="disabled"/>
					  						<FaRegStar className="disabled"/>
					  						<FaRegStar className="disabled"/>
					  					</td>
					  				</tr>	
					  				<tr>
					  					<td name="lang">API REST</td>
					  					<td name="ranking">
					  						<FaRegStar/>
					  						<FaRegStar/>
					  						<FaRegStar className="disabled"/>
					  						<FaRegStar className="disabled"/>
					  						<FaRegStar className="disabled"/>
					  					</td>
					  				</tr>						  								  							  				
					  			</tbody>
					  		</table>
					  	</div>
					  <div className="item frontend">
					  		<h3><FaReact value={{ className: 'react-icons' }} /> Frontend</h3>
					  		<table>
					  			<tbody>
					  				<tr>
					  					<td name="lang">Javascript</td>
					  					<td name="ranking">
					  						<FaRegStar/>
					  						<FaRegStar/>
					  						<FaRegStar/>
					  						<FaRegStar/>
					  						<FaRegStar/>
					  					</td>
					  				</tr>
					  				<tr>
					  					<td name="lang">HTML & CSS</td>
					  					<td name="ranking">
					  						<FaRegStar/>
					  						<FaRegStar/>
					  						<FaRegStar/>
					  						<FaRegStar/>
					  						<FaRegStar className="disabled"/>
					  					</td>
					  				</tr>
					  				<tr>
					  					<td name="lang">Mobile</td>
					  					<td name="ranking">
					  						<FaRegStar/>
					  						<FaRegStar/>
					  						<FaRegStar/>
					  						<FaRegStar className="disabled"/>
					  						<FaRegStar className="disabled"/>
					  					</td>
					  				</tr>	
					  				<tr>
					  					<td name="lang">GIT</td>
					  					<td name="ranking">
					  						<FaRegStar/>
					  						<FaRegStar/>
					  						<FaRegStar/>
					  						<FaRegStar className="disabled"/>
					  						<FaRegStar className="disabled"/>
					  					</td>
					  				</tr>
				  					<tr>
					  					<td name="lang">SEO</td>
					  					<td name="ranking">
					  						<FaRegStar/>
					  						<FaRegStar/>
					  						<FaRegStar/>
					  						<FaRegStar className="disabled"/>
					  						<FaRegStar className="disabled"/>
					  					</td>
					  				</tr>						  					
					  				<tr>
					  					<td name="lang">Vue</td>
					  					<td name="ranking">
					  						<FaRegStar/>
					  						<FaRegStar/>
					  						<FaRegStar className="disabled"/>
					  						<FaRegStar className="disabled"/>
					  						<FaRegStar className="disabled"/>
					  					</td>
					  				</tr>						  									  								  							  				
					  			</tbody>
					  		</table>				  		
					  	</div>
					  <div className="item softskills">
					  		<h3><FaUserTie value={{ className: 'react-icons' }} /> Softskills</h3>
					  		<table>
					  			<tbody>
					  				<tr>
					  					<td name="lang">Resolução</td>
					  					<td name="ranking">
					  						<FaRegStar/>
					  						<FaRegStar/>
					  						<FaRegStar/>
					  						<FaRegStar/>
					  						<FaRegStar/>
					  					</td>
					  				</tr>					  				
					  				<tr>
					  					<td name="lang">Criatividade</td>
					  					<td name="ranking">
					  						<FaRegStar/>
					  						<FaRegStar/>
					  						<FaRegStar/>
					  						<FaRegStar/>
					  						<FaRegStar className="disabled"/>
					  					</td>
					  				</tr>	
					  				<tr>
					  					<td name="lang">Flexibilidade</td>
					  					<td name="ranking">
					  						<FaRegStar/>
					  						<FaRegStar/>
					  						<FaRegStar/>
					  						<FaRegStar className="disabled"/>
					  						<FaRegStar className="disabled"/>
					  					</td>
					  				</tr>					  								  				
					  				<tr>
					  					<td name="lang">Comunicação</td>
					  					<td name="ranking">
					  						<FaRegStar/>
					  						<FaRegStar/>
					  						<FaRegStar/>
					  						<FaRegStar className="disabled"/>
					  						<FaRegStar className="disabled"/>
					  					</td>
					  				</tr>	
					  				<tr>
					  					<td name="lang">Equipe </td>
					  					<td name="ranking">
					  						<FaRegStar/>
					  						<FaRegStar/>
					  						<FaRegStar/>
					  						<FaRegStar className="disabled"/>
					  						<FaRegStar className="disabled"/>
					  					</td>
					  				</tr>						  										  				
					  				<tr>
					  					<td name="lang">Organização</td>
					  					<td name="ranking">
					  						<FaRegStar/>
					  						<FaRegStar/>
					  						<FaRegStar className="disabled"/>
					  						<FaRegStar className="disabled"/>
					  						<FaRegStar className="disabled"/>
					  					</td>
					  				</tr>						  								  							  				
					  			</tbody>
					  		</table>							  		
					  </div>				
					</div>
				</section>
				
				<section id="timeline">
					<div className="meteor-container">
						<div></div>
						<div></div>
						<div></div>
						<div></div>
					</div>

					<div className="meteor-container-2">
						<div></div>
						<div></div>
						<div></div>
						<div></div>
					</div>

					{ this.state.timeLine === 1 &&	
						<aside>
							<h2>HOJE  - 2018</h2>
							<div className="item">
								<div className="description">
									<h3>Programador fullstack</h3>
									<h4>Wyndham Club Brasil</h4>
									<p>Atualmente estou desenvolvendo um sistema de gestão <a target="_blank" href="http://premiumcrm.com.br">premiumcrm.com.br</a> participando do front ao back-end em paralelo com outros projetos como por exemplo um <a target="_blank" href="http://premiumcrm.com.br/app">aplicativo em ionic</a>. Sempre procurando melhorar o desenvolvimento e atender ás necessidades da empresa seja otimizando o trabalho de outros setores ou orientando programadores novos!</p>
								</div>
							</div>
							<nav onClick={ () => this.timeLineNext() } className="right"><FaAngleRight /></nav>
						</aside>
					}

					{ this.state.timeLine === 2 &&	
						<aside>
							<h2>2015 - 2016</h2>
							<div className="item">
								<div className="description">
									<h3>Programador front-end</h3>
									<h4>Dk3 Internet</h4>
									<p>Minha segunda experiencia na <a target="_blank" href="http://www.dk3.com.br/internet/">Dk3 Internet</a>, minhas principais atividades foram com desenvolvimento de websites com foco no design responsivo, aplicativos e sistemas web. Ocasionalmente montava templates de e-mail marketing para disparo em massa.</p>
								</div>
							</div>
							<nav onClick={ () => this.timeLinePrev() } className="left"><FaAngleLeft /></nav>
							<nav onClick={ () => this.timeLineNext() } className="right"><FaAngleRight /></nav>
						</aside>
					}

					{ this.state.timeLine === 3 &&	
						<aside>
							<h2>2013 - 2014</h2>
							<div className="item">
								<div className="description">
									<h3>Programador</h3>
									<h4>Grupo D2C</h4>
									<p>Principais atividades: Manutenção de blogs wordpress, desenvolvimento de webistes e
									sistemas de clientes como: Grupo Latam (sistema de pontuação para desconto em viagens),
									Estúdio da Sobrancelha (manutenção e suporte do site <a target="_blank" href="https://web.archive.org/web/20170516095706/http://www.estudiodasobrancelha.com.br/">www.estudiodasobrancelha.com.br</a>),
									Ofertas no Morumbi (suporte no site <a target="_blank" href="https://www.ofertasnomorumbi.com.br/ofertas/morumbi">www.ofertasnomorumbi.com.br</a> um portal de vendas)</p>
								</div>
							</div>
							<nav onClick={ () => this.timeLinePrev() } className="left"><FaAngleLeft /></nav>
							<nav onClick={ () => this.timeLineNext() } className="right"><FaAngleRight /></nav>
						</aside>
					}																

					{ this.state.timeLine === 4 &&	
						<aside>
							<h2>2011 - 2013</h2>
							<div className="item">
								<div className="description">
									<h3>Dk3 Internet</h3>
									<h4>Programador Jr</h4>
									<p>Aos 18 anos meu primeiro trabalho foi com desenvolvimento de websites, SEO, gerenciamento de e-mail marketing e atendimento ao cliente, desde aquela época me apaixoinei por programação e desde então sempre procurei aprender,ampliar e compartilhar meus conhecimentos :)</p>
								</div>
							</div>
							<nav onClick={ () => this.timeLinePrev() } className="left"><FaAngleLeft /></nav>
						</aside>
					}									
				</section>
				
				<section id="projects">
					
					{ this.state.project.status !== false &&
						<div className="overlay-wrapper">
							<div className="preview">
								<FaTimes onClick={ () => this.closeProject() } />
								<div className="image">
									<img src={ this.state.project.image } alt={ this.state.project.title } />
								</div>
								<div className="description">
									<h3>{ this.state.project.title }</h3>
									<h4>
										<a target="_blank" href={ this.state.project.url }><span role="img" aria-label="link">🔗</span> { this.state.project.slug }</a>
										{ this.state.project.description }
									</h4>
									<ul className="tags">
										{ 
											this.state.project.tags.map(tag => (
												<li key={tag}>{tag}</li>
											)) 
										}
									</ul>
								</div>						
							</div>
						</div>
					}
					
					<div className="grid">
						<ul>
							<li 
								onClick={ () => this.openProject(
									{ 
										image: noteTindev, 
										url: "http://bolodepadoca.com/tindev", 
										slug: "bolodepadoca.com/tindev", 
										title: "Tindev", 
										description: 'Protótipo do Tinder que conecta desenvolvedores através de seus perfis no Github. \n Idealizado pela Semana OmniStack 8, durante o período de 5 dias foi desenvolvido front-end em React JS e uma REST API com Express JS usando o MongoDB para armazenar Likes e Dislikes de cada usuário e com Socket.io mostrar um match em tempo real.',
										tags: ['React', 'Node', 'Express', 'REST API', 'Mongo db', 'Socket.io', 'CSS Flexbox']
									}
								)} 
								title="Tindev" 
								className="tindev">	
							</li>

							<li 
								onClick={ () => this.openProject(
									{ 
										image: crmApp, 
										url: "https://play.google.com/store/apps/details?id=io.premiumcrm.starter", 
										slug: "play.google.com/store/apps/premiumcrm", 
										title: "App Premium CRM", 
										description: 'Aplicativo de captação no qual é feito agendamento de contatos para servir um sistema de gestão. \n Feito em Ionic 3 usando webview porem com uma interface simples e amigável para que o cadastro seja feito com eficiência \n É necessário usuário para acessar, entre em contato com delarosalopes@gmail.com',
										tags: ['Ionic', 'Vue', 'Moment js', 'Php', 'Mysqli', 'Semantic UI']
									}
								)} 
								title="PremiumCRM - APP" 
								className="premiumcrm_app">	
							</li>

							<li 
								onClick={ () => this.openProject(
									{ 
										image: crm, 
										url: "https://www.premiumcrm.com.br/site/", 
										slug: "premiumcrm.com.br", 
										title: "Premium CRM", 
										description: 'Sistema de gerenciamento de contatos, reservas, contratos, negociação e telemarketing. Colaborei em diversas frentes trabalhando como fullstack sempre procurando incansavelmente soluções e alternativas para todos tipos de problemas e desafios',
										tags: ['Jquery', 'Jquery UI', 'DevExtreme', 'Semantic UI', 'Dropzone js', 'Php', 'POO', 'Mysqli', 'SendGrid', 'Php Office']
									}
								)} 
								title="PremiumCRM - APP" 
								className="premiumcrm">	
							</li>
							<li 
								onClick={ () => this.openProject(
									{ 
										image: theYear, 
										url: "https://www.theyear.com.br/", 
										slug: "theyear.com.br", 
										title: "The Year", 
										description: 'Website de balada tunts tunts, fron-end 100% responsivo desenvolvido no Webflow e no back-end foi criado um método para que qualquer pessoa consiga criar eventos e fazer uploads de fotos. Aviso: abaixe o volume do seu dispositivo antes de se conectar',
										tags: ['Webflow', 'Cross-browser', 'Javascript', 'Php', 'XML']
									}
								)} 
								title="PremiumCRM - APP" 
								className="theyear">	
							</li>
							<li 
								onClick={ () => this.openProject(
									{ 
										image: jusbrasil, 
										url: "https://www.jusbrasil.com.br/advogados/sp-sao-paulo/", 
										slug: "jusbrasil.com.br/advogados/sp-sao-paulo", 
										title: "WebScraping", 
										description: 'Neste projeto foi desenvolvido um webscraping para recureprar dados dos advogados de todo o Brasil. Foi utilizado Javascript para recuperar dados de telefone e e-mail. O processo foi executado em todos os estados e retornou cerca de 3.000 contatos',
										tags: ['Python', 'Jupyter', 'Selenium', 'Beautifulsoup', 'Javascript', 'Sql']
									}
								)} 
								title="Web Scraping" 
								className="webscraping">	
							</li>
							<li 
								onClick={ () => this.openProject(
									{ 
										image: ofertasmorumbi, 
										url: "https://www.ofertasnomorumbi.com.br/ofertas/morumbi", 
										slug: "ofertasnomorumbi.com.br", 
										title: "Ofertas Morumbi", 
										description: 'Colaborei no desenvolvimento do website de ofertas e cupons da região do Morumbi, São Paulo. Com administrador e sistema de vencimentos de promoções.',
										tags: ['Webflow', 'Cross-browser', 'Jquery', 'Parallax', 'Bootstrap', 'Php']
									}
								)} 
								title="Web Scraping" 
								className="ofertasmorumbi">	
							</li>
							<li 
								onClick={ () => this.openProject(
									{ 
										image: wyndham, 
										url: "https://wyndhamclubbrasil.com.br", 
										slug: "wyndhamclubbrasil.com.br", 
										title: "Whyndham Club Brasil", 
										description: 'Website de planos de férias e viagens, foi recriado a partir de um webscraping do site wyndhamclubbrasil.com, sendo refatorado e desenvolvido uma tradução com Vue de forma inteligente e escalável',
										tags: ['Webflow', 'Cross-browser', 'Web Scraping', 'Vue', 'Git', 'Php', 'Goggle Analytics']
									}
								)} 
								title="Wyndham Club Brasil" 
								className="wyndham">	
							</li>
							<li 
								onClick={ () => this.openProject(
									{ 
										image: boloPadoca, 
										url: "http://bolodepadoca.com/", 
										slug: "bolodepadoca.com", 
										title: "Bolo de Padoca", 
										description: 'Inspirado em pudim.com.br, Bolo de Padoca é um website experimental, sempre quis fazer deploy de um projeto NodeJS e assim fiz essa delicia',
										tags: ['Node', 'React', 'AWS EC2', 'AWS Route 53', 'Nginx', 'Reverse proxy', 'CMD', 'Putty', 'SSH', 'Linux', 'PM2']
									}
								)} 
								title="Bolo de Padoca" 
								className="bolopadoca">	
							</li>
						</ul>
					</div>	
				</section>									
			</div>
		)
	};
	

}