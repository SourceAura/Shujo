<template>
  <Layout>
    <div class="container">
      <!-- <vue-particles class="full-hieght" color="#dedede"></vue-particles> -->
      <!-- <Particles /> -->
      <Hero id="forward" />
      <ProjectsGrid id="forward" :projects="$page.projects.edges" />
    </div>

    <LatestJournals :journals="$page.journals.edges" />
  </Layout>
</template>

<page-query>
query Posts {
	projects: allProjectPost {
    edges {
      node {
        id
        date (format: "YYYY")
        title
        categories
        thumbnail (quality: 90)
        path
      }
    }
  },
  journals: allJournalPost (perPage: 4) {
    edges {
      node {
        id
        path
        title
      }
    }
  }
}
</page-query>

<script>
import Hero from "@/components/Hero";
// import Particles from "@/components/Particles"
import ProjectsGrid from "@/components/ProjectsGrid";
import LatestJournals from "@/components/LatestJournals";

export default {
  components: {
    Hero,
    // Particles,
    ProjectsGrid,
    LatestJournals
  }
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Dosis);
 
 h1, h2, a {
   font-family: 'Dosis', cursive !important;

 }

html,
body {
  height: 100%;
}
</style>
