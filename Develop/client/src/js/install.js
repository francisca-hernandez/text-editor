const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {

    //window.deferredPrompt = event; 
    butInstall.style.visibility = 'visible';

});


// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    event.promtp(  );
    butInstall.setAttribute('disabled', 'ture');
    butInstall.textContent = 'Installed';


});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('Great job, installing!, event');
});

