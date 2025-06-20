// Tally Script
var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);}

// Form Completion Detection
window.addEventListener('message', function(e) {
    if (e.origin === 'https://tally.so') {
        if (e.data && (e.data.event === 'Tally.FormSubmitted' || e.data.type === 'tally.form_submission')) {
            document.getElementById('petition').style.display = 'none';
            document.getElementById('thankyou').style.display = 'block';
            document.getElementById('thankyou').scrollIntoView({behavior: 'smooth'});
        }
    }
});