<template>
  <Layout>
    <div class="container">
      <Particles />
      <div class="contact-header">
        <h1 class="contact-title">Namaste...</h1>
        <p>Leave a note with any inquiries, personal or business...</p>
      </div>

      <form class="contact-form" name="contact" data-netlify="true">
        <div class="sender-info">
          <div>
            <label for="name" class="label">name:</label>
            <input type="text" name="name" />
          </div>
          <div>
            <label for="email" class="label">e-mail:</label>
            <input type="email" name="email" />
          </div>
        </div>

        <div class="message">
          <label for="message" class="label">msg:</label>
          <textarea name="message"></textarea>
        </div>
        <button class="button">Send</button>
        
      </form>
    </div>
  </Layout>
</template>

<script>
import Particles from "@/components/Particles"


export default {
  data() {
    return {
      btnOps: {
        type: "triangle",
        easing: "easeOutQuart",
        size: 6,
        particlesAmountCoefficient: 4,
        oscillationCoefficient: 2,
        color: function() {
          return Math.random() < 0.5 ? "#000000" : "#ffffff";
        },
        onComplete: () => {
          console.log("complete");
        },
        onBegin: () => {
          console.log("begin");
        },
        visible: true,
        animating: false
      }
    };
  },
  components: {
    Particles
  }
};
</script>

<style scoped>

@import url(https://fonts.googleapis.com/css?family=Dosis);
 
 h1, p, label, body {
   font-family: 'Dosis', cursive !important;

 }

.contact-form {
  z-index: 999;
}
.contact-header {
  padding: 2rem 0 4rem 0;
}
.contact-title {
  font-size: 4rem;
  margin: 0 0 4rem 0;
  padding: 0;
}
.sender-info {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}
.sender-info > div {
  flex: 1;
  margin-right: 4rem;
}
.sender-info > div:last-of-type {
  margin: 0;
}
input:focus,
textarea:focus {
  border-color: var(--color-contrast-1);
}
input,
textarea {
  background: transparent;
  border: 1px solid var(--color-base-1);
  outline: none;
  border-radius: 0.3rem;
  padding: 0.8rem 1rem;
  color: inherit;
  font-size: 1rem;
  width: 100%;
}
textarea {
  resize: none;
  height: 140px;
}
.button {
  color: var(--color-base);
  background: transparent;
  /* more interactive button here */
  color: whitesmoke;
  outline: none;
  border: 0;
  font-size: 0.8rem;
  padding: 0.8rem 1.6rem;
  border-radius: 0.3rem;
  margin-top: 2rem;
  cursor: pointer;
  transition: opacity 0.25s ease;
  font-size: 500;
  letter-spacing: 0.035em;
}
.button:hover {
  opacity: 0.6;
}
.button:focus {
  border: 1px solid var(--color-base-1);
}
</style>

