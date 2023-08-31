const html5ScannerFormat = [
    "QR_CODE",
    "AZTEC",
    "CODABAR",
    "CODE_39",
    "CODE_93",
    "CODE_128",
    "DATA_MATRIX",
    "MAXICODE",
    "ITF",
    "EAN_13",
    "EAN_8",
    "PDF_417",
    "RSS_14",
    "RSS_EXPANDED",
    "UPC_A",
    "UPC_E",
    "UPC_EAN_EXTENSION"
]

const config = {
    fps: 10,
    qrbox: {
        width: 300,
        height: 150
    },
    // formatsToSupport: html5ScannerFormat
}
var html5QrcodeScanner = new Html5QrcodeScanner(
    "reader", config
)
html5QrcodeScanner.render(onScanSuccess)

function onScanSuccess(decodedText, decodedResult) {
    const inputElem = document.getElementById('inputBarcode')
    if (inputElem) {
        inputElem.value = decodedText
    }
    console.log(decodedResult)
}

function onScanError(errorMessage) {
    console.log(errorMessage)
}