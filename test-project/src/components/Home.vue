<template>
  <div>
    <table>
      <thead></thead>
      <tbody>
        <tr>
          <td>From USD to AED</td>
          <td>{{this.$store.getters.USD_TO_AED}}</td>
        </tr>

        <tr>
          <td>From AED to USD</td>
          <td>{{this.$store.getters.AED_TO_USD}}</td>
        </tr>
      </tbody>
    </table>
    <h1></h1>
    <h1></h1>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("GET_USD");
    this.$store.dispatch("GET_AED");
  }
};
</script>
<style >
table {
  margin: 220px 0px 0px 400px;
  font-family: "Lucida Sans Unicode", "Lucida Grande", Sans-Serif;
  font-size: 14px;
  border-collapse: collapse;
  text-align: center;
}
th,
td:first-child {
  background: #afcde7;
  color: white;
  padding: 10px 40px;
}
th,
td {
  border-style: solid;
  border-width: 0 1px 1px 0;
  border-color: white;
  padding: 10px 40px;
}
td {
  background: #d8e6f3;
}
th:-child,
td:first-child {
  text-align: center;
}
</style>
