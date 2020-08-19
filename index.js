const btn = document.querySelector('.talk')
const content = document.querySelector('.content')

const greetings = ['Im good you little piece of love','Doing good home boy','leave me alone']
const weather = ['Weather is fine','You need a tan']

const speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new speechRecognition();


recognition.onstart = function () {
    console.log('voice is activated, you can to microphone')
}

recognition.onresult = function (event){
 const current = event.resultIndex;

 const transcript = event.results[current][0].transcript;
 content.textContent = transcript;
 readOutLoud(transcript)
}

btn.addEventListener('click',()=>{
    recognition.start()
})

function readOutLoud(message) {
    const speech = new SpeechSynthesisUtterance()
    speech.text = "I don't Know what are you said"

    if(message.includes('how are you')){
        const finalText = greetings[Math.floor(Math.random() * greetings.length)]
        speech.text = finalText
    }
    if(message.includes('how is weather')){
        const finalText = weather[Math.floor(Math.random() * weather.length)]
        speech.text = finalText
    }
    if(message.includes('open Google')){
        window.open('http://www.google.com', '_blank');
        speech.text = 'New Google window opened'
    }
    if(message.includes('open new tab')){
        window.open('http://www.google.com', '_blank');
        speech.text = 'new tab opened'
    }

    if(message.includes('open Gmail')){
        window.open('https://mail.google.com/mail', '_blank');
        speech.text = 'Gmail opened'
    }

    if(message.includes('open drive')){
        window.open('https://www.google.com/drive', '_blank');
        speech.text = 'Google Drive opened'
    }

    if(message.includes('open drive')){
        window.open('https://www.google.com/drive', '_blank');
        speech.text = 'Google Drive opened'
    }

    if(message.includes('what is time')){
        const date = new Date();
        const filteredTime = date.toLocaleString().slice(',');
        const time = filteredTime.split(',')
        const splitTime = time[1].split(':')
        const hours = splitTime[0]
        const minutes = splitTime[1]
        const meridian = splitTime[2].split(' ');
        speech.text = `the time is ${hours} hour ${minutes} minute ${meridian[1]} `
    }

    if(message.includes('search')){
        var msg = message.replace(/search/g, "");
        console.log(msg)
        window.open(`https://www.google.com/?#q=${msg}`)
        speech.text = 'Search started'
    }

    


    
    speech.volume = 1
    speech.rate = 1
    speech.pitch = 1

    window.speechSynthesis.speak(speech)
}