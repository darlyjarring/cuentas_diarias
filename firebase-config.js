// CONFIGURACIÓN DE FIREBASE (Estilo Clásico/Global V8)
// ESTE CÓDIGO DEBE INCLUIRSE EN TU HTML DESPUÉS DE LOS SCRIPTS CDN DE FIREBASE.

const firebaseConfig = {
    apiKey: "AIzaSyCuGggEvH6leC6-tWBpN-5BXC37U-NsFqU",
    authDomain: "finanzas-excel30.firebaseapp.com",
    projectId: "finanzas-excel30",
    storageBucket: "finanzas-excel30.firebasestorage.app",
    messagingSenderId: "508931220293",
    appId: "1:508931220293:web:d64cf5125c37d5bae3142c",
    measurementId: "G-2YZ3YREX0P"
};

// Inicializar Firebase
const app = firebase.initializeApp(firebaseConfig);

// Inicializar Firestore y hacerlo accesible globalmente (db)
// El objeto 'db' es crucial para tus archivos Pagos.html y Prestamos.html
const db = app.firestore();

console.log("Firebase App y Firestore inicializados.");
