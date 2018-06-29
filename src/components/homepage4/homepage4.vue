<template>
    <div class="page4-content">
        <pageTop />
        <pageContent />
    </div>
</template>
    
<script>
    import pageTop from './home-page-commontop'
    import pageContent from './home-page-commoncontent'

    export default {
        components: {
            pageTop,
            pageContent
        }
    }
</script>

<style scoped lang="scss">
    .page4-content{
        background: #f5f5f5;
    }
</style>