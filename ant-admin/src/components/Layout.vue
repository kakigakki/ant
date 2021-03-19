<template>
  <a-layout class="layout">
    <a-layout-header :style="{ position: 'fixed', zIndex: '1', width: '100%' }">
      <a-menu
        theme="dark"
        mode="horizontal"
        v-model:selectedKeys="selectedKeys"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="1">nav 1</a-menu-item>
        <a-menu-item key="2">nav 2</a-menu-item>
        <a-menu-item key="3">nav 3</a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content :style="{ padding: '0 25px ', marginTop: '64px' }">
      <a-breadcrumb style="margin: 16px">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>List</a-breadcrumb-item>
        <a-breadcrumb-item>App</a-breadcrumb-item>
      </a-breadcrumb>
      <div class="site-layout-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quaerat
        pariatur dicta sit, a nostrum eum similique exercitationem laborum
        officia, ab voluptatum maiores quisquam adipisci consectetur temporibus
        suscipit sapiente tempora. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Rerum consequatur eveniet ullam soluta magni
        accusantium laborum reprehenderit excepturi? Mollitia iure sit explicabo
        vel commodi eum est alias facilis, reprehenderit labore? Lorem ipsum
        dolor sit amet consectetur, adipisicing elit. Numquam eius dolore
        architecto possimus pariatur. Nisi neque, dolor quis aliquid iusto
        aliquam nam nihil sed eveniet veniam doloremque, cumque quo in. Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Molestias tempora,
        rem voluptatum consequuntur optio nam? Voluptas ratione, cupiditate
        praesentium eligendi, et ipsa exercitationem modi libero ad nulla
        aperiam totam ducimus! Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Veniam odio nesciunt ducimus, omnis in error ipsa
        cupiditate animi, voluptatem officiis quos nihil provident mollitia sunt
        sit, magni ut voluptates! Culpa. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Neque quaerat pariatur dicta sit, a nostrum eum
        similique exercitationem laborum officia, ab voluptatum maiores quisquam
        adipisci consectetur temporibus suscipit sapiente tempora. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Rerum consequatur eveniet
        ullam soluta magni accusantium laborum reprehenderit excepturi? Mollitia
        iure sit explicabo vel commodi eum est alias facilis, reprehenderit
        labore? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Numquam eius dolore architecto possimus pariatur. Nisi neque, dolor quis
        aliquid iusto aliquam nam nihil sed eveniet veniam doloremque, cumque
        quo in. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Molestias tempora, rem voluptatum consequuntur optio nam? Voluptas
        ratione, cupiditate praesentium eligendi, et ipsa exercitationem modi
        libero ad nulla aperiam totam ducimus! Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Veniam odio nesciunt ducimus, omnis in
        error ipsa cupiditate animi, voluptatem officiis quos nihil provident
        mollitia sunt sit, magni ut voluptates! Culpa. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Neque quaerat pariatur dicta sit, a
        nostrum eum similique exercitationem laborum officia, ab voluptatum
        maiores quisquam adipisci consectetur temporibus suscipit sapiente
        tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
        consequatur eveniet ullam soluta magni accusantium laborum reprehenderit
        excepturi? Mollitia iure sit explicabo vel commodi eum est alias
        facilis, reprehenderit labore? Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Numquam eius dolore architecto possimus pariatur. Nisi
        neque, dolor quis aliquid iusto aliquam nam nihil sed eveniet veniam
        doloremque, cumque quo in. Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Molestias tempora, rem voluptatum consequuntur optio
        nam? Voluptas ratione, cupiditate praesentium eligendi, et ipsa
        exercitationem modi libero ad nulla aperiam totam ducimus! Lorem ipsum
        dolor sit amet consectetur, adipisicing elit. Veniam odio nesciunt
        ducimus, omnis in error ipsa cupiditate animi, voluptatem officiis quos
        nihil provident mollitia sunt sit, magni ut voluptates! Culpa. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Neque quaerat
        pariatur dicta sit, a nostrum eum similique exercitationem laborum
        officia, ab voluptatum maiores quisquam adipisci consectetur temporibus
        suscipit sapiente tempora. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Rerum consequatur eveniet ullam soluta magni
        accusantium laborum reprehenderit excepturi? Mollitia iure sit explicabo
        vel commodi eum est alias facilis, reprehenderit labore? Lorem ipsum
        dolor sit amet consectetur, adipisicing elit. Numquam eius dolore
        architecto possimus pariatur. Nisi neque, dolor quis aliquid iusto
        aliquam nam nihil sed eveniet veniam doloremque, cumque quo in. Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Molestias tempora,
        rem voluptatum consequuntur optio nam? Voluptas ratione, cupiditate
        praesentium eligendi, et ipsa exercitationem modi libero ad nulla
        aperiam totam ducimus! Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Veniam odio nesciunt ducimus, omnis in error ipsa
        cupiditate animi, voluptatem officiis quos nihil provident mollitia sunt
        sit, magni ut voluptates! Culpa. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Neque quaerat pariatur dicta sit, a nostrum eum
        similique exercitationem laborum officia, ab voluptatum maiores quisquam
        adipisci consectetur temporibus suscipit sapiente tempora. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Rerum consequatur eveniet
        ullam soluta magni accusantium laborum reprehenderit excepturi? Mollitia
        iure sit explicabo vel commodi eum est alias facilis, reprehenderit
        labore? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Numquam eius dolore architecto possimus pariatur. Nisi neque, dolor quis
        aliquid iusto aliquam nam nihil sed eveniet veniam doloremque, cumque
        quo in. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Molestias tempora, rem voluptatum consequuntur optio nam? Voluptas
        ratione, cupiditate praesentium eligendi, et ipsa exercitationem modi
        libero ad nulla aperiam totam ducimus! Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Veniam odio nesciunt ducimus, omnis in
        error ipsa cupiditate animi, voluptatem officiis quos nihil provident
        mollitia sunt sit, magni ut voluptates! Culpa. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Neque quaerat pariatur dicta sit, a
        nostrum eum similique exercitationem laborum officia, ab voluptatum
        maiores quisquam adipisci consectetur temporibus suscipit sapiente
        tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
        consequatur eveniet ullam soluta magni accusantium laborum reprehenderit
        excepturi? Mollitia iure sit explicabo vel commodi eum est alias
        facilis, reprehenderit labore? Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Numquam eius dolore architecto possimus pariatur. Nisi
        neque, dolor quis aliquid iusto aliquam nam nihil sed eveniet veniam
        doloremque, cumque quo in. Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Molestias tempora, rem voluptatum consequuntur optio
        nam? Voluptas ratione, cupiditate praesentium eligendi, et ipsa
        exercitationem modi libero ad nulla aperiam totam ducimus! Lorem ipsum
        dolor sit amet consectetur, adipisicing elit. Veniam odio nesciunt
        ducimus, omnis in error ipsa cupiditate animi, voluptatem officiis quos
        nihil provident mollitia sunt sit, magni ut voluptates! Culpa. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Neque quaerat
        pariatur dicta sit, a nostrum eum similique exercitationem laborum
        officia, ab voluptatum maiores quisquam adipisci consectetur temporibus
        suscipit sapiente tempora. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Rerum consequatur eveniet ullam soluta magni
        accusantium laborum reprehenderit excepturi? Mollitia iure sit explicabo
        vel commodi eum est alias facilis, reprehenderit labore? Lorem ipsum
        dolor sit amet consectetur, adipisicing elit. Numquam eius dolore
        architecto possimus pariatur. Nisi neque, dolor quis aliquid iusto
        aliquam nam nihil sed eveniet veniam doloremque, cumque quo in. Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Molestias tempora,
        rem voluptatum consequuntur optio nam? Voluptas ratione, cupiditate
        praesentium eligendi, et ipsa exercitationem modi libero ad nulla
        aperiam totam ducimus! Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Veniam odio nesciunt ducimus, omnis in error ipsa
        cupiditate animi, voluptatem officiis quos nihil provident mollitia sunt
        sit, magni ut voluptates! Culpa. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Neque quaerat pariatur dicta sit, a nostrum eum
        similique exercitationem laborum officia, ab voluptatum maiores quisquam
        adipisci consectetur temporibus suscipit sapiente tempora. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Rerum consequatur eveniet
        ullam soluta magni accusantium laborum reprehenderit excepturi? Mollitia
        iure sit explicabo vel commodi eum est alias facilis, reprehenderit
        labore? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Numquam eius dolore architecto possimus pariatur. Nisi neque, dolor quis
        aliquid iusto aliquam nam nihil sed eveniet veniam doloremque, cumque
        quo in. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Molestias tempora, rem voluptatum consequuntur optio nam? Voluptas
        ratione, cupiditate praesentium eligendi, et ipsa exercitationem modi
        libero ad nulla aperiam totam ducimus! Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Veniam odio nesciunt ducimus, omnis in
        error ipsa cupiditate animi, voluptatem officiis quos nihil provident
        mollitia sunt sit, magni ut voluptates! Culpa. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Neque quaerat pariatur dicta sit, a
        nostrum eum similique exercitationem laborum officia, ab voluptatum
        maiores quisquam adipisci consectetur temporibus suscipit sapiente
        tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
        consequatur eveniet ullam soluta magni accusantium laborum reprehenderit
        excepturi? Mollitia iure sit explicabo vel commodi eum est alias
        facilis, reprehenderit labore? Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Numquam eius dolore architecto possimus pariatur. Nisi
        neque, dolor quis aliquid iusto aliquam nam nihil sed eveniet veniam
        doloremque, cumque quo in. Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Molestias tempora, rem voluptatum consequuntur optio
        nam? Voluptas ratione, cupiditate praesentium eligendi, et ipsa
        exercitationem modi libero ad nulla aperiam totam ducimus! Lorem ipsum
        dolor sit amet consectetur, adipisicing elit. Veniam odio nesciunt
        ducimus, omnis in error ipsa cupiditate animi, voluptatem officiis quos
        nihil provident mollitia sunt sit, magni ut voluptates! Culpa. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Neque quaerat
        pariatur dicta sit, a nostrum eum similique exercitationem laborum
        officia, ab voluptatum maiores quisquam adipisci consectetur temporibus
        suscipit sapiente tempora. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Rerum consequatur eveniet ullam soluta magni
        accusantium laborum reprehenderit excepturi? Mollitia iure sit explicabo
        vel commodi eum est alias facilis, reprehenderit labore? Lorem ipsum
        dolor sit amet consectetur, adipisicing elit. Numquam eius dolore
        architecto possimus pariatur. Nisi neque, dolor quis aliquid iusto
        aliquam nam nihil sed eveniet veniam doloremque, cumque quo in. Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Molestias tempora,
        rem voluptatum consequuntur optio nam? Voluptas ratione, cupiditate
        praesentium eligendi, et ipsa exercitationem modi libero ad nulla
        aperiam totam ducimus! Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Veniam odio nesciunt ducimus, omnis in error ipsa
        cupiditate animi, voluptatem officiis quos nihil provident mollitia sunt
        sit, magni ut voluptates! Culpa. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Neque quaerat pariatur dicta sit, a nostrum eum
        similique exercitationem laborum officia, ab voluptatum maiores quisquam
        adipisci consectetur temporibus suscipit sapiente tempora. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Rerum consequatur eveniet
        ullam soluta magni accusantium laborum reprehenderit excepturi? Mollitia
        iure sit explicabo vel commodi eum est alias facilis, reprehenderit
        labore? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Numquam eius dolore architecto possimus pariatur. Nisi neque, dolor quis
        aliquid iusto aliquam nam nihil sed eveniet veniam doloremque, cumque
        quo in. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Molestias tempora, rem voluptatum consequuntur optio nam? Voluptas
        ratione, cupiditate praesentium eligendi, et ipsa exercitationem modi
        libero ad nulla aperiam totam ducimus! Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Veniam odio nesciunt ducimus, omnis in
        error ipsa cupiditate animi, voluptatem officiis quos nihil provident
        mollitia sunt sit, magni ut voluptates! Culpa.
      </div>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      Ant Design ©2018 Created by Ant UED
    </a-layout-footer>
  </a-layout>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    return {
      selectedKeys: ref<string[]>(["2"]),
    };
  },
});
</script>
<style>
.layout {
  height: 100%;
  width: 100%;
}
.site-layout-content {
  min-height: 100%;
  padding: 24px;
  background: #fff;
}

[data-theme="dark"] .site-layout-content {
  background: #141414;
}
</style>
