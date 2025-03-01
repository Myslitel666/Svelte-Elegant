<script lang="ts">
  //Импорт компонентов
  import Button from "$lib/elegant/input/Button.svelte";
  import Switch from "$lib/elegant/input/Switch.svelte";
  import TextField from "$lib/elegant/input/TextField.svelte";
  import DataGrid from "$lib/elegant/data-display/DataGrid.svelte";
  import ColorThemeSwitch from "$lib/elegant/customization/ColorThemeSwitch.svelte";
  import AutoComplete from "$lib/elegant/input/AutoComplete.svelte";
  import BarsIcon from "$lib/icons-elegant/BarsIcon.svelte";
  import Drawer from "$lib/elegant/navigation/Drawer.svelte";
  import Elegant from "$lib/icons-elegant/Elegant.svelte";
  import Header from "$lib/elegant/layout/Header.svelte";
  import Box from "$lib/elegant/layout/Box.svelte";
  import ModalIcon from "$lib/icons-elegant/ModalIcon.svelte";
  import EnvelopeIcon from "$lib/icons-elegant/EnvelopeIcon.svelte";
  import TitledBox from "$lib/elegant/layout/TitledBox.svelte";

  //Импорт утилит
  import { valueExtractors as extractors } from "$lib/utils/valueExtractors.js";
  import { generateIdElement } from "$lib/stores/ElementIdStore.js";

  //Контекст темы
  import type { IColorThemeStore } from "$lib/interfaces/color-theme/IColorThemeStore.js";
  import { themeStore, themeMode } from "$lib/stores/ColorThemeStore.js";

  let theme: IColorThemeStore | undefined;

  let logotypeFilter = "";
  let svelteColor = "";
  let elegantColor = "";

  // Подписываемся на изменения темы
  themeStore.subscribe((value) => {
    theme = value; //Инициализация объекта темы

    svelteColor = theme.palette.primary;
    elegantColor = $themeMode === "light" ? "#383838" : "#fdfdfd";
    logotypeFilter = $themeMode === "light" ? "brightness(80%)" : "";
  });

  //Тестовое данные
  let value = "";
  let isChecked = true;

  let isDrawerOpen = false;

  let drToggleButtonId = `drawer-toggle-button-${generateIdElement()}`;
  let mdlToggleButtonId = `modal-toggle-button-${generateIdElement()}`;

  let columns = [
    { field: "id", header: "Id", width: "10rem" },
    {
      field: "jargon",
      header: "Jargon",
      width: "10rem",
    },
    {
      field: "translate",
      header: "Translate",
      width: "10rem",
    },
    {
      field: "exampleOfUse",
      header: "Example Of Use",
      width: "10rem",
    },
  ];

  let rows = [
    { id: 1, jargon: "Foo", translate: "Бар", exampleOfUse: "Это пример 1" },
    { id: 2, jargon: "Baz", translate: "Баз", exampleOfUse: "Это пример 2" },
    { id: 3, jargon: "Qux", translate: "Кукс", exampleOfUse: "Это пример 3" },
  ];
</script>

<Header>
  <button style:gap="0.5rem">
    <Elegant size="3.25rem" />
    <p style:font-size="26px">
      <span
        style:color={svelteColor}
        style:filter={logotypeFilter}
        style:transition="all 0.3s"
      >
        Svelte
      </span>
      <span style:color={elegantColor} style:transition="all 0.3s">
        Elegant
      </span>
    </p>
  </button>
  <div style:margin-left="auto" style:margin-right="1.25rem">
    <ColorThemeSwitch />
  </div>
</Header>
<div id="container">
  <h6 class="heading">Titled Box</h6>
  <div class="components-container">
    <TitledBox title="Your Box Title">
      <p>Main Content</p>
      <p></p>
      <p>Main Content</p>
      <p></p>
    </TitledBox>
  </div>
  <h6 class="heading">Boxes</h6>
  <div class="components-container">
    <Box
      variant="Default"
      width="6rem"
      height="6rem"
      justifyContent="center"
      onclick={() => console.log("I'm Click!")}
    >
      Default
    </Box>
    <Box
      variant="Hoverable"
      width="6rem"
      height="6rem"
      justifyContent="center"
      onclick={() => console.log("I'm Click!")}
    >
      Hoverable
    </Box>
    <Box
      variant="Solid"
      width="6rem"
      height="6rem"
      justifyContent="center"
      onclick={() => console.log("I'm Click!")}
    >
      Solid
    </Box>
  </div>
  <h6 class="heading">Text Field</h6>
  <div class="components-container">
    <TextField
      bind:value
      variant="Outlined"
      label="Outlined"
      onfocus={() => {}}
      onblur={() => {}}
      oninput={(e: Event) => {
        let value = extractors.getInputValue(e); //Извлечение значения
      }}
    />
    <TextField variant="Filled" label="Filled" />
    <TextField variant="Standard" label="Standard" />
  </div>
  <h6 class="heading">Data Grid</h6>
  <div class="components-container">
    <DataGrid {columns} {rows} />
  </div>
  <h6 class="heading">Auto Complete</h6>
  <div class="components-container">
    <AutoComplete options={["Apple", "Orange", "Banana", "Grape", "Mango"]} />
    <AutoComplete variant="Filled" />
    <AutoComplete variant="Standard" />
  </div>
  <h6 class="heading">Button</h6>
  <div class="components-container">
    <Button variant="Contained">CONTAINED</Button>
    <Button variant="Outlined">OUTLINED</Button>
  </div>
  <h6 class="heading">Switch</h6>
  <div class="components-container">
    <Switch
      bind:isChecked
      onchange={(e: Event) => {
        const check = extractors.getChecked(e);
      }}
    />
  </div>
  <h6 class="heading">Color Theme Switch</h6>
  <div class="components-container">
    <ColorThemeSwitch />
  </div>
  <h6 class="heading">Icons</h6>
  <div class="components-container">
    <EnvelopeIcon />
  </div>
  <h6 class="heading">Modal</h6>
  <div class="components-container">
    <ModalIcon id={mdlToggleButtonId} />
  </div>
  <h6 class="heading">Drawer</h6>
  <div class="components-container">
    <Drawer bind:isOpen={isDrawerOpen} toggleButtonId={drToggleButtonId}>
      <ul>
        <li><a href="#" style:color="red">Home</a></li>
        <li><a href="#" style:color="red">About</a></li>
        <li><a href="#" style:color="red">Services</a></li>
        <li><a href="#" style:color="red">Contact</a></li>
      </ul>
    </Drawer>
  </div>
  <div class="components-container">
    <Box
      variant="Hoverable"
      padding="0.66rem"
      id={drToggleButtonId}
      onclick={() => {
        isDrawerOpen = !isDrawerOpen;
      }}
    >
      <BarsIcon size="20px" />
    </Box>
  </div>
</div>

<style>
  .heading {
    margin-top: 0.35rem;
    margin-bottom: 0.35rem;
  }

  .components-container {
    display: flex; /* Располагает дочерние элементы в строку */
    gap: 1rem; /* Задает отступ между элементами */
    align-items: center; /* Вертикальное выравнивание по центру */
  }

  #container {
    display: flex;
    flex-direction: column;
    justify-content: center; /* Горизонтальное центрирование */
    align-items: center; /* Вертикальное центрирование */
    min-height: 100vh; /* Минимальная высота экрана */
    padding-top: 4rem;
  }
</style>
