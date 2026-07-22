import { defineConfig } from '@playwright/test';
export default defineConfig({ use: { baseURL: 'https://app.example.com' }, reporter: 'html' });
