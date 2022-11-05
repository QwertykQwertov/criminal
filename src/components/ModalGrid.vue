<template>
  <DxPopup
    ref="popup"
    v-model="store.showPopUp"
    :visible="store.showPopUp"
    :drag-enabled="false"
    :hide-on-outside-click="true"
    :show-title="true"
    title="Information"
    @hiding="onHiding"
  >
    <DxDataGrid
      :height="500"
      ref="grid"
      :data-source="store.selectQuery"
      :row-alternation-enabled="true"
      :show-borders="true"
      :focused-row-enabled="true"
      style="margin: 5%"
    >
      <DxColumn data-field="data" caption="Дата" data-type="date" />
      <DxColumn data-field="applicant" caption="Истец" data-type="string" />
      <DxColumn data-field="defendant" caption="Ответчик" data-type="string" />
      <DxColumn data-field="law" caption="law" data-type="string" />
      <DxColumn data-field="category" caption="Категория" data-type="string" />
      <DxColumn data-field="result" caption="Результат" data-type="string" />
      <DxSorting mode="multiple" />
    </DxDataGrid>
  </DxPopup>
</template>

<script>
import DxPopup from "devextreme-vue/popup";
import store from "../store";

import {
  DxDataGrid,
  DxColumn,
  DxSorting,
  DxSearchPanel
} from "devextreme-vue/data-grid";

export default {
  components: {
    DxPopup,
    DxDataGrid,
    DxColumn,
    DxSorting,
    DxSearchPanel
  },
  data() {
    return {
      store
    };
  },
  methods: {
    // closeOutside(e) {
    //   this.store.showPopUp = false;
    // },
    onHiding() {
      this.store.showPopUp = false;
    }
  }
};
</script>

<style></style>
