const ghpages = require("gh-pages");

console.log("Publishing on Github pages");

ghpages.publish(
  "./build",
  {
    branch: "main",
    repo: "git@github.com:Nolex13/Nolex13.github.io.git"
  },
  (err) => {
		if(err !== undefined){
			console.error("Error publishing the project to Github pages", err);
		} else {
			console.log("Access to: https://nolex13.github.io/");
		}
  }
);
