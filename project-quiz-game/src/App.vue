<template>
  <div>
    <template v-if="this.question">
      <h1 v-html="this.question"></h1>

      <template v-for="(answer, i) in this.answers" :key="i">
        <input type="radio" name="options" value="answers" />b
        <label v-html="answer"></label><br />
      </template>
      <button class="send" type="button">Send</button>
    </template>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      question: "",
      incorrectAnswers: "",
      correctAnswer: "",
      chose_answer: undefined
    };
  },

  computed: {
    answers() {
      var answers = JSON.parse(JSON.stringify(this.incorrectAnswers));
      answers.splice(
        Math.round(Math.random() * answers.length),
        0,
        this.correctAnswer
      );
      return answers;
    },
  },

  created() {
    this.axios
      .get("https://opentdb.com/api.php?amount=1&category=18&difficulty=easy")
      .then((response) => {
        if (response.data.results && response.data.results.length > 0) {
          const result = response.data.results[0];
          if (
            result.question &&
            result.incorrect_answers &&
            result.correct_answer
          ) {
            this.question = result.question;
            this.incorrectAnswers = result.incorrect_answers;
            this.correctAnswer = result.correct_answer;
            console.log(response.data);
          } else {
            console.log("Invalid response format");
          }
        } else {
          console.log("No results found");
        }
      })
      .catch((error) => {
        console.log("API request failed:", error);
      });
  },
};
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

  input[type="radio"] {
    margin: 12px 4px;
  }

  button.send {
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
