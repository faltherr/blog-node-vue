const dateNow = () => {
    const now = new Date();
    return now.toISOString();
};

async function fetchAllPosts(objInst) {
    objInst.loadingPosts = true;
    try {
        console.log('fetching');
      const response = await fetch("http://localhost:3000/posts", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });
      
      const result = await response.json();
      objInst.posts = result;
    } catch (err) {
      console.log("Error", err);
    }
    objInst.loadingPosts = false;
  }

export { dateNow, fetchAllPosts }