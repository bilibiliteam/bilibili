<template>
    <div class="page">
        <homeheader />



    </div>
</template>

<script>
    import homeheader from '../components/homeheader'
    export default {
        components: {
            homeheader
        }
    }
</script>

<style scoped>
    .page{
        height: 100%;
        display: flex;
        flex-direction: column;
    }
</style>