<script lang='ts'>
	//Импорт компонентов
	import Button from "../lib/elegant/input/Button.svelte";
	import Switch from "../lib/elegant/input/Switch.svelte";
	import TextField from "../lib/elegant/input/TextField.svelte";;
	import DataGrid from "../lib/elegant/data-display/DataGrid.svelte";
	import ColorThemeSwitch from "../lib/elegant/customization/ColorThemeSwitch.svelte";
	import AutoComplete from "../lib/elegant/input/AutoComplete.svelte";
	import BarsIcon from '../lib/icons-elegant/BarsIcon.svelte';
	import Drawer from "../lib/elegant/navigation/Drawer.svelte";
	import Elegant from "$lib/icons-elegant/Elegant.svelte";
	import Header from "$lib/elegant/layout/Header.svelte";

	//Импорт утилит
	import { valueExtractors as extractors } from "../lib/utils/valueExtractors.js";

	//Контекст темы
	import type { IColorThemeStore } from "$lib/interfaces/color-theme/IColorThemeStore.js";
	import { themeStore, themeMode } from "$lib/stores/ColorThemeStore.js";

	let theme: IColorThemeStore | undefined;

	let logotypeFilter = ''
	let svelteColor = ''
	let elegantColor = ''

	// Подписываемся на изменения темы
	themeStore.subscribe(value => {
        theme = value; //Инициализация объекта темы

		svelteColor = theme.colors.primary;
		elegantColor = $themeMode === 'light' ? '#383838' : '#fdfdfd';
		logotypeFilter = $themeMode === 'light' ? 'brightness(80%)' : '';
    });

	//Тестовое данные
	let value = '';
	let isChecked = true;

	let isDrawerOpen = false;

	let toggleButtonId = 'drawer-toggle-button2'

	let columns = [
        {   field: 'id', 
            header: 'Id', 
            width: '10rem' 
        },
        {
            field: 'jargon',
            header: 'Jargon',
            width: '10rem',
        },
        {
            field: 'translate',
            header: 'Translate',
            width: '10rem',
        },
        {
            field: 'exampleOfUse',
            header: 'Example Of Use',
            width: '10rem',
        }
    ];

	let rows = [
		{ id: 1, jargon: 'Foo', translate: 'Бар', exampleOfUse: 'Это пример 1' },
		{ id: 2, jargon: 'Baz', translate: 'Баз', exampleOfUse: 'Это пример 2' },
		{ id: 3, jargon: 'Qux', translate: 'Кукс', exampleOfUse: 'Это пример 3' }
	];

</script>

<Header>
	<button style:gap = '0.5rem'>
		<Elegant size = 3.25rem/>
		<p style:font-size=26px>
			<span 
				style:color = {svelteColor}
				style:filter = {logotypeFilter}
				style:transition = 'all 0.3s'
			>
				Svelte
			</span> 
			<span
				style:color = {elegantColor}
				style:transition = 'all 0.3s' 
			>
				Elegant
			</span>
		</p>
	</button>
	<div 
		style:margin-left = auto
		style:margin-right = 1.25rem
	>
		<ColorThemeSwitch />
	</div>
</Header>
<div id = 'container'>
	<p class='heading'>Elegant</p>
	<div class="components-container">
		<div style:transform = rotate(45deg);>
			<Elegant />
		</div>
	</div>
	<p class='heading'>Drawer</p>
	<div class="components-container">
		<Drawer
			bind:isOpen = {isDrawerOpen}
			toggleButtonId = {toggleButtonId}
		>
			<ul>
				<li><a href="#" style:color="red">Home</a></li>
				<li><a href="#" style:color="red">About</a></li>
				<li><a href="#" style:color="red">Services</a></li>
				<li><a href="#" style:color="red">Contact</a></li>
			</ul>
		</Drawer>
	</div>
	<p class='heading'>Bars</p>
	<div class="components-container">
		<button 
			id = {toggleButtonId}
			onclick = {() => {isDrawerOpen = !isDrawerOpen}}
		>
			<BarsIcon />
		</button>
	</div>
	<p>Text Field</p>
	<div class="components-container">
		<TextField 
			bind:value = {value /*Передача переменной по ссылке*/}
			variant = 'Outlined'
			label = 'Outlined'
			onfocus={() => {}}
			onblur={() => {}}
			oninput={(e: Event) => {
				let value = extractors.getInputValue(e); //Извлечение значения
			}}
		/>
		<TextField 
			variant = 'Filled'
			label = 'Filled'
		/>
		<TextField 
			variant = 'Standard'
			label = 'Standard'
		/>
	</div>
	<p class='heading'>Data Grid</p>
	<div class="components-container">
		<DataGrid 
			columns = {columns}
			rows = {rows}
		/>
	</div>
	<p class = 'heading'>Auto Complete</p>
	<div class="components-container">
		<AutoComplete 
			options = {['Apple', 'Orange', 'Banana', 'Grape', 'Mango']}
		/>
		<AutoComplete 
			variant = 'Filled' 
		/>
		<AutoComplete 
			variant = 'Standard' 
		/>
	</div>
	<p class = 'heading'>Button</p>
	<div class="components-container">
		<Button variant = 'Contained'>
			CONTAINED
		</Button>
		<Button variant = 'Outlined'>
			OUTLINED
		</Button>
	</div>
	<p class='heading'>Switch</p>
	<div class="components-container">
		<Switch
			bind:isChecked = {isChecked /*Передача переменной по ссылке*/}
			onchange={(e: Event) => {
				const check = extractors.getChecked(e);
			}}
		/>
	</div>
	<p class='heading'>Color Theme Switch</p>
	<div class="components-container">
		<ColorThemeSwitch />
	</div>
</div>

<style>
	.heading {
		margin-top: 0.35rem;
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
