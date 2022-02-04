import Component from "@ember/component";
import discourseComputed from "discourse-common/utils/decorators";
import { computed } from "@ember/object";
import { defaultHomepage } from "discourse/lib/utilities";
import { inject as service } from "@ember/service";

export default Component.extend({
  router: service(),

  init() {
    this._super(...arguments);
  },

  @discourseComputed("router.currentRouteName")
  isHomepage(currentRouteName) {
    return currentRouteName == `discovery.${defaultHomepage()}`;
  },
});
