<script>
  import Header from "../components/Header.svelte";
  import ThemeProvider from "$elegant/customization/ThemeProvider.svelte";
</script>

<Header />
<ThemeProvider>
  <div class="app">
    <main>
      <slot />
    </main>
  </div>
</ThemeProvider>
