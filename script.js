// System Custom Visual UI Alert Handler
window.alert = function(message, isSuccess = false) {
    const toast = document.createElement("div");
    toast.className = "toast-notification" + (isSuccess ? " toast-success" : "");
    const icon = isSuccess ? "fa-heart" : "fa-info-circle";
    toast.innerHTML = `<i class="fas ${icon}"></i> ` + message;
    document.body.appendChild(toast);
    
    setTimeout(() => { toast.style.opacity = "1"; toast.style.transform = "translateX(-50%) translateY(0)"; }, 15);
    setTimeout(() => {
        toast.style.opacity = "0"; toast.style.transform = "translateX(-50%) translateY(-20px)";
        setTimeout(() => document.body.removeChild(toast), 350);
    }, 3500); 
};

const appConfig =[{
    title: "ISKCON Hadapsar App",
    developer: "Official Digiseva (Beta Mode)",
    appId: "iskcon.hadapsar",
    logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh89ueri3DvWfVUmM76dyYJSTCLcDC6oYuAT3j-ezAKl5iDeJ97q28vt2MR39RJwL8BGI91we6F4DRj-u7j1EE2NPyQRwFs0HfYcB4HjxZ9VoeUQWGR7GdARSdow00uHqEehsr6gOVDFG15mntfIdNuOrQ_fxAZHCjMWU9kEjzaUMhuN52vsKMA6Tb9Dtx3/s256/1000096788.png"
}];

function openGroup(groupUrl) {
    if(!groupUrl) groupUrl = "https://groups.google.com/g/iskcon-app-testers";
    window.open(groupUrl, '_blank');
    setTimeout(() => { document.getElementById("confirm").parentElement.style.border = "1px dashed var(--whatsapp-green)"; }, 1800);
}

function joinTest(appId) {
    var finalAppId = appId || "iskcon.hadapsar";
    var check = document.getElementById("confirm");
    if(check && check.checked){ window.open("https://play.google.com/apps/testing/" + finalAppId, '_blank'); } 
    else { alert("Santosh Prabhu requests checking confirmation tick-box first."); }
}

function installApp(appId) {
    var check = document.getElementById("confirm");
    var finalAppId = appId || "iskcon.hadapsar";
    if(check && check.checked){ window.open("https://play.google.com/store/apps/details?id=" + finalAppId, '_blank'); } 
    else { alert("Hari Bol! Please Check Confirmation check box first above to unlock Play Store validation logic."); }
}

function initializeAppsUI() {
    const container = document.getElementById("apps-container");
    container.innerHTML = ""; 

    appConfig.forEach((app) => {
        const cardHTML = `
            <div class="app-card">
                <div class="card-top-accent"></div>
                <img src="${app.logo}" alt="${app.title}" class="app-logo">
                <div class="app-title">${app.title}</div>
                <div class="app-subtitle">${app.developer}</div>
                
                <div class="btn-custom-play" onclick="installApp('${app.appId}')" title="PlayStore Redirect Logic Binding!">
                    <div class="play-icon-box"><i class="fab fa-google-play"></i></div>
                    <div class="play-text-box">
                        <span class="play-small">GET IT ON</span>
                        <span class="play-large">Google Play</span>
                    </div>
                </div>
                
                <button class="btn-testing-hidden-backup" onclick="joinTest('${app.appId}')">[Alt: Proceed secondary test framework engine access mechanism option securely mapped]
                </button>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', cardHTML);
    });
    
    populateDeviceInformation();
}

function populateDeviceInformation() {
    const ua = navigator.userAgent;
    let dStats = ua;
    try {
        if(/Android/.test(ua)) dStats = "Android Core OS :" + ua.match(/Android\s([0-9\.]*)/)[0] + " \nSystem Identity Hardware Signature Map String Value Logs: \n" + ua.split(')')[0].split(';').pop().trim();
        else if(/iPhone/.test(ua)) dStats = "Platform API iOS Architecture validation active environment processing...";
        else dStats = "Web Development Environment Host Server OS: " + navigator.platform;
    } catch(e) {}
    
    document.getElementById('fb_device').value = dStats; 
    injectUltraDiagnosticMetrics(dStats);
}

async function injectUltraDiagnosticMetrics(fallbackString) {
    let accurateStats = "";
    let dRes = `${window.screen.width} x ${window.screen.height} px`;
    let dRam = navigator.deviceMemory ? `${navigator.deviceMemory}GB+ RAM` : `N/A`;
    let dCpu = navigator.hardwareConcurrency ? `${navigator.hardwareConcurrency} Cores` : `N/A`;

    if (navigator.userAgentData && navigator.userAgentData.getHighEntropyValues) {
        try {
            const preciseInfo = await navigator.userAgentData.getHighEntropyValues(["model", "platform", "platformVersion"]);
            const trueModel = preciseInfo.model || 'Unknown-Device-Mobile';
            const trueOsVersion = preciseInfo.platformVersion || 'Base';
            
            accurateStats = `Mod: [${trueModel}] | OS: ${preciseInfo.platform} ${trueOsVersion} \nCPU/RAM: ${dCpu} / ${dRam} \nScreen Resolution: ${dRes}`;
            
        } catch(error) { accurateStats = `${fallbackString} \nScreen/Ram Logs: ${dRes} | ${dRam} | CPU: ${dCpu}`; }
    } else {
        accurateStats = `${fallbackString} \nScreen/Ram Logs: ${dRes} | ${dRam} | CPU: ${dCpu}`;
    }
    
    document.getElementById('fb_device').value = accurateStats;
}

function handleFormSubmission(e) {
    e.preventDefault();
    const n = document.getElementById('fb_name').value;
    const t = document.getElementById('fb_type').value;
    const d = document.getElementById('fb_device').value;
    const m = document.getElementById('fb_message').value;

    window.open(`mailto:developer.iskcon@example.com?subject=${t} Alert Santosh Mishra by ${n}&body=Detailed Client OS Telemetry: %0A%0A ${encodeURIComponent(d)} %0A%0A Manual Explanation Attached: %0A%0A ${encodeURIComponent(m)}`);
    alert("Primary native execution triggered beautifully, executing system local app config handler routing parameters successfully.", true);
}

function handleWhatsAppSubmission() {
    const form = document.getElementById('bugReportForm');
    if (!form.checkValidity()) { form.reportValidity(); return; }

    const name = document.getElementById('fb_name').value;
    const type = document.getElementById('fb_type').value;
    const deviceDataTextPayloadExtracted = document.getElementById('fb_device').value;
    const message = document.getElementById('fb_message').value;

    const pNum = "919561160799"; 

    let txt = `Hari Bol Santosh Prabhu! 🙏✨\n\n`;
    txt += `_Message sent from Web Portal Test App_\n`;
    txt += `〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️\n\n`;
    txt += `👤 *Prabhu Name*: ${name}\n`;
    txt += `🔮 *Log Type*: ${type}\n`;
    txt += `💬 *Bug/Feature Explaintation*:\n${message}\n\n`;
    txt += `🛡️ *Accurate System Capabilities Extract:*\n${deviceDataTextPayloadExtracted}\n`;

    window.open(`https://wa.me/${pNum}?text=${encodeURIComponent(txt)}`, '_blank');
    
    alert("Initializing Santosh WhatsApp Gateway! Launching directly App Context...", true);
}

window.onload = initializeAppsUI;
