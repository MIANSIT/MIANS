// src/alpine.d.ts
declare global {
    interface Window {
      Alpine: typeof import('alpinejs');
    }
  }
  
  export {};
  