@echo off

rem Переход в каталог с проектом
cd /d "D:\web-development\Svelte\Svelte-Elegant"

rem Запуск веб-сервера
echo Executing npm run dev...
:: Запуск Vite без окна
start /b powershell -WindowStyle Hidden -Command "npm run dev -- --open"

rem Запуск проекта в Visual Studio Code
start /b code .

rem Переход в каталог с FileWatcher для SvelteElegant
cd /d "C:\Users\user\source\repos\ElegantFileWatcher\bin\Debug\net8.0"

rem Запуск FileWatcher
echo Starting FileWatcher...
start "" "C:\Users\user\source\repos\ElegantFileWatcher\FileWatcher\bin\Debug\net8.0\ElegantFileWatcher.exe"