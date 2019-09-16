export default [
  {
    path: "/contact",
    component: () => import(/* webpackChunkName: "page--src-pages-contact-vue" */ "C:\\Users\\Lenovo\\Documents\\GitHub\\Shujo\\src\\pages\\Contact.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "C:\\Users\\Lenovo\\Documents\\GitHub\\Shujo\\src\\pages\\Index.vue"),
    meta: {
      data: true
    }
  },
  {
    path: "/journal",
    component: () => import(/* webpackChunkName: "page--src-pages-journal-vue" */ "C:\\Users\\Lenovo\\Documents\\GitHub\\Shujo\\src\\pages\\Journal.vue"),
    meta: {
      data: true
    }
  },
  {
    path: "/journal/entry-1",
    component: () => import(/* webpackChunkName: "page--src-templates-journal-post-vue" */ "C:\\Users\\Lenovo\\Documents\\GitHub\\Shujo\\src\\templates\\JournalPost.vue"),
    meta: {
      data: true
    }
  },
  {
    path: "/journal/entry-2",
    component: () => import(/* webpackChunkName: "page--src-templates-journal-post-vue" */ "C:\\Users\\Lenovo\\Documents\\GitHub\\Shujo\\src\\templates\\JournalPost.vue"),
    meta: {
      data: true
    }
  },
  {
    path: "/journal/entry-3",
    component: () => import(/* webpackChunkName: "page--src-templates-journal-post-vue" */ "C:\\Users\\Lenovo\\Documents\\GitHub\\Shujo\\src\\templates\\JournalPost.vue"),
    meta: {
      data: true
    }
  },
  {
    path: "/projects/p-j1",
    component: () => import(/* webpackChunkName: "page--src-templates-project-post-vue" */ "C:\\Users\\Lenovo\\Documents\\GitHub\\Shujo\\src\\templates\\ProjectPost.vue"),
    meta: {
      data: true
    }
  },
  {
    path: "/projects/p-j2",
    component: () => import(/* webpackChunkName: "page--src-templates-project-post-vue" */ "C:\\Users\\Lenovo\\Documents\\GitHub\\Shujo\\src\\templates\\ProjectPost.vue"),
    meta: {
      data: true
    }
  },
  {
    path: "/projects/p-j3",
    component: () => import(/* webpackChunkName: "page--src-templates-project-post-vue" */ "C:\\Users\\Lenovo\\Documents\\GitHub\\Shujo\\src\\templates\\ProjectPost.vue"),
    meta: {
      data: true
    }
  },
  {
    name: "404",
    path: "/404",
    component: () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "C:\\Users\\Lenovo\\Documents\\GitHub\\Shujo\\node_modules\\gridsome\\app\\pages\\404.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "C:\\Users\\Lenovo\\Documents\\GitHub\\Shujo\\node_modules\\gridsome\\app\\pages\\404.vue")
  }
]

