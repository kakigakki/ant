<template>
  <div>
    {{ stories[1] }}
  </div>
</template>

<script>
import { storyData, storyContent } from "api/story";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      stories: [],
    };
  },
  created() {
    this._showAllStory();
    this._showStoryDetail();
  },
  methods: {
    _showAllStory() {
      storyData().then((res) => {
        this.stories = this._normalizeStoryList(res.modules);
      });
    },
    _normalizeStoryList(resModules) {
      resModules = resModules
        .filter((x) => {
          return x.type == "story-preview" && x["release-date"];
        })
        .sort((a, b) => {
          return (
            new Date(b["release-date"]).getTime() -
            new Date(a["release-date"]).getTime()
          );
        });
      return resModules;
    },
    _showStoryDetail() {
      storyContent().then((res) => {
        console.log(res);
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
