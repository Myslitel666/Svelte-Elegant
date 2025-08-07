<script>
  import Header from "$elegant/layout/Header.svelte";
  import Elegant from "$icons-elegant/Elegant.svelte";
  import GitHub from "$icons-elegant/GitHub.svelte";
  import LangSelector from "$elegant/customization/LangSelector.svelte";
  import ColorThemeSwitch from "$elegant/customization/ColorThemeSwitch.svelte";

  import { themeStore, themeMode } from "$lib/stores/ThemeStore.js";

  let elegantColor = "";
  let theme;

  // Подписываемся на изменения темы
  themeStore.subscribe((value) => {
    theme = value; //Инициализация объекта темы

    elegantColor = $themeMode === "light" ? "#383838" : "#fdfdfd";
  });
</script>

<Header {...$$props}>
  <button style:gap="0.35rem">
    <nav style:margin-left="0.18rem" style:margin-top="0.2rem">
      <Elegant />
    </nav>
    <p style:font-size="26px" style:margin-top="-0.05rem">
      <span
        style:color={theme.palette.primary}
        style:filter={theme.palette.text.title}
        style:transition="all 0.3s"
      >
        Svelte
      </span>
      <span style:color={elegantColor} style:transition="all 0.3s">
        Elegant
      </span>
    </p>
  </button>
  <div
    style:display="flex"
    style:align-items="center"
    style:margin-left="auto"
    style:margin-right="0.25rem"
  >
    <LangSelector marginRight="0.5rem" />
    <a
      style:margin-top="0.25rem"
      href="https://github.com/Myslitel666/Svelte-Elegant"
    >
      <GitHub marginRight="0.5rem" />
    </a>
    <ColorThemeSwitch />
  </div>
</Header>
