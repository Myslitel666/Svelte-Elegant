<script lang="ts">
  import { themeStore } from "$lib/stores/ThemeStore.js";

  export let fill = "";
  export let size = "2.5rem";

  let theme: any;

  // Подписываемся на изменения темы
  themeStore.subscribe((value) => {
    theme = value;
  });
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  data-source="https://www.svgrepo.com/svg/313369/pen?edit=true"
  data-license="CC0"
  width={size}
  height={size}
  fill={fill || theme.palette.primary}
  viewBox="0 0 24 24"
  id="f26f875e-6e0f-4754-a824-58378eda2d39"
  data-name="Livello 1"
  ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
    id="SVGRepo_tracerCarrier"
    stroke-linecap="round"
    stroke-linejoin="round"
  ></g><g id="SVGRepo_iconCarrier">
    <title>prime</title>
    <g id="ab9d7309-2578-40a5-a875-3e4d7b8fb802" data-name="pen">
      <polygon
        points="15.52 5 2.79 17.73 2.08 22.68 7.03 21.97 19.76 9.24 15.52 5"
      ></polygon>
      <path
        d="M18.46,2.29h4a1,1,0,0,1,1,1v3a0,0,0,0,1,0,0h-6a0,0,0,0,1,0,0v-3a1,1,0,0,1,1-1Z"
        transform="translate(9.03 -13.21) rotate(45)"
      ></path>
    </g>
  </g></svg
>
