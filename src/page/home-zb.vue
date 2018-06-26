<template>
    <div class="page">
        <homeheader />
        <homeBanner />
    </div>
</template>

<script>
    import homeheader from '../components/homeheader'
    import homeBanner from '../components/homeBanner'
    export default {
        components: {
            homeheader,
            homeBanner
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