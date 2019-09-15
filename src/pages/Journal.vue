<template>
  <Layout class="body-pulse">

    <div class="container">
      <div class="journal-hero">
        <h1 class="journal-header">
          Exploring poetry and programming, through my imagination...
        </h1>
      </div>
    </div>

    <g-link 
      :to="item.node.path"
      v-for="item in $page.posts.edges" 
      :key="item.node.id"
      class="journal-post"
    >
      <div class="container journal">
        <h2 class="journal-title">{{ item.node.title }}</h2>
        <p class="journal-excerpt">{{ item.node.excerpt }}</p>
      </div>
    </g-link>
      
  </Layout>
</template>

<page-query>
query Journal {
	posts: allJournalPost {
    edges {
      node {
        id
        path
        title
        excerpt
      }
    }
  }
}
</page-query>

<script>
export default {


  
}
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Dosis);


a {
    color: whitesmoke;
    text-decoration: none;
}

 h1, h2, a {
   font-family: 'Dosis', cursive !important;

 }

/* body pulse */

.body-pulse {
    animation: body-pulse 7.3s infinite;
}

@-webkit-keyframes body-pulse {
    0% {
        color: #000 !important;
        background-color: #1A0317;
        filter: brightness(100%);
    }

    30% {
        background-color: #fff;
        filter: brightness(130%);
    }

    70% {
        background: black;
        filter: brightness(210%);
    }

    90% {
        background: #1A0317;
        filter: brightness(210%);
    }

    101% {
        background: black;
        filter: brightness(310%);
    }
}
.container.journal {
  max-width: 720px;
}
.journal-hero {
  padding: 4rem 0;
  text-align: center;
  color: var(--color-base-1);
}
.journal-header {
  font-size: 3rem;
  font-weight: 700;
  padding: 0;
  margin: 0;
}
.journal-post {
  display: block;
  padding: 2rem 0;
  text-decoration: none;
  transition: background 0.5s ease;
}
.journal-post > * {
  transition: transform 0.5s ease;
}
.journal-post:hover {
  background-color: var(--color-base-1);
}
.journal-post:hover > * {
  transform: translateX(4rem);
}
.journal-post h1,
.journal-post h2 {
  margin: 0;
  padding: 0;
}
.journal-title {
  font-size: 2rem;
  color: var(--color-contrast);
}
.journal-excerpt {
  color: var(--color-contrast-1);
}

@media (min-width: 560px) {
  .journal-post {
    padding: 3rem 0;
  }
}

@media (min-width: 860px) {
  .journal-post {
    padding: 5rem 0;
  }
}
</style>
