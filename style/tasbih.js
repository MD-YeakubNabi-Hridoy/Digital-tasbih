const subhanAllahDisplay = document.getElementById('subhanAllahDisplay');
const subhanAllahIncriment = document.getElementById('subhanAllahIncriment');
const subhanAllahDecriment = document.getElementById('subhanAllahDecriment');

const AlhamdulillahDisplay = document.getElementById('AlhamdulillahDisplay');
const AlhamdulillahIncriment = document.getElementById('AlhamdulillahIncriment');
const AlhamdulillahDecriment = document.getElementById('AlhamdulillahDecriment');

const AllahuAkberDisplay = document.getElementById('AllahuAkberDisplay');
const AllahuAkberIncriment = document.getElementById('AllahuAkberIncriment');
const AllahuAkberDecriment = document.getElementById('AllahuAkberDecriment');

const resetBtn = document.getElementById('btn-reset');

let subhanAllahInitialValue = 0;
let alhamdulillahInitialValue = 0;
let allahuAkberInitialValue = 0;

subhanAllahIncriment.addEventListener( 'click', function(){
    if( subhanAllahInitialValue === 33){
        return alert ('Tasbih completer, please go to next one')
    }
    subhanAllahInitialValue += 1
    subhanAllahDisplay.innerText=subhanAllahInitialValue;
})
subhanAllahDecriment.addEventListener( 'click', function(){
    if( subhanAllahInitialValue === 0){
        return alert ('You cant added negative value')
    }
    subhanAllahInitialValue -= 1
    subhanAllahDisplay.innerText=subhanAllahInitialValue;
})
AlhamdulillahIncriment.addEventListener( 'click', function(){
    if( alhamdulillahInitialValue === 33){
        return alert ('Tasbih completer, please go to next one')
    }
    alhamdulillahInitialValue += 1
    AlhamdulillahDisplay.innerText=alhamdulillahInitialValue;
})
AlhamdulillahDecriment.addEventListener( 'click', function(){
    if( alhamdulillahInitialValue === 0){
        return alert ('You cant added negative value')
    }
    alhamdulillahInitialValue -= 1
    AlhamdulillahDisplay.innerText=alhamdulillahInitialValue;
})
AllahuAkberIncriment.addEventListener( 'click', function(){
    if( allahuAkberInitialValue === 34){
        return alert ('Tasbih completer, please go to next one')
    }
    allahuAkberInitialValue += 1
    AllahuAkberDisplay.innerText=allahuAkberInitialValue;
})
AllahuAkberDecriment.addEventListener( 'click', function(){
    if( allahuAkberInitialValue === 0){
        return alert ('You cant added negative value')
    }
    allahuAkberInitialValue -= 1
    AllahuAkberDisplay.innerText=allahuAkberInitialValue;
})

resetBtn.addEventListener( 'click', function(){
    subhanAllahDisplay.innerText=0;
    AlhamdulillahDisplay.innerText=0;
    AllahuAkberDisplay.innerText=0;
    subhanAllahInitialValue=0;
    alhamdulillahInitialValue=0;
    allahuAkberInitialValue=0;
})