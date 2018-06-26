<template>
    <div class="page">
        <homeheader />
        <tabNav />
        <homeBanner />
    </div>
</template>

<script>
    import homeheader from '../components/homeheader'
    import homeBanner from '../components/homeBanner'
    import tabNav from '../components/tabNav'
    export default {
        components: {
            homeheader,
            tabNav,
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