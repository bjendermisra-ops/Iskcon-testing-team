// ==========================================
// ADVANCED SYSTEMS INITIALIZATION
// ==========================================

// Preloader Removal Logic
window.addEventListener('load', () => {
    setTimeout(() => {
        const preloader = document.getElementById('divine-preloader');
        preloader.style.opacity = '0';
        preloader.style.transform = 'scale(1.1)';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 600);
        initializeAppsUI();
        initParticleEngine();
        initTiltEffect();
        updateGreeting();
    }, 800); // Artificial delay to ensure all assets map beautifully
});

// Advanced Network Status Logic
window.addEventListener('online', updateNetworkStatus);
window.addEventListener('offline', updateNetworkStatus);

function updateNetworkStatus() {
    const statusPill = document.getElementById('network-status');
    if (navigator.onLine) {
        statusPill.className = 'network-status online';
        statusPill.innerHTML = '<i class="fas fa-wifi"></i> <span>System Online</span>';
        setTimeout(() => statusPill.style.transform = 'translateY(-150%)', 3000);
    } else {
        statusPill.className = 'network-status offline';
        statusPill.innerHTML = '<i class="fas fa-plane-slash"></i> <span>Offline Mode Detected</span>';
        statusPill.style.transform = 'translateY(0)';
    }
}
setTimeout(updateNetworkStatus, 1500); // Check initially

// Dynamic Greeting Logic
function updateGreeting() {
    const hour = new Date().getHours();
    let greeting = "Hare Krishna!";
    if (hour >= 4 && hour < 12) greeting = "Hare Krishna, Good Morning! 🌅";
    else if (hour >= 12 && hour < 17) greeting = "Hare Krishna, Good Afternoon! ☀️";
    else if (hour >= 17 && hour < 21) greeting = "Hare Krishna, Good Evening! 🌇";
    else greeting = "Hare Krishna, Haribol! 🌌";
    document.getElementById('dynamic-greeting').innerText = greeting;
}

// 3D Tilt Physics Engine
function initTiltEffect() {
    const cards = document.querySelectorAll('.tilt-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -4; 
            const rotateY = ((x - centerX) / centerX) * 4;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`;
            
            // Dynamic Glow tracking mouse
            const glow = card.querySelector('.card-glow-bg');
            if(glow) glow.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(242, 159, 49, 0.15) 0%, transparent 60%)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
            const glow = card.querySelector('.card-glow-bg');
            if(glow) glow.style.background = `none`;
        });
    });
}

// Divine Particle Engine
function initParticleEngine() {
    const canvas = document.getElementById('particle-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particlesArray = [];
    const numberOfParticles = Math.min(window.innerWidth / 15, 60);

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2.5 + 0.5;
            this.speedX = Math.random() * 0.5 - 0.25;
            this.speedY = Math.random() * -0.5 - 0.1; // Float upwards
            this.opacity = Math.random() * 0.5 + 0.1;
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            if (this.y < 0) {
                this.y = canvas.height;
                this.x = Math.random() * canvas.width;
            }
        }
        draw() {
            ctx.fillStyle = `rgba(242, 159, 49, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
            particlesArray[i].draw();
        }
        requestAnimationFrame(animate);
    }
    animate();

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}


// ==========================================
// PRESERVING 100% ORIGINAL LOGIC BELOW
// ==========================================

// System Custom Visual UI Alert Handler
window.alert = function(message, isSuccess = false) {
    const toast = document.createElement("div");
    toast.className = "toast-notification" + (isSuccess ? " toast-success" : "");
    const icon = isSuccess ? "fa-check-circle" : "fa-info-circle";
    toast.innerHTML = `<i class="fas ${icon}"></i> <span>${message}</span>`;
    document.body.appendChild(toast);
    
    setTimeout(() => { toast.style.opacity = "1"; toast.style.transform = "translateX(-50%) translateY(0)"; }, 15);
    setTimeout(() => {
        toast.style.opacity = "0"; toast.style.transform = "translateX(-50%) translateY(-20px)";
        setTimeout(() => document.body.removeChild(toast), 400);
    }, 4000); 
};

const appConfig =[{
    title: "ISKCON Hadapsar App",
    developer: "Official Digiseva (Beta Mode)",
    appId: "iskcon.hadapsar",
    logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh89ueri3DvWfVUmM76dyYJSTCLcDC6oYuAT3j-ezAKl5iDeJ97q28vt2MR39RJwL8BGI91we6F4DRj-u7j1EE2NPyQRwFs0HfYcB4HjxZ9VoeUQWGR7GdARSdow00uHqEehsr6gOVDFG15mntfIdNuOrQ_fxAZHCjMWU9kEjzaUMhuN52vsKMA6Tb9Dtx3/s256/1000096788.png"
}];

function openGroup(groupUrl) {
    // UPDATED to exactly the requested email-based group url
    if(!groupUrl) groupUrl = "https://groups.google.com/g/official-iskcon-hadapsar-app-testing-team";
    window.open(groupUrl, '_blank');
    setTimeout(() => { 
        const wrapper = document.querySelector(".checkbox-wrapper");
        wrapper.style.border = "1px dashed var(--whatsapp-green)"; 
        wrapper.style.background = "rgba(37, 211, 102, 0.05)";
        wrapper.style.transform = "scale(1.02)";
        setTimeout(()=> wrapper.style.transform = "scale(1)", 200);
    }, 1800);
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
            <div class="app-card tilt-card">
                <div class="card-glow-bg"></div>
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
    
    // Re-initialize tilt for dynamically added cards
    initTiltEffect();
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
    txt += `💬 *Bug/Feature Explanation*:\n${message}\n\n`;
    txt += `🛡️ *Accurate System Capabilities Extract:*\n${deviceDataTextPayloadExtracted}\n`;

    window.open(`https://wa.me/${pNum}?text=${encodeURIComponent(txt)}`, '_blank');
    
    alert("Initializing Santosh WhatsApp Gateway! Launching directly App Context...", true);
}

// Removing window.onload as it's now handled by the advanced preloader system logic above.
