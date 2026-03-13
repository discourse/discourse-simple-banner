/* eslint-disable ember/no-classic-components, ember/require-tagless-components */
import Component from "@ember/component";
import { classNames } from "@ember-decorators/component";
import SimpleBanner from "../../components/simple-banner";

@classNames("below-site-header-outlet", "simple-banner")
export default class SimpleBannerConnector extends Component {
  <template><SimpleBanner /></template>
}
