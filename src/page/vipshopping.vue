<template>
    <div class="page">
      <div class="vipshoppingheader">
        <vipheader class="vipheader"/>
      </div>
      <div class="vipshoppingcontent">
        <vipbanner style="z-index:0;"/>
        <vipsearch style="margin-top: -10px;"/>
        <vipNav />
        <vipContent />
      </div>
      <div class="vipshoppingfooter">
        <xIndexBottom class="indexFooter"></xIndexBottom>
      </div>
      
      
      
    </div>
</template>

<script>
import vipheader from '../components/vipShopping/vipheader'
import vipbanner from '../components/homeBanner'
import vipsearch from '../components/vipShopping/vipsearch'
import vipNav from '../components/vipShopping/vipNav'
import vipContent from '../components/vipShopping/vipContent'
import xIndexBottom from '../components/xIndex/xIndexBottom'

export default {
    components: {
      vipheader,
      vipbanner,
      vipNav,
      vipContent,
      vipsearch,
      xIndexBottom
    }
}
</script>

<style scoped>
.page{
  height: 100%;
  display: flex;
  flex-direction: column;
}
.vipshoppingheader{
  height: 60px;
}
.vipshoppingcontent{
  flex: 1;
  overflow-x: hidden;
}
.vipshoppingfooter{
  height: 50px;
}
</style>
