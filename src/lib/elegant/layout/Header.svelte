<script>
    export let height = '3rem';
    export let display = 'flex';
    export let alignItems = 'center';
    export let padding = '0.5rem';
</script>

<div 
    class = 'header'
    style:align-items = {alignItems}
    style:display = {display}
    style:height = {height}
    style:padding = {padding}
>
    <slot/>
</div>

<style>
	.header {
        background-color: #f4f4f4;
	}
</style>