<template>
  <div>
    <h1>Hello. I am Vue component.</h1>
    <my-react-component :message="message" @reset="reset" />
  </div>
</template>

<script>
import MyReactComponent from "./MyReactComponent";

export default {
  name: "Hello",
  components: { MyReactComponent },
  data() {
    return {
      message: "Message from Vue to React."
    };
  },
  methods: {
    reset() {
      this.message = "";
    }
  }
};
</script>