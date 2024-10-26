<script lang='ts'>
	//Импорт компонентов
	import Button from "../lib/elegant/input/Button.svelte";
	import Switch from "../lib/elegant/input/Switch.svelte";
	import TextField from "../lib/elegant/input/TextField.svelte";;
	import DataGrid from "../lib/elegant/data-display/DataGrid.svelte";
	import ColorThemeSwitch from "../lib/elegant/customization/ColorThemeSwitch.svelte";
	import AutoComplete from "$lib/elegant/input/AutoComplete.svelte";

	//Импорт утилит
	import { valueExtractors as extractors } from "../lib/utils/valueExtractors.js";

	//Тестовое данные
	let value = '';
	let isChecked = true;
</script>

<div id = 'container'>
	<div id = 'page'>
		<h1>Svelte Elegant</h1>
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
			<DataGrid />
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
		<div>
			<Switch
				bind:isChecked = {isChecked /*Передача переменной по ссылке*/}
				onchange={(e: Event) => {
					const check = extractors.getChecked(e);
				}}
			 />
		</div>
		<p class='heading'>Color Theme Switch</p>
		<div>
			<ColorThemeSwitch bind:isChecked = {isChecked}/>
		</div>
		<p class='heading'>План работы:</p>
		<ol>
			<li> Возможность тёмной темы по умолчанию </li>
			<li> Проверить вставку своего шрифта в Tester'е </li>
			<li> Разграничить инициализацию CSS-переменных при omMount ThemeProvider и смене темы. При смене темы не нужно повторно загружать все стили для размера шрифтов, интервалов между символами и т. д. </li>
			<li> Передача конкретных свойств в ColorThemeStore; </li>
			<li> Стили для TextField и Button в состоянии disabled;</li>
			<li> Header и Drawer; </li>
			<li> Отображение, извлечение и редактирование данных DataGrid, а также - его кастомизация; </li>
			<li> TextArea; </li>
			<li> Отображение drop list'а AutoComplete сверху или снизу поля в зависимости от доступной области экрана и при скролинге; </li>
		</ol>
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
		justify-content: center; /* Горизонтальное центрирование */
		min-height: 100vh; /* Минимальная высота экрана */
	}
</style>
