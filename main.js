secret_mode = false
users = [['a123', '1234'], ['test', 'no test']]

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

function form() {
	if([name, password] in users) {
		alert('Name and password correct')
		return true
	} else {
		alert('Name or password no correct!')
		return false
	}
}

function interval1() {
	var counter = 0
	id = setInterval(interval, 1000)
	
	function interval() {
		counter++
		console.log('timer:', counter)
		if(counter > 9) {
			clearInterval(id)
		}
	}
}
