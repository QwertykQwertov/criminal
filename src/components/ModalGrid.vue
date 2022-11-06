<template>
  <DxPopup
    ref="popup"
    v-model="store.showPopUp"
    :visible="store.showPopUp"
    :drag-enabled="false"
    :hide-on-outside-click="true"
    :show-title="true"
    title="Судебные дела"
    @hiding="onHiding"
  >
    <DxScrollView width="100%" height="100%">
      <DxDataGrid
        ref="grid"
        :data-source="store.selectQuery"
        :row-alternation-enabled="true"
        :show-borders="true"
        :focused-row-enabled="true"
        @selection-changed="selectionChanged"
      >
        <DxColumn data-field="data" caption="Дата" data-type="date" />
        <DxColumn data-field="applicant" caption="Истец" data-type="string" />
        <DxColumn
          data-field="defendant"
          caption="Ответчик"
          data-type="string"
        />
        <DxColumn data-field="law" caption="law" data-type="string" />
        <DxColumn
          data-field="category"
          caption="Категория"
          data-type="string"
        />
        <DxColumn data-field="result" caption="Результат" data-type="string" />

        <DxMasterDetail :enabled="true" template="detailTemplate" />
        <template #detailTemplate="{ data: employee }">
          <div class="employee-info">
            <p class="employee-notes"><b>Дата:</b> {{ employee.data.data }}</p>
            <p class="employee-notes">
              <b>Истец:</b> {{ employee.data.applicant }}
            </p>
            <p class="employee-notes">
              <b>Ответичк:</b> {{ employee.data.defendant }}
            </p>
            <p class="employee-notes"><b>law:</b> {{ employee.data.law }}</p>
            <p class="employee-notes">
              <b>Категория:</b> {{ employee.data.category }}
            </p>
            <p class="employee-notes">
              <b>Результат:</b> {{ employee.data.result }}
            </p>
          </div>
        </template>

        <DxSorting mode="multiple" />
      </DxDataGrid>
    </DxScrollView>
  </DxPopup>
</template>

<script>
import DxPopup from "devextreme-vue/popup";
import { DxScrollView } from 'devextreme-vue/scroll-view';
import store from "../store";

import {
  DxDataGrid,
  DxColumn,
  DxSorting,
  DxSearchPanel,
  DxMasterDetail
} from "devextreme-vue/data-grid";

export default {
  components: {
    DxPopup,
    DxDataGrid,
    DxColumn,
    DxSorting,
    DxSearchPanel,
    DxMasterDetail,
    DxScrollView
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
    },
    // contentReady(e) {
    //   if (!e.component.getSelectedRowKeys().length) {
    //     e.component.selectRowsByIndexes(0);
    //   }
    // },
    selectionChanged(e) {
      e.component.collapseAll(-1);
      e.component.expandRow(e.currentSelectedRowKeys[0]);
    }
  }
};
</script>

<style></style>
