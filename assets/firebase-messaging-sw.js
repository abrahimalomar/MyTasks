importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js');

firebase.initializeApp({
       apiKey: "AIzaSyCo90raqXZZA_EUQz2-T9SC7MakhQ4uelk",
  authDomain: "taskmanagementproject-11a8c.firebaseapp.com",
  projectId: "taskmanagementproject-11a8c",
  storageBucket: "taskmanagementproject-11a8c.firebasestorage.app",
  messagingSenderId: "713625614339",
  appId: "1:713625614339:web:d8e03d460fa5551c96b636",
  measurementId: "G-3H1R7N1QMG",
  vapidKey:"BLYoQplMs2mNGhyFfbIcEpIX6ugwLBfAFuuWMd1nCchQN9nw40uzG8BNIjwUkZQnptrtEnldkQL8JNcKgSJHjbc"
});


const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/assets/icons/icon-72x72.png'
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});