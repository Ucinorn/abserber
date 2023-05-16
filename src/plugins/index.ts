/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import { loadFonts } from './webfontloader'
import vuetify from './vuetify'

// Types
import type { App } from 'vue'

// add mitt event system
import mitt from 'mitt'
const emitter = mitt();

export function registerPlugins (app: App) {
  loadFonts()
  app.use(vuetify)
  app.provide('events', emitter);
}
