// Utility to fetch Firebase configuration from Azure Blob Storage
interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
}

class ConfigCache {
  private static config: FirebaseConfig | null = null;
  private static lastFetch: number = 0;
  private static readonly CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

  static isValid(): boolean {
    return this.config !== null && (Date.now() - this.lastFetch) < this.CACHE_DURATION;
  }

  static set(config: FirebaseConfig): void {
    this.config = config;
    this.lastFetch = Date.now();
  }

  static get(): FirebaseConfig | null {
    return this.isValid() ? this.config : null;
  }

  static clear(): void {
    this.config = null;
    this.lastFetch = 0;
  }
}

export async function fetchFirebaseConfig(): Promise<FirebaseConfig> {
  // Check cache first
  const cachedConfig = ConfigCache.get();
  if (cachedConfig) {
    console.log('📋 Using cached Firebase configuration');
    return cachedConfig;
  }

  const blobUrl = process.env.NEXT_PUBLIC_FIREBASE_CONFIG_BLOB_URL;
  
  if (!blobUrl) {
    throw new Error('NEXT_PUBLIC_FIREBASE_CONFIG_BLOB_URL environment variable is not set');
  }

  try {
    console.log('🌐 Fetching Firebase configuration from Azure Blob Storage...');
    
    const response = await fetch(blobUrl, {
      method: 'GET',
      headers: {
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch config: HTTP ${response.status} - ${response.statusText}`);
    }

    const config: FirebaseConfig = await response.json();
    
    // Validate the configuration
    const requiredFields: (keyof FirebaseConfig)[] = [
      'apiKey',
      'authDomain', 
      'projectId',
      'storageBucket',
      'messagingSenderId',
      'appId',
      'measurementId'
    ];

    const missingFields = requiredFields.filter(field => !config[field]);
    
    if (missingFields.length > 0) {
      throw new Error(`Invalid Firebase config: missing fields - ${missingFields.join(', ')}`);
    }

    // Cache the valid configuration
    ConfigCache.set(config);
    console.log('✅ Firebase configuration loaded and cached successfully');
    
    return config;
    
  } catch (error) {
    console.error('❌ Failed to fetch Firebase configuration:', error);
    
    // If fetch fails, try to use fallback from environment variables
    console.log('🔄 Attempting to use fallback environment variables...');
    
    return getFallbackConfig();
  }
}

function getFallbackConfig(): FirebaseConfig {
  const fallbackConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
  };

  const missingVars = Object.entries(fallbackConfig)
    .filter(([, value]) => !value)
    .map(([key]) => key);

  if (missingVars.length > 0) {
    throw new Error(`Fallback failed: missing environment variables - ${missingVars.join(', ')}`);
  }

  console.log('⚠️ Using fallback environment variables for Firebase config');
  return fallbackConfig as FirebaseConfig;
}
