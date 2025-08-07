<script>
  import Header from "../components/Header.svelte";
  import ScrollbarContainer from "$elegant/customization/ScrollbarContainer.svelte";
  import ThemeProvider from "$elegant/customization/ThemeProvider.svelte";
</script>

<Header />
<ThemeProvider>
  <ScrollbarContainer>
    <slot />
  </ScrollbarContainer>
</ThemeProvider>
