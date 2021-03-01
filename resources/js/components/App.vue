<template>
<div>
    <Sidebar></Sidebar>

    <div class="main-content" id="panel">
        <Header></Header>
        <div class="container-fluid mt--6">
            <transition name="slide-fade" mode="out-in">
                <router-view></router-view>
            </transition>

            <Footer></Footer>
        </div>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>