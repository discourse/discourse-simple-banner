import Component from "@ember/component";
import { service } from "@ember/service";
import { defaultHomepage } from "discourse/lib/utilities";
import discourseComputed from "discourse-common/utils/decorators";

export default class SimpleBanner extends Component {
  @service router;

  @discourseComputed("router.currentRouteName")
  isHomepage(currentRouteName) {
    return currentRouteName === `discovery.${defaultHomepage()}`;
  }
}
