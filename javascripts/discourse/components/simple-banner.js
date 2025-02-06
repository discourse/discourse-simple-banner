import Component from "@ember/component";
import { service } from "@ember/service";
import discourseComputed from "discourse/lib/decorators";
import { defaultHomepage } from "discourse/lib/utilities";

export default class SimpleBanner extends Component {
  @service router;

  @discourseComputed("router.currentRouteName")
  isHomepage(currentRouteName) {
    return currentRouteName === `discovery.${defaultHomepage()}`;
  }
}
