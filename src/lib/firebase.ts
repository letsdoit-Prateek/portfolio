import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { getAnalytics, Analytics } from "firebase/analytics";
import { fetchFirebaseConfig } from "./firebase-config";

// Global variables to store Firebase instances
let app: FirebaseApp | null = null;
let analytics: Analytics | null = null;
let initializationPromise: Promise<void> | null = null;

// Initialize Firebase with config from Azure Blob Storage
async function initializeFirebase(): Promise<void> {
  try {
    console.log('🔥 Initializing Firebase...');
    
    // Fetch configuration from Azure Blob Storage
    const firebaseConfig = await fetchFirebaseConfig();
    
    // Initialize Firebase app
    if (getApps().length === 0) {
      app = initializeApp(firebaseConfig);
      console.log('✅ Firebase app initialized successfully');
    } else {
      app = getApps()[0];
      console.log('✅ Using existing Firebase app');
    }

    // Initialize Analytics only on client side
    if (typeof window !== "undefined" && app) {
      analytics = getAnalytics(app);
      console.log('📊 Firebase Analytics initialized successfully');
    }
    
  } catch (error) {
    console.error('❌ Firebase initialization failed:', error);
    throw error;
  }
}

// Get Firebase app instance (with lazy initialization)
export async function getFirebaseApp(): Promise<FirebaseApp> {
  if (!initializationPromise) {
    initializationPromise = initializeFirebase();
  }
  
  await initializationPromise;
  
  if (!app) {
    throw new Error('Firebase app is not initialized');
  }
  
  return app;
}

// Get Firebase Analytics instance (with lazy initialization)
export async function getFirebaseAnalytics(): Promise<Analytics | null> {
  if (typeof window === "undefined") {
    return null; // Analytics only works on client side
  }
  
  if (!initializationPromise) {
    initializationPromise = initializeFirebase();
  }
  
  await initializationPromise;
  return analytics;
}

// Legacy exports for backward compatibility (these will initialize Firebase automatically)
export const getApp = async (): Promise<FirebaseApp> => {
  return await getFirebaseApp();
};

export const getAnalyticsInstance = async (): Promise<Analytics | null> => {
  return await getFirebaseAnalytics();
};

// For immediate use (returns null if not initialized, use the async versions above for guaranteed initialization)
export { app, analytics };
