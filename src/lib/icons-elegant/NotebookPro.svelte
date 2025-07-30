<script lang="ts">
  import { themeStore, themeMode } from "$lib/stores/ThemeStore.js";
  import "./style/icons.css";

  export let lightThemeFills = [
    "#0e6a0d",
    "#10a80e",
    "#028900",
    "#70bd3d",
    "#014300",
    "#00360c",
  ];
  export let darkThemeFills = [
    "#820808",
    "#c70909",
    "#b00000",
    "#f32626",
    "#5d0000",
    "#630707",
  ];
  export let size = "9rem";

  let theme: any;

  // Подписываемся на изменения темы
  themeStore.subscribe((value) => {
    theme = value;
  });
</script>

<!-- Uploaded to: SVG Repo, www.svgrepo.com, Transformed by: SVG Repo Mixer Tools -->
<svg
  data-source="https://www.svgrepo.com/svg/286762/database?edit=true"
  data-license="CC0"
  height={size}
  width={size}
  fill=""
  version="1.1"
  id="Layer_1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  viewBox="0 0 512 512"
  xml:space="preserve"
  stroke=""
>
  <g id="SVGRepo_bgCarrier" stroke-width="0" />

  <g
    id="SVGRepo_tracerCarrier"
    stroke-linecap="round"
    stroke-linejoin="round"
  />

  <g id="SVGRepo_iconCarrier">
    <polygon
      style="fill:{$themeMode === 'light'
        ? lightThemeFills[0]
        : darkThemeFills[0]};"
      points="455.736,33.758 455.736,112.527 369.687,157.538 421.978,33.758 "
    />
    <polygon
      style="fill:{$themeMode === 'light'
        ? lightThemeFills[1]
        : darkThemeFills[1]};"
      points="455.736,112.527 455.736,512 421.978,512 365.714,312.264 421.978,112.527 "
    />
    <polygon
      style="fill:{$themeMode === 'light'
        ? lightThemeFills[2]
        : darkThemeFills[2]};"
      points="421.978,33.758 421.978,157.538 56.264,112.527 56.264,33.758 "
    />
    <rect
      x="56.264"
      y="112.527"
      style="fill:{$themeMode === 'light'
        ? lightThemeFills[3]
        : darkThemeFills[3]};"
      width="365.714"
      height="399.473"
    />
    <g>
      <path
        style="fill:{$themeMode === 'light'
          ? lightThemeFills[4]
          : darkThemeFills[4]};"
        d="M142.91,50.637V16.879C142.91,7.557,135.353,0,126.031,0s-16.879,7.557-16.879,16.879v33.758 c0,9.322,7.557,16.879,16.879,16.879S142.91,59.959,142.91,50.637z"
      />
      <path
        style="fill:{$themeMode === 'light'
          ? lightThemeFills[4]
          : darkThemeFills[4]};"
        d="M229.556,50.637V16.879C229.556,7.557,221.999,0,212.677,0c-9.322,0-16.879,7.557-16.879,16.879 v33.758c0,9.322,7.557,16.879,16.879,16.879C221.999,67.516,229.556,59.959,229.556,50.637z"
      />
      <path
        style="fill:{$themeMode === 'light'
          ? lightThemeFills[4]
          : darkThemeFills[4]};"
        d="M316.202,50.637V16.879C316.202,7.557,308.645,0,299.323,0s-16.879,7.557-16.879,16.879v33.758 c0,9.322,7.557,16.879,16.879,16.879S316.202,59.959,316.202,50.637z"
      />
      <path
        style="fill:{$themeMode === 'light'
          ? lightThemeFills[4]
          : darkThemeFills[4]};"
        d="M402.848,50.637V16.879C402.848,7.557,395.291,0,385.969,0c-9.322,0-16.879,7.557-16.879,16.879 v33.758c0,9.322,7.557,16.879,16.879,16.879C395.291,67.516,402.848,59.959,402.848,50.637z"
      />
    </g>
    <g>
      <path
        style="fill:{$themeMode === 'light'
          ? lightThemeFills[5]
          : darkThemeFills[5]};"
        d="M366.277,320.703H145.723c-4.662,0-8.44-3.778-8.44-8.44s3.778-8.44,8.44-8.44h220.554 c4.662,0,8.44,3.778,8.44,8.44S370.939,320.703,366.277,320.703z"
      />
      <path
        style="fill:{$themeMode === 'light'
          ? lightThemeFills[5]
          : darkThemeFills[5]};"
        d="M366.277,275.692H145.723c-4.662,0-8.44-3.778-8.44-8.44s3.778-8.44,8.44-8.44h220.554 c4.662,0,8.44,3.778,8.44,8.44S370.939,275.692,366.277,275.692z"
      />
      <path
        style="fill:{$themeMode === 'light'
          ? lightThemeFills[5]
          : darkThemeFills[5]};"
        d="M366.277,230.681H145.723c-4.662,0-8.44-3.778-8.44-8.44c0-4.662,3.778-8.44,8.44-8.44h220.554 c4.662,0,8.44,3.778,8.44,8.44C374.716,226.904,370.939,230.681,366.277,230.681z"
      />
      <path
        style="fill:{$themeMode === 'light'
          ? lightThemeFills[5]
          : darkThemeFills[5]};"
        d="M366.277,365.714H145.723c-4.662,0-8.44-3.778-8.44-8.44s3.778-8.44,8.44-8.44h220.554 c4.662,0,8.44,3.778,8.44,8.44S370.939,365.714,366.277,365.714z"
      />
      <path
        style="fill:{$themeMode === 'light'
          ? lightThemeFills[5]
          : darkThemeFills[5]}"
        d="M281.881,410.725H145.723c-4.662,0-8.44-3.778-8.44-8.44s3.778-8.44,8.44-8.44h136.158 c4.662,0,8.44,3.778,8.44,8.44S286.543,410.725,281.881,410.725z"
      />
    </g>
  </g>
</svg>
