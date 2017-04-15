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


function ClozeCard (fullText, cloze){
	if(fullText.indexOf(cloze) === -1){
		console.error(`${cloze} not found in text`);
		return null;
	}
	else if(this instanceof ClozeCard){
		this.fullText = fullText;
		this.cloze = cloze;
		this.clozeIndex = fullText.indexOf(cloze);
		this.partial = fullText.substring(0,this.clozeIndex) + '_____' + fullText.substring(this.clozeIndex + cloze.length);
		return this;
	}
	else{
		return new ClozeCard(fullText, cloze);
	}
	
};

BasicCard.prototype.printText = function(){
	console.log(`Question: ${this.front}`);
	console.log(`Answer: ${this.back}`);
}

ClozeCard.prototype.printText = function(){
	console.log(`Partial text: ${this.partial} 
	Cloze: ${this.cloze}`);
}