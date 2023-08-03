"use strict";

//fetch all posts
/*
fetch("https://dummyjson.com/posts")
  .then((res) => res.json())
  .then(console.log);

const request = fetch("https://dummyjson.com/posts");
console.log(request);

request
  .then((response) => {
    console.log(response);

    const data = response.json();
    console.log(data);

    return data;
  })
  .then((data) => {
    console.log(data);
  });
*/

const { createApp } = Vue;
createApp({
  data() {
    return {
      posts: [],
    };
  },
  async mounted() {
    await this.fetchPosts();
  },
  methods: {
    async fetchPosts() {
      const request = await fetch("https://dummyjson.com/posts");
      const jsonData = await request.json();

      this.posts = jsonData.posts;
      console.log(this.posts);
    },
    async fetchCommentsByPost(post) {
      if (post.comments) {
        return;
      }

      const request = await fetch(
        `https://dummyjson.com/comments/post/${post.id}`
      );
      const jsonData = await request.json();
      post.comments = jsonData.comments;

      console.log(post.comments);
    },
  },
}).mount("#app");
