<template>
  <div>
    <h1>{{ msg }}</h1>
    <my-react-component />
  </div>
</template>

<script>
import MyReactComponent from "./MyReactComponent";

export default {
  name: "Hello",
  components: { MyReactComponent },
  data() {
    return {
      msg: "Hello. I am Vue component."
    };
  }
};
</script>