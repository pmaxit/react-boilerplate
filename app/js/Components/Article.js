import React from "react"

export default class Article extends React.Component{

	constructor(){
		super();
		this.props = {
			title : "Default title"
		};
	}

	render(){

		const {title} = this.props;

		return(
			<div class="col-md-4">
				<h4> {title} </h4>
				<p>Lorem ipsum dolor sit amet, ne usu rationibus incorrupte, no cum tollit mentitum pertinacia, assum clita concludaturque sed at. Cu pri enim vocibus disputando, his tantas nonumy voluptaria ad, at eos vivendum scripserit. Duo te ceteros dissentiet adversarium. Usu te quot aeque, vim cu rebum graeci inimicus. Eam munere percipit eu, qui an rebum phaedrum eloquentiam. His te congue verterem.

Ut cum possit repudiandae voluptatibus. Ut mea dico ferri repudiandae. Propriae referrentur quo an. Ei solet nostro lucilius usu.

Sit no reque tractatos. Congue suscipiantur sea in, quo ex omnis utroque. Quo magna ignota laoreet no, insolens laboramus maiestatis vim ei. Est id choro aeterno honestatis, ut per lobortis persequeris reformidans, id congue aliquip deserunt vim. Qui platonem euripidis ex.

Suas referrentur sed at, appetere expetenda eam ex. Quot dicta facilis vix an, ex modus definiebas has. Te nec stet feugait, ei dicit prodesset vel. Aeque possit scribentur ne nam, causae dignissim duo ne, ut solet tractatos molestiae ius. Dicat noluisse complectitur in est, probatus suavitate referrentur per at, cum elitr minimum invidunt ut.

Ne purto causae graecis sea, sit debitis sententiae at. Liber urbanitas cum eu, porro principes ius et. In usu veri maiorum, ius et probo inimicus persequeris, in quo euripidis definitiones. Et solet periculis splendide nam. Postea dissentias per ut, ea pro choro essent debitis. His cu verear molestie tractatos, ne qui graecis fuisset.</p>
				<a class = "btn btn-default" href="#"> More Info </a>
			</div>
		);
	}
}