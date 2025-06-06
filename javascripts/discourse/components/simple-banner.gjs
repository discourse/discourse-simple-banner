import Component from "@ember/component";
import { service } from "@ember/service";
import discourseComputed from "discourse/lib/decorators";
import { defaultHomepage } from "discourse/lib/utilities";
import { i18n } from "discourse-i18n";

export default class SimpleBanner extends Component {
  @service router;

  @discourseComputed("router.currentRouteName")
  isHomepage(currentRouteName) {
    return currentRouteName === `discovery.${defaultHomepage()}`;
  }

  <template>
    {{#if this.isHomepage}}
      <div class="discourse-simple-banner">
        <div class="discourse-simple-banner-wrap">
          <h3>{{i18n (themePrefix "simple_banner_text")}}</h3>
          <a href={{settings.button_url}} class="btn btn-primary btn-text">
            {{i18n (themePrefix "button_text")}}
          </a>
        </div>
      </div>
    {{/if}}
  </template>
}
