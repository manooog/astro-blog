const { Octokit } = require("octokit")

const octokit = new Octokit({
  auth: process.env.GITHUB_TOEEN,
})

module.exports.triggerWorkflow = async function () {
  await octokit.request(
    "POST /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches",
    {
      // todo 使用变量代替
      owner: "manooog",
      repo: "manooog.github.io",
      workflow_id: "web.yaml",
      ref: "master",
      inputs: {
        name: "on-strapi-webhook",
      },
    }
  )
}
