import type { Platform } from '../types/guides/Combo';

class PlatformStore {
  private static instance: PlatformStore;
  private platform: Platform = 'pc';
  private listeners: ((platform: Platform) => void)[] = [];

  private constructor() {}

  static getInstance(): PlatformStore {
    if (!PlatformStore.instance) {
      PlatformStore.instance = new PlatformStore();
    }
    return PlatformStore.instance;
  }

  getPlatform(): Platform {
    return this.platform;
  }

  setPlatform(newPlatform: Platform) {
    this.platform = newPlatform;
    this.notifyListeners();
  }

  subscribe(listener: (platform: Platform) => void) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }

  private notifyListeners() {
    this.listeners.forEach((listener) => listener(this.platform));
  }
}

export const platformStore = PlatformStore.getInstance();
