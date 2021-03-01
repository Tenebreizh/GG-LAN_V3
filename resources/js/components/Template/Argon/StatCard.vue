<template>
    <div class="col-xl-3 col-md-6">
        <div class="card card-stats">
            <!-- Card body -->
            <div class="card-body">
                <div class="row">
                    <div class="col">
                        <h5 class="card-title text-uppercase text-muted mb-0"> {{ title }} </h5>
                        <span class="h2 font-weight-bold mb-0"> {{ number }} </span>
                    </div>
                    <div class="col-auto">
                        <div class="icon icon-shape text-white rounded-circle shadow" :class="color">
                        <i class="fas" :class="icon"></i>
                        </div>
                    </div>
                </div>

                <p class="mt-3 mb-0 text-sm">
                    <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> 3.48%</span>
                    <span class="text-nowrap">Since last month</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        number: String,
        icon: String,
        color: String,
    }
}
</script>

<style>

</style>