<template>
  <div>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus reprehenderit obcaecati ut atque iste rem ullam dolores odit sed.</h1>
    <input type="radio" name="options" value="true">
    <label>True</label><br>
    <input type="radio" name="options" value="false">
    <label>False</label><br>
    <button class="send" type="button">Send</button>
  </div>
</template>

<script>

export default {
  name: 'App',
    created(){
      this.axios.get('https://opentdb.com/api.php?amount=1&category=18&difficulty=easy')
      .then((response)=>{
          console.log(response)
      })
    }

  //url para o serviço
  //https://opentdb.com/api.php?amount=1&category=18&difficulty=easy
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  max-width: 960px;
  margin: 60px auto;

  input[type=radio]{
    margin: 12px 4px;
  }

  button.send{
    margin-top: 12px;
    height: 40px;
    min-width: 120px;
    padding: 0 16px;
    color: #fff;
    background-color: #2c3e50;
    cursor: pointer;
    border: none;
  }
}
</style>
