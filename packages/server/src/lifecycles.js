const { triggerWorkflow } = require("@35iter/github-event");

// generic subscribe for generic handling
module.exports = (strapi) => {
  strapi.db.lifecycles.subscribe((event) => {
    // todo 是否有更好的监听方式
    if (["afterCreate", "afterUpdate", "afterDelete"].includes(event.action)) {
      console.log("事件", event.action);
      triggerWorkflow();
    }
  });
};
