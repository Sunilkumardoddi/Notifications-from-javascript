console.log('Hello')
console.log(Notification.permission)

function showNotification() {
    const notification = new Notification('New message from sunil', {
        body: 'Hey mate!',
        vibrate: window.navigator.vibrate([200, 100, 200])
    })

}
if (Notification.permission === 'granted') {
    // alert('We have permission')

    showNotification()
} else if (Notification.permission !== 'denied') {
    Notification.requestPermission().then(permission => {
        console.log(permission)
        if (permission === 'granted') {
            // alert('We have permission')

            showNotification()
        }
    })
}