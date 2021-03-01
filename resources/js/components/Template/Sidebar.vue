<template>
   <nav class="sidenav navbar navbar-vertical  fixed-left  navbar-expand-xs navbar-dark bg-gradient-default" id="sidenav-main">
    <div class="scrollbar-inner">
      <!-- Brand -->
      <div class="sidenav-header  align-items-center">
        <a class="navbar-brand" href="#">
          <img src="/img/logo.png" class="navbar-brand-img" :alt="appname">
        </a>
      </div>
      <div class="navbar-inner">
        <!-- Collapse -->
        <div class="collapse navbar-collapse" id="sidenav-collapse-main">
          <!-- Nav items -->
          <ul class="navbar-nav">
            <li class="nav-item" v-for="(route, key) in routes" :key="key">
                <router-link :to="route.path" class="nav-link" :class="{ 'active':route.name.toLowerCase().includes($route.name.split('.')[0]) }">
                    <i :class="route.icon"></i>
                    <span class="nav-link-text"> {{ route.title }} </span>
                </router-link>
            </li>
          </ul>

          <!-- Divider -->
          <!-- <hr class="my-3"> -->

          <!-- Heading -->
          <!-- <h6 class="navbar-heading p-0 text-muted">
            <span class="docs-normal">Documentation</span>
          </h6> -->

            <!-- Navigation -->
            <!-- <ul class="navbar-nav mb-md-3">
                <li class="nav-item">
                    <a class="nav-link" href="https://demos.creative-tim.com/argon-dashboard/docs/getting-started/overview.html" target="_blank">
                        <i class="ni ni-spaceship"></i>
                        <span class="nav-link-text">Getting started</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="https://demos.creative-tim.com/argon-dashboard/docs/foundation/colors.html" target="_blank">
                        <i class="ni ni-palette"></i>
                        <span class="nav-link-text">Foundation</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="https://demos.creative-tim.com/argon-dashboard/docs/components/alerts.html" target="_blank">
                        <i class="ni ni-ui-04"></i>
                        <span class="nav-link-text">Components</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="https://demos.creative-tim.com/argon-dashboard/docs/plugins/charts.html" target="_blank">
                        <i class="ni ni-chart-pie-35"></i>
                        <span class="nav-link-text">Plugins</span>
                    </a>
                </li>
            </ul> -->
        </div>
      </div>
    </div>
  </nav>
    
    
</template>

<script>
export default {
    data() {
        return {
            routes: [
                { path: '/',            name: 'dashboard',   title: 'Dashboard', icon: 'fas fa-home text-primary'      },
                { path: '/players',     name: 'players',     title: 'Joueurs',   icon: 'fas fa-users text-danger'      },
                { path: '/teams',       name: 'teams',       title: 'Equipes',   icon: 'fas fa-user-friends text-blue' },
                { path: '/games',       name: 'games',       title: 'Jeux',      icon: 'fas fa-gamepad text-orange'    },
                { path: '/tournaments', name: 'tournaments', title: 'Tournois',  icon: 'fas fa-trophy text-success'    },
                { path: '/articles',    name: 'articles',    title: 'Articles',  icon: 'fas fa-newspaper text-info'    },
                { path: '/rules',       name: 'rules',       title: 'Règlement', icon: 'fas fa-align-left text-orange' }
            ],

            appname: 'GG-LAN V3'
        }
    },

    methods: {

    },

    
}
</script>

<style>

</style>