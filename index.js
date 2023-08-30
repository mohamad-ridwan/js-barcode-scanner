var html5QrcodeScanner = new Html5QrcodeScanner(
    "reader", {fps: 10, qrbox: {
        width: 250,
        height: 250
    }}
)
html5QrcodeScanner.render(onScanSuccess, onScanError)

function onScanSuccess(decodedText, decodedResult){
    const inputElem = document.getElementById('inputBarcode')
    if(inputElem){
        inputElem.value = decodedText
    }
}

function onScanError(errorMessage){
    console.log(errorMessage)
}