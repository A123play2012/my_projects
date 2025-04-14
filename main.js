secret_mode = false

function secret() {
	if(Pword.value == '12345') {
		if(confirm('Activate secret mode?')) {
			secret_mode = true
			alert('Secret mode been activated')
		} else {
			secret_mode = false
			alert('Secret mode been deactivated')
		}
	}
}

function text1() {
	if(Pword.value == '12345') {
		text.innerHTML = 'button'
	} else {
		text.innerHTML = 'text'
	}
	
	if(Pword.value == 'red') {
		text.style.color = 'red'
	} else {
		text.style.color = 'black'
	}
}

function test2(a) {
	a.innerHTML = '<address>No text2</address>'
}
