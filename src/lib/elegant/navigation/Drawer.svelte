<script lang="ts">
    import BarsIcon from "$lib/icons-elegant/BarsIcon.svelte";
    // Переменная для отслеживания состояния меню
    let isMenuOpen = false;

    // Функция для переключения состояния
    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }
</script>

<style>
    * {
        box-sizing: border-box;
    }
    /* Основной контейнер */
    .menu-container {
        position: relative;
        width: 100%;
        height: 100vh;
        overflow: hidden;
    }

    /* Само меню */
    .side-menu {
        position: fixed;
        top: 0;
        left: -250px; /* Скрыто за пределами экрана */
        width: 250px;
        height: 100%;
        color: #202020;
        transition: left 0.3s ease;
        display: flex;
        flex-direction: column;
        padding: 1rem;
        z-index: 100; /* Над всем остальным */
        background-color: #fafafa;
        /* border-right: 1px solid #dddddd */
    }

    /* Меню в открытом состоянии */
    .side-menu.open {
        left: 0; /* Выдвигается */
    }

    /* Кнопка для открытия/закрытия меню */
    .menu-toggle {
        position: fixed;
        top: 1rem;
        left: 1rem;
        z-index: 101; /* Над меню */
        border: none;
        border-radius: 4px;
        padding: 0.5rem 1rem;
        cursor: pointer;
        transition: background-color 0.3s;
    }
</style>

<div class="menu-container">
    <!-- Кнопка для переключения меню -->
    <button class="menu-toggle" on:click={toggleMenu}>
        <BarsIcon/>
    </button>

    <!-- Выдвижное меню -->
    <nav class="side-menu {isMenuOpen ? 'open' : ''}">
        <ul>
            <li><a href="#" style:color = '#202020'>Home</a></li>
            <li><a href="#" style:color = '#202020'>About</a></li>
            <li><a href="#" style:color = '#202020'>Services</a></li>
            <li><a href="#" style:color = '#202020'>Contact</a></li>
        </ul>
    </nav>
</div>
