/// <reference types="astro/client" />

// Fontsource-Pakete liefern keine Typdeklarationen für den reinen
// Side-Effect-CSS-Import (z. B. `import '@fontsource-variable/inter'`).
// Hier als Module deklarieren, damit `astro check` / tsc nicht meckert.
declare module '@fontsource-variable/inter';
declare module '@fontsource-variable/fraunces';
