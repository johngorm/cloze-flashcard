function BasicCard (front, back){
	if(this instanceof BasicCard){
		this.front = front;
		this.back = back;
		return this;
	}

	else{
		return new BasicCard(front,back);
	}
}


function ClozeCard (text, cloze){
	if(text.indexOf(cloze) === -1){
		console.error(`"${cloze}" not found in "${text}"`);
		return null;
	}
	else if(this instanceof ClozeCard){
		this.fullText = text;
		this.cloze = cloze;
		var clozeIndex = text.indexOf(cloze);
		this.partial = text.substring(0,clozeIndex) + '_____' + text.substring(clozeIndex + cloze.length);
		return this;
	}
	else{
		return new ClozeCard(text, cloze);
	}
	
};

BasicCard.prototype.printText = function(){
	console.log(`Question: ${this.front}`);
	console.log(`Answer: ${this.back}`);
}

ClozeCard.prototype.printText = function(){
	console.log(`Partial text: ${this.partial} 
Cloze: ${this.cloze}
Full text: ${this.fullText}`);
}


module.exports = {
	BasicCard: BasicCard,
	ClozeCard: ClozeCard
}
