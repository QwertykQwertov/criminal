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
        @exporting="onExporting"
      >
        <DxColumn data-field="data" caption="Дата" data-type="date" />
        <DxColumn data-field="applicant" caption="Истец" data-type="string" />
        <DxColumn
          data-field="defendant"
          caption="Ответчик"
          data-type="string"
        />
        <DxColumn data-field="law" caption="Судья" data-type="string" />
        <DxColumn
          data-field="category"
          caption="Категория"
          data-type="string"
        />
        <DxColumn data-field="result" caption="Результат" data-type="string" />

        <DxMasterDetail :enabled="true" template="detailTemplate" />
        <template #detailTemplate="{ data: report }">
          <div class="detail-wrapper">
            <p><b>Дата:</b> {{ report.data.data.slice(0, 10) }}</p>
            <p><b>Истец:</b> {{ report.data.applicant }}</p>
            <p><b>Ответичк:</b> {{ report.data.defendant }}</p>
            <p><b>Судья:</b> {{ report.data.law }}</p>
            <!-- <template style="max-width: 50px"> -->
            <p><b>Категория:</b> {{ report.data.category }}</p>
            <!-- </template> -->
            <p><b>Результат:</b> {{ report.data.result }}</p>
          </div>
        </template>
        <DxExport
          :enabled="true"
          :formats="['pdf']"
          :allow-export-selected-data="true"
        />
        <DxSorting mode="multiple" />
      </DxDataGrid>
    </DxScrollView>
  </DxPopup>
</template>

<script>
import DxPopup from "devextreme-vue/popup";
import { DxScrollView } from "devextreme-vue/scroll-view";
import { jsPDF } from "jspdf";
import { exportDataGrid } from "devextreme/pdf_exporter";
import { font } from "../assets/fonts/utcFontForExportPDF";

import store from "../store";

import {
  DxDataGrid,
  DxColumn,
  DxSorting,
  DxSearchPanel,
  DxMasterDetail,
  DxExport
} from "devextreme-vue/data-grid";

export default {
  components: {
    DxPopup,
    DxDataGrid,
    DxColumn,
    DxSorting,
    DxSearchPanel,
    DxMasterDetail,
    DxScrollView,
    DxExport
  },
  data() {
    return {
      store,
      // font
    };
  },
  created(){
    // this.$nextTick(()=> console.log(font))
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
    },
    onExporting(e) {
      const doc = new jsPDF();

      doc.addFileToVFS("PTSans-Regular-normal.ttf", font);
      doc.addFont("PTSans-Regular-normal.ttf", "PTSans-Regular", "normal");
      doc.setFont("PTSans-Regular")
      exportDataGrid({
        jsPDFDocument: doc,
        component: e.component,
        indent: 5
      }).then(() => {
        doc.save("Companies.pdf");
      });
    }
  }
};
</script>

<style scoped>
.detail-wrapper p {
  white-space: normal;
}
.dx-datagrid-nowrap, .dx-datagrid-nowrap .dx-header-row>td {
    white-space: normal !important;
}
</style>
