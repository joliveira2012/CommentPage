const fs = require('fs');
const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

const textToSpeech = (id, text) => {
    const textToSpeech = new TextToSpeechV1({
        authenticator: new IamAuthenticator({
            apikey: 'vM4ODuhAG7kgWuoby-Tu7IaBze8TsjeNbOYfrtaWhyKd',
        }),
        url: 'https://api.us-south.text-to-speech.watson.cloud.ibm.com',
    });

    const synthesizeParams = {
        text: text,
        accept: 'audio/wav'
    };

    textToSpeech.synthesize(synthesizeParams)
        .then(audio => {
            audio.result.pipe(fs.createWriteStream('../audio/comment_'+ id + '.wav'));
        })
        .catch(err => {
            console.log('error:', err);
        });
}

exports.textToSpeech = textToSpeech;
/*exports.textToSpeech = function (id, text) {

        const textToSpeech = new TextToSpeechV1({
            authenticator: new IamAuthenticator({
                apikey: 'LOX6PW1fjd0keGHuM6qWbD2o4zuTJsRICd-mdfHhOR-L',
            }),
            url: 'https://api.us-south.text-to-speech.watson.cloud.ibm.com',
        });

        const synthesizeParams = {
            text: text,
            accept: 'audio/wav'
        };

        textToSpeech.synthesize(synthesizeParams)
            .then(audio => {
                audio.result.pipe(fs.createWriteStream('../audio/comment_'+ id + '.wav'));
            })
            .catch(err => {
                console.log('error:', err);
            });
  
}*/