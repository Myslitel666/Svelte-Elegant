<script>
  import ThemeProvider from "$elegant/customization/ThemeProvider.svelte";
</script>

<ThemeProvider>
  <div class="app">
    <main>
      <slot />
    </main>
  </div>
</ThemeProvider>