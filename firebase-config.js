// CONFIGURACIÓN DE FIREBASE (Estilo Clásico/Global V8)
// ESTE CÓDIGO DEBE INCLUIRSE EN TU HTML DESPUÉS DE LOS SCRIPTS CDN DE FIREBASE.

const firebaseConfig = {
  apiKey: "AIzaSyArPPyaX0NoU2Gkax8bpj5MkWTLMsyZmYQ",
  authDomain: "estado-de-equipos-rtgs.firebaseapp.com",
  databaseURL: "https://estado-de-equipos-rtgs-default-rtdb.firebaseio.com", 
  projectId: "estado-de-equipos-rtgs",
  storageBucket: "estado-de-equipos-rtgs.firebasestorage.app",
  messagingSenderId: "927929035915",
  appId: "1:927929035915:web:be6b10e57043ea4aac788e",
  measurementId: "G-YLVN1M7B87"
};

// Inicializar Firebase
const app = firebase.initializeApp(firebaseConfig);

// Inicializar Firestore y hacerlo accesible globalmente (db)
// El objeto 'db' es crucial para tus archivos Pagos.html y Prestamos.html
const db = app.firestore();

console.log("Firebase App y Firestore inicializados.");
