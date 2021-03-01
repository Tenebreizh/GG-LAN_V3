<template>
    <div class="header bg-primary pb-6">
        <div class="container-fluid">
            <div class="header-body">
                <div class="row align-items-center py-4">
                    <!-- Breadcrumb -->
                    <!-- <div class="col-lg-6 col-7">
                        <h6 class="h2 text-white d-inline-block mb-0">Default</h6>
                        <nav aria-label="breadcrumb" class="d-none d-md-inline-block ml-md-4">
                            <ol class="breadcrumb breadcrumb-links breadcrumb-dark">
                                <li class="breadcrumb-item"><a href="#"><i class="fas fa-home"></i></a></li>
                                <li class="breadcrumb-item"><a href="#">Dashboards</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Default</li>
                            </ol>
                        </nav>
                    </div> -->
                    <!-- Special buttons -->
                    <!-- <div class="col-lg-6 col-5 text-right"> -->
                        <!-- <a href="#" class="btn btn-sm btn-neutral">New</a> -->
                        <!-- <a href="#" class="btn btn-sm btn-neutral">Filters</a> -->
                    <!-- </div> -->
                </div>

                <!-- Card stats -->
                <div class="row">
                    <stat-card title="Total Traffic" number="350 676" icon="fa-chart-line" color="bg-gradient-blue"></stat-card>
                    <stat-card title="New Users" number="1345" icon="fa-user-plus" color="bg-gradient-green"></stat-card>
                    <stat-card title="Sales" number="976" icon="fa-coins" color="bg-gradient-orange"></stat-card>
                    <stat-card title="Performance" number="67,54 %" icon="fa-chart-bar" color="bg-gradient-blue"></stat-card>
                </div>
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