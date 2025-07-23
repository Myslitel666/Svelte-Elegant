<script lang="ts">
  //Импорт компонентов
  import Backspace from "$icons-elegant/Backspace.svelte";
  import Button from "$lib/elegant/input/Button.svelte";
  import Switch from "$lib/elegant/input/Switch.svelte";
  import TextField from "$lib/elegant/input/TextField.svelte";
  import DataGrid from "$lib/elegant/data-display/DataGrid.svelte";
  import ColorThemeSwitch from "$lib/elegant/customization/ColorThemeSwitch.svelte";
  import AutoComplete from "$lib/elegant/input/AutoComplete.svelte";
  import Bars from "$icons-elegant/Bars.svelte";
  import Drawer from "$lib/elegant/navigation/Drawer.svelte";
  import Enter from "$lib/icons-elegant/Enter.svelte";
  import Header from "$lib/elegant/layout/Header.svelte";
  import Box from "$lib/elegant/layout/Box.svelte";
  import ModalIcon from "$icons-elegant/ModalIcon.svelte";
  import Envelope from "$icons-elegant/Envelope.svelte";
  import TitledBox from "$lib/elegant/layout/TitledBox.svelte";
  import ButtonBox from "$elegant/input/ButtonBox.svelte";
  import Elegant from "$icons-elegant/Elegant.svelte";
  import IconHover from "$elegant/customization/IconHover.svelte";
  import Pagination from "$elegant/navigation/Pagination.svelte";
  import Database from "$icons-elegant/Database.svelte";
  import { Modal } from "$lib";
  import TextArea from "$elegant/input/TextArea.svelte";
  import Notepad from "$icons-elegant/Notepad.svelte";

  import Plus from "$icons-elegant/Plus.svelte";

  import { isMobile } from "$lib/utils";
  import { onMount } from "svelte";

  //Импорт утилит
  import { generateIdElement } from "$lib/stores/ElementIdStore.js";

  //Контекст темы
  import { themeStore, themeMode } from "$lib/stores/ThemeStore.js";
  import EyeOpened from "$icons-elegant/EyeOpened.svelte";

  let theme: any;

  let isModalOpen = false;

  let elegantColor = "";
  let xMobile = false;

  // Подписываемся на изменения темы
  themeStore.subscribe((value) => {
    theme = value; //Инициализация объекта темы

    elegantColor = $themeMode === "light" ? "#383838" : "#fdfdfd";
  });

  //Тестовое данные
  let isChecked = true;
  let value = "";

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

  onMount(() => {
    xMobile = isMobile();
  });

  let disabled = false;
</script>

<Header>
  <button style:gap="0.35rem">
    <nav style:margin-top="0.2rem">
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
  <div style:margin-left="auto" style:margin-right="1.25rem">
    <ColorThemeSwitch />
  </div>
</Header>
<div id="container" style:width="100%">
  <Plus />
  <h6 class="heading">Modal</h6>
  <div on:click={() => (isModalOpen = true)} class="components-container">
    <ModalIcon />
  </div>
  <Modal
    height="auto"
    bind:isOpen={isModalOpen}
    onClose={() => (isModalOpen = false)}
    padding="1.5rem"
  >
    <p
      style:font-weight="bold"
      style:font-size="1.25rem"
      style:margin-bottom="0.5rem"
    >
      Modal Content
    </p>
    <p>Anything inside the slot.</p>
    <Button marginTop="1rem" width="100%" onClick={() => (isModalOpen = false)}
      >Close</Button
    >
  </Modal>
  <!-- Правильное закрытие тега -->
  <h6 class="heading">Data Grid</h6>
  <div class="components-container">
    <DataGrid {columns} {rows} />
  </div>
  <h6 class="heading">Basic Pagination</h6>
  <div class="components-container">
    <Pagination typePage="Circle" />
  </div>
  <h6 class="heading">Disabled Text Fields</h6>
  <div
    class="components-container"
    style:flex-direction={xMobile ? "column" : ""}
  >
    <TextField disabled variant="Outlined" label="Outlined" />
    <TextField disabled variant="Filled" label="Filled" />
    <TextField disabled variant="Standard" label="Standard" />
  </div>
  <h6 class="heading">Text Fields</h6>
  <div
    class="components-container"
    style:flex-direction={xMobile ? "column" : ""}
  >
    <TextField
      bind:value
      variant="Outlined"
      label="Outlined"
      oninput={(e: any) => {
        let value = e.target.value; //Извлечение значения
      }}
    />
    <TextField variant="Filled" label="Filled" />
    <TextField variant="Standard" label="Standard" />
  </div>
  <h6 class="heading">Password Text Fields</h6>
  <div
    class="components-container"
    style:flex-direction={xMobile ? "column" : ""}
  >
    <TextField variant="Outlined" label="Outlined" type="password" />
    <TextField variant="Filled" label="Filled" type="password" />
    <TextField variant="Standard" label="Standard" type="password" />
  </div>
  <h6 class="heading">Auto Complete</h6>
  <div
    class="components-container"
    style:flex-direction={xMobile ? "column" : ""}
  >
    <AutoComplete options={["Apple", "Orange", "Banana", "Grape", "Mango"]} />
    <AutoComplete variant="Filled" />
    <AutoComplete variant="Standard" />
  </div>
  <h6 class="heading">Auto Complete (isSelect)</h6>
  <div
    class="components-container"
    style:flex-direction={xMobile ? "column" : ""}
  >
    <AutoComplete
      isSelect={true}
      options={["Apple", "Orange", "Banana", "Grape", "Mango"]}
    />
    <AutoComplete isSelect variant="Filled" />
    <AutoComplete isSelect variant="Standard" />
  </div>
  <h6 class="heading">Disabled Buttons</h6>
  <div
    class="components-container"
    style:flex-direction={xMobile ? "column" : ""}
  >
    <Button disabled variant="Contained">CONTAINED</Button>
    <Button disabled isPrimary={false} variant="Outlined">OUTLINED</Button>
    <Button disabled variant="Text">TEXT</Button>
  </div>
  <h6 class="heading">Not Primary</h6>
  <div
    class="components-container"
    style:flex-direction={xMobile ? "column" : ""}
  >
    <Button isPrimary={false} variant="Contained">CONTAINED</Button>
    <Button isPrimary={false} variant="Outlined">OUTLINED</Button>
    <Button isPrimary={false} variant="Text">TEXT</Button>
  </div>
  <h6 class="heading">Primary Buttons</h6>
  <div
    class="components-container"
    style:flex-direction={xMobile ? "column" : ""}
  >
    <Button variant="Contained">CONTAINED</Button>
    <Button variant="Outlined">OUTLINED</Button>
    <Button variant="Text">TEXT</Button>
  </div>
  <h6 class="heading">Icon Hover</h6>
  <div class="components-container">
    <IconHover padding="0.3rem">
      <EyeOpened size="3rem" />
    </IconHover>
  </div>
  <h6 class="heading">Button Box</h6>
  <div class="components-container">
    <ButtonBox>1</ButtonBox>
    <ButtonBox>2</ButtonBox>
    <ButtonBox>3</ButtonBox>
    <ButtonBox isPrimary={true}>
      <Enter />
    </ButtonBox>
    <ButtonBox isPrimary={true}>
      <Backspace />
    </ButtonBox>
  </div>
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
    <Box variant="Default" width="6rem" height="6rem" justifyContent="center">
      Default
    </Box>
    <Box variant="Hoverable" width="6rem" height="6rem" justifyContent="center">
      Hoverable
    </Box>
    <Box variant="Solid" width="6rem" height="6rem" justifyContent="center">
      Solid
    </Box>
  </div>
  <h6 class="heading">Switch</h6>
  <div class="components-container">
    <Switch
      bind:isChecked
      onchange={(e: any) => {
        const check = e.target.checked;
      }}
    />
  </div>
  <h6 class="heading">Color Theme Switch</h6>
  <div class="components-container">
    <ColorThemeSwitch />
  </div>
  <h6 class="heading">Icons</h6>
  <div class="components-container">
    <Envelope />
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
      padding="0rem"
      id={drToggleButtonId}
      onclick={() => {
        isDrawerOpen = !isDrawerOpen;
      }}
      height="2.66rem"
      width="2.66rem"
    >
      <Bars />
    </Box>
  </div>
</div>

<style>
  .heading {
    margin-top: 0.35rem;
    margin-bottom: 0.35rem;
  }

  .components-container {
    align-items: center; /* Вертикальное выравнивание по центру */
    display: flex; /* Располагает дочерние элементы в строку */
    gap: 0.58rem; /* Задает отступ между элементами */
    justify-content: center; /* Горизонтальное центрирование */
  }

  #container {
    display: flex;
    flex-direction: column;
    justify-content: center; /* Горизонтальное центрирование */
    align-items: center; /* Вертикальное центрирование */
    min-height: 100vh; /* Минимальная высота экрана */
    padding-top: 4rem;
  }

  h6 {
    font-weight: 400;
  }
</style>
