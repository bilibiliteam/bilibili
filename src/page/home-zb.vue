<template>
    <div>
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

<style scoped></style>