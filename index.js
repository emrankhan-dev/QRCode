

const ssidPage = document.getElementById("ssid-page")
const passwordPage = document.getElementById("password-page")
const nextBtn = document.getElementById("next-btn")
const generateBtn = document.getElementById("generate-btn")
const qrCode = document.getElementById("qr-code")

nextBtn.addEventListener("click", showMeThePasswordPage)
generateBtn.addEventListener("click", generateQR)

document.getElementById("password").value = localStorage.getItem("password") || ""

function showMeThePasswordPage() {
    const ssidValue = document.getElementById("ssid").value
    if(!ssidValue) {
        alert("Please enter the wi-fi Name (SSID)!")
        return
    }
    ssidPage.style.display = "none"
    passwordPage.style.display = "block"
}

function generateQR() {
    const ssidValue = document.getElementById("ssid").value
    const passwordValue = document.getElementById("password").value

    if(!passwordValue || !ssidValue) {
        alert("Please enter Wi-Fi password")
    }


    localStorage.setItem("password", passwordValue)

    let wifiQR = `WIFI:T:WPA;S:${ssidValue};P:${passwordValue};;`

    qrCode.innerHTML = ""

    new QRCode(qrCode, {
        text: wifiQR, 
        width: 256,
        height: 256
    })

    passwordPage.style.display = "none"
}