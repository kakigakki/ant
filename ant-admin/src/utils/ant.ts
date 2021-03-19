import { App } from "@vue/runtime-core";
import { Button, Layout, Menu, Breadcrumb } from "ant-design-vue";

export default {
  install(Vue: App): void {
    Vue.component(Button.name, Button)
      .component(Layout.name, Layout)
      .component(Menu.name, Menu)
      .component(Menu.Item.name, Menu.Item)
      .component(Layout.Content.name, Layout.Content)
      .component(Layout.Header.name, Layout.Header)
      .component(Layout.Footer.name, Layout.Footer)
      .component(Breadcrumb.name, Breadcrumb)
      .component(Breadcrumb.Item.name, Breadcrumb.Item)

  }
};
